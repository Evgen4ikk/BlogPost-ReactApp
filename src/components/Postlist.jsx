import React from 'react'
import PostItem from './PostItem'

const Postlist = ({posts, remove}) => {

	if(!posts.length){
		return (
			<div className='text-[64px] text-gray-600 text-center mt-[10%]'>
				Posts not found
			</div>
		)
	}

	// const formatDate = (dateString) => {
	// 	const date = new Date(dateString);
	// 	const now = new Date();
	// 	const diff = (now.getTime() - date.getTime()) / 1000;
	
	// 	if (diff < 60) {
	// 		return `${Math.floor(diff)} секунд назад`;
	// 	} else if (diff < 3600) {
	// 		return `${Math.floor(diff / 60)} минут назад`;
	// 	} else if (diff < 86400 && now.getDate() === date.getDate()) {
	// 		return `сегодня в ${date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
	// 	} else if (diff < 172800 && now.getDate() - date.getDate() === 1) {
	// 		return `вчера в ${date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
	// 	} else if (now.getFullYear() === date.getFullYear()) {
	// 		return `${date.getDate()} ${date.toLocaleString('default', {month: 'short'})} в ${date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
	// 	} else {
	// 		return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
	// 	}
	// }

	// const getRandomDate = () => {
	// 	const now = new Date();
	// 	const daysAgo = Math.floor(Math.random() * 365)
	// 	const hoursAgo = Math.floor(Math.random() * 24);
	// 	const minutesAgo = Math.floor(Math.random() * 60);
	// 	const secondsAgo = Math.floor(Math.random() * 60); 
	
	// 	const date = new Date(now.getTime() - daysAgo * 24 * 60 * 60 * 1000 - hoursAgo * 60 * 60 * 1000 - minutesAgo * 60 * 1000 - secondsAgo * 1000);
	
	// 	return date.toISOString();
	// }

	return (
		<div>
			{posts.map(post => 
        <PostItem remove={remove} post={post} key={post.id}/>
      )}
		</div>
	)
}

export default Postlist;