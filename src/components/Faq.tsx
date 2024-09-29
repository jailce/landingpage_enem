"use client";
import React from "react";
import styled from "styled-components";

const FaqSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
  justify-content: center; /* Alinhamento horizontal ao centro */
  align-items: center; /* Alinhamento vertical ao centro */
  background-color: #e2e2e2; /* Cor de fundo cinza */
  height: auto; /* Altura do header */
`;

const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  max-width: 768px;
  justify-content: center; /* Alinhamento horizontal ao centro */
  align-items: center; /* Alinhamento vertical ao centro */
  background-color: #d6d5d5; /* Cor de fundo cinza */
  height: auto; /* Altura do header */
`;

const Titulo = styled.p`
  font-weight: 800;
  margin-bottom: 0.8rem;
`;

const FaqItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.6rem 0;
  justify-content: center; /* Alinhamento horizontal ao centro */
  align-items: center; /* Alinhamento vertical ao centro */

  height: auto; /* Altura do header */
`;

const Pergunta = styled.p`
  font-weight: 800;
  margin-bottom: 0.1rem;
`;
const Resposta = styled.p`
  font-weight: 400;
`;
interface FaqData {
    question: string;
    answer: string;
  }
  
  interface FaqProps {
    title: string;
    faqItems: FaqData[];
  }
  
  export default function Faq({ title, faqItems }: FaqProps) {
    return (
      <FaqSection>
        <FaqContainer>
          <Titulo>{title}</Titulo>
  
          {faqItems.map((item, index) => (
            <FaqItem key={index}>
              <Pergunta>{item.question}</Pergunta>
              <Resposta>{item.answer}</Resposta>
            </FaqItem>
          ))}
        </FaqContainer>
      </FaqSection>
    );
  }
