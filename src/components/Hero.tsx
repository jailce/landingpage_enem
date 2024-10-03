"use client";
import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { PhoneRegular } from "@fluentui/react-icons";
import Contagem from "./Contagem";
import ReactPlayer from "react-player";
import Image from "next/image";


const HeroSection = styled.section`
  height: auto;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #333; /* Cor do texto */
  padding: 1rem 1rem;

`;
const Logo = styled.div`
max-width:108px;
max-height: 58px;
width: auto;
height: auto;
  margin: 20px auto;
  position: relative;
  justify-content: center;
  display: flex;
 `
const HeroTitle = styled.h1`
  font-size: 4rem;
  font-style: italic;
  font-weight: 900;
  z-index: 0;
  position: relative;
  color: #fd98ff;
  line-height: 1;

  &::before {
    content: "ENEM";
  
    font-weight: 900;

    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #65007e;
  }
`;
const Ano = styled.h1`
  position: relative;
  font-size: 4rem;
  font-style: italic;
  color: #3700fe;
  font-weight: 600;
  z-index: 0;
  line-height: 1;

  &::before {
    content: "2024";

    font-weight: 600;
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #150354;
  }
`;




const Link = styled.a`
  color: #6A03B8;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    color: base;
  }
`;

const HeroSubtitle = styled.h3`
  color: #333;
  font-size: 1.2rem;
  max-width: 600px; /* Limita a largura do texto */
`;

export default function Hero() {
  return (
    <HeroSection>
  <Logo>
<Image
         src="/assets/logo.png"
         alt="Logo"
         layout="intrinsic"
         width={108}
         height={58}
         objectFit="contain"
         priority

        />



</Logo>

<Contagem/>
  <div className=" my-2">
      <div className="flex flex-row ">
        <HeroTitle> ENEM </HeroTitle> <Ano>2024</Ano>
      </div>

      <HeroSubtitle>Estude, desafie e conquiste!</HeroSubtitle>

      </div>


    <div className="my-2">
      <p >
        Faça o
        <Link
          href="/"
          className="text-black mx-1 text-lg font-semibold "
        >
          login
        </Link>
        ou
        <Link
          href="/"
          className="text-black mx-1 mt-2 text-lg font-semibold"
        >
          cadastre-se
        </Link>
      </p>

      <Button label="Baixe o App" margin="2px" icon={PhoneRegular} />

      </div>



      <div className=" flex justify-center my-4 rounded-[30px]">
        <ReactPlayer
          url={"https://www.youtube.com/embed/Cf_I-k_ZLW0?si=S9NDjO691MSZ7WVh"}
          className=" w-full h-full   "
          playing={true}
          controls={false}
          muted={true}
          loop={true}
        />
      </div>
    </HeroSection>
  );
}
