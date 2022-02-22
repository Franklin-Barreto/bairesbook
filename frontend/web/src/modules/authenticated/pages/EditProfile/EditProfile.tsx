import React, { useState } from 'react'
import { useTheme } from 'styled-components'

import { useFormik } from 'formik'
import * as yup from 'yup'

import useEditProfile from '../../hooks/useEditProfile'
import useAuth from '../../../../hooks/useAuth'

import {
  Container,
  Content,
  Form,
  Header,
  Title,
  Wrapper
} from './styles'
import { TextField } from '../../../../common/components'

const initialValues = {
  name: '',
  title: '',
  photoUrl: ''
}

export const EditProfile: React.FC = () => {
  const { currentUser } = useAuth()
  const { data, loading } = useEditProfile(currentUser?.id as number)

  const schema = yup.object().shape({
    name: yup.string().required('This field is required').trim(),
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
    initialValues: data || initialValues,
    enableReinitialize: true,
    validationSchema: schema,
    validateOnBlur: true,
    validateOnMount: true,
    validateOnChange: true,
    onSubmit: profile => {
      console.log(profile)
    }
  })

  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>Edit profile</Title>
        </Header>
        <Content>
          <Form onSubmit={handleSubmit}>
          <TextField
              label="Name"
              error={errors.name && touched.name ? errors.name : ''}
              {...getFieldProps('name')}
            />
          </Form>
        </Content>
      </Container>
    </Wrapper>
  )
}
