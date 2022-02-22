import React, { FormEventHandler, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GridContainer } from '../../../../common/components'

import { AvatarMenu } from '../AvatarMenu/AvatarMenu'
import { SearchField } from '../SearchField/SearchField'

import { BairesDevDesktopLogo } from './BairesDevDesktopLogo'
import { BairesDevMobileLogo } from './BairesDevMobileLogo'

import { Container, Content, LogoContainer } from './styles'

export const Header: React.FC = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState<string>('')

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (search) {
      navigate(`/search/${search}`)
    }
  }

  return (
    <Container>
      <GridContainer>
      <Content>
        <LogoContainer>
          <Link to="/">
            <BairesDevMobileLogo />
            <BairesDevDesktopLogo />
          </Link>
          <form onSubmit={handleSubmit}>
            <SearchField value={search} onChange={setSearch} />
          </form>
        </LogoContainer>
        <AvatarMenu />
      </Content>
      </GridContainer>
    </Container>
  )
}
