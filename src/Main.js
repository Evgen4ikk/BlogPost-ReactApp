import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import MainRouter from './components/Router/MainRouter'
import Navbar from './components/UI/navbar/Navbar'
import { AuthContext } from './context/context'

function Main() {

  const [isAuth, setIsAuth] = useState(false);

	useEffect(()=>{
		if(localStorage.getItem('auth')){
			setIsAuth(true)
		}
	},[])
	
	return (
		<AuthContext.Provider value={{
			isAuth,
			setIsAuth
		}}>
				<BrowserRouter>
				{isAuth 
					? <Navbar/>
					:	<></>
				}
					<MainRouter/>
				</BrowserRouter>
		</AuthContext.Provider>
	)
}

export default Main;
