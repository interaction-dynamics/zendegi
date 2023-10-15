export interface ListProps {
  children: React.ReactNode
}

export default function List({ children }: ListProps) {
  return <div className="divide-y">{children}</div>
}
