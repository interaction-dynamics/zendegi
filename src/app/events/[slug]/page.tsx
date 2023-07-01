import { sql } from '@vercel/postgres'

import FixedHeader from '@/components/molecules/FixedHeader'
import Header from '@/components/molecules/Header'
import Button from '@/components/atoms/Button'
import UserMenu from '@/features/user/components/UserMenu'
import EventType from '@/features/events/types/EventType'
import MaxWidthContainer from '@/components/atoms/MaxWidthContainer'
import EventHero from '@/features/events/components/EventHero'
import GallerySection from '@/features/gallery/components/GallerySection'

const event = {
  id: 'foo',
  title: 'Wedding Paria & Thibault',
  date: '2023-06-12',
  location: 'Montréal',
  type: EventType.Wedding,
  slug: 'bar',
  imageUrl: '',
  gallerySlugs: ['baz'],
}

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

const Event: React.FC<EventProps> = ({ params }) => {
  return (
    <>
      {/* <FixedHeader>
        <MaxWidthContainer className="max-w-screen-2xl">
          <Header>
            <div className="flex-1" />
            <UserMenu />
          </Header>
        </MaxWidthContainer>
      </FixedHeader> */}
      <MaxWidthContainer className="max-w-screen-2xl">
        <div className="mt-10">
          <EventHero event={event} />
        </div>
        <GallerySection gallery={gallery} columns={4} />
      </MaxWidthContainer>
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
    </>
  )
}

export default Event
