import React, { useState } from "react";
import { MdAccountCircle } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegCommentDots } from 'react-icons/fa';
import { RiCloseFill } from 'react-icons/ri';
import { useSpring, animated } from 'react-spring';

const PostItem = ({post,remove}) => {

	const [show, setShow] = useState(true);

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
			<div className="bg-[#222222] rounded-md shadow-md p-4 w-full max-h-[800px] my-10">
				<div className="flex items-center justify-between">
					<div className='flex items-center'>
						<a href='#'>
							<MdAccountCircle
								className="text-[#a3b5c5] mr-2 w-12 h-12"
							/>
						</a>
						<div>
							<a href='#'>
								<p className="font-medium text-lg text-[#71aaeb] hover:underline">Admin</p>
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
					<button className='flex mr-4 bg-[#333333] py-2 px-4 rounded-[32px] hover:bg-[#3f3f3f]'>
						<AiOutlineHeart className='text-[#b2b2b2] w-6 h-6 mr-2'/>
						<span className='text-[#939393]'>0</span>
					</button>
					<a href='#' className='flex bg-[#333333] py-2 px-4 rounded-[32px] hover:bg-[#3f3f3f]'>
						<FaRegCommentDots className='text-[#b2b2b2] w-5 h-5 mr-2 mt-[2px]'/>
						<span className='text-[#939393]'>0</span>
					</a>
				</div>
			</div>
		</animated.div>
  );
};

export default PostItem;
