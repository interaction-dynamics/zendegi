import MaxWidthContainer from '@/components/atoms/MaxWidthContainer'

export interface PageProps {
  navigation?: React.ReactNode
  children: React.ReactNode
}

export default function Page({ navigation, children }: PageProps) {
  return (
    <div className="min-h-screen flex flex-col items-stretch">
      <div className="flex-1 w-full">
        {navigation}
        <MaxWidthContainer className="max-w-screen-md flex-1 py-5">
          {children}
        </MaxWidthContainer>
      </div>
    </div>
  )
}
