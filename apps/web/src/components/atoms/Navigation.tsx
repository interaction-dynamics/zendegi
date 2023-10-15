'use client'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/navigation'

export interface NavigationProps {
  backUrl?: string
  children: React.ReactNode
}

export default function Navigation({ backUrl, children }: NavigationProps) {
  const router = useRouter()

  return (
    <div className="pb-10">
      <div className="border-b-2 p-2 fixed top-0 left-0 right-0">
        <div className="flex items-center">
          <button className="p-2 mr-2" onClick={() => router.back()}>
            <ArrowLeftIcon className="h-6 w-6" />
          </button>
          <div className="text-xl font-semibold">{children}</div>
        </div>
      </div>
    </div>
  )
}
