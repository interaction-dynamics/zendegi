'use client'
import classNames from 'classnames'
import { cloneElement } from 'react'

export interface ItemProps {
  title: string
  icon?: React.ReactNode
  description?: React.ReactNode
  extra?: React.ReactNode
  onClick?: () => void
}

export default function Item({
  title,
  icon,
  description,
  extra,
  onClick,
}: ItemProps) {
  return (
    <div
      className={classNames(
        'py-3 px-2 flex  items-center outline-none',
        onClick ? 'hover:bg-gray-50 cursor-pointer' : '',
      )}
      onClick={onClick}
    >
      {icon && (
        <div className="flex-[0_0_45px] flex justify-left pt-1">
          {cloneElement(
            icon as React.ReactElement<{ className: string }> & {
              props: { className: string }
            },
            {
              className: classNames(icon.props.className, 'w-8 h-8'),
            },
          )}
        </div>
      )}
      <div className="flex-1">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          {title}
        </h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="flex-0">{extra}</div>
    </div>
  )
}
