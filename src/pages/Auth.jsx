import { useParams } from 'react-router-dom'
import { AuthForm } from '../components/AuthForm/AuthForm'

export function Auth () {
  const { method } = useParams()

  return (
    <>
      <AuthForm method={method} />
    </>
  )
}
