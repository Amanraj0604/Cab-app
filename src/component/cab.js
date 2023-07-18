import React from 'react';
import Cabapp from "./menu/Cabapp.js"
// import "./App.css"
import Tamplate from './besic/tamplate';
import Gift from '../Gift/Gift.js';
import Slide from './besic/slide';
import Footer from './Footer/footer';
import PopCat from '../PopCat/PopCat.js';
const Cab = () => {
  return (
    <div>
      
      <Slide/>
      <br />
      <br />
      {/* <Cabapp/> */}
      <Tamplate/>
      <Gift/>
      <PopCat/>
      <Footer/>
    </div>
  );
};

export default Cab
