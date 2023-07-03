import FixedHeader from '@/components/molecules/FixedHeader'
import Header from '@/components/molecules/Header'
import Button from '@/components/atoms/Button'
import UserMenu from '@/features/user/components/UserMenu'
import EventPreview from '@/features/events/components/EventPreview'
import EventType from '@/features/events/types/EventType'
import MaxWidthContainer from '@/components/atoms/MaxWidthContainer'

const events = [
  {
    id: 'foo',
    title: 'Wedding Paria & Thibault',
    date: new Date('2023-06-12'),
    location: 'Montréal',
    type: EventType.Wedding,
    slug: 'bar',
    imageUrl: '',
    galleryId: 'baz',
  },
]

const Events = () => {
  return (
    <>
      <FixedHeader>
        <MaxWidthContainer className="max-w-screen-2xl">
          <Header>
            <h1 className="font-bold text-xl text-primary-500">Events</h1>
            <div className="flex-1" />

            <Button.Primary>New Event</Button.Primary>
            <UserMenu />
          </Header>
        </MaxWidthContainer>
      </FixedHeader>
      <MaxWidthContainer className="max-w-screen-2xl">
        <div className="mt-10">
          <div className="grid gap-x-4 md:gap-x-6 gap-y-8 sm:gap-y-10 grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 5xl:grid-cols-4">
            {events.map(event => (
              <EventPreview event={event} key={event.id} />
            ))}
          </div>
        </div>
      </MaxWidthContainer>
    </>
  )
}

export default Events
