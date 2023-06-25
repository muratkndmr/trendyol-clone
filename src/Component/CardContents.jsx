import React from 'react'
import { BsHeart } from "react-icons/bs";


function CardContents(props) {
  return (
    <div className="cardSlider">
    <div className="card">
      <div className="imgSlider1">

      <img width={140} src={props.sliderI} alt="" />
      <span className="sliderIc" ><BsHeart/></span>

      </div>
      
        <p className="sliderP"><span className="text-dark">{props.sliderTi}</span>{props.sliderT}</p>
        <a className="sliderA" href="@">{props.sliderP}</a>
        <img className="d-inline sliderIma" width={50} src="https://cdn.dsmcdn.com/mnresize/250/250/marketing/datascience/automation/2020/12/9/EnCokSatan_202012091129.png" alt="" />
  
    </div>
  </div>
  )
}

export default CardContents