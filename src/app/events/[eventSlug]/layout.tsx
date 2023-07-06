import { Metadata, ResolvingMetadata } from 'next'
import { db } from '@/services/kysely'
import * as aws from '@/services/aws'

// https://nextjs.org/docs/app/building-your-application/optimizing/metadata#seo

// export const metadata = {
//   title: 'Wedding - Zendegi',
//   description: 'Share events with your loved ones.',
// }

interface Props {
  params: { eventSlug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const event = await db
    .selectFrom('events')
    .select(['id', 'title', 'slug', 'date', 'location'])
    .where('events.slug', '=', params.eventSlug)
    .executeTakeFirst()

  let image = await db
    .selectFrom('pictures')
    .select(['id', 'filename', 'url'])
    .where('pictures.eventId', '=', event?.id ?? '')
    .executeTakeFirst()

  const images = event && image ? [aws.rewriteUrl(event)(image)] : []

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: `${event?.title} - Zendegi`,
    openGraph: {
      images,
    },
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
