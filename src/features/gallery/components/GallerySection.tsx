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

const StyledStickyHeader = styled(Box)<{ isOnTop: string }>(
  ({ isOnTop }) => `
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: ${isOnTop === 'true' ? 30 : 0};
    width: 100%;
`,
)

const StyledBadge = styled(Box)<{ isOnTop: string }>(
  ({ isOnTop }) => `
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    z-index: ${isOnTop ? 30 : 0};
    cursor: pointer;
    border-radius: 999rem;
    background: ${isOnTop === 'true' ? 'white' : 'transparent'};
    gap: 0.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    box-shadow: ${
      isOnTop === 'true'
        ? 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px'
        : 'transparent'
    };
    white-space: nowrap;

    border: ${
      isOnTop === 'true' ? '1px solid rgb(229, 231, 235)' : 'transparent'
    };

    &:hover {
      background: rgb(249, 250, 251);
    }
`,
)

const StyledButtons = styled(Box)<{ isOnTop: string }>(
  ({ isOnTop }) => `
  flex: 1 1 100%;
  display: ${isOnTop === 'string' ? 'none' : 'flex'};
`,
)

const StyledIcon = styled(ArrowSmallUpIcon)`
  stroke: black;
  width: 1rem;
  height: 1rem;
  stroke-width: 3;
`

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

const StyledArrowsPointingOutIcon = styled(ArrowsPointingOutIcon)`
  width: 1.8rem;
  height: 1.8rem;
  stroke-width: 3;
`

export interface GallerySectionProps {
  gallery: Gallery
  children?: React.ReactNode
  columns: MansoryProps['columns']
}

const GallerySection: React.FC<GallerySectionProps> = ({
  gallery,
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

  const { title, images } = gallery

  return (
    <div
      className="text-center flex flex-col items-center"
      ref={topOfSectionRef}
    >
      <StyledStickyHeader isOnTop={String(isOnTop)} ref={titleRef}>
        <StyledButtons isOnTop={String(isOnTop)}></StyledButtons>
        <StyledBadge isOnTop={String(isOnTop)}>
          <StyledIcon sx={{ visibility: 'hidden' }} />
          <Typography
            variant={isOnTop ? 'h3' : 'h2'}
            textAlign="center"
            onClick={scrollToTopOfSection}
          >
            {title}
          </Typography>
          <StyledIcon sx={{ visibility: isOnTop ? 'visible' : 'hidden' }} />
        </StyledBadge>
        <StyledButtons isOnTop={String(isOnTop)} justifyContent="flex-end">
          {images.length > 0 && (
            <GalleryDownloadButton
              galleryGroup={{
                title,
                images,
              }}
            />
          )}
        </StyledButtons>
      </StyledStickyHeader>

      <Box pb={2} />
      {images.length > 0 ? (
        <Masonry columns={columns} spacing={2}>
          {images.map(image => (
            <StyledImageContainer key={image.url}>
              <StyledImage src={image.url} alt={image.alt} loading="lazy" />
              <StyledOverlay onClick={() => setSelectecImage(image)}>
                <StyledArrowsPointingOutIcon />
              </StyledOverlay>
            </StyledImageContainer>
          ))}
        </Masonry>
      ) : (
        children
      )}
      <DesktopImagePopup
        image={selectedImage}
        gallery={gallery}
        open={Boolean(selectedImage)}
        onClose={() => setSelectecImage(undefined)}
      />
    </div>
  )
}

export default GallerySection
