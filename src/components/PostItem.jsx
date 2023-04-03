import React, { useContext, useState } from "react";
import { MdAccountCircle } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegCommentDots } from 'react-icons/fa';
import { RiCloseFill } from 'react-icons/ri';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom'
import Like from './UI/like/Like'
import { AuthContext } from '../context/context'

const PostItem = ({post, remove, users}) => {
  const { userInfo } = useContext(AuthContext)

	const [show, setShow] = useState(true)
  const props = useSpring({
    opacity: show ? 1 : 0,
    transform: show ? 'translateY(0)' : 'translateY(-50px)',
  });

  const handleDelete = () => {
    setShow(false);
    setTimeout(() => {
      remove(post);
    }, 500);
  };


  return (
		<animated.div style={props} className='flex justify-center items-center  mx-auto'>
			{post.status === 'myPost'
				?	<div className="bg-[#222222] rounded-md shadow-md p-4 w-full max-h-[800px] my-10">
						<div className="flex items-center justify-between">
							<div className='flex items-center'>
								<div>
									<img src={userInfo.avatar} alt="" className="w-12 h-12 rounded-full dark:bg-gray-500 aspect-square mr-2" />
								</div>
								<div>
									<a href='#'>
										<p className="font-medium text-lg text-[#71aaeb] hover:underline">
											{userInfo.username} {userInfo.surname}
										</p>	
									</a>
								</div>
							</div>
							<div className="relative">
								<div className="flex items-center justify-between">
									<RiCloseFill 
										onClick={handleDelete}
										className='text-gray-600 cursor-pointer'
										size={25}
									/>
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
							<div className='flex mr-4 bg-[#333333] px-1 rounded-[32px] hover:bg-[#3f3f3f]'>
								<div className='mr-2'>
										<Like />
								</div>
							</div>
							<div
								className='flex bg-[#333333] py-2 px-4 rounded-[32px] hover:bg-[#3f3f3f] cursor-pointer'
							>
								<FaRegCommentDots className='text-[#b2b2b2] w-5 h-5 mr-2 mt-[2px]'/>
								<span className='text-[#939393]'>0</span>
							</div>
						</div>
					</div>
				:	<div className="bg-[#222222] rounded-md shadow-md p-4 w-full max-h-[800px] my-10">
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
							<div className="relative">
								<div className="flex items-center justify-between">
									<RiCloseFill 
										onClick={handleDelete}
										className='text-gray-600 cursor-pointer'
										size={25}
									/>
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
								className='w-full h-auto max-h-[450px] object-contain text-white'
								alt='Not found'
							/>
							) : ''}
						</div>
						<div className="flex mt-4 items-center">
							<div className='flex mr-4 bg-[#333333] px-1 rounded-[32px] hover:bg-[#3f3f3f]'>
								<div className='mr-2'>
										<Like />
								</div>
							</div>
							<Link
								to={(`/posts/${post.id}`)} 
								className='flex bg-[#333333] py-2 px-4 rounded-[32px] hover:bg-[#3f3f3f]'
							>
								<FaRegCommentDots className='text-[#b2b2b2] w-5 h-5 mr-2 mt-[2px]'/>
								<span className='text-[#939393]'>5</span>
							</Link>
						</div>
					</div>
			}
		</animated.div>
  );
};

export default PostItem;
