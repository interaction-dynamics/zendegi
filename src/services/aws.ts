import Event from '@/features/events/types/Event'
import Picture from '@/features/gallery/types/Picture'

export const rewriteUrl = (event: Event) => (picture: Picture) => ({
  ...picture,
  slug: picture.url,
  url: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/pictures/${event.slug}/${picture.url}`,
})
