import React, { useState } from 'react'
import { BsCart3 } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsList,BsChevronRight } from "react-icons/bs";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { GrRestroomWomen,GrRestroomMen,GrBaby,GrRun,GrYoga,GrHome,GrShop,GrApple,GrBook,GrUser,GrCodeSandbox,GrTicket,GrHelp,GrLanguage,GrPowerShutdown} from "react-icons/gr";
import ResponsiveNav from './ResponsiveNav';

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    
    <div>
      {/* navbar kismi */}
        <div className="container navbarCon">
      <div className="navT">
        <div className="row">
          <div className="col-2">

      <h1>trendyol</h1>

          </div>
          <div className="col-5">
            <div className='navPoT'>
            <input className='inputGi' placeholder='Aradığınız ürün, kategori veya markayı yazınız' type="text" />
            <BsSearch className='icons'/> 

            </div>
          </div>
          <div className="col-5">
                   <div className="kisimlar ">
          <ul className='d-flex '>
              <li><a href="@"><BsPerson className='icon'/>Hesabım</a></li>
              <li className='ms-5'><a href="@"><BsHeart className='icon'/>Favorilerim</a></li>
              <li className='ms-5'><a href="@"><BsCart3 className='icon'/>Sepetim</a></li>
        </ul>
        </div>
          </div>

        </div>
      </div>


<div className="navTr">
  <div className="row">
    <div className="col-6 listIconCol">
      <p className='listIconP'>
      <BsList className='listIcon' onClick={handleShow} />
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h2>trendyol</h2>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul className='ps-0'>
          <li className='liOff'>
            <div>
            <GrRestroomWomen className='iconOff'/>
            <a className='aOff' href="@">KADIN </a>
            </div>         
            <BsChevronRight className='iconOfr'/>            
          </li>
          <hr />
          <li className='liOff  mt-4'>
            <div>
            <GrRestroomMen className='iconOff'/>
            <a className='aOff' href="@">ERKEK </a>
            </div>         
            <BsChevronRight className='iconOfr'/>            
          </li>
          <hr />
          <li className='liOff  mt-4'>
            <div>
            <GrBaby className='iconOff'/>
            <a className='aOff' href="@">ANNE&ÇOCUK </a>
            </div>         
            <BsChevronRight className='iconOfr'/>            
          </li>
          <hr />
          <li className='liOff  mt-4'>
            <div>
            <GrYoga className='iconOff'/>
            <a className='aOff' href="@">SPOR&OUTDOOR</a>
            </div>         
            <BsChevronRight className='iconOfr'/>            
          </li>
          <hr />
          <li className='liOff  mt-4'>
            <div>
            <GrRun className='iconOff'/>
            <a className='aOff' href="@">AYAKKABI&ÇANTA </a>
            </div>         
            <BsChevronRight className='iconOfr'/>            
          </li>
          <hr />
          <li className='liOff  mt-4'>
            <div>
            <GrHome className='iconOff'/>
            <a className='aOff' href="@">EV&MOBILYA  </a>
            </div>         
            <BsChevronRight className='iconOfr'/>            
          </li>
          <hr />
          <li className='liOff  mt-4'>
            <div>
            <GrShop className='iconOff'/>
            <a className='aOff' href="@">SÜPERMARKET  </a>
            </div>         
            <BsChevronRight className='iconOfr'/>            
          </li>
          <hr />
          <li className='liOff  mt-4'>
            <div>
            <GrApple className='iconOff'/>
            <a className='aOff' href="@">ELEKTRONİK  </a>
            </div>         
            <BsChevronRight className='iconOfr'/>            
          </li>
          <hr />
          <li className='liOff  mt-4'>
            <div>
            <GrBook className='iconOff'/>
            <a className='aOff' href="@">KİTAP/KIRTASİYE  </a>
            </div>         
            <BsChevronRight className='iconOfr'/>            
          </li>
          <hr />
          <li className='liOff  mt-4'>
            <div>
            <GrUser className='iconOff'/>
            <a className='aOff text-black' href="@">Hesabım</a>
            </div>         
            <BsChevronRight className='iconOfr'/>            
          </li>
          <hr />
          <li className='liOff  mt-4'>
            <div>
            <GrCodeSandbox className='iconOff'/>
            <a className='aOff text-black' href="@">SİPARİŞLERİM</a>
            </div>         
            <BsChevronRight className='iconOfr'/>            
          </li>
          <hr />
          <li className='liOff  mt-4'>
            <div>
            <GrTicket className='iconOff'/>
            <a className='aOff text-black' href="@">İNDİRİM KUPONLARIM</a>
            </div>         
            <BsChevronRight className='iconOfr'/>            
          </li>
          <hr />
          <li className='liOff  mt-4'>
            <div>
            <GrHelp className='iconOff'/>
            <a className='aOff text-black' href="@">YARDIM</a>
            </div>         
            <BsChevronRight className='iconOfr'/>            
          </li>
          <hr />
          <li className='liOff  mt-4'>
            <div>
            <GrLanguage className='iconOff'/>
            <a className='aOff text-black' href="@">ÜLKE DEĞİŞTİR</a>
            </div>         
            <BsChevronRight className='iconOfr'/>            
          </li>
          <hr />
          <li className='liOff  mt-4'>
            <div>
            <GrPowerShutdown  className='iconOff'/>
            <a className='aOff text-black' href="@">ÇIKIŞ YAP</a>
            </div>         
            <BsChevronRight className='iconOfr'/>            
          </li>
          <hr />
        </ul>

        </Offcanvas.Body>
      </Offcanvas>

      
    <p className='listIconp'>
    menü</p>
      </p>

      <h1 className='navbaH1'> trendyol</h1>
    </div>
    <div className="col-6">
    <div className='mediaIcon'>
          <BsPerson className='iconR'/>
          <BsHeart className='iconR'/>
          <BsCart3 className='iconR'/>
        </div>
    </div>
  </div>
    <input className='inputGit' placeholder='  Kategori, ürün veya marka ara' type="text" /><BsSearch className='iconsR'/> 

