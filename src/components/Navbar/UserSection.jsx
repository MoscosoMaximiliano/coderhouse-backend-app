// ExampleComponent.js

import React, { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { Link } from 'react-router-dom'

const UserSection = () => {
  const { user, login, logout, loading } = useContext(AuthContext)

  const handleLogin = () => {
    // Example: perform login action
    login({ username: 'example_user', role: 'user' })
  }

  const handleLogout = () => {
    // Example: perform logout action
    logout()
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className='flex align-middle'>
          <Link
            to='/login'
            className='py-5 m-2 text-black transition-all ease-linear delay-75 bg-orange-300 border-none rounded cursor-pointer px-7 hover:bg-orange-500 hover:-translate-y-1 hover:scale-110'
          >
            Login
          </Link>
          <Link
            to='/register'
            className='py-5 m-2 text-black transition-all ease-linear delay-75 bg-orange-300 border-none rounded cursor-pointer px-7 hover:bg-orange-500 hover:-translate-y-1 hover:scale-110'
          >
            Register
          </Link>
        </div>
      )}
    </div>
  )
}

export default UserSection
