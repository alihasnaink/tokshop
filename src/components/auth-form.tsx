import { useState } from 'react'
import { LoginForm } from './login-form'
import { SignupForm } from './signup-form'
import { Button } from './ui/button'

export function AuthForm() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="w-full">
      {isLogin ? (
        <LoginForm>
          <Button 
            variant="link" 
            onClick={() => setIsLogin(false)}
            className="w-full mt-4"
          >
            Don't have an account? Sign Up
          </Button>
        </LoginForm>
      ) : (
        <SignupForm>
          <Button 
            variant="link" 
            onClick={() => setIsLogin(true)}
            className="w-full mt-4"
          >
            Already have an account? Login
          </Button>
        </SignupForm>
      )}
    </div>
  )
} 