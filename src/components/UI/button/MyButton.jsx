import React from 'react'

const MyButton = ({children, ...props}) => {
	return (
		<button {...props} className='rounded-[4px] bg-white px-4 py-1 hover:bg-[#cacbce] text-[#222222]'>
			{children}
		</button>
	)
}

export default MyButton