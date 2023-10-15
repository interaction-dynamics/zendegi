import { Suspense } from 'react'
import useShortnames from '@/features/users/hooks/useShortnames'
import MembersItem from '@/features/events/components/MembersItem'

function MembersItemUnsafe() {
  const users = [
    { name: 'Eduardo', id: 'foo' },
    { name: 'Luisa', id: 'bar' },
  ]
  const shortnames = useShortnames(users)

  return <MembersItem shortnames={shortnames} />
}

export default function MembersItemSafe() {
  return (
    <Suspense fallback={<MembersItem shortnames={['', '', '', '']} />}>
      <MembersItemUnsafe />
    </Suspense>
  )
}
