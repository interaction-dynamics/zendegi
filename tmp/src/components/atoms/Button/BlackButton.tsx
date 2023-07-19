import GenericButton, { Props } from './GenericButton'
import classNames from 'classnames'

const BlackButton = ({
  className = '',
  children = null,
  title = '',
  href,
  onClick,
  disabled = false,
  ...props
}: Props) => {
  const allClassName = classNames(
    'bg-black text-white hover:bg-gray-800 focus:ring-gray-900',
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
      {...props}
    >
      {children}
    </GenericButton>
  )
}

export default BlackButton
