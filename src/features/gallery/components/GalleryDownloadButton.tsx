import { useState } from 'react'
import {
  styled,
  IconButton,
  CircularProgress,
  Box,
  Typography,
} from '@mui/material'
import { CloudArrowDownIcon, CloudIcon } from '@heroicons/react/24/outline'
import GalleryGroup from '~src/types/gallery/GalleryGroup'

const StyledButton = styled(IconButton)<{ active: boolean }>(
  ({ theme, active }) => `
  position: relative;

  color: ${active ? theme.palette.primary : 'rgb(156, 163, 175)'} ;

  &:hover {
    color: ${theme.palette.primary.main};
  }
`,
)

const StyledCloud = styled(CloudArrowDownIcon)`
  transition: 0.2s linear all;
  width; 2rem;
  height: 2rem;
`

const StyledEmptyCloud = styled(CloudIcon)(
  ({ theme }) => `
  color: ${theme.palette.primary.main};
  transition: 0.2s linear all;
  width; 2rem;
  height: 2rem;
`,
)

const StyledProgressContainer = styled(Box)(
  ({ theme }) => `
  position: absolute;
  top: 1px;
  left: 0;
  right: 0;
  bottom: -1px;
  display:flex;
  align-items: center;
  justify-content: center;
`,
)

export interface GalleryDownloadButtonProps {
  galleryGroup?: GalleryGroup
}

const GalleryDownloadButton: React.FC<GalleryDownloadButtonProps> = ({
  galleryGroup,
}) => {
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState(false)

  const onClick = () => {
    if (active) return
    let newProgress = progress
    const interval = setInterval(() => {
      newProgress = newProgress + 1
      if (newProgress === 100) {
        newProgress = 0
        clearInterval(interval)
        setActive(true)
      }
      setProgress(newProgress)
    }, 1000)
  }

  return (
    <StyledButton active={active} onClick={onClick}>
      {progress ? <StyledEmptyCloud /> : <StyledCloud />}
      {progress > 0 && (
        <StyledProgressContainer>
          <CircularProgress
            variant="determinate"
            color="primary"
            thickness={2}
            value={progress}
          />
        </StyledProgressContainer>
      )}
    </StyledButton>
  )
}

export default GalleryDownloadButton
