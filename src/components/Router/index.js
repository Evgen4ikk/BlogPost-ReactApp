import Error from '../../pages/Error/Error.jsx'
import Login from '../../pages/Login/Login.jsx'
import MyProfile from '../../pages/MyProfile/MyProfile.jsx'
import PostPage from '../../pages/PostPage/PostPage.jsx'
import Posts from '../../pages/Posts/Posts.jsx'
import UserProfile from '../../pages/UserPage/UserProfile.jsx'


export const privateRoutes = [
	{path: '/posts', element: <Posts/> , exact: true},
	{path: '/myProfile', element: <MyProfile/> , exact: true},
	{path: '/login', element: <Login/> , exact: true},
	{path: '/posts/:id', element: <PostPage/> , exact: true},
	{path: '/profile/users/:id', element: <UserProfile/> , exact: true},
	{path: '/', element: <Error/> , exact: true},
]

export const publicRoutes = [
	{path: '/login', element: <Login/> , exact: true},
]