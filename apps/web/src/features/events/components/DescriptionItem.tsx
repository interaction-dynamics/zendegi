'use client'
import { InformationCircleIcon } from '@heroicons/react/24/outline'

import Item from '@/components/molecules/Item'
import usePopup from '@/hooks/usePopup'
import Popup from '@/components/molecules/Popup'

export interface DescriptionItemProps {
  description?: string
}

const MAX_LENGTH = 30

const shortenDescription = (description: string) =>
  `${description.slice(0, MAX_LENGTH)}...`

export default function DescriptionItem({ description }: DescriptionItemProps) {
  const descriptionPopup = usePopup()

  return (
    <>
      <Item
        title="Message from organizer"
        icon={<InformationCircleIcon />}
        description={
          description.length > MAX_LENGTH ? (
            <>
              {shortenDescription(description)}
              <span className="text-black">More</span>
            </>
          ) : (
            description
          )
        }
        onClick={descriptionPopup.open}
      />
      <Popup {...descriptionPopup}>
        <div>{description}</div>
      </Popup>
    </>
  )
}
