import React from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Screens from '../components/Screens';
import Faq from '../components/Faq';
import Input from '../components/Input';
import Footer from '../components/Footer';


const faqData = [
  {
    question: "O que é o NiO?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "O NiO é Grátis?",
    answer: "Sim, Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "Como posso estudar pro ENEM com o NiO?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "O NiO também pode ser utilizado por professores?",
    answer: "Gancho para promover a sala do mestre caso professores caiam nesse funil.",
  },
];
export default function Home() {
  return (
    <>
       <Header/>
       <Hero/>
       <Screens/>
       <Faq title="Perguntas Frequentes" faqItems={faqData} />
   
       <Input className="flex flex-col  justify-center items-center bg-black h-auto" title="Inscreva-se" />
    
       <Footer />

    </>
  );
}

