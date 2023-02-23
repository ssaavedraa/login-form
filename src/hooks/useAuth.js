import { useContext } from 'react'
import { SessionContext } from '../context/SessionContext'

export function useAuth () {
  const { jwt, setJwt } = useContext(SessionContext)

  const login = async ({ email, password, rememberSession }) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    }

    const response = await (await fetch('https://api.escuelajs.co/api/v1/auth/login', requestOptions)).json()

    setJwt(response.access_token)

    rememberSession
      ? document.cookie = `refresh=${response.refresh_token}`
      : window.sessionStorage.setItem('access_token', response.access_token)
  }

  return {
    jwt,
    setJwt,
    login
  }
}
