import React, { ChangeEvent } from 'react'
import { Container, Input, Label, TextArea } from './styles'

interface TextFieldProps {
  label: string
  name: string
  type?: 'text' | 'email' | 'tel' | 'password'
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  error?: string
  readOnly?: boolean
  disabled?: boolean
  disableAutoComplete?: boolean
  special?: 'title' | 'textarea'
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  readOnly,
  disabled,
  disableAutoComplete,
  special,
  ...rest
}) => {
  if (special === 'textarea') {
    return (
      <Container>
        <Label htmlFor={name}>{label}</Label>
        <TextArea id={name} onChange={onChange} value={value} name={name} {...rest} />
      </Container>
    )
  }

  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        type={type}
        onChange={onChange}
        value={value}
        name={name}
        readOnly={readOnly}
        disabled={disabled}
        autoComplete={disableAutoComplete ? 'off' : 'on'}
        {...rest}
      />
      {error && <span>{error}</span>}
    </Container>
  )
}
