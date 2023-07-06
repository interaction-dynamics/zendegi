import { NextResponse } from 'next/server'
import { seed } from '@/services/kysely/seed'

export async function POST(request: Request) {
  return NextResponse.json({ error: 'forbidden' }, { status: 401 })

  try {
    const s = await seed()

    return NextResponse.json({ error: '' }, { status: 201 })
  } catch (error) {
    console.log('error', error)
    return NextResponse.json({ error: 'error' }, { status: 500 })
  }
}
