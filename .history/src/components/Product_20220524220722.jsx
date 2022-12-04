import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import './Style.css';

export default function Product(props) {

    //hook for changing color on click
    const[bgColorOnOff,setColor] = useState('');

    const changeColor =()=>{
      if(bgColorOnOff=='green')
        setColor('red')
      else{
        setColor('green')
      }
    }

  return (
    <div>
        <button onClick={changeColor} style={{backgroundColor:bgColorOnOff}} id='productOnOff'> product name:{props.rooms.roomProducts(0)} </button>
        <button onClick={changeColor} style={{backgroundColor:bgColorOnOff}} id='productOnOff'> product name:{props.rooms.roomProducts(1)} </button>
        <button onClick={changeColor} style={{backgroundColor:bgColorOnOff}} id='productOnOff'> product name:{props.rooms.roomProducts(2)} </button>
        <button onClick={changeColor} style={{backgroundColor:bgColorOnOff}} id='productOnOff'> product name:{props.rooms.roomProducts(3)} </button>
        <button onClick={changeColor} style={{backgroundColor:bgColorOnOff}} id='productOnOff'> product name:{props.rooms.roomProducts(4)} </button>    
    </div>
  )
}