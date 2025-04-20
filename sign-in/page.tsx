"use client"

import { useState } from 'react'
import AuthForm from '../components/auth/AuthForm'
import { useRouter } from 'next/navigation'

export default function SignInPage() {
  const [isOpen, setIsOpen] = useState(true)
  const router = useRouter()

  const handleClose = () => {
    setIsOpen(false)
    router.push('/')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with 9
      0% opacity */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-70"
        onClick={handleClose}
      />
      
      {/* Modal content */}
      <div className="relative z-10 flex justify-center">
        <div className="w-[850px] min-[850px]:w-[614px]">
          <AuthForm variant="signin" onClose={handleClose} />
        </div>
      </div>
    </div>
  )
} 