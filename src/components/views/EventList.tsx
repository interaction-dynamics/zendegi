/* eslint-disable i18next/no-literal-string */
import { ChevronRightIcon } from '@heroicons/react/20/solid'

import MaxWidthContainer from '~src/components/atoms/MaxWidthContainer'
import Header from '../molecules/Header'
import EventListSection from '~src/features/event/components/EventListSection'
import Event from '~src/features/event/types/Event'
import EventPreview from '~src/features/event/components/EventPreview'
import EventType from '~src/features/event/types/EventType'
import Button from '~src/components/atoms/Button'
import FixedHeader from '../molecules/FixedHeader'
import Page from '~src/components/organisms/Page'
import { useAppSelector } from '~src/hooks/redux'
import { getAllEvents } from '~src/features/event/event.slice'
import Avatar from '../../features/user/components/Avatar'
import { getCurrentUser } from '~src/features/auth/auth.slice'

const EventList = () => {
  const events = useAppSelector(getAllEvents)

  const user = useAppSelector(getCurrentUser)

  return (
    <Page>
      <FixedHeader>
        <Header>
          <div className="self-stretch flex-1 flex items-center max-w-screen-2xl m-auto px-10 gap-3">
            <h1 className="font-bold text-xl text-primary-500">Events</h1>
            <div className="flex-1" />

            <Button.Primary>New Event</Button.Primary>
            <Avatar email={user?.email} />
          </div>
        </Header>
      </FixedHeader>
      <div className="max-w-screen-2xl m-auto px-10">
        <div className="mt-10">
          <EventListSection>
            {events.map(event => (
              <EventPreview event={event} key={event.id} />
            ))}
          </EventListSection>
        </div>
      </div>
    </Page>
  )
}

export default EventList
