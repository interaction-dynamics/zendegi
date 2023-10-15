'use client'

import Event from '@/features/events/types/Event'
import useFormatDate from '@/hooks/useFormatDate'

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
