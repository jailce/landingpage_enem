
"use client";
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// const logo = require('../assets/logo.png');

const Logo = styled.div`
  width: 108px;
  height: 100%;
  position: relative;
 `

const HeaderContainer = styled.header`
  display: flex;
  
  justify-content: center; /* Alinhamento horizontal ao centro */
  align-items: center; /* Alinhamento vertical ao centro */
  background-color: #b0b0b0; /* Cor de fundo cinza */
  height: 58px; /* Altura do header */

`

export default function Header()  {
  return (
  <HeaderContainer>

<Logo>
<Image
          src="/assets/logo.png" // Caminho para a logo (certifique-se de que a logo esteja na pasta public)
          alt="Logo"
          fill={true}
        objectFit="contain"
          priority // Carrega a logo com prioridade
        />



</Logo>


  </HeaderContainer>

  )
  
  }
  export {Header}