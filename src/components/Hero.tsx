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
  color: var( --textBase);
  padding: 1rem 1rem;
`;

const Logo = styled.div`
  width: auto;
  height: auto;
  margin: 20px auto;
  position: relative;
  justify-content: center;
  display: flex;
`;
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
  color: var(--link);
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  text-shadow: 0px 0px 1px #dc06f0cc;
  &:hover {
    color: base;
  }
`;

const HeroSubtitle = styled.h3`
    color: var( --textBase);
  font-size: 1.2rem;
  max-width: 600px; /* Limita a largura do texto */
`;
const Playerfx = styled.div`
  width: 100%;
  max-width: 480px; /* Define a largura máxima */
  min-width: 80px;
  aspect-ratio: 16/9;
  margin: 1rem auto; /* Centraliza o contêiner horizontalmente */
  position: relative;

  background-color: #c278df73;
  border: 1px solid #c278df29;
  border-radius: 32px;
  box-shadow: 0 0 20px #9a0cd3cc;
 
`;

const PlayerWrapper = styled.div`
  width: 100%;
  max-width: 480px; /* Define a largura máxima */
  min-width: 80px;
  aspect-ratio: 16/9;

  position: relative;
  mask-image: url("/assets/mask.svg"); /* Aplica a máscara SVG externa */
  mask-size: cover; /* Garante que a máscara cubra todo o contêiner */
  -webkit-mask-image: url("/assets/mask.svg"); /* Compatibilidade com navegadores baseados em Webkit */

  border-radius: 35px;

 
`;

const StyledReactPlayer = styled(ReactPlayer)`
  display: flex;
  width: 100% !important ;
  height: 100% !important;

  max-width: 480px !important; /* Define a largura máxima */
  min-width: 80px !important;
  aspect-ratio: 16/9;
  margin: auto; /* Centraliza o contêiner horizontalmente */
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

      <Contagem />
      <div className=" my-2">
        <div className="flex flex-row ">
          <HeroTitle> ENEM </HeroTitle> <Ano>2024</Ano>
        </div>

        <HeroSubtitle>Estude, desafie e conquiste!</HeroSubtitle>
      </div>

      <div className="my-2">
        <p>
          Faça o
          <Link href="https://nivelamento-online.com.br/" className="text-black mx-1 text-lg font-semibold ">
            login
          </Link>
          ou
          <Link href="https://nivelamento-online.com.br/user/account/create" className="text-black mx-1 mt-2 text-lg font-semibold">
            cadastre-se
          </Link>
        </p>

        <Button label="Baixe o App" margin="2px" icon={PhoneRegular} />
      </div>
      <Playerfx>
        <PlayerWrapper>
          <StyledReactPlayer
            url={"/assets/nivelamentoteaser.mp4"}
            playing={true}
            controls={false}
            muted={true}
            loop={true}
          />
        </PlayerWrapper>
      </Playerfx>
    </HeroSection>
  );
}
