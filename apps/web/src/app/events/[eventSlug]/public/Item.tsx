import { cloneElement } from 'react'

export interface ItemProps {
  title: string
  icon: React.ReactNode
  description: React.ReactNode
  extra?: React.ReactNode
}

export default function Item({ title, icon, description, extra }: ItemProps) {
  return (
    <div className="py-2 flex hover:bg-gray-50 cursor-pointer items-center">
      <div className="flex-[0_0_50px] flex justify-center pt-1">
        {cloneElement(icon as React.ReactElement<any>, {
          className: 'w-8 h-8',
        })}
      </div>
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
