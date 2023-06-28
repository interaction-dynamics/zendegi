interface MaxWidthContainerProps {
  children?: React.ReactNode
}

const MaxWidthContainer: React.FC<MaxWidthContainerProps> = ({ children }) => {
  return <div className="max-w-screen-lg m-auto px-2">{children}</div>
}

export default MaxWidthContainer
