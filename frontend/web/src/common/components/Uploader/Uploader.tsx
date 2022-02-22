import React, { useCallback, useRef, useState } from 'react'
import { useDropzone, FileRejection } from 'react-dropzone'

import { Button } from '..'

import {
  Container,
  ImageContainer,
  Label,
  UploadContainer,
  UploadText
} from './styles'

interface ImageUploaderProps {
  label: string
  value?: string
  onChange: (file: string) => void
}

const IMAGE_EXTENSIONS = ['image/png', 'image/jpeg', 'image/jpg']

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  label,
  value,
  onChange
}) => {
  const ref = useRef<HTMLInputElement>(null)

  const [uploadingImage, setUploadingImage] = useState<boolean>(false)

  const handleFileInputClick = () => {
    ref?.current?.click()
  }

  const processImage = (uploadedFile: File) => {
    const fileReader = new FileReader()

    fileReader.onloadend = function () {
      onChange(fileReader.result as string)
      setUploadingImage(false)
    }

    fileReader.readAsDataURL(uploadedFile)
  }

  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      if (fileRejections.length) {
        alert('arquivo nao suportado')
      }
      if (acceptedFiles.length) {
        setUploadingImage(true)
        processImage(acceptedFiles[0])
      }
    },
    []
  )

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
      accept: IMAGE_EXTENSIONS?.join(',')
    })

  return (
    <Container>
      <Label>{label}</Label>

      <UploadContainer
        {...getRootProps()}
        isDragActive={isDragActive}
        isDragReject={isDragReject}
        onClick={handleFileInputClick}
        imageSelected={!!value}
      >
        <input {...getInputProps()} ref={ref} />
        <UploadText>
          <span>Click</span> or drag here to upload
        </UploadText>
      </UploadContainer>
      <ImageContainer imageSelected={!!value}>
        <div>
          <Button onClick={handleFileInputClick}>Edit</Button>
        </div>
        <img src={value} alt="Imagem selecionada" />
      </ImageContainer>
    </Container>
  )
}
