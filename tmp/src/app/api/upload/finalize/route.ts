import { NextResponse } from 'next/server'
import { db } from '@/services/kysely/db'
import { v4 as uuidv4 } from 'uuid'

export async function POST(request: Request) {
  try {
    const { eventId, url, filename } = await request.json()

    const addPictures = await db
      .insertInto('pictures')
      .values([
        {
          id: uuidv4(),
          eventId,
          url,
          filename,
          order: 1,
        },
      ])
      .execute()

    return NextResponse.json({ error: '' }, { status: 201 })
  } catch (error) {
    console.log('error', error)
    return NextResponse.json({ error: 'error' }, { status: 500 })
  }
}
