"use client";
import React from 'react';
import styled from 'styled-components';

// Definindo o Disclaimer como um componente estilizado
const Disclaimer = styled.div`
  font-size: 0.875rem; /* Ajuste o tamanho da fonte conforme necessário */
  color: #666; /* Cor do texto */
  text-align: center;
  padding: 1rem;


`;

// Definindo o componente Footer e usando o Disclaimer dentro dele
export default function Footer() {
  return (
    <Disclaimer>
      Copyright &copy; 2024 Exatamente Soluções Educacionais <br />
      Politica de privacidade | Termos e condições <br />
      Apple and the Apple Store are trademarks of Apple Inc., registered in the U.S. and other countries.<br />
      Google Play and the Google Play logo are trademarks of Google LLC.
    </Disclaimer>
  );
}
