export interface EventListSectionProps {
  children: React.ReactNode
}

const EventListSection: React.FC<EventListSectionProps> = ({ children }) => {
  return (
    <div className="grid gap-x-4 md:gap-x-6 gap-y-8 sm:gap-y-10 grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 5xl:grid-cols-4">
      {children}
    </div>
  )
}

export default EventListSection
