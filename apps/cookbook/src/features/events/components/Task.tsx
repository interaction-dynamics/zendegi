import { CheckIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'

export interface CheckBoxProps {
  checked?: boolean
  className?: string
}

function CheckBox({ checked, className }: CheckBoxProps) {
  return (
    <div
      className={classNames(
        'h-8 w-8 border-2 rounded-full flex items-center justify-center',
        checked ? 'border-black bg-black' : 'border-gray-300',
        className,
      )}
    >
      {checked && <CheckIcon className="h-5 w-5 text-white" />}
    </div>
  )
}

export interface TaskProps {
  children?: React.ReactNode
  assignee?: string
  checked?: boolean
  onClick?: () => void
  checkBoxClassName?: string
}

export default function Task({
  children,
  assignee,
  checked,
  onClick,
  checkBoxClassName,
}: TaskProps) {
  return (
    <div className="py-2 flex items-start" onClick={onClick}>
      <CheckBox checked={checked} className={checkBoxClassName} />
      <div className="pt-1">
        <span
          className={classNames(
            'ml-3',
            checked ? 'line-through decoration-2' : '',
          )}
        >
          {children}
        </span>
        {assignee && (
          <span
            className={classNames(
              'ml-1.5 text-blue-700',
              checked ? 'line-through decoration-2' : '',
            )}
          >
            @{assignee}
          </span>
        )}
      </div>
    </div>
  )
}