</div>
<div className='resposNav'>
<ResponsiveNav />

</div>

    {/* navbar kismi bitisi */}



</div>


     <div className="container headerEti">
      <div className="row">
        <ul className='d-flex'>
          <li><a className='etiketlera' href="@">KADIN</a></li>
          <li><a className='etiketlerA' href="@">ERKEK</a></li>
          <li><a className='etiketlerA' href="@">ANNE&ÇOCUK</a></li>
          <li><a className='etiketlerA' href="@">SÜPERMARKET</a></li>
          <li><a className='etiketlerA' href="@">AYAKKABI&ÇANTA</a></li>
          <li><a  className='etiketlerA'href="@">ELEKTRONİK</a></li>
          <li><a className='etiketlerA' href="@">SPOR&OUTDOOR</a></li>
          <li><a  className='etiketlerA'href="@">ÇOK SATANLAR <span>Yeni</span></a></li>
          <li><a className='etiketlerA' href="@">FLAŞ ÜRÜNLER <span>Yeni</span></a></li>
        </ul>
      </div>
     </div>
     <hr />
     {/* 3 Resimli Yer */}
     <div className="container headerEti2">
      <div className="row d-flex  headeralt1 mt-3">
        <div className="col-lg-4 col-12 headeraltCo ">
          <img className='headeralt1Re' src="https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2023/2/20/Siparisinumut_Tepebanner_200223_202302202219.jpg" alt="" />
        </div>
        <div className="col-lg-4 col-12 headeraltCo">
          <img className='headeralt1Re' src="https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2023/2/17/Bakanlik1_202302171954.jpg" alt="" />
        </div>
        <div className="col-lg-4 col-12 headeraltCo">
          <img className='headeralt1Re' src="https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2023/4/6/Tobb_Tepebanner_0304231_202304061225.png" alt="" />
        </div>
      </div>
     </div>
     {/* 3 Resimli Yer */}
    </div>
  )
}

export default Header