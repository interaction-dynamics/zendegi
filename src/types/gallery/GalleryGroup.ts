import Picture from './Picture'

export default interface GalleryGroup {
  title: string
  description?: string
  images: Picture[]
}
