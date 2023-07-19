import FixedHeader from '@/components/molecules/FixedHeader'
import Header from '@/components/molecules/Header'
import Button from '@/components/atoms/Button'
import UserMenu from '@/features/user/components/UserMenu'
import EventPreview from '@/features/events/components/EventPreview'
import EventType from '@/features/events/types/EventType'
import MaxWidthContainer from '@/components/atoms/MaxWidthContainer'
import EventNotFound from '@/features/events/components/EventNotFound'

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
  return <EventNotFound />
}

export default Events
