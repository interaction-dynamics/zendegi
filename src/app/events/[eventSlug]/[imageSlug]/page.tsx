import { db } from '@/services/kysely'

import * as aws from '@/services/aws'

import EventNotFound from '@/features/events/components/EventNotFound'
import OneImageContainer from './OneImageContainer'

interface EventProps {
  params: {
    eventSlug: string
    imageSlug: string
  }
}

const OneImageView: React.FC<EventProps> = async ({ params }) => {
  const event = await db
    .selectFrom('events')
    .select(['id', 'title', 'slug', 'date', 'location'])
    .where('events.slug', '=', params.eventSlug)
    .executeTakeFirst()

  if (!event) {
    return <EventNotFound />
  }

  let image = await db
    .selectFrom('pictures')
    .select(['id', 'filename', 'url'])
    .where('pictures.url', '=', params.imageSlug)
    .executeTakeFirst()

  if (!image) {
    return <>Image not found</>
  }

  image = aws.rewriteUrl(event)(image)

  return (
    <div className="fixed inset-0 z-50">
      <OneImageContainer image={image} />
    </div>
  )
}

export default OneImageView
