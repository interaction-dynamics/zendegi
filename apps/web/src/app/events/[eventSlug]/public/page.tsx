import {
  MapPinIcon,
  InformationCircleIcon,
  UserGroupIcon,
  CheckCircleIcon,
  PhotoIcon,
  CalendarIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline'

import findOneEvent from '@/features/events/data/findOneEvent'
import MaxWidthContainer from '@/components/atoms/MaxWidthContainer'
import Event from '@/features/events/types/Event'
import useFormatDate from '@/hooks/useFormatDate'

import Item from './Item'
import MembersItem from './MembersItem'

interface EventProps {
  params: {
    eventSlug: string
  }
}

export default async function EventPublic({ params }: EventProps) {
  const event: Event = await findOneEvent(params.eventSlug)

  const formatDate = useFormatDate()

  return (
    <div className="min-h-screen flex flex-col items-stretch">
      <div className="flex-1 w-full">
        <MaxWidthContainer className="max-w-screen-md flex-1 py-5">
          <div className="w-full aspect-[16/7] relative rounded-2xl bg-gray-200"></div>
          <div className="pt-3 divide-y">
            <div className="py-3 flex">
              <div className="flex-1">
                <h1 className="text-lg font-semibold leading-6 text-gray-900">
                  {event.title}
                </h1>
                <p className="text-sm font-semibold text-gray-500 pt-0.5">
                  {formatDate(event.date, {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                  })}
                </p>
              </div>
              <div>
                <button className="p-2 transition-colors rounded-md hover:bg-gray-200 group">
                  <CalendarIcon className="h-9 w-9 text-gray-700 group-hover:text-gray-900" />
                </button>
              </div>
            </div>
            <Item
              title="Getting there"
              icon={<MapPinIcon />}
              description={event.location}
            />
            <Item
              title="Message from organizer"
              icon={<InformationCircleIcon />}
              description={event.location}
            />
            <MembersItem />
            {/* <Item
              title="Participants"
              icon={<UserGroupIcon />}
              description="6 guests"
            /> */}
            <Item
              title="Todo list"
              icon={<CheckCircleIcon />}
              description="Remaining tasks: 10/20"
            />
            <Item
              title="Expenses"
              icon={<CurrencyDollarIcon />}
              description="200$ spent"
            />
            <Item
              title="Pictures"
              icon={<PhotoIcon />}
              description="20 media files"
            />
          </div>
        </MaxWidthContainer>
      </div>
    </div>
  )
}
