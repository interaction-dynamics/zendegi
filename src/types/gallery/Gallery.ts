import GalleryGroup from './GalleryGroup'

export default interface Gallery {
  title: string
  location: string
  date: string
  imageUrl: string
  groups: GalleryGroup[]
}
