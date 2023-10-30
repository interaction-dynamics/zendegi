export interface SectionProps {
  children: React.ReactNode
}

function Section({ children }: SectionProps) {
  return <section>{children}</section>
}

interface SectionTitleProps {
  title: string
  children?: React.ReactNode
}

Section.Title = function SectionTitle({ title, children }: SectionTitleProps) {
  return (
    <h2 className="flex items-center text-2xl lg:text-3xl font-bold text-primary-500 pb-5">
      {title}
      <div className="flex-1 flex justify-end">{children}</div>
    </h2>
  )
}

Section.SubTitle = function SectionSubTitle({
  title,
  children,
}: SectionTitleProps) {
  return (
    <h3 className="text-gray-900 font-semibold text-lg pb-1">
      {title}
      <div className="flex-1 flex justify-end">{children}</div>
    </h3>
  )
}

interface SectionActionProps {
  label: React.ReactNode
  icon?: React.ReactNode
  onClick: () => void
}

Section.Action = function SectionAction({
  label,
  icon,
  onClick,
}: SectionActionProps) {
  return (
    <button
      className="flex items-center text-gray-400 hover:text-primary-500 cursor-pointer"
      onClick={onClick}
    >
      <div className="ltr:mr-2 rtl:ml-2 font-normal text-xs">{label}</div>
      <div>{icon}</div>
    </button>
  )
}

export default Section
