import AuthForm from '../components/auth/AuthForm'

export default function SignUpPage() {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center bg-gradient-radial from-[#FFDCB5] via-[#FBF8EF] to-[rgba(255,252,245,0.9)] -mx-4 sm:-mx-[30px] md:-mx-[60px] px-4 sm:px-[30px] md:px-[60px]">
      <AuthForm variant="signup" />
    </div>
  )
} 