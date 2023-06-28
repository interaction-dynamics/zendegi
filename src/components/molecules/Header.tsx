export interface HeaderProps {
  children?: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <div className="h-16 relative flex items-center">{children}</div>
}

export default Header
