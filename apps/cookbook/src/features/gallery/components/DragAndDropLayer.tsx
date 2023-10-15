'use client'
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import React, { useRef, useState } from 'react'
import { Transition } from '@headlessui/react'

import Event from '@/features/events/types/Event'
import useEventListener from '@/hooks/useEventListener'
import usePopup from '@/hooks/usePopup'
import Modal from '@/components/atoms/Modal'

export interface DragAndDropLayerProps {
  event: Event
}

enum FileUploadStatus {
  IN_PROGRESS = 'in-progress',
  COMPLETED = 'completed',
  FAILED = 'failed',
}

const isImage = (file: File) => file.type.startsWith('image/')

/**
 * https://medium.com/geekculture/how-to-upload-file-to-aws-s3-using-pre-signed-url-in-nextjs-1f70a955389e
 */
const DragAndDropLayer: React.FC<DragAndDropLayerProps> = ({ event }) => {
  const [isDragging, setDragging] = useState(false)

  useEventListener('dragover', event => {
    console.log('enter')
    setDragging(true)
    event.stopPropagation()
    event.preventDefault()
  })

  const onDragLeave = () => {
    console.log('leave')

    setDragging(false)
  }

  const uploadModal = usePopup()
  const [uploadingFiles, setUploadingFiles] = useState<
    Record<string, { filename: string; status: FileUploadStatus }>
  >({})

  const realtimeUploadindFiles = useRef<
    Record<string, { filename: string; status: FileUploadStatus }>
  >({})

  const uploadOneFile = async (file: File, index: number) => {
    const filename = file.name
    const fileType = file.type

    if (!isImage(file)) {
      return
    }

    realtimeUploadindFiles.current = {
      ...realtimeUploadindFiles.current,
      [`${index}`]: {
        filename: file.name,
        status: FileUploadStatus.IN_PROGRESS,
      },
    }
    setUploadingFiles({
      ...realtimeUploadindFiles.current,
      [`${index}`]: {
        filename: file.name,
        status: FileUploadStatus.IN_PROGRESS,
      },
    })
    setDragging(false)
    uploadModal.open()

    const res = await fetch(`/api/upload`, {
      method: 'POST',
      body: JSON.stringify({ filename, fileType, eventSlug: event.slug }),
    })
    const { signedUrl, imageUrl } = await res.json()

    // console.log('signedUrl', signedUrl)

    const upload = await fetch(signedUrl, {
      method: 'PUT',
      body: file,
      headers: { 'Content-Type': fileType },
    })

    if (upload.ok) {
      console.log('Uploaded successfully!')

      const response = await fetch('/api/upload/finalize', {
        method: 'POST',
        body: JSON.stringify({
          eventId: event.id,
          url: imageUrl,
          filename,
        }),
        headers: { 'Content-Type': fileType },
      })

      const { errors } = await response.json()

      if (!errors) {
        realtimeUploadindFiles.current = {
          ...realtimeUploadindFiles.current,
          [`${index}`]: {
            filename: file.name,
            status: FileUploadStatus.COMPLETED,
          },
        }
        setUploadingFiles({
          ...realtimeUploadindFiles.current,
          [`${index}`]: {
            filename: file.name,
            status: FileUploadStatus.COMPLETED,
          },
        })
        return
      }
    }
    realtimeUploadindFiles.current = {
      ...realtimeUploadindFiles.current,
      [`${index}`]: {
        filename: file.name,
        status: FileUploadStatus.FAILED,
      },
    }
    setUploadingFiles({
      ...realtimeUploadindFiles.current,
      [`${index}`]: {
        filename: file.name,
        status: FileUploadStatus.FAILED,
      },
    })
    console.error('Upload failed.')
  }

  const onDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation()
    const files = [...event.dataTransfer.files]

    await Promise.all(files.map(uploadOneFile))
  }

  return (
    <>
      <Transition
        show={isDragging}
        enter="transition-opacity duration-75 relative z-50"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        tabIndex={0}
      >
        <div
          className="fixed inset-0 bg-black/[.7] z-50 flex flex-col items-center justify-center"
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          <ArrowDownTrayIcon className="h-10 w-10 text-white" />
          <div className="max-w-sm text-white pt-3">Upload images there</div>
        </div>
      </Transition>
      <Modal onClose={uploadModal.close} open={uploadModal.isOpen}>
        Upload in progress
        <ul>
          {Object.entries(uploadingFiles).map(
            ([index, { filename, status }]) => (
              <li key={index} className="text-black">
                {filename}: {status}
              </li>
            ),
          )}
        </ul>
      </Modal>
    </>
  )
}

export default DragAndDropLayer
