import GenericButton from './GenericButton'
import classNames from 'classnames'

type Props = {
  className?: string
  children?: React.ReactNode
  title?: string
  href?: string
  onClick?: () => void
  disabled?: boolean
  id?: string
  name?: string
}

const WhiteButton = ({
  className = '',
  children = null,
  title = '',
  href,
  onClick,
  disabled = false,
  ...props
}: Props) => {
  const allClassName = classNames(
    'bg-white !text-gray-700 hover:text-gray-900 border !border-gray-300 hover:bg-gray-100 focus:ring-gray-300',
    className,
    disabled ? 'opacity-70' : '',
  )

  if (href) {
    return (
      <GenericButton
        href={href}
        className={allClassName}
        disabled={disabled}
        {...props}
      >
        {children}
      </GenericButton>
    )
  }
  return (
    <GenericButton
      className={allClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </GenericButton>
  )
}

export default WhiteButton
