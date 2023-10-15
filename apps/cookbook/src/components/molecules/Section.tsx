export interface SectionProps {
  children: React.ReactNode
}

function Section({ children }: SectionProps) {
  return <section className="pt-10">{children}</section>
}

interface SectionTitleProps {
  title: string
  children?: React.ReactNode
}

Section.Title = function SectionTitle({ title, children }: SectionTitleProps) {
  return (
    <h2 className="flex text-2xl lg:text-3xl font-bold text-primary-500 pb-5">
      {title}
      <div className="flex-1 text-right">{children}</div>
    </h2>
  )
}

export default Section
