'use client'
import { useRouter, usePathname } from 'next/navigation'
import { UserGroupIcon } from '@heroicons/react/24/outline'
import Item from '@/components/molecules/Item'
import AvatarList from '@/features/users/components/AvatarList'

export interface MembersItemProps {
  shortnames: string[]
}

export default function MembersItem({ shortnames }: MembersItemProps) {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <Item
      title="Participants"
      icon={<UserGroupIcon />}
      description="62 guests"
      extra={<AvatarList shortnames={shortnames} />}
      onClick={() => router.push(`${pathname}/members`, { scroll })}
    />
  )
}
