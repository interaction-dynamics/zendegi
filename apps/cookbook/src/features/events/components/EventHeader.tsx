'use client'
import Popup from '@/components/molecules/Popup'
import { CalendarIcon } from '@heroicons/react/24/outline'
import usePopup from '@/hooks/usePopup'
import { Dialog } from '@headlessui/react'
import { Button } from 'ui'

export interface EventHeaderProps {
  title: React.ReactNode
  description: React.ReactNode
  date?: string | Date
}

export default function EventHeader({
  title,
  description,
  date,
}: EventHeaderProps) {
  const calendarsPopup = usePopup()

  return (
    <div className="py-3 flex">
      <div className="flex-1">
        <h1 className="text-lg font-semibold leading-6 text-gray-900">
          {title}
        </h1>
        <p className="text-sm font-semibold text-gray-500 pt-0.5">
          {description}
        </p>
      </div>
      {date && (
        <div>
          <button
            className="p-2 transition-colors rounded-lg hover:bg-gray-200 group outline-none"
            onClick={calendarsPopup.open}
          >
            <CalendarIcon className="h-9 w-9 text-gray-700 group-hover:text-gray-900" />
          </button>
        </div>
      )}
      <Popup {...calendarsPopup}>
        <Dialog.Title
          as="h3"
          className="text-base font-semibold leading-6 text-gray-900 text-center mb-3"
        >
          Add to Calendar
        </Dialog.Title>
        <div className="flex flex-col items-stretch gap-3">
          <Button text="Apple" />
          <Button text="Google" />
          <Button text="Ics File" />
          <Button text="Outlook" />
        </div>
      </Popup>
    </div>
  )
}
