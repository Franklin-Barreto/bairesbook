import React from 'react'
import { Primary, Secondary } from './styles'

interface ButtonProps {
  children: string | JSX.Element | JSX.Element[]
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary'
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'secondary'
}) => {
  if (variant === 'primary') {
    return <Primary type={type} onClick={onClick}>{children}</Primary>
  }
  return (
    <Secondary type={type} onClick={onClick}>{children}</Secondary>
  )
}
