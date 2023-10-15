'use client'
import { useRouter, usePathname } from 'next/navigation'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import Item from '@/components/molecules/Item'

export interface TodoListItemProps {
  remainingTasks?: number
  totalTasks?: number
}

export default function TodoListItem({
  remainingTasks,
  totalTasks,
}: TodoListItemProps) {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <Item
      title="TodoList"
      icon={<CheckCircleIcon />}
      description={
        totalTasks ? `Remaining tasks: ${remainingTasks}/${totalTasks}` : ''
      }
      onClick={() => router.push(`${pathname}/todo`, { scroll })}
    />
  )
}
