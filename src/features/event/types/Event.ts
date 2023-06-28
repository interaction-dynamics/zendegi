import EventType from './EventType'

export default interface Event {
  id: string
  type: EventType
  title: string
  date: string
  location: string
  url: string
  imageUrl: string
  galleryId: string
}
