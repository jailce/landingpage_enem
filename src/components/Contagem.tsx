"use client";
import styled from 'styled-components';
import React, { useEffect, useState } from "react";


const ContagemWrapper = styled.div`
display:flex;
background-color: #fff;
border-radius: 500px;
margin: 10px 0 ;
padding:  0px 12px 0px 0;
border: 1px solid #333;
width: auto;


 img {
    margin-left: -1px;

 }
  span{
    font-size: 24px;
    line-height: 0;
    color: #6a03b8 !important;
  }
 p {
    font-size: 12px;
    color: #8a2727 !important;
    letter-spacing: normal;
    line-height: 0.5rem;
 }


`
interface CountdownProps {
    targetDate: Date;
  }

export default function Contagem() {

    //lógica da contagem 
    const targetDate = new Date("Nov 2, 2024 0:00:00");




    const [fullHour, setFullHour] = useState(calculateFullHour())


    
    function calculateFullHour() {
        const now = new Date()
        const targetFullHour = targetDate.getTime()
        const fullHourNow = now.getTime()
        
        
        const fullHourDifference = targetFullHour - fullHourNow
   
        return {
            days: Math.floor(fullHourDifference / (1000 * 60 * 60 * 24)),
            hours: Math.floor(fullHourDifference / (1000 * 60 * 60) % 24),
            min: String(Math.floor(fullHourDifference / (1000 * 60 ) % 60)).padStart(2, "0"),
            sec: String(Math.floor(fullHourDifference / 1000  % 60)).padStart(2, "0"),


        }
    }



useEffect(() => {
    const timer = setInterval(() => {setFullHour(calculateFullHour())} , 1000)
   
     return () => {
     clearInterval(timer)
     }
   }, [])





    return (


<ContagemWrapper>

    <img src="/assets/clock.png"/> 
    <div className="flex-column my-auto mx-1">

        <span> {fullHour.days} dias</span>
        <p> {fullHour.hours}h {fullHour.min}min {fullHour.sec}s</p> 

    </div> 
</ContagemWrapper>

    )




}