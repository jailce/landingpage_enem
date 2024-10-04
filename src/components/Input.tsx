"use client";
import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from "./Button";


const Titulo = styled.p`
  font-weight: 800;

  text-align: center;
  padding-bottom: 10px;
`;
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;


`;
const InputContainer = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  background-color: transparent;
  border-radius: 4px;
  max-width: 250px;
  width:auto;
  margin-right: 10px;
  border-radius: 1rem;

  ::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: #38c90c;
    outline: none;
  }
`;
export default function Input({title}) {

    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      if (!email) return;
  
      try {
        const response = await fetch('pages/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
  
        if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
        } else {
          alert('Erro ao salvar o email.');
        }
      } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao enviar o email.');
      }
    };
 

    return (

<div className="mt-6 mb-8" >
<Titulo>{title}</Titulo>
        <InputWrapper>

        <InputContainer 
        type="email" 
        placeholder={isSubmitted ? "Entraremos em contato!" : "Escreva aqui seu email"}   
        value={email}
        onChange={(e) => setEmail(e.target.value) } 
        disabled={isSubmitted}
        />

        {!isSubmitted && (<Button label="Enviar" variant='md'  onClick={handleSubmit}/>)} 

      </InputWrapper>
      </div >
    )




}