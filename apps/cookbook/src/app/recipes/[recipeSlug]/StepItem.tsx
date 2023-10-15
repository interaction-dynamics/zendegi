export interface StepItemProps {
  className?: string
  onClick?: () => void
  icon: React.ReactNode
  children?: React.ReactNode
  description?: React.ReactNode
  line?: React.ReactNode
}

export function StepItem({
  className,
  onClick,
  icon,
  description,
  children,
  line,
}: StepItemProps) {
  return (
    <li className={`relative ${className}`}>
      {line}
      <button
        onClick={onClick}
        className="relative z-10 flex items-start group"
      >
        <span className="h-9 flex items-center">{icon}</span>
        <div className="ms-4 min-w-0 flex flex-col">
          <div className="text-sm ltr:text-left rtl:text-right select-text text-gray-500" />
          {description}
        </div>
        {children}
      </button>
    </li>
  )
}

StepItem.Line = function Line({ className }: { className: string }) {
  return (
    <div
      className={`ltr:-ml-px rtl:-mr-px absolute ltr:mt-0.5 rtl:ml-0.5 top-4 ltr:left-4 rtl:right-4 w-0.5 h-full ${className}`}
      aria-hidden="true"
    />
  )
}

function OuterCicle({
  className,
  children,
}: {
  className: string
  children: React.ReactNode
}) {
  return (
    <span
      className={`w-8 h-8 flex items-center justify-center rounded-full ${className}`}
    >
      {children}
    </span>
  )
}

StepItem.RadioButton = function RadioButton() {
  return (
    <OuterCicle className="bg-white border-2 border-gray-300">
      <span className="h-2.5 w-2.5 bg-transparent rounded-full" />
    </OuterCicle>
  )
}

export default StepItem
