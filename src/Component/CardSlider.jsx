import React, { Component } from "react";
import Slider from "react-slick";
import { BsHeart } from "react-icons/bs";
import CardContents from './CardContents';


export default class Responsive extends Component {
    render() {
        var settings = {
          dots: true,
          infinite: false,
          speed: 700,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
     
        };
  return (
    <div className="mynameSlider2">
<style>
  {`
    .mynameSlider2 .slick-slide {
      width: 230px !important;
      text-align: center !important;
    }

    .mynameSlider2 .slick-arrow {
      display: none !important;
    }
  `}
</style>

        <div className="container mt-5 sliderMain">
        <div className="urunler">
            <div className="ust">
                <div className="ustB d-flex justify-content-between pt-3">
                <h4 className='ps-3 text-white'>Çok Satanlar Ürünler</h4>
                <a className='text-white me-3' href="@">Tüm Ürünler!</a>
                </div>
                <Slider {...settings} className="slider2 mt-3">
          <div className="cardSlider">
            <div className="card">
              <div className="imgSlider1">
        
              <img width={140} src="https://cdn.dsmcdn.com/ty937/product/media/images/20230603/1/379170833/504734244/1/1_org.jpg" alt="" />
              <span className="sliderIc" ><BsHeart/></span>

              </div>
              
                <p className="sliderP"><span className="text-dark">rise and shine</span> Antiperspirant Whitening Roll-on - 75 ml</p>
                <a className="sliderA" href="@">99 TL</a>
                <img className="d-inline sliderIma" width={50} src="https://cdn.dsmcdn.com/mnresize/250/250/marketing/datascience/automation/2020/12/9/EnCokSatan_202012091129.png" alt="" />
          
            </div>
          </div>
          
          <CardContents sliderI="https://cdn.dsmcdn.com/ty427/product/media/images/20220510/16/109076409/74964668/2/2_org.jpg" sliderT="Erkek Çekmeyen Pamuklu Kumaş Regular" sliderTi="Altınyıldız " sliderP="199,95 TL"/>
          <CardContents sliderI="https://cdn.dsmcdn.com/ty365/product/media/images/20220319/20/72519409/77823280/1/1_org.jpg" sliderT="Jett Oversize Siyah T-shirt" sliderTi="GRIMELANGE" sliderP="149,95 TL"/>
          <CardContents sliderI="https://cdn.dsmcdn.com/ty499/product/media/images/20220806/15/155460286/232540291/1/1_org.jpg" sliderT="Unisex 8 Çift Pamuklu Pantalon Çorap Beyaz" sliderTi="BGK" sliderP="59,99 TL"/>
          <CardContents sliderI="https://cdn.dsmcdn.com/ty445/product/media/images/20220602/16/120049759/492629334/1/1_org.jpg" sliderT="Wolfers- Siyah Ön Ve Arka Baskılı" sliderTi="Wolfers Outdoors" sliderP="60,95 TL"/>
          <CardContents sliderI="https://cdn.dsmcdn.com/ty608/product/media/images/20221120/19/218784524/7081882/1/1_org.jpg" sliderT="El, Ayak ve Koltuk Altı Terleme Önleyici Sprey 50 ml" sliderTi="Tereson" sliderP="78,85 TL"/>
          <CardContents sliderI="https://cdn.dsmcdn.com/ty344/product/media/images/20220224/16/58021220/397162697/1/1_org.jpg" sliderT="Dokulu Oversize Gömlek Beyaz" sliderTi="outfiit man" sliderP="109,95 TL"/>
          <CardContents sliderI="https://cdn.dsmcdn.com/ty581/product/media/images/20221025/17/202211058/17393792/1/1_org.jpg" sliderT="Cooler Erkek Deodorant 6x150ml" sliderTi="Blade" sliderP="180 TL"/>
          <CardContents sliderI="https://cdn.dsmcdn.com/ty707/product/media/images/20230128/3/268159825/601391002/2/2_org.jpg" sliderT="Gri Erkek Geniş Kesim Bisiklet Yaka" sliderTi="TRENDYOL MAN" sliderP="110 TL"/>
          <CardContents sliderI="https://cdn.dsmcdn.com/ty816/product/media/images/20230407/13/319981327/905141114/2/2_org.jpg" sliderT="Hızlı Saç Uzatma Serumu Serumu Serumu" sliderTi="eliamora" sliderP="149 TL"/>
          
        </Slider>
            </div>
            <div>
   
      </div>
        </div>
        </div></div>
  )
}
}
