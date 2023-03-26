import React from 'react'

const MySelect = ({options, defaultValue, value, onChange}) => {
	return (
		<select 
			className='block mb-5 px-4 py-2 rounded-lg border text-[#828282] border-[#424242] bg-[#222222]'
			value={value}
			onChange={e => onChange(e.target.value)}
		>
      <option disabled value=''>{defaultValue}</option>
			{options.map(option => 
				<option key={option.value} value={option.value}>
					{option.name}
				</option>
			)}
    </select>
	)
}

export default MySelect