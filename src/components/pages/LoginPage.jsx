// LoginComponent.js

import React, { useContext, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider'

const LoginComponent = () => {
  const { login, loading } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async e => {
    e.preventDefault()
    try {
      await login(email, password)

      // Handle successful login (e.g., redirect to dashboard)
    } catch (error) {
      // Handle login error (show error message)
      console.error('Login error:', error)
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type='email'
          placeholder='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type='submit' disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  )
}

export default LoginComponent
