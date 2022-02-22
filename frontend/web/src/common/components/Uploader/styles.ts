import styled, { css } from 'styled-components'

interface UploaderProps {
  imageSelected?: boolean
  isDragActive?: boolean
  isDragReject?: boolean
}

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.font.primary};
  margin-bottom: 0.5rem;
`
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const UploadContainer = styled.div`
  padding: 2.5rem 1.5rem;
  border: dashed 3px ${({ theme }) => theme.palette.blocks.border};
  border-radius: 0.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: all 0.2s ease-in-out;

  ${({ isDragActive }: UploaderProps) =>
    isDragActive &&
    css`
      border-color: ${({ theme }) => theme.palette.blocks.accepted};
      p {
        color: #95e58c;
      }
    `}

  ${({ imageSelected }: UploaderProps) =>
    imageSelected &&
    css`
      visibility: hidden;
      position: absolute;
    `}
`

export const ImageContainer = styled.div`
  overflow: hidden;
  position: relative;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.palette.blocks.background};
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ imageSelected }: UploaderProps) =>
    !imageSelected &&
    css`
      visibility: hidden;
      position: absolute;
    `}

  img {
    border-radius: 4px;
    max-height: 20rem;
    aspect-ratio: 1;
  }

  div {
    display: flex;
    column-gap: 1rem;
    padding: 1rem 0;
    position: absolute;
    top: 0;
    left: 1rem;
  }
`

export const UploadText = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.palette.font.secondary};

  span {
    color: ${({ theme }) => theme.palette.font.active};
  }
`
