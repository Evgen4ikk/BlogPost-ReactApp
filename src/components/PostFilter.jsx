import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

const PostFilter = ({filter, setFilter}) => {
	return (
		<div className='flex items-center'>
          <input
						className='mr-3 w-full block mb-5 px-4 py-2 rounded-lg border text-white border-[#424242] bg-[#222222]' 
            value={filter.query}
            onChange={e => setFilter({...filter, query:e.target.value})}
            placeholder='Search...'
            type='text' 
          />
          <MySelect
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            defaultValue='Sort by'
            options={[
              {value: 'title', name:'name'},
              {value: 'body', name:'description'},
              {value: 'date', name:'date'},
            ]}
          />
    </div>
	)
}

export default PostFilter