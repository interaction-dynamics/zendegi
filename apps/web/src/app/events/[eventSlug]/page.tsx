import findOneEvent from '@/features/events/data/findOneEvent'

// import Button from '@/components/atoms/Button'
import MaxWidthContainer from '@/components/atoms/MaxWidthContainer'
import EventHero from '@/features/events/components/EventHero'

interface EventProps {
  params: {
    eventSlug: string
  }
}

export default async function Event({ params }: EventProps) {
  const event = await findOneEvent(params.eventSlug)

  return (
    <div className="min-h-screen flex flex-col items-stretch">
      <div className="flex-1 w-full">
        <MaxWidthContainer className="max-w-screen-2xl flex-1">
          <div className="mt-10">
            <EventHero event={event} />
          </div>
          {/* <EventGallery event={event} /> */}
        </MaxWidthContainer>
      </div>

      {/* <DragAndDropLayer event={event} /> */}
      <footer className="bg-white mt-20 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
        <MaxWidthContainer className="max-w-screen-2xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex items-center justify-center space-x-6 md:order-2">
            <div className="text-center text-xs text-gray-500">
              Want to publish your own pictures?
            </div>
            {/* <Button.Black href="/login">Sign up</Button.Black> */}
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
