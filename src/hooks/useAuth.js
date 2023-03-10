import { useState, useContext } from 'react'
import { SessionContext } from '../context/SessionContext'

export function useAuth () {
  const { jwt, setJwt } = useContext(SessionContext)
  const [authError, setAuthError] = useState()

  const login = async ({ email, password, rememberSession }) => {
    const requestOptions = {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    }

    const response = await (await fetch('http://localhost:3002/auth/login', requestOptions)).json()

    if (response.exception) {
      setAuthError(response.message)
    }

    setJwt(response.access_token)
  }

  return {
    jwt,
    setJwt,
    login,
    authError
  }
}
