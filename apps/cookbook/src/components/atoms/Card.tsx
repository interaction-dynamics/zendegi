export interface CardProps {
  children: React.ReactNode
}

export default function Card({ children }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-md p-4 lg:p-10 relative">
      {children}
    </div>
  )
}
