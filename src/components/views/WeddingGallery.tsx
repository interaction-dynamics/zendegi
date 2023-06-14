import React from 'react'
import {
  Container,
  Typography,
  Modal,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  Fade,
  Slide,
  Button,
  IconButton,
  styled,
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import { CloudArrowDownIcon } from '@heroicons/react/24/outline'
import { Masonry } from '@mui/lab'

import GallerySection from '~src/features/gallery/components/GallerySection'
import DesktopGalleryHeader from '~src/features/gallery/components/DesktopGalleryHeader'
import Picture from '~src/types/Picture'
import { useState } from 'react'
import DesktopImagePopup from '~src/features/gallery/components/DesktopImagePopup'
import WeddingHero from '~src/features/wedding/components/WeddingHero'
import usePopup from '~src/hooks/usePopup'

const images = [
  {
    url: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    filename: 'photo.jpg',
    title: 'Fern',
  },
  {
    url: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
    filename: 'photo.jpg',
    title: 'Snacks',
  },
  {
    url: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    filename: 'photo.jpg',
    title: 'Mushrooms',
  },
  {
    url: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
    filename: 'photo.jpg',
    title: 'Tower',
  },
  {
    url: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    filename: 'photo.jpg',
    title: 'Sea star',
  },
  {
    url: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    filename: 'photo.jpg',
    title: 'Honey',
  },
  {
    url: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    filename: 'photo.jpg',
    title: 'Basketball',
  },
  {
    url: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    filename: 'photo.jpg',
    title: 'Breakfast',
  },
  {
    url: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d',
    filename: 'photo.jpg',
    title: 'Tree',
  },
  {
    url: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    filename: 'photo.jpg',
    title: 'Burger',
  },
  {
    url: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    filename: 'photo.jpg',
    title: 'Camera',
  },
  {
    url: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    filename: 'photo.jpg',
    title: 'Coffee',
  },
  {
    url: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e',
    filename: 'photo.jpg',
    title: 'Camping Car',
  },
  {
    url: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    filename: 'photo.jpg',
    title: 'Hats',
  },
  {
    url: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    filename: 'photo.jpg',
    title: 'Tomato basil',
  },
  {
    url: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7',
    filename: 'photo.jpg',
    title: 'Mountain',
  },
  {
    url: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    filename: 'photo.jpg',
    title: 'Bike',
  },
]

const StyledButton = styled(IconButton)(
  ({ theme }) => `
  svg {
    transition: 0.2s linear all;
    stroke: rgb(156, 163, 175);
    width; 2rem;
    height: 2rem;
  }

  &:hover {
    svg {
      stroke: ${theme.palette.primary.main};
    }
  }
`,
)

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>,
) {
  return (
    <Fade in>
      <Slide direction="left" ref={ref} {...props} />
    </Fade>
  )
})

/* eslint-disable i18next/no-literal-string */
const WeddingGallery: React.FC = () => {
  const [imageDisplayed, setImageDisplayed] = useState<Picture | undefined>()

  const favoritesPopup = usePopup()

  return (
    <Box>
      <DesktopGalleryHeader onOpenFavorites={favoritesPopup.open} />
      <WeddingHero
        title="Paria Majidi & Thibault Friedrich"
        date="2023 June 10th"
        location="Montréal"
        imageUrl={
          'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f'
        }
      />
      <Container maxWidth="lg">
        <GallerySection
          title="Notary"
          images={images}
          onImageClick={setImageDisplayed}
        >
          <StyledButton>
            <CloudArrowDownIcon />
          </StyledButton>
        </GallerySection>
      </Container>
      <Container maxWidth="lg">
        <GallerySection
          title="Pointe-Saint claire"
          images={images}
          onImageClick={setImageDisplayed}
        >
          <StyledButton>
            <CloudArrowDownIcon />
          </StyledButton>
        </GallerySection>
      </Container>
      <DesktopImagePopup
        image={imageDisplayed ?? { url: '', filename: '' }}
        open={Boolean(imageDisplayed)}
        onClose={() => setImageDisplayed(undefined)}
      />
      <Dialog
        open={favoritesPopup.isOpen}
        onClose={favoritesPopup.close}
        TransitionComponent={Transition}
        maxWidth="lg"
        scroll="body"
      >
        <DialogContent>
          <Box width={1000}>
            <GallerySection
              title="Favorites"
              images={images}
              onImageClick={setImageDisplayed}
            >
              <Button
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
              </Button>
            </GallerySection>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  )
}

export default WeddingGallery
