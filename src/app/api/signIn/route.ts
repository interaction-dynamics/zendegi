import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { email } = await request.json()

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 })
  }

  try {
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
    const API_KEY = process.env.MAILCHIMP_API_KEY
    const DATACENTER = process.env.MAILCHIMP_API_SERVER
    const data = {
      email_address: email,
      status: 'subscribed',
    }

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,

      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
      },
    )

    if (response.status >= 400) {
      return NextResponse.json(
        {
          error: `There was an error sign in.`,
        },
        { status: 400 },
      )
    }

    return NextResponse.json({ error: '' }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'error' }, { status: 500 })
  }
}
