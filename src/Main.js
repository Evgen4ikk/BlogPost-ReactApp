import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import MainRouter from './components/Router/MainRouter'
import Navbar from './components/UI/navbar/Navbar'
import { AuthContext } from './context/context'

function Main() {

  const [isAuth, setIsAuth] = useState(false);
	const [userInfo, setUserInfo] = useState({
		name: 'Evgeniy',
		surname: 'Rybin',
		avatar: '',
		username: 'Evgeniy',
		status: 'user',
		age: 18,
		email: '8evgentys8@mail.ru',
		tel: '+7-952-886-19-83',
	})``

	useEffect(()=>{
		if(localStorage.getItem('auth')){
			setIsAuth(true)
		}
	},[])
	
	return (
		<AuthContext.Provider value={{
			setUserInfo,
			userInfo,
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
