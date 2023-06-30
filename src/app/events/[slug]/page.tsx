import FixedHeader from '@/components/molecules/FixedHeader'
import Header from '@/components/molecules/Header'
import Button from '@/components/atoms/Button'
import UserMenu from '@/features/user/components/UserMenu'
import EventListSection from '@/features/events/components/EventListSection'
import EventPreview from '@/features/events/components/EventPreview'
import EventType from '@/features/events/types/EventType'

const events = [
  {
    id: 'foo',
    title: 'Wedding Paria & Thibault',
    date: '2023-06-12',
    location: 'Montréal',
    type: EventType.Wedding,
    url: 'bar',
    imageUrl: '',
    galleryId: 'baz',
  },
]

const Event = () => {
  return (
    <>
      <FixedHeader>
        <div className="max-w-screen-2xl m-auto ">
          <Header>
            <h1 className="font-bold text-xl text-primary-500">Events</h1>
            <div className="flex-1" />

            <Button.Primary>Favorites</Button.Primary>
            <UserMenu />
          </Header>
        </div>
      </FixedHeader>
      <div className="max-w-screen-2xl m-auto px-10">
        <div className="mt-10">
          <EventListSection>
            {events.map(event => (
              <EventPreview event={event} key={event.id} />
            ))}
          </EventListSection>
        </div>
      </div>
    </>
  )
}

export default Event
