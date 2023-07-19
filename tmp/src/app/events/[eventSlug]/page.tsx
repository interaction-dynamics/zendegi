import { headers } from 'next/headers'
import MobileDetect from 'mobile-detect'

import { db } from '@/services/kysely'

import Button from '@/components/atoms/Button'
import MaxWidthContainer from '@/components/atoms/MaxWidthContainer'
import EventHero from '@/features/events/components/EventHero'
import GallerySection from '@/features/gallery/components/GallerySection'
import * as aws from '@/services/aws'
// import DragAndDropLayer from '@/features/gallery/components/DragAndDropLayer'
import EventNotFound from '@/features/events/components/EventNotFound'

const getIsSsrMobile = () => {
  const headersList = headers()

  const md = new MobileDetect(headersList.get('user-agent') ?? '')

  return Boolean(md.mobile())
}

interface EventProps {
  params: {
    eventSlug: string
  }
}

const Event: React.FC<EventProps> = async ({ params }) => {
  const event = await db
    .selectFrom('events')
    .select(['id', 'title', 'slug', 'date', 'location'])
    .where('events.slug', '=', params.eventSlug)
    .executeTakeFirst()

  if (!event) {
    return <EventNotFound />
  }

  let images = await db
    .selectFrom('pictures')
    .select(['id', 'filename', 'url'])
    .where('pictures.eventId', '=', event.id)
    .execute()

  images = images.map(aws.rewriteImageUrl(event))

  const isMobile = getIsSsrMobile()

  return (
    <div className="min-h-screen flex flex-col items-stretch">
      <div className="flex-1 w-full">
        <MaxWidthContainer className="max-w-screen-2xl flex-1">
          <div className="mt-10">
            <EventHero event={event} />
          </div>
          <GallerySection event={event} images={images} isMobile={isMobile} />
        </MaxWidthContainer>
      </div>

      {/* <DragAndDropLayer event={event} /> */}
      <footer className="bg-white mt-20 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
        <MaxWidthContainer className="max-w-screen-2xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex items-center justify-center space-x-6 md:order-2">
            <div className="text-center text-xs text-gray-500">
              Want to publish your own pictures?
            </div>
            <Button.Black href="/login">Sign up</Button.Black>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-2 text-gray-500">
              &copy; 2023 Zendegi, Inc. All rights reserved.
            </p>
          </div>
        </MaxWidthContainer>
      </footer>
    </div>
  )
}

export default Event
