import { useState } from 'react'
import LordIcon from '~/src/components/atoms/LordIcon'

export interface AppButtonProps {
  title: string
  iconUrl: string
  onClick: () => void
}

const AppButton: React.FC<AppButtonProps> = ({ title, iconUrl, onClick }) => {
  const [isHover, setHover] = useState(false)

  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center w-24 h-24 rounded-md px-3 py-2 text-sm font-semibold text-white border-2 border-white hover:ring-1 hover:ring-white hover:bg-primary-500"
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
    </button>
  )
}

export default AppButton
