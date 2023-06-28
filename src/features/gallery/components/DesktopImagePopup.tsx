/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable i18next/no-literal-string */
import { Modal, Box, styled } from '@mui/material'
import {
  ArrowLeftIcon,
  HeartIcon as HeartOutlineIcon,
} from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/solid'

import { isMacLike } from '~/src/utils/platforms/mobile'

import {
  ShareIcon as DefaultShareIcon,
  ArrowUpOnSquareIcon,
  CloudArrowDownIcon,
} from '@heroicons/react/24/outline'

import Picture from '~src/types/gallery/Picture'
import { useAppDispatch, useAppSelector } from '~src/hooks/redux'
import { isFavoriteImage, toggleAddRemoveFavorite } from '../gallery.slice'

interface DesktopImagePopupProps {
  image: Picture
  open: boolean
  onClose: () => void
  galleryId: string
}

const IconButton: React.FC<{
  children: React.ReactNode
  onClick: () => void
}> = ({ children, onClick }) => (
  <button
    className="text-white hover:text-primary-500 p-1 cursor-pointer"
    onClick={onClick}
  >
    {children}
  </button>
)

const StyledIconButton = styled(IconButton)(
  ({ theme }) => `
  svg {
    width: 2rem;
    height: 2rem;
    stroke: white;
    transition: stroke linear 0.2s;
  }

  &:hover {
    svg {
      stroke: ${theme.palette.primary.main};
    }
  }
`,
)

const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledImageContainer = styled(Box)`
  flex: 1 1 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledImage = styled('img')`
  transition: all linear 0.25s;
  border-radius: 0.5rem;
`

const StyledActionButtons = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
`

const StyledActionButtonsInner = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 1rem;
`

const DesktopImagePopup: React.FC<DesktopImagePopupProps> = ({
  image,
  open,
  onClose,
  galleryId,
}) => {
  const isFavorite = useAppSelector(state =>
    isFavoriteImage(state, galleryId, image),
  )
  const dispatch = useAppDispatch()

  const Icon = isFavorite ? HeartIcon : HeartOutlineIcon

  const ShareIcon = isMacLike() ? ArrowUpOnSquareIcon : DefaultShareIcon

  const canShare = typeof navigator.share === 'function'

  const share = async () => {
    try {
      const response = await fetch(image?.url ?? '')
      const data = await response.blob()
      const metadata = {
        type: 'image/jpeg',
      }
      const file = new File([data], 'test.jpg', metadata)

      await navigator.share({
        files: [file],
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <StyledModal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div
        className="w-full h-full flex flex-col items-stretch justify-center focus:border-0 focus:outline-none"
        role="button"
        tabIndex={0}
        onClick={onClose}
      >
        <div className="flex-[0_0_auto] flex items-center justify-center px-4 py-1">
          <Box sx={{ flex: '1 1 100%' }}>
            <IconButton onClick={onClose}>
              <ArrowLeftIcon className="stroke-current h-9 w-9" />
            </IconButton>
          </Box>
          <StyledActionButtonsInner onClick={event => event.stopPropagation()}>
            <IconButton
              onClick={() =>
                dispatch(toggleAddRemoveFavorite({ image, galleryId }))
              }
            >
              <Icon
                className={`h-9 w-9 ${
                  isFavorite
                    ? 'fill-current stroke-transparent'
                    : 'stroke-current'
                } `}
              />
            </IconButton>
            {/* <IconButton
              onClick={() =>
                dispatch(rotateImage({ image, angle: angle + 90 }))
              }
            >
              <ArrowPathRoundedSquareIcon />
            </IconButton> */}
            {canShare && (
              <IconButton onClick={share}>
                <ShareIcon className="stroke-current h-9 w-9" />
              </IconButton>
            )}
            <a
              href={`data:image/jpeg,${image.url}`}
              target="_blank"
              rel="noreferrer"
              download={image.filename}
              className="text-white hover:text-primary-500 p-1 cursor-pointer"
            >
              <CloudArrowDownIcon className="stroke-current h-9 w-9" />
            </a>
          </StyledActionButtonsInner>
          <Box sx={{ flex: '1 1 100%' }} />
        </div>
        <div className="flex-[0_1_100%] flex items-center justify-center relative">
          <div className="absolute w-full h-full overflow-hidden flex items-center justify-center p-5">
            <img
              className="rounded-lg max-w-full max-h-full"
              src={image?.url}
              alt={image?.alt}
              onClick={event => {
                event.stopPropagation()
              }}
            />
          </div>
          {/* <Grow in> */}
          {/*  */}
          {/* </Grow> */}
        </div>
        <Box sx={{ height: '5rem' }} />
      </div>
    </StyledModal>
  )
}

export default DesktopImagePopup
