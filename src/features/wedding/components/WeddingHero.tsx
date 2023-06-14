import { Box, Typography, styled } from '@mui/material'

const StyledBox = styled(Box)`
  text-align: center;
`

const StyledHeroImage = styled('div')`
  position: relative;
  border-radius: 999rem;
  width: 25rem;
  height: 25rem;

  z-index: 3;
  overflow: hidden;

  img {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
`

const StyledShadowBox = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  border-radius: 999rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
`

const StyledTitle = styled(Typography)`
  font-family: 'Great Vibes';
  font-weight: 100;
  text-align: center;
  display: inline;
  line-break: strict;
`

const StyledDate = styled(Typography)`
  font-family: 'Great Vibes';
  font-weight: 400;
  text-align: center;
  display: inline;
  line-break: strict;
`

export interface WeddingHeroProps {
  title: string
  date?: string
  location?: string
  imageUrl?: string
}

const WeddingHero: React.FC<WeddingHeroProps> = ({
  title,
  date,
  location,
  imageUrl,
}) => {
  const [spouseA, spouseB] = title.split('&').map(t => t.trim())

  return (
    <Box pt={15} mb={6}>
      {imageUrl && (
        <StyledBox mb={5} sx={{ display: 'flex', justifyContent: 'center' }}>
          <StyledHeroImage>
            <img src={imageUrl} alt={title} />
            <StyledShadowBox />
          </StyledHeroImage>
        </StyledBox>
      )}

      <StyledBox>
        {spouseB ? (
          <>
            <StyledTitle variant="h1" color="primary">
              {spouseA}
            </StyledTitle>
            <StyledTitle
              variant="h1"
              color="primary"
              display={{ xs: 'block', md: 'inline' }}
            >
              {` `}&{` `}
            </StyledTitle>
            <StyledTitle variant="h1" color="primary">
              {spouseB}
            </StyledTitle>
          </>
        ) : (
          <StyledTitle variant="h1" color="primary">
            {title}
          </StyledTitle>
        )}
      </StyledBox>
      <StyledBox pt={2}>
        <StyledDate variant="h2" color="primary">
          {date}
        </StyledDate>
      </StyledBox>
      <StyledBox pt={2}>
        <StyledDate variant="h2" color="primary">
          {location}
        </StyledDate>
      </StyledBox>
    </Box>
  )
}

export default WeddingHero
