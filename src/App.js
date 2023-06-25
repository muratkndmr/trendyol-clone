import React from 'react';
import Slider from './Component/Slider';
import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import Main from './Component/Main';
import CardSlider from './Component/CardSlider';

import 'bootstrap/dist/css/bootstrap.min.css';
import CardTicket from './Component/CardTicket';
import SectionT from './Component/SectionT';
import './Sass/style.css';


function App() {




  return (
    <div className="App">
      <Navbar />
      <Header />
      <Slider/>
      <CardTicket/>
      <Main />
      <CardSlider/>
      <Main />
      <CardSlider/>
      <Main />
      <SectionT/>
      <Footer />



      
      


    </div>
  );
}

export default App;
