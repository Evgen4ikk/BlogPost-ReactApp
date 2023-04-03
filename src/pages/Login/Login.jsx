import React, { useContext } from "react"
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/context'

function Login() {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const login = () => {
    setIsAuth(true);
    localStorage.setItem('auth', 'true')
  }
  return (
    <div className="min-h-screen bg-[#141414] flex flex-col justify-center py-12 sm:px-6 lg:px-8 text-zinc-100">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-[#222222] py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form 
            className="space-y-6"
            onSubmit={login}
          >
            <div>
              <label htmlFor="login" className="block text-sm font-medium ">
                Login
              </label>
              <div className="mt-1">
                <input
                  id="login"
                  name="login"
                  type="text"
                  autoComplete="login"
                  required
                  className="bg-[#141414] appearance-none block w-full px-3 py-2 border border-[#424242] rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="bg-[#141414] appearance-none block w-full px-3 py-2 border border-[#424242] rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm ">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </Link>
              </div>
            </div>
            <div>
						<Link
            onClick={login}
            to="/posts"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </Link>
        </div>
      </form>
    </div>
  </div>
</div>
);
}

export default Login;