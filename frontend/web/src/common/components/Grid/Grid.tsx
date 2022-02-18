import React from 'react'
import { Column, Container, Row } from './styles'

type GridProps = {
  children: JSX.Element | JSX.Element[]
}
type ColumnProps = {
  children: JSX.Element | JSX.Element[]
}

export const GridContainer: React.FC<GridProps> = ({ children }) => {
  return <Container>{children}</Container>
}

export const GridRow: React.FC<GridProps> = ({ children }) => {
  return <Row>{children}</Row>
}

export const GridColumn: React.FC<ColumnProps> = ({ children }) => {
  return <Column>{children}</Column>
}
