import Page from '@/components/atoms/Page'
import Navigation from '@/components/atoms/Navigation'
import Task from '@/features/events/components/Task'

export default function TodoPage() {
  return (
    <Page navigation={<Navigation>Todo list</Navigation>}>
      <div className="pt-2 px-2">
        <Task assignee="John Doe">Buy milk</Task>
        <Task assignee="John Doe">Buy milk</Task>
        <Task checkBoxClassName="border-dashed">
          <span className="text-gray-300">create new task</span>
        </Task>
        <div className="pb-20" />
        <Task assignee="John Doe" checked>
          Buy milk
        </Task>
      </div>
    </Page>
  )
}
