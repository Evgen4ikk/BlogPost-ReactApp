import React from 'react'
import cl from './Loader.module.css'

const Loader = () => {
	return (
		<div className={cl.loader_container}>
			<div className={cl.loader}/>
		</div>
	)
}

export default Loader