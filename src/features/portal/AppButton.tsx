'use client'
import { useState } from 'react'
import dynamic from 'next/dynamic'

const LordIcon = dynamic(() => import('@/components/atoms/LordIcon'), {
  ssr: false,
})

export interface AppButtonProps {
  title: string
  iconUrl: string
}

const AppButton: React.FC<AppButtonProps> = ({ title, iconUrl }) => {
  const [isHover, setHover] = useState(false)

  return (
    <div
      className='flex flex-col items-center justify-center w-24 h-24 rounded-md px-3 py-2 text-sm font-semibold text-white border-2 border-white hover:ring-1 hover:ring-white hover:bg-primary-500'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <LordIcon
        src={iconUrl}
        size={50}
        trigger={isHover ? 'loop' : 'morph'}
        colors={{ primary: 'white', secondary: 'white' }}
      />
      {title}
    </div>
  )
}

export default AppButton
