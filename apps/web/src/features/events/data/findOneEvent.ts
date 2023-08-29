import { cache } from 'react'
import { db } from '@/services/kysely'
import Event from '../types/Event'

const findOneEvent = cache(async (slug: string): Promise<Event> => {
  const event = await db
    .selectFrom('events')
    .select(['id', 'title', 'slug', 'date', 'location', 'imageUrl'])
    .where('events.slug', '=', slug)
    .executeTakeFirst()

  return event
})

export default findOneEvent
