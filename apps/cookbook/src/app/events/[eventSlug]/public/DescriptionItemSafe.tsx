import { Suspense } from 'react'
import findOneEvent from '@/features/events/data/findOneEvent'
import Event from '@/features/events/types/Event'
import { use } from 'react'
import DescriptionItem from '@/features/events/components/DescriptionItem'

export interface DescriptionItemSafeProps {
  params: {
    eventSlug: string
  }
}

async function getEvent(eventSlug: string) {
  return await findOneEvent(eventSlug)
}

function DescriptionItemUnsafe({ params }: DescriptionItemSafeProps) {
  const event: Event = use(getEvent(params.eventSlug))

  return (
    <DescriptionItem
      description={Array.from({ length: 20 })
        .map(() => event.location)
        .join(' ')}
    />
  )
}

export default function DescriptionItemSafe({
  params,
}: DescriptionItemSafeProps) {
  return (
    <Suspense fallback={<DescriptionItem />}>
      <DescriptionItemUnsafe params={params} />
    </Suspense>
  )
}
