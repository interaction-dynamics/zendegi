'use client'
import { useRouter } from 'next/navigation'

import OneImageVisualizer from '@/features/gallery/components/OneImageVisualizer'
import Picture from '@/features/gallery/types/Picture'

interface OneImageContainerProps {
  image: Picture
}

const OneImageContainer: React.FC<OneImageContainerProps> = ({ image }) => {
  const router = useRouter()

  return (
    <OneImageVisualizer
      image={image}
      onClose={() => {}}
      onBack={() => {
        console.log('back')
        router.back()
      }}
    />
  )
}

export default OneImageContainer
