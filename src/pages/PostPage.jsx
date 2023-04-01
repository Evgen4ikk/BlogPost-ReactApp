import React, { useEffect, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdAccountCircle } from 'react-icons/md'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import { useFetching } from '../components/hooks/useFetching'

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
			<div className="bg-[#222222] rounded-md shadow-md p-4 w-[800px] max-h-[800px] my-10">
				<div className="flex items-center justify-between">
					<div className='flex items-center'>
						<a href='#'>
							<MdAccountCircle
								className="text-[#a3b5c5] mr-2 w-12 h-12"
							/>
						</a>
						<div>
							<a href='#'>
								<p className="font-medium text-lg text-[#71aaeb] hover:underline">
								{users.map((user) => (
									post.userId === user.id ? (
										<span key={user.id}>{user.name}</span>
									) : <React.Fragment key={user.id}></React.Fragment>
								))}
								</p>	
							</a>
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
				<div className="flex mt-4 items-center">
					<button className='flex mr-4 bg-[#333333] py-2 px-4 rounded-[32px] hover:bg-[#3f3f3f]'>
						<AiOutlineHeart className='text-[#b2b2b2] w-6 h-6 mr-2'/>
						<span className='text-[#939393]'>0</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default PostPage