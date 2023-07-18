import React, { useState } from 'react';
import Cab from './component/cab';
import First from './component/First';
import Adminfrom from './component/adminfrom';
import Login from './component/login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cabapp from './component/menu/Cabapp';
import Menu from './component/menu/menuApi';
import Adminlogin from './component/login/adminlogin.js'
import From from './component/booking/From.js';
import Contect from './component/contect/contect';
import Admindata from './component/booking/admindata';
// import Loginas from './component/login/loginas.js';
import PopCat from './PopCat/PopCat';
import Gift from './Gift/Gift';
import Rejister from './component/login/Rejister';
import Profile from './component/profile/profile';
import Dashbord from './component/besic/admin/dashbord';
import Popup from './component/popup';
import PaymentMethod from './component/pay';

const App = () => {
  const [mydata,  ] = useState(Menu);
  return (
    <div>

      <BrowserRouter>
        <First />
        {/* <Nav/>*/}
        <Routes>
          <Route path="/" element={<Cab />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Adminlogin" element={<Adminlogin />} />
          <Route path="/Cabapp" element={<Cabapp />} />
          <Route path="/from" element={<From />} />
          <Route path="/adfrom" element={<Adminfrom />}></Route>
          <Route path="/contect" element={<Contect />} />
          <Route path="/admindata" element={<Admindata />} />
          <Route path="/popcat" element={<PopCat />} />
          <Route path="/gift" element={<Gift />} />
          <Route path="/rej" element={<Rejister />}></Route>
          {/* <Route path="/profile" element={<Profile />}></Route> */}
          <Route path="/dash" element={<Dashbord />}></Route>
          {/* <Route path="/pop" element={<Popup/>}></Route> */}
          <Route path="/pay" element={<PaymentMethod/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
