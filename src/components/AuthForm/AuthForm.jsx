import './AuthForm.scss'

import { useState, useId } from 'react'
import { Link } from 'react-router-dom'
import { HidePasswordIcon, ShowPasswordIcon } from '../Icons'
import { useAuth } from '../../hooks/useAuth'

export function AuthForm ({ method }) {
  const [showPassword, setShowPassword] = useState()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberSession: false
  })

  const { jwt, login } = useAuth()

  const emailId = useId()
  const passwordId = useId()
  const rememberSessionId = useId()

  const title = method.replace('-', ' ').replace(/\w/, method.charAt(0).toUpperCase())

  const handleFormChange = (event) => {
    setFormData(prevState => ({
      ...prevState,
      [event.target.name]: event.target.id === rememberSessionId
        ? !prevState.rememberSession
        : event.target.value
    }))
  }

  const iconOnClickHandler = () => {
    setShowPassword(prevState => !prevState)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    login(formData)
  }

  return (
    <main>
      <h1 className='form-title'>Welcome to Hex!</h1>
      <p>{JSON.stringify(jwt)}</p>
      <form className='auth-form' onSubmit={handleFormSubmit}>
        <h2>{title}</h2>

        <label htmlFor={emailId} className='input-field--label'>Email</label>
        <div className='input-field--container'>
          <input
            id={emailId}
            type='text'
            className='input-field'
            name='email'
            placeholder='user@mail.com'
            value={formData.email}
            onChange={handleFormChange}
          />
        </div>

        <label htmlFor={passwordId} className='input-field--label'>Password</label>
        <div className='input-field--container'>
          <input
            id={passwordId}
            type={showPassword ? 'text' : 'password'}
            className='input-field'
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleFormChange}
          />
          <i className='input-field--icon' onClick={iconOnClickHandler}>
            {showPassword ? <HidePasswordIcon /> : <ShowPasswordIcon />}
          </i>
        </div>
        {
          method === 'sign-in' &&
            <div className='auth-form__checkbox'>
              <input
                id={rememberSessionId}
                type='checkbox'
                name='rememberSession'
                checked={formData.rememberSession}
                onChange={handleFormChange}
              />
              <label htmlFor={rememberSessionId}>Remember me</label>
            </div>
        }
        <button onClick={handleFormSubmit}>{title}</button>

        <footer className='auth-form--footer'>
          <small>Forgot Password?</small>
          <small>
            {method === 'sign-in' ? 'Need to create an account? ' : 'Already a user? '}
            <Link to={`../auth/${method === 'sign-in' ? 'sign-up' : 'sign-in'}`}>
              {method === 'sign-in' ? 'Sign up' : 'Sign In'}
            </Link>
          </small>
        </footer>
      </form>

    </main>
  )
}
