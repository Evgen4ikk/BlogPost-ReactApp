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
		avatar: 'https://sun9-37.userapi.com/impg/ujwvgRL91_C1-FOmvRqFzCCm739I17nlEXn5Vw/Nb2ru4hg2bA.jpg?size=656x656&quality=96&sign=ee91a7582edcd6bc4a308b631a59c9b0&type=album',
		username: 'Evgeniy',
		email: '8evgentys8@mail.ru',
		phone: '+7-952-886-19-83',
		university: 'Tomsk State University of Control Systems and Radioelectronics',
		country: 'Russia, Tomsk'
	})

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
