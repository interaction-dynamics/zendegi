import { db, sql } from '@/services/kysely/db'
import { v4 as uuidv4 } from 'uuid'

export async function seed() {
  const createTable = await db.schema
    .createTable('events')
    .ifNotExists()
    .addColumn('id', 'varchar(255)', cb => cb.primaryKey())
    .addColumn('title', 'varchar(255)')
    .addColumn('date', sql`timestamp with time zone`)
    .addColumn('location', 'varchar(255)')
    .addColumn('slug', 'varchar(255)')
    .execute()
  console.log(`Created "events" table`)

  const eventId = uuidv4()

  const addEvents = await db
    .insertInto('events')
    .values([
      {
        id: eventId,
        title: 'Wedding Paria & Thibault',
        date: '2023-06-12',
        location: 'Montréal',
        slug: 'paria-and-thibault-521aec27-7aa0-4697-ac12-b659daf55023',
        imageUrl: '078078eb-5118-40c4-b14a-a7927eb799dc.jpeg',
      },
    ])
    .execute()

  console.log('Seeded database with 1 event')

  const createTablePictures = await db.schema
    .createTable('pictures')
    .ifNotExists()
    .addColumn('id', 'varchar(255)', cb => cb.primaryKey())
    .addColumn('filename', 'varchar(255)')
    .addColumn('url', 'varchar(255)')
    .addColumn('order', 'integer')
    .addColumn('eventId', 'varchar(255)', col =>
      col.references('events.id').onDelete('cascade').notNull(),
    )
    .execute()
  console.log(`Created "events" table`)

  const addPictures = await db
    .insertInto('pictures')
    .values([
      {
        id: uuidv4(),
        filename: 'notary.jpeg',
        url: '078078eb-5118-40c4-b14a-a7927eb799dc.jpeg',
        order: 1,
        eventId: eventId,
      },
    ])
    .execute()
  console.log('Seeded database with 1 picture')

  return {
    createTable,
    // addEvents,
    addPictures,
  }
}
