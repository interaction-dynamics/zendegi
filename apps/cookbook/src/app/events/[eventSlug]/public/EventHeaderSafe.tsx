import { Suspense } from 'react'
import EventHeader from '@/features/events/components/EventHeader'
import findOneEvent from '@/features/events/data/findOneEvent'
import Event from '@/features/events/types/Event'
import { use } from 'react'
import useFormatDate from '@/hooks/useFormatDate'

export interface EventHeaderDataProps {
  params: {
    eventSlug: string
  }
}

async function getEvent(eventSlug: string) {
  return await findOneEvent(eventSlug)
}

function EventHeaderUnsafe({ params }: EventHeaderDataProps) {
  const event: Event = use(getEvent(params.eventSlug))

  const formatDate = useFormatDate()

  return (
    <EventHeader
      title={event.title}
      description={formatDate(event.date, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      })}
      date={event.date}
    />
  )
}

const TitleSkeleton = () => (
  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20" />
)

const TextSkeleton = () => (
  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-24"></div>
)

export default function EventHeaderSafe({ params }: EventHeaderDataProps) {
  return (
    <Suspense
      fallback={
        <EventHeader title={<TitleSkeleton />} description={<TextSkeleton />} />
      }
    >
      <EventHeaderUnsafe params={params} />
    </Suspense>
  )
}
