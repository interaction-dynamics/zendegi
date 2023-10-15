'use client'
import { MapPinIcon } from '@heroicons/react/24/outline'
import Item from '@/components/molecules/Item'
import { createMapUrl } from '@/services/googleMaps'

export interface GettingThereItemProps {
  location?: string
}

export default function GettingThereItem({ location }: GettingThereItemProps) {
  const url = createMapUrl(location ?? '')

  return (
    <Item
      title="Getting there"
      icon={<MapPinIcon />}
      description={location}
      onClick={() => window.open(url, '_blank', 'noreferrer')}
    />
  )
}
