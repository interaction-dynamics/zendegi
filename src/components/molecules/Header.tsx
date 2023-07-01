import classNames from 'classnames'

export interface HeaderProps {
  children?: React.ReactNode
  className?: string
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  return (
    <div
      className={classNames('h-16 relative flex items-center gap-3', className)}
    >
      {children}
    </div>
  )
}

export default Header
