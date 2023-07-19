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
    .select(['id', 'title', 'slug', 'date', 'location', 'imageUrl'])
    .where('events.slug', '=', params.eventSlug)
    .executeTakeFirst()

  const images = event ? [aws.rewriteUrl(event, event.imageUrl)] : []

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
