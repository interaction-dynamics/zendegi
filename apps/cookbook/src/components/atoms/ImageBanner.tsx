'use client'
import useEventListener from '@/hooks/useEventListener'
import Image from 'next/image'
import { useState } from 'react'

interface ImageBannerProps {
  imageUrl: string
  alt: string
  loading?: boolean
}

export default function ImageBanner({ imageUrl, alt }: ImageBannerProps) {
  const [shift, setShift] = useState(0)

  useEventListener('scroll', () => {
    setShift(-window.scrollY / 3)
  })

  return (
    <div className="h-96 relative overflow-hidden">
      <div className="h-96 w-full fixed z-0 overflow-hidden">
        <Image
          src={imageUrl}
          alt={alt}
          height={200}
          width={1000}
          className=" w-full object-cover relative"
          style={{ top: shift }}
        />
      </div>
    </div>
  )
}
