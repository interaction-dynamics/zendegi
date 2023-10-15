import { Suspense } from 'react'
import TodoListItem from '@/features/events/components/TodoListItem'

function TodoListItemUnsafe() {
  return <TodoListItem remainingTasks={10} totalTasks={20} />
}

export default function TodoListItemData() {
  return (
    <Suspense fallback={<TodoListItem />}>
      <TodoListItemUnsafe />
    </Suspense>
  )
}
