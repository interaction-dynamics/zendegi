/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable i18next/no-literal-string */
import { Modal, Box, Typography, styled, IconButton } from '@mui/material'
import { HeartIcon as HeartOutlineIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/solid'
import { Grow } from '@mui/material'

import { isMacLike } from '~/src/utils/platforms/mobile'

import {
  ArrowPathRoundedSquareIcon,
  ShareIcon as DefaultShareIcon,
  ArrowUpOnSquareIcon,
  CloudArrowDownIcon,
} from '@heroicons/react/24/outline'

import Picture from '~src/types/Picture'
import { useState } from 'react'

interface DesktopImagePopupProps {
  image: Picture
  open: boolean
  onClose: () => void
}

const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledContainer = styled(Box)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:focus-visible {
    border: 0;
    outline: none;
  }
`

const StyledImage = styled('img')`
  transition: all linear 0.25s;
  border-radius: 0.5rem;
`

const StyledActionButtons = styled(Box)`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 2rem;
    height: 2rem;
    stroke: white;
  }
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
}) => {
  const [isFavorite, setFavorite] = useState(false)

  const [rotation, setRotation] = useState(0)

  const Icon = isFavorite ? HeartIcon : HeartOutlineIcon

  const isHorizontal = rotation % 180 === 0

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
      <StyledContainer onClick={onClose}>
        <StyledActionButtons>
          <StyledActionButtonsInner onClick={event => event.stopPropagation()}>
            <IconButton onClick={() => setFavorite(!isFavorite)}>
              <Icon
                style={
                  isFavorite
                    ? { fill: 'white', stroke: 'transparent' }
                    : { stroke: 'white' }
                }
              />
            </IconButton>
            <IconButton onClick={() => setRotation(rotation + 90)}>
              <ArrowPathRoundedSquareIcon />
            </IconButton>
            {canShare && (
              <IconButton onClick={share}>
                <ShareIcon />
              </IconButton>
            )}
            <a
              href={`data:image/jpeg,${image.url}`}
              target="_blank"
              rel="noreferrer"
              download={image.filename}
            >
              <CloudArrowDownIcon />
            </a>
          </StyledActionButtonsInner>
        </StyledActionButtons>
        <Grow in>
          <StyledImage
            src={image?.url}
            alt={image?.alt}
            onClick={event => {
              event.stopPropagation()
            }}
            style={{
              transform: `rotate(${rotation}deg)`,
              maxWidth: isHorizontal
                ? 'calc(100vw - 50px)'
                : 'calc(90vh - 50px)',
              maxHeight: isHorizontal
                ? 'calc(90vh - 50px)'
                : 'calc(90vw - 50px)',
            }}
          />
        </Grow>
      </StyledContainer>
    </StyledModal>
  )
}

export default DesktopImagePopup
