import React from 'react'
import {
  Container,
  Box,
  Dialog,
  DialogContent,
  Fade,
  Slide,
  Stack,
  Typography,
  styled,
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'

import GallerySection from '~src/features/gallery/components/GallerySection'
import DesktopGalleryHeader from '~src/features/gallery/components/DesktopGalleryHeader'
import Picture from '~src/types/gallery/Picture'
import { useState } from 'react'
import DesktopImagePopup from '~src/features/gallery/components/DesktopImagePopup'
import EventHero from '~src/features/event/components/EventHero'
import usePopup from '~src/hooks/usePopup'
import GalleryDownloadButton from '~src/features/gallery/components/GalleryDownloadButton'
import { useAppSelector } from '~src/hooks/redux'
import {
  getCurrentGallery,
  getFavoriteImages,
} from '~src/features/gallery/gallery.slice'

const StyledTypography = styled(Typography)`
  color: rgb(107, 114, 128);
  line-height: 2rem;
  font-size: 1.125rem;
`

/* eslint-disable i18next/no-literal-string */
const EventGallery: React.FC = () => {
  const [imageDisplayed, setImageDisplayed] = useState<Picture | undefined>()

  const favoritesPopup = usePopup()

  const gallery = useAppSelector(getCurrentGallery)

  const favoriteImages = useAppSelector(getFavoriteImages)

  if (!gallery) return <></>

  return (
    <Box>
      <DesktopGalleryHeader onOpenFavorites={favoritesPopup.open} />
      <EventHero event={gallery} />
      <Stack gap={4}>
        {gallery.groups.map(group => (
          <Container maxWidth="xl" key={group.title}>
            <GallerySection
              galleryGroup={group}
              onImageClick={setImageDisplayed}
              columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
            >
              <GalleryDownloadButton galleryGroup={group} />
            </GallerySection>
          </Container>
        ))}
      </Stack>
      <DesktopImagePopup
        image={imageDisplayed ?? { url: '', filename: '' }}
        open={Boolean(imageDisplayed)}
        onClose={() => setImageDisplayed(undefined)}
      />
      <Dialog
        open={favoritesPopup.isOpen}
        onClose={favoritesPopup.close}
        maxWidth="lg"
        scroll="body"
      >
        <DialogContent>
          <Box width={1000}>
            <GallerySection
              galleryGroup={{
                title: 'Favorites',
                images: favoriteImages,
              }}
              onImageClick={setImageDisplayed}
              columns={{ xs: 1, sm: 2, md: 1, lg: 2 }}
            >
              <StyledTypography variant="body1" paragraph>
                No favorites yet. Like photos to add them to your favorites. You
                will be able to download them all together at the end.
              </StyledTypography>

              {/* <Button
                disableRipple
                variant="contained"
                color="primary"
                sx={{ py: 1, px: 2 }}
              >
                Download all 234 images
                <CloudArrowDownIcon
                  style={{
                    stroke: 'white',
                    width: '1.5rem',
                    height: '1.5rem',
                    marginLeft: '0.6rem',
                  }}
                />
              </Button> */}
            </GallerySection>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  )
}

export default EventGallery
