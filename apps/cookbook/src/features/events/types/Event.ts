import Gallery from '@/features/gallery/types/Gallery'
import EventType from './EventType'

export default interface Event {
  id: string
  // type: EventType
  title: string
  date: Date
  location: string
  slug: string
  imageUrl?: string
}
