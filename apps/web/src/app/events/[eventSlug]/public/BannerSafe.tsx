import { Suspense } from 'react'
import findOneEvent from '@/features/events/data/findOneEvent'
import Event from '@/features/events/types/Event'
import { use } from 'react'
import Banner from '@/features/events/components/Banner'
import { rewriteUrl } from '@/services/aws'

export interface BannerSafeProps {
  params: {
    eventSlug: string
  }
}

async function getEvent(eventSlug: string) {
  return await findOneEvent(eventSlug)
}

function BannerUnsafe({ params }: BannerSafeProps) {
  const event: Event = use(getEvent(params.eventSlug))

  const imageUrl = rewriteUrl(event, event.imageUrl)

  return <Banner imageUrl={imageUrl} />
}

export default function BannerSafe({ params }: BannerSafeProps) {
  return (
    <Suspense fallback={<Banner />}>
      <BannerUnsafe params={params} />
    </Suspense>
  )
}
