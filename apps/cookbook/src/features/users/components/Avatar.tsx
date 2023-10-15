import classNames from 'classnames'

interface AvatarProps {
  children: React.ReactNode
  className?: string
}

export default function Avatar({ children, className }: AvatarProps) {
  return (
    <span
      className={classNames(
        'inline-flex h-8 w-8 items-center justify-center rounded-full border border-white bg-gray-300',
        className,
      )}
    >
      <span className="text-xs font-medium leading-none text-white uppercase">
        {children}
      </span>
    </span>
  )
}
