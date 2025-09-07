import React from 'react'

interface AuthHeaderProps {
  label: string;
  title: string;
}

const AuthHeader = ({label, title}: AuthHeaderProps) => {
  return (
    <div className='w-full flex flex-col gap-y-2 text-center justify-center items-center'>
        <h1 className='text-3xl font-semibold text-center p-2'>{title}</h1>
        <p className='text-white text-sm p-1.5'>{label}</p>
    </div>
  )
}

export default AuthHeader