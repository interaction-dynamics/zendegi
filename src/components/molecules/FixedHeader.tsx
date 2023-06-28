import { useState } from 'react'
import classNames from 'classnames'

import useEventListener from '~src/hooks/useEventListener'

export interface FixedHeaderProps {
  children?: React.ReactNode
  defaultElevated?: boolean
}

const FixedHeader: React.FC<FixedHeaderProps> = ({
  children,
  defaultElevated = false,
}) => {
  const [elevated, setElevated] = useState<boolean>(defaultElevated)

  useEventListener('scroll', () => {
    setElevated(window.scrollY > 10)
  })

  return (
    <>
      <div
        className={classNames(
          'transition fixed top-0 left-0 right-0 z-50 bg-white',
          {
            shadow: elevated,
          },
        )}
      >
        {children}
      </div>
      <div className="h-20" />
    </>
  )
}

export default FixedHeader
