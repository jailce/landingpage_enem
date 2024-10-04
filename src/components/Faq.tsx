"use client";
import React from "react";
import styled from "styled-components";



const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  max-width: 768px;
  justify-content: center; /* Alinhamento horizontal ao centro */
  align-items: center; /* Alinhamento vertical ao centro */
  background: linear-gradient(0deg, #333d524c 0%, #333d52 100%);
  height: auto; /* Altura do header */
  border-radius: 30px;
  border: 1px solid #ffffff4b;
  box-shadow: inset 0px 0px 10px #0154a1, 0px 0px 20px #0154a1; 
  padding:2rem;
`;

const Titulo = styled.p`
  font-weight: 800;
  margin-bottom: 0.8rem;
  font-size: 20px;
`;

const FaqItem = styled.div`

  flex-direction: column;
  padding: 0.6rem 0;
  text-align: left;
  font-size: 16px;
  align-items: center; /* Alinhamento vertical ao centro */

  height: auto; /* Altura do header */
 width: 100%;
 
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

        <FaqContainer>
          <Titulo>{title}</Titulo>
  
          {faqItems.map((item, index) => (
            <FaqItem key={index}>
              <Pergunta>{item.question}</Pergunta>
              <Resposta>{item.answer}</Resposta>
            </FaqItem>
          ))}
        </FaqContainer>

    );
  }
