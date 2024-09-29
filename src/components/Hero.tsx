"use client";
import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Link from "next/link";
import { PhoneRegular } from "@fluentui/react-icons";
import ReactPlayer from "react-player";

const HeroSection = styled.section`
  height: auto; /* Ajuste a altura conforme necessário */
  /* background: url("/path/to/your/banner.jpg") no-repeat center center; */
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #333; /* Cor do texto */
  background-color: #f2f2f2;
  padding: 1rem 1rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;

  font-weight: 800;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  max-width: 600px; /* Limita a largura do texto */
`;

export default function Hero() {
  return (
    <HeroSection>
      <HeroTitle>
        ENEM<i>2024</i>
      </HeroTitle>
      <HeroSubtitle>
        Estude, desafie e conquiste com simulados, rankings, estatísticas de
        desempenho e muitos mais!
      </HeroSubtitle>
      <p>
        Faça o
        <Link
          href="/"
          className="text-black mx-1 text-lg font-semibold hover:text-blue-400"
        >
          Login
        </Link>
        ou
        <Link
          href="/"
          className="text-black mx-1 text-lg font-semibold hover:text-blue-400"
        >
          Cadastre-se
        </Link>
      </p>

      <Button label="Baixe o App" margin="20px" icon={PhoneRegular} />

        <div className=" flex justify-center my-4 rounded-[30px]" >
          <ReactPlayer
            url={
              "https://www.youtube.com/embed/Cf_I-k_ZLW0?si=S9NDjO691MSZ7WVh"
            }
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
