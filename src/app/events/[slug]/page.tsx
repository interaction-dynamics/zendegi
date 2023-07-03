import { db } from '@/services/kysely'

import FixedHeader from '@/components/molecules/FixedHeader'
import Header from '@/components/molecules/Header'
import Button from '@/components/atoms/Button'
import UserMenu from '@/features/user/components/UserMenu'
import EventType from '@/features/events/types/EventType'
import MaxWidthContainer from '@/components/atoms/MaxWidthContainer'
import EventHero from '@/features/events/components/EventHero'
import GallerySection from '@/features/gallery/components/GallerySection'
import * as aws from '@/services/aws'
import { useState } from 'react'
import DragAndDropLayer from '@/features/gallery/components/DragAndDropLayer'

const gallery = {
  id: 'baz',
  slug: 'baz',
  title: 'Notary',
  images: [
    {
      url: 'https://ik.imagekit.io/zendegi/WhatsApp_Image_2023-06-11_at_13.04.15.jpeg?updatedAt=1687956499406',
      filename: 'default-image.jpg',
      title: 'default',
    },
  ],
}

interface EventProps {
  params: {
    slug: string
  }
}

const Event: React.FC<EventProps> = async ({ params }) => {
  const event = await db
    .selectFrom('events')
    .select(['id', 'title', 'slug', 'date', 'location'])
    .where('events.slug', '=', params.slug)
    .executeTakeFirst()

  if (!event) {
    return (
      <MaxWidthContainer className="max-w-screen-2xl">
        <div className="mt-10 text-center">
          <h1 className="text-xl">Impossible to find this event</h1>
          <p className="text-gray-500 text-center">
            Maybe a typo in the url? Ask your contact
          </p>
        </div>
      </MaxWidthContainer>
    )
    return <div className="text-black">fdsfds</div>
  }

  let images = await db
    .selectFrom('pictures')
    .select(['id', 'filename', 'url'])
    .where('pictures.eventId', '=', event.id)
    .execute()

  images = images.map(aws.rewriteUrl(event))

  return (
    <div className="min-h-screen flex flex-col">
      <MaxWidthContainer className="max-w-screen-2xl flex-1">
        <div className="mt-10">
          <EventHero event={event} />
        </div>
        <GallerySection images={images} columns={4} />
      </MaxWidthContainer>
      <DragAndDropLayer event={event} />
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
