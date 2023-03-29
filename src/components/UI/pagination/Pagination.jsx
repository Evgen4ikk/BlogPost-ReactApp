import React from 'react'
import { getPagesArray } from '../../../utils/pages'

const Pagination = ({totalPages, page, changePage}) => {
	let pagesArray = getPagesArray(totalPages)
	return (
		<div className='flex mt-5'>
          {pagesArray.map(p => 
              <button 
                onClick={() => changePage(p)}
                key={p} 
                className={page === p ? 'page page_current' : 'page'}
              >
                  {p}
              </button>
          )}
        </div>
	)
}

export default Pagination