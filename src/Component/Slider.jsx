import React, { Component } from "react";
import Slider from "react-slick";


export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      initialSlide: 0,
 
    };
    return (
      <div className="mynameSlider">
<style>
  {`
    .mynameSlider .slick-slide {
      width: 128px !important;
      text-align: center !important;
    }
    .mynameSlider .slick-arrow {
     display:none !important;
    }
  `}
</style>

        <div className="container sliderConta ">
            <div className="row">
                <div className="col-12 sliderCol1">
        <Slider {...settings} >
          <div className="slider1" width={170}>
            <h5 className="text-center">
                <img width={70} className="m-auto imgSlider" src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/6/6/Firsat_Urunleri_202306062011.png" alt="" />
                
            </h5>
            <span className="text-center sliderSpan">Tüm Ürünler</span>
          </div>
          <div>
            <h5> <img width={70}  className="m-auto imgSlider" src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/6/6/Secili_Urunler_202306062011.png" alt="" /></h5>
            <span className="text-center font-weight-bold">Kaçırma!</span>

          </div>
          <div>
            <h5> <img width={70} className="m-auto imgSlider" src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/2/14/En_Cok_Satanlar_202302142041.png" alt="" /></h5>
            <span className="text-center sliderSpan">Sen De Al!</span>
            
          </div>
          <div>
          <h3> <img width={70} className="m-auto imgSlider" src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/2/14/Senin_Icin_Sectik_202302142041.png" alt="" /></h3>
          <span className="text-center sliderSpan">Sana Özel</span>

          </div>
          <div>
          <h3> <img width={70} className="m-auto imgSlider" src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2022/11/29/Screenshot20221128At163430_202211290324.png" alt="" /></h3>
          <span className="text-center sliderSpan">Kurumsal</span>

          </div>
          <div>
          <h3> <img width={70} className="m-auto imgSlider" src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/26/Apple_202301262111.jpg" alt="" /></h3>
          <span className="text-center sliderSpan">Apple</span>

          </div>
          <div>
          <h3> <img width={70} className="m-auto imgSlider" src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Puma_202301271558.jpg " alt="" /></h3>
          <span className="text-center sliderSpan">Puma</span>

          </div>
          <div>
          <h3> <img width={70} className="m-auto imgSlider" src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/3/31/Topstory_202303311553.jpg" alt="" /></h3>
          <span className="text-center sliderSpan">Pull & Bear</span>

          </div>
          <div>
          <h3> <img width={70} className="m-auto imgSlider" src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/26/Adidas_202301262144.png" alt="" /></h3>
          <span className="text-center sliderSpan">Adidas</span>

          </div>
          <div>
          <h3> <img width={70} className="m-auto imgSlider" src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Sony_202301271715.jpg" alt="" /></h3>
          <span className="text-center sliderSpan">Sonny</span>

          </div>
          <div>
          <h3> <img width={70} className="m-auto imgSlider" src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Lufian_202301270444.png" alt="" /></h3>
          <span className="text-center sliderSpan">Lufıan</span>

          </div>
          <div>
          <h3> <img width={70} className="m-auto imgSlider" src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Nike_202301271540.jpg" alt="" /></h3>
          <span className="text-center sliderSpan">Nıke</span>

          </div>
          <div>
          <h3> <img width={70} className="m-auto imgSlider" src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Philips_202301271558.jpg" alt="" /></h3>
          <span className="text-center sliderSpan">Phılıps</span>

          </div>
          <div>
          <h3> <img width={70} className="m-auto imgSlider" src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/28/Xiaomi_202301280236.jpg" alt="" /></h3>
          <span className="text-center sliderSpan">Xiaomi</span>

          </div>
          <div>
          <h3> <img width={70} className="m-auto imgSlider" src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/4/26/Stradivarius_202304260936.png" alt="" /></h3>
          <span className="text-center sliderSpan">Stradivarius</span>

          </div>
          <div>
          <h3> <img width={70} className="m-auto imgSlider" src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Oysho_202301271558.jpg" alt="" /></h3>
          <span className="text-center sliderSpan">Oysho</span>

          </div>
          <div>
          <h3> <img width={70} className="m-auto imgSlider" src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/26/Altinyildizclassics_202301262144.png" alt="" /></h3>
          <span className="text-center sliderSpan">AltınYıldız</span>

          </div>
          <div>
          <h3> <img width={70} className="m-auto imgSlider" src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Defacto_202301270049.jpg" alt="" /></h3>
          <span className="text-center sliderSpan">Defacto</span>

          </div>
          <div>
          <h3> <img width={70} className="m-auto imgSlider" src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Nike_202301271540.jpg" alt="" /></h3>
          <span className="text-center sliderSpan">Nıke</span>

          </div>
          <div>
          <h3> <img width={70} className="m-auto imgSlider" src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/26/Altinyildizclassics_202301262144.png" alt="" /></h3>
          <span className="text-center sliderSpan">AltınYıldız</span>

          </div>  <div>
          <h3> <img width={70} className="m-auto imgSlider" src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Roborock_202301271629.jpg" alt="" /></h3>
          <span className="text-center sliderSpan">Roborock</span>

          </div>  <div>
          <h3> <img width={70} className="m-auto imgSlider" src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Hummel_202301270232.jpg" alt="" /></h3>
          <span className="text-center sliderSpan">Hummel</span>

          </div>
          <div>
          <h3> <img width={70} className="m-auto imgSlider" src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Sony_202301271715.jpg" alt="" /></h3>
          <span className="text-center sliderSpan">Sonny</span>

          </div>
        </Slider>
                </div>
            </div>
        </div>
    
      </div>
    );
  }
}