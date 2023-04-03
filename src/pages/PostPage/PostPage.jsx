import React, { useEffect, useState } from 'react'
import { MdAccountCircle } from 'react-icons/md'
import { Link, useParams } from 'react-router-dom'
import PostService from '../../API/PostService'
import { useFetching } from '../../components/hooks/useFetching'
import Like from '../../components/UI/like/Like'
import LikeComm from '../../components/UI/likeComm/LikeComm'
import Loader from '../../components/UI/Loader/Loader'

const PostPage = () => {
	const params = useParams()
	const [post, setPost] = useState({});
	const [users, setUsers] = useState([]);
	const [comments, setComments] = useState([])
	const [fetchPostById, isLoading, error] = useFetching( async (id) => {
		const response = await PostService.getById(id)
		setPost(response.data)
	})

	const [fetchUsers] = useFetching(async () => {
    const response = await PostService.getAllUsers("https://jsonplaceholder.typicode.com/users");
    setUsers(response.data);
  });
	
	const [fetchComments, isComLoading, comError] = useFetching( async (id) => {
		const response = await PostService.getCommentsById(id)
		setComments(response.data)
	})

	useEffect( () => {
		fetchPostById(params.id)
		fetchComments(params.id)
		fetchUsers()
	}, [])
	


	return (
		<div className='flex justify-center items-center '>
			{isLoading
				?	<Loader />
				:	<div className="bg-[#222222] rounded-md shadow-md w-[900px] my-10 text-white">
						<div className='p-5'>
							<div className="flex items-center justify-between">
								<div className='flex items-center'>
								<Link to={(`/profile/users/${post.userId}`)}>
										<MdAccountCircle
											className="text-[#a3b5c5] mr-2 w-12 h-12"
										/>
									</Link>
									<div>
									<Link to={(`/profile/users/${post.userId}`)}>
											<p className="font-medium text-lg text-[#71aaeb] hover:underline">
											{users.map((user) => (
												post.userId === user.id ? (
													<span key={user.id}>{user.name}</span>
												) : <React.Fragment key={user.id}></React.Fragment>
											))}
											</p>	
										</Link>
									</div>
								</div>
							</div>
							<div className='my-5 text-white text-[24px]'>
								<h1>{post.title}</h1>
							</div>
							<div className="mt-4">
								<p className="text-lg text-white">
									{post.body}
								</p>
							</div>
							<div className="mt-4">
								{post.picture ? (
								<img 
									src={post.picture}
									className='w-full h-auto max-h-[450px] object-contain object-center text-white'
									alt='Not found'
								/>
								) : ''}
							</div>
							<div className="flex items-center">
								<div className='flex items-center justify-center bg-[#333333] rounded-[32px] hover:bg-[#3f3f3f] px-2'>
									<div className='mr-2'>
										<Like />
									</div>
								</div>
							</div>
						</div>
						{isComLoading
							? <Loader/>
							:	<div className='border-t border-[#424242]'>
									<div className='p-5'>
									{comments.map((comm, index) => (
											<div key={comm.id}>
												<div className='flex'>
													<div>
														<MdAccountCircle
																className="text-[#a3b5c5] mr-2 w-10 h-10"
														/>
													</div>
													<div className=' text-base'>
														<div className='font-[500]  text-gray-100'>
															{comm.email}
														</div>
														<div className='text-[#e1e3e6]'>
															{comm.body}
														</div>
														<div className='text-gray-400 text-[14px] flex justify-between items-center'>
															<span>
																29 мар в 11:39
															</span>
															<div className=''>
																<LikeComm/>
															</div>
														</div>
														<div className={index !== comments.length - 1 ? 'border-b border-[#424242] pb-1' : <></>}/>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							}
					</div>
			}
		</div>
	)
}

export default PostPage