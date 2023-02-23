import { useState, createContext } from 'react'

export const SessionContext = createContext()

export function SessionProvider ({ children }) {
  const [jwt, setJwt] = useState('')

  return (
    <SessionContext.Provider value={{
      jwt,
      setJwt
    }}
    >
      {children}
    </SessionContext.Provider>
  )
}
