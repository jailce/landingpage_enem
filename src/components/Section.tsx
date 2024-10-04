"use client";
import React from 'react';
import styled from 'styled-components';

const SectionWrapper = styled.section<{ bgColor?: string }>`
  background-color: ${({ bgColor }) => bgColor || 'transparent'};
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

interface SectionProps {
  children: React.ReactNode;
  bgColor?: string; // Cor de fundo opcional
}

export default function Section({children, bgColor}: SectionProps) {

    return (<SectionWrapper bgColor={bgColor}> {children} </SectionWrapper>);

}



