interface PageProps {
  children: React.ReactNode
}

const Page: React.FC<PageProps> = ({ children }) => {
  return <div className="min-h-max">{children}</div>
}

export default Page
