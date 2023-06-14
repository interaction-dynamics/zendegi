/* eslint-disable i18next/no-literal-string */
import { HeartIcon } from '@heroicons/react/24/outline'
import { styled, Container, Box, Badge, useTheme } from '@mui/material'

import Header from '~src/components/molecules/Header'

const StyledBadge = styled(Badge)(
  ({ theme }) => `
  & .MuiBadge-badge {
    top: 27px;
    right: 5px;
    background-color: ${theme.palette.primary.light};
    color: white;
  }
`,
)

export interface DesktopGalleryHeaderProps {
  onOpenFavorites: () => void
}

const DesktopGalleryHeader: React.FC<DesktopGalleryHeaderProps> = ({
  onOpenFavorites,
}) => {
  const theme = useTheme()

  return (
    <Header>
      <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ flex: '1 1 100%' }}></Box>
        <Box sx={{ flex: '0 0 auto' }}>
          <StyledBadge badgeContent={2}>
            <HeartIcon
              onClick={onOpenFavorites}
              style={{
                stroke: theme.palette.primary.main,
                width: '2rem',
                height: '2rem',
                cursor: 'pointer',
              }}
            />
          </StyledBadge>
        </Box>
      </Container>
    </Header>
  )
}

export default DesktopGalleryHeader
