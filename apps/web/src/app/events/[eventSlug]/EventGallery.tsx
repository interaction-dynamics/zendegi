import MobileDetect from 'mobile-detect'
import { headers } from 'next/headers'

import * as aws from '@/services/aws'
import { db } from '@/services/kysely'
import GallerySection from '@/features/gallery/components/GallerySection'

const getIsSsrMobile = () => {
  const headersList = headers()

  const md = new MobileDetect(headersList.get('user-agent') ?? '')

  return Boolean(md.mobile())
}

export default async function EventGallery({ event }) {
  let images = await db
    .selectFrom('pictures')
    .select(['id', 'filename', 'url'])
    .where('pictures.eventId', '=', event.id)
    .execute()

  images = images.map(aws.rewriteImageUrl(event))

  const isMobile = getIsSsrMobile()

  return <GallerySection event={event} images={images} isMobile={isMobile} />
}
