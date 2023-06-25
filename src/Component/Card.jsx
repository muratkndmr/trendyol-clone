import React from 'react'


function Card(props) {
    return (
      <div>
    <div className="row cardMt">
        <div className="col-lg-4 col-12  cardCol">
            <img className='w-100 cardS' src={props.image1} alt="" />
            <button className='btn-dark w-100 btn text-start cardB d-flex justify-content-between'>{props.text1}<span className='pe-4 cardSpan'>Alışverişe Başla</span></button>          
        </div>
        <div className="col-lg-4 col-12  cardCol">
            <img className='w-100 cardS' src={props.image2} alt="" />
            <button className='btn-dark w-100 btn text-start cardB d-flex justify-content-between'>{props.text2}<span className='pe-4 cardSpan'>Alışverişe Başla</span></button>          
        </div>
        <div className="col-lg-4 col-12 cardCol">
            <img className='w-100 cardS' src={props.image3} alt="" />
            <button className='btn-dark w-100 btn text-start cardB d-flex justify-content-between'>{props.text3}<span className='pe-4 cardSpan'>Alışverişe Başla</span></button>          
        </div>

    </div>
  
    </div>
    )
  }
  
  export default Card