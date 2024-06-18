// AuthContext.js

import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

// Create context
export const AuthContext = createContext({})

// Create provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true) // to manage loading state

  // Simulate checking if user is logged in (could be replaced with actual logic)
  useEffect(() => {
    const checkLoggedInUser = async () => {
      try {
        const response = await axios.get('/api/user') // Example API endpoint to check if user is logged in
        setUser(response.data.user)
      } catch (error) {
        // Handle error or set user to null if not logged in
        setUser(null)
      }
      setLoading(false)
    }

    checkLoggedInUser()
  }, [])

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        'https://coderhouse-backend-production-2030.up.railway.app/api/sessions/login',
        {
          email,
          password
        }
      )
      setUser(response.data.user)
      localStorage.setItem('user', JSON.stringify(response.data.user))
    } catch (error) {
      console.error('Login error:', error)
      throw error // Propagate error to handle in components
    }
  }

  const logout = async () => {
    try {
      await axios.post(
        'https://coderhouse-backend-production-2030.up.railway.app/api/sessions/logout'
      )
      localStorage.removeItem('user')
      setUser(null)
    } catch (error) {
      console.error('Logout error:', error)
      throw error // Propagate error to handle in components
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}
