/* eslint-disable i18next/no-literal-string */
import { Container, Box, useTheme, Button } from '@mui/material'
import { HeartIcon } from '@heroicons/react/24/solid'

import Header from '~src/components/molecules/Header'

export interface DesktopGalleryHeaderProps {
  onOpenFavorites: () => void
}

const DesktopGalleryHeader: React.FC<DesktopGalleryHeaderProps> = ({
  onOpenFavorites,
}) => {
  const theme = useTheme()

  return (
    <Header>
      <Container maxWidth="xl" sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ flex: '1 1 100%' }}></Box>
        <Box sx={{ flex: '0 0 auto' }}>
          <Button
            disableRipple
            variant="contained"
            color="primary"
            sx={{ py: 1, px: 2 }}
            onClick={onOpenFavorites}
          >
            Favoris
            <HeartIcon
              style={{
                stroke: 'white',
                width: '1.5rem',
                height: '1.5rem',
                marginLeft: '0.6rem',
              }}
            />
          </Button>
          {/* <StyledBadge badgeContent={2}>
            <HeartIcon
              onClick={onOpenFavorites}
              style={{
                stroke: theme.palette.primary.main,
                width: '2rem',
                height: '2rem',
                cursor: 'pointer',
              }}
            />
          </StyledBadge> */}
        </Box>
      </Container>
    </Header>
  )
}

export default DesktopGalleryHeader
