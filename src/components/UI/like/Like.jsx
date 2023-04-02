import { IconButton } from '@mui/material'
import React, { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

const Like = () => {

	const [likes, setLikes] = useState(0)
	const [likeActive, setLikeActive] = useState(false)
	const liker = (e) => {
		e.preventDefault()
		setLikes(likes + 1)

		setLikeActive(prev => !prev)
		if (likeActive) {
			setLikes(likes - 1)
		}
		
	}
	return (
		<div onClick={liker} className='flex items-center cursor-pointer'>
			<IconButton>
				<AiOutlineHeart
					className={`text-[#b2b2b2] ${
						likeActive ? 'text-red-500' : 'text-[#b2b2b2]'
					}`}
				/>
			</IconButton>
			<p className={`text-[#b2b2b2] text-lg ${
						likeActive ? 'text-red-500' : 'text-[#b2b2b2]'
					}`}>{likes}</p>
		</div>
	)
}

export default Like