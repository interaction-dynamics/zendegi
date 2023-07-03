import Event from '@/features/events/types/Event'
import EventType from '@/features/events/types/EventType'
import Gallery from '@/features/gallery/types/Gallery'
import { createKysely } from '@vercel/postgres-kysely'
import { Generated, ColumnType } from 'kysely'

export interface Database {
  events: {
    id: string
    title: string
    date: ColumnType<Date, string | undefined>
    location: string
    slug: string
    // ownerId: number
  }
  pictures: {
    id: string
    filename: string
    url: string
    eventId: string
    order: number
  }
}

export const db = createKysely<Database>()

export { sql } from 'kysely'
