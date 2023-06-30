import Event from '../types/Event'
import EventType from '../types/EventType'

export const eventMock: Event = {
  id: 'foo',
  title: 'Wedding Paria & Thibault',
  date: '2023-06-12',
  location: 'Montréal',
  type: EventType.Wedding,
  url: 'bar',
  imageUrl: '',
  galleryId: 'baz',
}
