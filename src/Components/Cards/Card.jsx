import React, { useContext } from 'react'
import '../Cards/Card.css'

export default function Card(props) {

  return (
    <div className='card'>
           <img src={props.image}></img>
           <span>{props.text}</span>
           <span>{props.text1}</span>
           <span>{props.text2}</span>

           <button className='c-button'>More</button>
    </div>
  )
}
