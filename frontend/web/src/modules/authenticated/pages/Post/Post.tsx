import React from 'react'
import {
  Container,
  Content,
  Form,
  Header,
  Title,
  Wrapper
} from './styles'

import { useFormik } from 'formik'
import * as yup from 'yup'
import { Button, ImageUploader, TextField } from '../../../../common/components'
import useFeed from '../../hooks/useFeed'
import { useNavigate } from 'react-router-dom'

const INITIAL = {
  title: '',
  text: '',
  image: ''
}

export const Post: React.FC = () => {
  const { create } = useFeed()
  const navigate = useNavigate()

  const schema = yup.object().shape({
    title: yup.string().trim(),
    text: yup.string().trim(),
    image: yup.string().trim()
  })

  const {
    errors,
    touched,
    values,
    setFieldValue,
    setFieldTouched,
    validateForm,
    handleSubmit,
    getFieldProps
  } = useFormik({
    initialValues: INITIAL,
    enableReinitialize: true,
    validationSchema: schema,
    validateOnBlur: true,
    validateOnMount: true,
    validateOnChange: true,
    onSubmit: postValues => {
      const { title, text, image } = postValues
      if (!title && !text && !image) return
      create({
        title,
        text,
        image,
        isArticle: false
      })
      navigate('/feed')
    }
  })

  const onChangeImage = (value: string) => {
    setFieldValue('image', value)
    setFieldTouched('image', true, false)
    validateForm({
      ...values,
      image: value
    })
  }

  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>Create a post</Title>
        </Header>
        <Content>
          <Form onSubmit={handleSubmit}>
            <TextField
              label="Title"
              error={errors.title && touched.title ? errors.title : ''}
              {...getFieldProps('title')}
            />
            <TextField
              label="Text"
              error={errors.text && touched.text ? errors.text : ''}
              {...getFieldProps('text')}
              special="textarea"
            />
            <ImageUploader
              label="Image"
              value={values.image}
              onChange={onChangeImage}
            />
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant='primary' type='submit'>Post</Button>
            </div>
          </Form>
        </Content>
      </Container>
    </Wrapper>
  )
}
