'use client'
import { useRef, useState } from 'react'
import { Box, styled, Paper, Typography } from '@mui/material'
import { Masonry, type MansoryProps } from '@mui/lab'
import { ArrowsPointingOutIcon } from '@heroicons/react/24/solid'
import { ArrowSmallUpIcon } from '@heroicons/react/24/outline'

import Picture from '@/features/gallery/types/Picture'
import useEventListener from '@/hooks/useEventListener'
import GalleryDownloadButton from './GalleryDownloadButton'
import Gallery from '../types/Gallery'
import DesktopImagePopup from './DesktopImagePopup'

const StyledImageContainer = styled(Paper)`
  overflow: hidden;
  border-radius: 0.5rem;

  position: relative;
  z-index: 1;

  &:hover {
    &:after {
      background: rgba(0, 0, 0, 0.4);
    }
    cursor: pointer;

    img {
      transform: scale(1.05);
    }
  }
`

const StyledOverlay = styled('div')`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: all linear 0.1s;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.4);

  &:hover {
    opacity: 1;
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0,
  }
`

const StyledImage = styled('img')`
  display: block;
  width: 100%;

  transition: all linear 0.1s;

  &:hover {
    transform: scale(1.05);
  }
`

export interface GallerySectionProps {
  images: Picture[]
  children?: React.ReactNode
  columns: MansoryProps['columns']
}

const GallerySection: React.FC<GallerySectionProps> = ({
  images,
  children,
  columns,
}) => {
  const [selectedImage, setSelectecImage] = useState<Picture | undefined>()

  const topOfSectionRef = useRef<HTMLDivElement>(null)

  const titleRef = useRef<HTMLSpanElement>(null)

  const [isOnTop, setInOnTop] = useState(false)

  useEventListener('scroll', () => {
    setInOnTop((titleRef.current?.getBoundingClientRect().top ?? 100) <= 10)
  })

  const scrollToTopOfSection = () => {
    if (!isOnTop) return
    window.scroll({
      top: (topOfSectionRef.current?.offsetTop ?? 0) - 100,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div
      className="text-center flex flex-col items-center"
      ref={topOfSectionRef}
    >
      {images.length > 0 ? (
        <Masonry columns={columns} spacing={2}>
          {images.map(image => (
            <StyledImageContainer key={image.url}>
              <StyledImage
                src={image.url}
                alt={image.filename}
                loading="lazy"
              />
              <div
                className="absolute inset-0 transition-all flex items-center justify-center bg-black/[.4] text-white opacity-0 hover:opacity-100"
                onClick={() => setSelectecImage(image)}
              >
                <ArrowsPointingOutIcon className="h-8 w-8 stroke-[3px] " />
              </div>
            </StyledImageContainer>
          ))}
        </Masonry>
      ) : (
        children
      )}
      {
        <DesktopImagePopup
          image={selectedImage}
          open={Boolean(selectedImage)}
          onClose={() => setSelectecImage(undefined)}
        />
      }
    </div>
  )
}

export default GallerySection
