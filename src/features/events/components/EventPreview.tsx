import classNames from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const LordIcon = dynamic(() => import('@/components/atoms/LordIcon'), {
  ssr: false,
})
import Event from '@/features/events/types/Event'
import EventType from '../types/EventType'

const EventIcon = {
  [EventType.Wedding]: '/icons/wired-outline-653-marriage.json',
  [EventType.Birthday]: '/icons/wired-outline-548-birthday-cake-candle.json',
  [EventType.HouseWarming]: '/icons/wired-outline-63-home.json',
  // [EventType.Retirement]: '/icons/wired-outline-653-marriage.json',
  [EventType.Other]: '/icons/wired-outline-1103-confetti.json',
}

export interface EventPreviewProps {
  event: Event
}

const EventPreview: React.FC<EventPreviewProps> = ({ event }) => {
  const date = new Date(event.date)

  return (
    <Link
      className="rounded-xl shadow hover:shadow-md overflow-hidden relative group cursor-pointer"
      href={`/events/${event.url}`}
    >
      <div
        className={classNames(
          'relative aspect-w-3 aspect-h-2',
          event.imageUrl
            ? 'bg-gray-200'
            : 'bg-primary-400 group-hover:bg-primary-500',
        )}
      >
        <div className="flex flex-col">
          {event.imageUrl ? (
            <Image
              src={event.imageUrl}
              alt={event.title}
              width={500}
              height={500}
              className="object-center object-cover indent-[-9999px]"
            />
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <LordIcon
                src={EventIcon[event.type]}
                colors={{ primary: 'white', secondary: 'white' }}
                size={120}
              />
            </div>
          )}
          <div
            className="absolute left-0 right-0 bottom-0 flex flex-col items-end opacity-0 p-4 transition transition-500 group-hover:opacity-100"
            aria-hidden="true"
          >
            <div className="w-full bg-white bg-opacity-75 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center">
              View Event
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-1 md:mt-2.5 flex items-center justify-between text-sm md:text-sm font-medium text-gray-900 space-x-8"> */}

      <div className="px-2 py-2.5 flex">
        <div className="flex-[0_0_3rem] flex flex-col align-center justify-start mr-2">
          <div className="text-xl font-bold text-center text-gray-900">
            {new Intl.DateTimeFormat('en-US', { day: 'numeric' }).format(date)}
          </div>
          <div className="text-smdm font-bold text-center mt-[-4px] text-gray-900">
            {new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date)}
          </div>
        </div>
        <div className="flex-1 pt-0.5">
          <h3 className="text-md font-medium text-gray-900 break-words line-clamp-1 text-ellipsis">
            <span aria-hidden="true" className="absolute inset-0" />
            {event.title}
          </h3>
          <div className="text-sm font-medium text-gray-500 break-words line-clamp-1 text-ellipsis">
            {event.location}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default EventPreview
