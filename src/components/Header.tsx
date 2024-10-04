
"use client";
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// const logo = require('../assets/logo.png');

const Logo = styled.div`
  max-width:108px;
  max-height: 58px;

  width: 108px;
  height: 100%;
  position: relative;
 `

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center; /* Alinhamento horizontal ao centro */
  align-items: center; /* Alinhamento vertical ao centro */
padding: 10px;
  height: 58px; /* Altura do header */

`

export default function Header()  {
  return (
  <HeaderContainer>

<Logo>
<Image
         src="./assets/logo.png"
         alt="Logo"
         layout="intrinsic"
         width={108}
         height={58}
         objectFit="contain"
         priority

        />



</Logo>


  </HeaderContainer>

  )
  
  }
  export {Header}