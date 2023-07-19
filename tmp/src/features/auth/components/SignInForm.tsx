'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import LoadingSpinner from '@/components/atoms/LoadingSpinner'

const SignInForm = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  const sendEmail = async (event: React.SyntheticEvent) => {
    setLoading(true)
    event.preventDefault()
    event.stopPropagation()

    const response = await fetch('/api/signIn', {
      method: 'POST',
      body: JSON.stringify({ email }),
    })

    setLoading(false)

    const { errors } = await response.json()

    if (!errors) {
      router.push('/login/confirmed')
    }
  }

  return (
    <form onSubmit={sendEmail}>
      <Input.Black
        placeholder="Email"
        type="email"
        name="email"
        value={email}
        onChange={setEmail}
      />
      <Button.Black type="submit" className="w-full mt-5" disabled={!email}>
        {` `}
        {loading ? <LoadingSpinner className="h-5 w-5" /> : 'Sign in'}
        {` `}
      </Button.Black>
    </form>
  )
}

export default SignInForm
