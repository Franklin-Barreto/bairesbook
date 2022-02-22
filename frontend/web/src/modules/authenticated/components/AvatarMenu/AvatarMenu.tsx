import React, { useState, useRef, useEffect } from 'react'
import { FiLogOut, FiMoon } from 'react-icons/fi'
import { useTheme } from 'styled-components'

import useAuth from '../../../../hooks/useAuth'
import { useThemeToggle } from '../../../../styles/ThemeToggleProvider'

import { Container, Dropdown, Greeting, OptionButton, ProfilePic } from './styles'

export const AvatarMenu: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState<boolean>(false)

  const theme = useTheme()
  const { handleTheme } = useThemeToggle()
  const { currentUser, handleSignOut } = useAuth()

  const handleDropdownClick = () => {
    setOpen(current => !current)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])

  return (
    <Container ref={ref} onClick={handleDropdownClick}>
      <Greeting>Hey, <strong>{currentUser?.name}</strong></Greeting>
      {currentUser?.photoUrl && (
        <ProfilePic src={currentUser?.photoUrl} alt={currentUser.name || ''} />
      )}
      {open && (
        <Dropdown>
          <OptionButton onClick={handleTheme}>
            <FiMoon color={theme.palette.font.primary} size={16} />
            <span>Toggle dark mode</span>
          </OptionButton>
          <OptionButton onClick={handleSignOut}>
            <FiLogOut color={theme.palette.font.primary} size={16} />
            <span>Sign out</span>
          </OptionButton>
        </Dropdown>
      )}
    </Container>
  )
}
