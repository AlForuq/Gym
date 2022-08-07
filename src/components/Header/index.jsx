import React from 'react'
import Logo from '../../assets/logo.png'
import { HeaderContainer, HeroBlur, Img, Li, Ul } from './style'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeroBlur className='blur' />
      <Img src={Logo} />
      <Ul>
        <Li>Home</Li>
        <Li>Programs</Li>
        <Li>Why</Li>
        <Li>Plans</Li>
        <Li>Testimonials</Li>
      </Ul>
    </HeaderContainer>
  );
}
