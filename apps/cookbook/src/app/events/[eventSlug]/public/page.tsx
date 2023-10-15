import { PhotoIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

import Page from '@/components/atoms/Page'

import Item from '../../../../components/molecules/Item'
import MembersItemSafe from './MembersItemSafe'
import List from '@/components/molecules/List'
import TodoListItemData from './TodoListItemData'
import EventHeaderSafe from './EventHeaderSafe'
import GettingThereSafe from './GettingThereSafe'
import DescriptionItemSafe from './DescriptionItemSafe'
import BannerSafe from './BannerSafe'

interface EventProps {
  params: {
    eventSlug: string
  }
}

export default async function EventPublic({ params }: EventProps) {
  return (
    <Page>
      <div className="py-5">
        <BannerSafe params={params} />
        <div className="pt-3">
          <List>
            <EventHeaderSafe params={params} />
            <GettingThereSafe params={params} />
            <DescriptionItemSafe params={params} />
            <MembersItemSafe />
            <TodoListItemData />
            <Item
              title="Expenses"
              icon={<CurrencyDollarIcon />}
              description="200$ spent"
            />
            <Item
              title="Pictures"
              icon={<PhotoIcon />}
              description="20 media files"
            />
          </List>
        </div>
      </div>
    </Page>
  )
}
