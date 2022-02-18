import React from 'react'
import { Button } from './styles'

import { FcGoogle } from 'react-icons/fc'

type GoogleButtonProps = {
  onClick: () => void
  label: string
}

export const GoogleButton: React.FC<GoogleButtonProps> = ({ label, onClick }) => {
  return (
    <Button onClick={onClick}>
      <FcGoogle size={18} />
      <span>{label}</span>
    </Button>
  )
}
