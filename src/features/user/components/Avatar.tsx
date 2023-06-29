import classNames from 'classnames'

export interface AvatarProps {
  email?: string
  className?: string
}

const Avatar: React.FC<AvatarProps> = ({ className }) => {
  return (
    <div
      className={classNames(
        'flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 select-none',
      )}
    >
      <span className="font-medium leading-none text-white">TW</span>
    </div>
  )
}

export default Avatar
