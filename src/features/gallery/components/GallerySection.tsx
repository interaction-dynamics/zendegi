import { useRef, useState } from 'react'
import { Box, Container, styled, Paper, Typography } from '@mui/material'
import { Masonry } from '@mui/lab'
import { ArrowsPointingOutIcon } from '@heroicons/react/24/solid'
import { ArrowSmallUpIcon } from '@heroicons/react/24/outline'

import Picture from '~/src/types/Picture'
import useEventListener from '~src/hooks/useEventListener'

const StyledStickyHeader = styled(Box)<{ isOnTop: boolean }>(
  ({ isOnTop }) => `
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: ${isOnTop ? 30 : 0};
    padding-top: 1rem;
    width: 100%;
`,
)

const StyledBadge = styled(Box)<{ isOnTop: boolean }>(
  ({ isOnTop }) => `
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    z-index: ${isOnTop ? 30 : 0};
    cursor: pointer;
    border-radius: 999rem;
    background: ${isOnTop ? 'white' : 'transparent'};
    gap: 0.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    box-shadow: ${
      isOnTop
        ? 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px'
        : 'transparent'
    };
    white-space: nowrap;

    border: ${isOnTop ? '1px solid rgb(229, 231, 235)' : 'transparent'};

    &:hover {
      background: rgb(249, 250, 251);
    }
`,
)

const StyledButtons = styled(Box)<{ isOnTop: boolean }>(
  ({ isOnTop }) => `
  flex: 1 1 100%;
  display: ${isOnTop ? 'none' : 'flex'};
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
  title?: string
  description?: string
  images: Picture[]
  onImageClick: (image: Picture) => void
  children?: React.ReactNode
}

const GallerySection: React.FC<GallerySectionProps> = ({
  title,
  description,
  images,
  onImageClick,
  children,
}) => {
  const topOfSectionRef = useRef<HTMLDivElement>()

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
    <Box
      pb={3}
      pt={2}
      textAlign="center"
      ref={topOfSectionRef}
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <StyledStickyHeader isOnTop={isOnTop} ref={titleRef}>
        <StyledButtons isOnTop={isOnTop}></StyledButtons>
        <StyledBadge isOnTop={isOnTop}>
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
        <StyledButtons isOnTop={isOnTop} justifyContent="flex-end">
          {children}
        </StyledButtons>
      </StyledStickyHeader>

      <Box pb={2} />
      {description && <Typography variant="body1">{description}</Typography>}
      <Masonry columns={3} spacing={2}>
        {images.map((image, index) => (
          <StyledImageContainer
            key={image.url}
            onClick={() => onImageClick(image)}
          >
            <StyledImage
              src={`${image.url}?w=162&auto=format`}
              srcSet={`${image.url}?w=162&auto=format&dpr=2 2x`}
              alt={image.alt}
              loading="lazy"
            />
            <StyledOverlay>
              <StyledArrowsPointingOutIcon />
            </StyledOverlay>
          </StyledImageContainer>
        ))}
      </Masonry>
    </Box>
  )
}

export default GallerySection
