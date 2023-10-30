export interface ButtonProps {
  children: React.ReactNode
  iconOnly?: boolean
  className?: string
  onClick?: () => void
  disabled?: boolean
  title?: string
}

const classNames = {
  type: {
    default:
      'bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50',
  },
  size: {
    large: 'rounded-md px-3 py-2 text-sm font-semibold',
  },
}

export default function Button({
  children,
  className,
  onClick = () => {},
  disabled,
  title,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`${classNames.type.default} ${classNames.size.large} ${className}`}
      onClick={onClick}
    >
      <span className="sr-only">{title}</span>
      {children}
    </button>
  )
}
