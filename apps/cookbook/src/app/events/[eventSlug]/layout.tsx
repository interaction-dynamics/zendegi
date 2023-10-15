import { Metadata } from 'next'

import findOneEvent from '@/features/events/data/findOneEvent'
import * as aws from '@/services/aws'

import EventNotFound from '@/features/events/components/EventNotFound'

interface EventProps {
  params: {
    eventSlug: string
  }
}

/**
 * How to get dynamic metadata https://nextjs.org/docs/app/building-your-application/optimizing/metadata#seo
 */
export async function generateMetadata({
  params,
}: EventProps): Promise<Metadata> {
  const event = await findOneEvent(params.eventSlug)

  const images = event ? [aws.rewriteUrl(event, event.imageUrl)] : []

  return {
    title: `${event?.title} - Zendegi`,
    openGraph: {
      images,
    },
  }
}

export default async function EventLayout({ params, children }) {
  const event = await findOneEvent(params.eventSlug)

  if (!event) {
    return <EventNotFound />
  }

  return <>{children}</>
}
