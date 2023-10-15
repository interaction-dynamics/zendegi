export interface MaxWidthContainerProps {
  children?: React.ReactNode
}

export default function MaxWidthContainer({
  children,
}: MaxWidthContainerProps) {
  return <div className="max-w-screen-lg m-auto">{children}</div>
}
