import { useState } from 'react'
import { Paper, Box, styled } from '@mui/material'
import useEventListener from '~src/hooks/useEventListener'

const StyledHeader = styled(Paper)`
  height: 4rem;
  position: sticky;
  top: 0;
  z-index: 100;
`

const StyledHeaderInner = styled(Box)`
  position: relative;
  height: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
`

export interface HeaderProps {
  children?: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const [elevation, setElevation] = useState(0)

  useEventListener('scroll', () => {
    setElevation(window.scrollY > 10 ? 1 : 0)
  })

  return (
    <StyledHeader elevation={elevation} square>
      <StyledHeaderInner>{children}</StyledHeaderInner>
    </StyledHeader>
  )
}

export default Header
