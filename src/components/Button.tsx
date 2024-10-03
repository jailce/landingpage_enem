"use client";
import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div<{ variant: "lg" | "md"; margin?: string }>`
  border-width: 0;
  border-radius: 6.951px;
  border: 0.579px solid #3E0C65;
  background: #8033BA;
  border-radius: 1rem;
  position: relative;
  color: #fff;
  padding-left: 12px;
  padding-right: 12px;
  display: flex;
  width: auto;
  min-width: 70px;
  justify-content: center;
  cursor: pointer;

  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding-top: ${(props) => (props.variant === "lg" ? "16px" : "11px")};
  padding-bottom: ${(props) => (props.variant === "lg" ? "16px" : "11px")};
`;
// Estilo do ícone
const IconWrapper = styled.div<{ size?: string }>`
  margin-right: 4px; /* Espaço entre ícone e título */
  display: flex;
  color: #fff;
  align-items: center;

  width: ${(props) => props.size || "24px"}; /* Largura do ícone */
  height: ${(props) => props.size || "24px"}; /* Altura do ícone */

  svg {
    width: 100%;
    height: 100%;
  }
`;
interface ButtonProps {
  label: string;
  margin?: string;
  onClick: () => void;
  icon?: React.ComponentType;
  size?: string;
  variant?: "lg" | "md"; // Variante do botão
}
// Título do botão
const ButtonLabel = styled.span<{ variant: "lg" | "md" }>`
  font-size: ${(props) => (props.variant === "lg" ? "18px" : "16px")};
`;
export default function Button({
  label,
  margin,
  onClick,
  icon: IconComponent,
  size = "24px",
  variant = "lg",
}) {
  return (
    <ButtonContainer onClick={onClick} margin={margin} variant={variant}>
      {IconComponent && (
        <IconWrapper size={size}>
          <IconComponent />
        </IconWrapper>
      )}

      <ButtonLabel>{label}</ButtonLabel>
    </ButtonContainer>
  );
}
export { Button };
