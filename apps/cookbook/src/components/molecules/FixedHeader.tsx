'use client'
import { useRef, useState } from 'react'

import useEventListener from '@/hooks/useEventListener'
import Card from '../atoms/Card'
import classNames from 'classnames'

export interface FixedHeaderProps {
  children: React.ReactNode
}

export default function FixedHeader({ children }) {
  const ref = useRef<HTMLDivElement>()

  const [fixed, setFixed] = useState(false)

  useEventListener('scroll', () => {
    setFixed(ref.current && ref.current.getBoundingClientRect().top === 0)
  })

  return (
    <Card.Section
      className={classNames(
        `py-0 lg:py-0 sticky top-0 z-50 backdrop-blur-lg`,
        fixed ? 'border-b' : 'border-b-transparent',
      )}
    >
      <div className="py-2" ref={ref}>
        {children}
      </div>
    </Card.Section>
  )
}
