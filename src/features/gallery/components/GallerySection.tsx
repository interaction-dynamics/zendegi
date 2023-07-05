'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Transition } from '@headlessui/react'
import va from '@vercel/analytics'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

import { ArrowsPointingOutIcon } from '@heroicons/react/24/solid'

import Picture from '@/features/gallery/types/Picture'
import OneImageVisualizer from './OneImageVisualizer'
import { usePathname, useRouter } from 'next/navigation'
import Event from '@/features/events/types/Event'

export interface GallerySectionProps {
  event: Event
  images: Picture[]
  // columns: MasonryProps['columns']
  isMobile?: boolean
}

const GallerySection: React.FC<GallerySectionProps> = ({
  event,
  images,
  // columns,
  isMobile,
}) => {
  const [selectedImage, setSelectecImage] = useState<Picture | undefined>()

  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className="text-center flex flex-col items-center">
      <ResponsiveMasonry
        className="w-full"
        columnsCountBreakPoints={{ 250: 1, 350: 2, 900: 3, 1000: 4 }}
      >
        <Masonry>
          {images.map(image => (
            <div
              className="overflow-hidden rounded-md relative m-3"
              key={image.url}
            >
              <Image
                className="block w-full transition-all hover:scale-105 rounded-md"
                src={image.url}
                alt={image.filename}
                loading="lazy"
                width={500}
                height={500}
                style={{ height: 'auto', objectFit: 'cover' }}
              />
              <div
                className="absolute inset-0 transition-all flex items-center justify-center bg-black/[.4] text-white opacity-0 hover:opacity-100 cursor-pointer"
                onClick={() => {
                  va.track('image.zoom', {
                    event: event.slug,
                    image: image.slug ?? '',
                  })
                  isMobile
                    ? router.push(`/events/${event.slug}/${image.slug}`)
                    : setSelectecImage(image)
                }}
              >
                <ArrowsPointingOutIcon className="h-8 w-8 stroke-[3px] " />
              </div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
      <Transition
        show={Boolean(selectedImage)}
        enter="transition-opacity duration-75 relative z-50"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        tabIndex={0}
      >
        <div className="fixed inset-0 z-50">
          <OneImageVisualizer
            image={selectedImage}
            event={event}
            onClose={() => setSelectecImage(undefined)}
            onBack={() => setSelectecImage(undefined)}
          />
        </div>
      </Transition>
    </div>
  )
}

export default GallerySection
