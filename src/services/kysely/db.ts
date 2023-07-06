import { createKysely } from '@vercel/postgres-kysely'
import { ColumnType } from 'kysely'

export interface Database {
  events: {
    id: string
    title: string
    date: ColumnType<Date, string | undefined>
    location: string
    slug: string
    imageUrl: string
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
