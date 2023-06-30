import { Box, Typography, styled } from '@mui/material'
import Image from 'next/image'

import Event from '@/features/events/types/Event'

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

export interface EventHeroProps {
  event: Event
}

const EventHero: React.FC<EventHeroProps> = ({ event }) => {
  const { title, location, imageUrl } = event

  const [spouseA, spouseB] = title.split('&').map(t => t.trim())

  const date = new Date(event.date)

  return (
    <div className='pt-24 mb-24'>
      {imageUrl && (
        <StyledBox mb={5} sx={{ display: 'flex', justifyContent: 'center' }}>
          <StyledHeroImage>
            <Image src={imageUrl} alt={title} />
            <StyledShadowBox />
          </StyledHeroImage>
        </StyledBox>
      )}

      <StyledBox>
        {spouseB ? (
          <>
            <StyledTitle variant='h1' color='primary'>
              {spouseA}
            </StyledTitle>
            <StyledTitle
              variant='h1'
              color='primary'
              display={{ xs: 'block', md: 'inline' }}
            >
              {` `}&{` `}
            </StyledTitle>
            <StyledTitle variant='h1' color='primary'>
              {spouseB}
            </StyledTitle>
          </>
        ) : (
          <StyledTitle variant='h1' color='primary'>
            {title}
          </StyledTitle>
        )}
      </StyledBox>
      <StyledBox pt={2}>
        <StyledDate variant='h2' color='primary'>
          {new Intl.DateTimeFormat('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }).format(date)}
        </StyledDate>
      </StyledBox>
      <StyledBox pt={2}>
        <StyledDate variant='h2' color='primary'>
          {location}
        </StyledDate>
      </StyledBox>
    </div>
  )
}

export default EventHero
