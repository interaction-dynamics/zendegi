'use client'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import va from '@vercel/analytics'

import { ArrowLeftIcon, CloudArrowDownIcon } from '@heroicons/react/24/outline'

import Picture from '../types/Picture'

const IconButton: React.FC<{
  children: React.ReactNode
  onClick: (event: React.SyntheticEvent) => void
}> = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="text-white hover:text-primary-500 p-1 cursor-pointer"
  >
    {children}
  </button>
)

export interface OneImageVisualizerProps {
  image: Picture | undefined
  onClose: () => void
  onBack: () => void
}

const OneImageVisualizer: React.FC<OneImageVisualizerProps> = ({
  image,
  onClose,
  onBack,
}) => {
  const { eventSlug } = useParams()

  const download = async () => {
    va.track('image.download', {
      event: eventSlug,
      image: image?.slug ?? '',
    })

    const imageData = await fetch(image?.url ?? '')
    const imageBlog = await imageData.blob()
    const imageURL = URL.createObjectURL(imageBlog)

    const link = document.createElement('a')
    link.href = imageURL
    link.download = image?.filename ?? 'no name'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div
      className="w-full h-full flex flex-col items-stretch justify-center focus:border-0 focus:outline-none bg-black/[.9]"
      role="button"
      tabIndex={0}
      onClick={onClose}
    >
      <div className="flex-[0_0_auto] flex items-center justify-center px-4 py-1">
        <div className="flex-1 flex justify-start">
          <IconButton
            onClick={event => {
              event.stopPropagation()
              event.preventDefault()
              onBack()
            }}
          >
            <ArrowLeftIcon className="stroke-current h-9 w-9" />
          </IconButton>
        </div>
        <div
          className="flex items-center justify-center p-1 gap-2"
          onClick={event => event.stopPropagation()}
        >
          <button
            onClick={download}
            className="text-white hover:text-primary-500 p-1 cursor-pointer"
          >
            <CloudArrowDownIcon className="stroke-current h-9 w-9" />
          </button>
        </div>
        <div className="flex-1 justify-end" />
      </div>
      <div className="flex-[0_1_100%] flex items-center justify-center relative">
        <div className="absolute w-full h-full overflow-hidden flex items-center justify-center p-5">
          {image && (
            <Image
              width={1000}
              height={1000}
              style={{ height: 'auto', width: 'auto' }}
              className="rounded-lg max-w-full max-h-full"
              src={image.url}
              alt={image.filename}
              onClick={event => {
                event.stopPropagation()
              }}
            />
          )}
        </div>
      </div>
      <div className="h-10" />
    </div>
  )
}

export default OneImageVisualizer
