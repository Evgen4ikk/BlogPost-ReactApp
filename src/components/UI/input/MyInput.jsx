import React from 'react'

const MyInput = (props) => {
	return (
		<input 
			className='w-full block mb-5 px-4 py-2 rounded-lg border text-white border-[#424242] bg-[#222222] '
			{...props}
		/>
	)
}

export default MyInput