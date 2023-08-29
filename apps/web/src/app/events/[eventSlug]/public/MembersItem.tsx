import { Suspense } from 'react'
import { UserGroupIcon } from '@heroicons/react/24/outline'
import Avatars from '@/features/users/components/Avatars'
import Item from './Item'

function MembersItemUnsafe() {
  return (
    <Item
      title="Participants"
      icon={<UserGroupIcon />}
      description="62 guests"
      extra={<Avatars shortnames={['Eduardo', 'Mariana', 'Rafael', 'Luis']} />}
    />
  )
}

export default function MembersItem() {
  return (
    <Suspense
      fallback={
        <Item
          title="Participants"
          icon={<UserGroupIcon />}
          description="62 guests"
          extra={
            <div className="flex -space-x-2 overflow-hidden ">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white bg-gray-300"></span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white bg-gray-300"></span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white bg-gray-300"></span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white bg-gray-300"></span>
            </div>
          }
        />
      }
    >
      <MembersItemUnsafe />
    </Suspense>
  )
}
