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
import styles from './page.module.css';
import { useEffect } from 'react';


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


  &::before {
    content: "";
    /* position: absolute;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    height: 100%;
    background-image: url("/assets/pattern.png");
    opacity: 9%; */
  }
`;
export default function Home() {

  useEffect(() => {
    const starCount = 25;
    const shootingStarInterval = 9000;

    const createStar = () => {
      const star = document.createElement('div');
      star.className = styles.star;
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      document.getElementById('stars')?.appendChild(star);
    };

    const createShootingStar = () => {
      const shootingStar = document.createElement('div');
      shootingStar.className = styles.shootingStar;
      shootingStar.style.top = `${Math.random() * 100}%`;
      shootingStar.style.left = `${Math.random() * 100}%`;
      document.body.appendChild(shootingStar);
      setTimeout(() => {
        document.body.removeChild(shootingStar);
      }, 8000);
    };

    const generateStars = () => {
      for (let i = 0; i < starCount; i++) {
        createStar();
      }
    };

    generateStars();
    setTimeout(createShootingStar, Math.random() * shootingStarInterval);

    const randomizeShootingStarInterval = () => {
      const interval = Math.random() * shootingStarInterval;
      setTimeout(() => {
        createShootingStar();
        randomizeShootingStarInterval();
      }, interval);
    };

    randomizeShootingStarInterval();
  }, []);



  return (
  <>
    <div id="stars" className={styles.stars}/>
      <Background>
   
      <Hero />
      </Background>

      <Section>
        <Screens />
      </Section>

      <Section>
        <Faq title="Perguntas Frequentes" faqItems={faqData} />
      </Section>

      <Section>
        <Input
        
          title="Inscreva-se"
        />
      </Section>

      <Section bgColor={"#00091D"}>
        <Footer />
      </Section>
    
</>
  );
}
