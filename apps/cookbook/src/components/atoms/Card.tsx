export interface CardProps {
  children: React.ReactNode
  className?: string
}

function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white shadow-md rounded-md relative ${className}`}>
      {children}
    </div>
  )
}

Card.Title = function CardTitle({ children }: CardProps) {
  return (
    <h1 className="text-2xl sm:text-4xl font-bold leading-7 text-gray-900 break-words overflow-hidden select-text">
      {children}
    </h1>
  )
}

Card.Section = function CardSection({ children, className }: CardProps) {
  return <div className={`p-4 lg:p-10 ${className}`}>{children}</div>
}

export default Card
