import Posts from '../../pages/Posts.jsx'
import Profile from '../../pages/Profile.jsx'
import Login from '../../pages/Login.jsx'
import Error from '../../pages/Error.jsx'
import PostPage from '../../pages/PostPage.jsx'
import UserProfile from '../../pages/UserProfile.jsx'


export const privateRoutes = [
	{path: '/posts', element: <Posts/> , exact: true},
	{path: '/profile', element: <Profile/> , exact: true},
	{path: '/login', element: <Login/> , exact: true},
	{path: '/posts/:id', element: <PostPage/> , exact: true},
	{path: '/profile/user/:id', element: <UserProfile/> , exact: true},
	{path: '/', element: <Error/> , exact: true},
]

export const publicRoutes = [
	{path: '/login', element: <Login/> , exact: true},
]