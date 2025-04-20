"use client"

import { useState } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

interface AuthFormProps {
  variant?: 'signup' | 'signin'
  onSubmit?: (data: { email: string; password: string; fullName?: string }) => void
  onClose?: () => void
}

export default function AuthForm({ variant = 'signup', onSubmit, onClose }: AuthFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSubmit) {
      onSubmit(formData)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full bg-[rgba(255,252,245,0.9)] rounded-lg relative">
      {onClose && (
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={20} />
        </button>
      )}
      <div className="w-full max-w-[700px] space-y-6 sm:space-y-7">
        {/* Header */}
        <div className="space-y-2">
          <h2 className="font-['Poppins'] text-[15px] font-semibold tracking-[1.4px] text-[#212121]">
            {variant === 'signup' ? 'JOIN FINDING HOME.' : 'WELCOME HOME.'}
          </h2>
          <p className="text-sm text-[#CC6D00]">
            {variant === 'signup' ? '(All fields are required.)' : ''}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 min-[1040px]:w-[700px]">
          {variant === 'signup' && (
            <div className="space-y-2">
              <label className="block text-[#333333]" htmlFor="fullName">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full h-11 px-4 bg-[rgba(255,255,255,0.9)] border border-[#E8DCC7] rounded-lg text-[#212121] focus:outline-none focus:border-[#0099FF] min-[1040px]:w-[700px]"
              />
            </div>
          )}

          <div className="space-y-2">
            <label className="block text-[#333333]" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full h-11 px-4 bg-[rgba(255,255,255,0.9)] border border-[#E8DCC7] rounded-lg text-[#212121] focus:outline-none focus:border-[#0099FF] min-[1040px]:w-[700px]"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[#333333]" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full h-11 px-4 bg-[rgba(255,255,255,0.9)] border border-[#E8DCC7] rounded-lg text-[#212121] focus:outline-none focus:border-[#0099FF] min-[1040px]:w-[700px]"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-[360px] h-11 bg-[#CC6D00] text-white rounded-lg hover:bg-[#B35F00] transition-colors mx-auto block mt-6"
          >
            {variant === 'signup' ? 'Sign up' : 'Sign in'}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center pt-2">
          {variant === 'signup' ? (
            <div className="text-sm">
              <Link href="/sign-in" className="text-[#CC6D00] font-semibold hover:underline">
                Sign in here
              </Link>
              <span className="ml-1">if you already have an account</span>
            </div>
          ) : (
            <div className="text-sm">
              <span>New to Finding Home? </span>
              <Link href="/sign-up" className="text-[#CC6D00] font-semibold hover:underline">
                Sign up here.
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 