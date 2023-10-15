import { Suspense } from 'react'
import findOneEvent from '@/features/events/data/findOneEvent'
import Event from '@/features/events/types/Event'
import { use } from 'react'
import GettingThereItem from '@/features/events/components/GettingThereItem'

export interface GettingThereSafeProps {
  params: {
    eventSlug: string
  }
}

async function getEvent(eventSlug: string) {
  return await findOneEvent(eventSlug)
}

function GettingThereUnsafe({ params }: GettingThereSafeProps) {
  const event: Event = use(getEvent(params.eventSlug))

  return <GettingThereItem location={event.location} />
}

export default function GettingThereSafe({ params }: GettingThereSafeProps) {
  return (
    <Suspense fallback={<GettingThereItem />}>
      <GettingThereUnsafe params={params} />
    </Suspense>
  )
}
