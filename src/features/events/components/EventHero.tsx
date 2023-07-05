'use client'

import { Box, Typography, styled } from '@mui/material'
import Image from 'next/image'

import Event from '@/features/events/types/Event'
import useFormatDate from '@/hooks/useFormatDate'

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

const dateClassName = ''

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
  const { title, location } = event

  const [spouseA, spouseB] = title
    .replace(/wedding/gi, '')
    .split('&')
    .map(t => t.trim())

  const formatDate = useFormatDate()

  return (
    <div className="pt-24 mb-24">
      <div className="text-center leading-[4rem] text-primary-500 text-5xl font-curve">
        {spouseB ? (
          <>
            <h1 className="inline ">Civil Wedding</h1>
            <br />
            <h1 className="inline">{spouseA}</h1>
            <h1 className="inline">
              {` `}&{` `}
            </h1>
            <h1 className="inline">{spouseB}</h1>
          </>
        ) : (
          <h1 className="inline">{title}</h1>
        )}
      </div>
      <div className="pt-4 text-center text-primary-500 text-4xl font-curve leading-[3rem]">
        <h2>
          {formatDate(event.date, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </h2>
        <h2>{location}</h2>
      </div>
    </div>
  )
}

export default EventHero
