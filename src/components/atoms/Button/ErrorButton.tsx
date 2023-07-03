import GenericButton from './GenericButton'
import classNames from 'classnames'

type Props = {
  className?: string
  children?: React.ReactNode
  title?: string
  href?: string
  onClick?: () => void
}

const PrimaryButton = ({
  className = '',
  children = null,
  title = '',
  href,
  onClick,
}: Props) => {
  const allClassName = classNames(
    'bg-red-600 hover:bg-red-700 focus:ring-red-500',
    className,
  )

  if (href) {
    return (
      <GenericButton href={href} className={allClassName}>
        {children}
      </GenericButton>
    )
  }
  return (
    <GenericButton className={allClassName} onClick={onClick}>
      {children}
    </GenericButton>
  )
}

export default PrimaryButton
