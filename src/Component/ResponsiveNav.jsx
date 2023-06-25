import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow:6,
      slidesToScroll: 3,
      initialSlide: 0,

    };
    return (
        
      <div className="respoNav" >
        <style>
  {`
    .respoNav .slick-slide {
      width: auto !important;
    }
    .respoNav .slick-arrow {
        display: none !important;
    }

  `}
</style>    
        <Slider {...settings}>
          <div>
            <p className="respoP me-3">KADIN</p>
          </div>
          <div>
            <p className="respoP me-3 ">ERKEK</p>
          </div>
          <div>
            <p className="respoP me-3">ANNE&ÇOCUK</p>
          </div>
          <div>
            <p className="respoP me-3">SÜPERMARKET</p>
          </div>
          <div>
            <p className="respoP me-3">AYAKKABI&ÇANTA</p>
          </div>
          <div>
            <p className="respoP me-3">ELEKTRONİK</p>
          </div>
          <div>
            <p className="respoP me-3">SPOR&OUTDOOR</p>
          </div>
          <div>
            <p className="respoP me-3">ÇOK SATANLAR</p>
          </div>
          <div>
            <p className="respoP me-3">YENİLER</p>
          </div>
          <div>
            <p className="respoP me-3">TELEFONLAR</p>
          </div>
          <div>
            <p className="respoP me-3">ELEKTRONİK</p>
          </div>
        </Slider>
      </div>
    );
  }
}