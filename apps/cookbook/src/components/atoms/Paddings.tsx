export interface PaddingsProps {
  children: React.ReactNode
}

export default function Paddings({ children }: PaddingsProps) {
  return <div className="px-4 lg:px-16">{children}</div>
}
