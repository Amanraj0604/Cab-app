import React, { useState } from 'react';
import "./App.css";
import Menucard from './Menucard';
import Menu from "./menuApi"

const Cabapp = () => {
  const [MenuData , setMenuData ]=useState(Menu);
  const filterItem=(category)=>{
     const updatedList=Menu.filter((CurElem)=>{
          return CurElem.category === category;
     })
     setMenuData(updatedList)
  };
  return (
     <div>
      <nav className="navbar">
        <div className="btn-group">
          <button className="btn-group__item" onClick= {()=>filterItem("CAR")}>CAR</button>
          <button className="btn-group__item" onClick={()=>filterItem("AUTO")}>AUTO</button>
          <button className="btn-group__item" onClick={()=>filterItem("BUS")}>BUS</button>
          <button className="btn-group__item" onClick={()=>filterItem("PER")}>PRIMEUM</button>
          <button className="btn-group__item" onClick={()=> setMenuData(Menu)}>all</button>

        </div>
      </nav>
        < Menucard MenuData={MenuData}/>
  
     </div>
            
  );
};

export default Cabapp
