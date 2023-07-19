import classNames from 'classnames'

interface MaxWidthContainerProps {
  children?: React.ReactNode
  className?: string
}

const MaxWidthContainer: React.FC<MaxWidthContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={classNames('m-auto px-2 md:px-10', className)}>
      {children}
    </div>
  )
}

export default MaxWidthContainer
