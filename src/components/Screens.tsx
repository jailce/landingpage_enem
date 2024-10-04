"use client";
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const ScreenWrapper = styled.div`

  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;


export default function Screens() {
    return (

<ScreenWrapper>
<Image
          src="./assets/01.png" // Caminho para a logo (certifique-se de que a logo esteja na pasta public)
          alt="Logo"
          width={140}
          height={100}
        objectFit="contain"
          priority // Carrega a logo com prioridade

        className="mx-4"
        />


<Image
          src="./assets/02.png" // Caminho para a logo (certifique-se de que a logo esteja na pasta public)
          alt="Logo"
          width={140}
          height={100}
        objectFit="contain"
          priority // Carrega a logo com prioridade
                  className="mx-4"
        />

</ScreenWrapper>
    )



}