"use client";
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Screens from "../components/Screens";
import Faq from "../components/Faq";
import Input from "../components/Input";
import Footer from "../components/Footer";
import Section from "../components/Section";
import styled from "styled-components";



const faqData = [
  {
    question: "O que é o NiO?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "O NiO é Grátis?",
    answer:
      "Sim, Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "Como posso estudar pro ENEM com o NiO?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "O NiO também pode ser utilizado por professores?",
    answer:
      "Gancho para promover a sala do mestre caso professores caiam nesse funil.",
  },
];

const Background = styled.div`

position: relative;
background-color: #00d170;

  &::before {
    content: "";
    position: absolute;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    height: 100%;
    background-image: url("/assets/pattern.png");
    opacity: 9%;
  }
`;
export default function Home() {
  return (
    <>
      <Background>
   
      <Hero />
      </Background>

      <Section>
        <Screens />
      </Section>

      <Section bgColor={"#fdffb5"}> 
        <Faq title="Perguntas Frequentes" faqItems={faqData} />
      </Section>

      <Section>
        <Input
        
          title="Inscreva-se"
        />
      </Section>

      <Section bgColor={"#2E2F38"}>
        <Footer />
      </Section>
    </>
  );
}
