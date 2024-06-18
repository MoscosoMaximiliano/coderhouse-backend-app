// RegisterComponent.js

import React, { useState } from 'react'
import axios from 'axios'

const RegisterComponent = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleRegister = async e => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await axios.post(
        'https://coderhouse-backend-production-2030.up.railway.app/api/sessions/register',
        {
          username,
          password,
          email
        }
      )
      console.log('Registration successful:', response.data)
      // Handle successful registration (e.g., show success message, redirect)
    } catch (error) {
      console.error('Registration error:', error)
      setError(error.response.data.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button type='submit' disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default RegisterComponent
