/* eslint-disable i18next/no-literal-string */
import { useParams } from 'react-router-dom'
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

import Header from '../molecules/Header'
import Button from '../atoms/Button'
import FixedHeader from '../molecules/FixedHeader'
import Page from '~src/components/organisms/Page'
import EventHero from '~src/features/event/components/EventHero'
import EventType from '~src/features/event/types/EventType'
import Event from '~src/features/event/types/Event'
import { useAppSelector } from '~src/hooks/redux'
import { getEventByUrl } from '~src/features/event/event.slice'
import GallerySection from '~src/features/gallery/components/GallerySection'
import GalleryDownloadButton from '~src/features/gallery/components/GalleryDownloadButton'
import { useState } from 'react'
import Picture from '~src/types/gallery/Picture'
import usePopup from '~src/hooks/usePopup'

import {
  getCurrentGallery,
  getFavoriteImages,
  getGalleryById,
} from '~src/features/gallery/gallery.slice'
import DesktopImagePopup from '~src/features/gallery/components/DesktopImagePopup'
import BackButton from '~src/components/molecules/BackButton'
import { getCurrentUser } from '~src/features/auth/auth.slice'
import UserMenu from '~src/features/user/components/UserMenu'

const StyledTypography = styled(Typography)`
  color: rgb(107, 114, 128);
  line-height: 2rem;
  font-size: 1.125rem;
`

const EventView = () => {
  const { token } = useParams()

  const event = useAppSelector(state => getEventByUrl(state, token ?? ''))

  const [imageDisplayed, setImageDisplayed] = useState<Picture | undefined>()

  const favoritesPopup = usePopup()

  const gallery = useAppSelector(state =>
    getGalleryById(state, event?.galleryId),
  )

  const favoriteImages = useAppSelector(state =>
    getFavoriteImages(state, event.galleryId),
  )

  const user = useAppSelector(getCurrentUser)

  if (!gallery) return <></>

  return (
    <Page>
      <FixedHeader>
        <Header>
          <div className="self-stretch flex-1 flex items-center max-w-screen-2xl m-auto px-10 gap-3">
            {user && <BackButton url="/event" />}
            <div className="flex-1" />
            <Button.Primary onClick={favoritesPopup.open}>
              Favorites
            </Button.Primary>
            <UserMenu />
          </div>
        </Header>
      </FixedHeader>
      <EventHero event={event} />
      {gallery.groups.map(group => (
        <div className="max-w-screen-2xl m-auto px-10 mb-24" key={group.title}>
          <GallerySection
            galleryGroup={group}
            onImageClick={setImageDisplayed}
            columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
          >
            <GalleryDownloadButton galleryGroup={group} />
          </GallerySection>
        </div>
      ))}
      <DesktopImagePopup
        galleryId={event.galleryId}
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
    </Page>
  )
}

export default EventView
