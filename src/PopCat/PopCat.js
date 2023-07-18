import React from 'react';
import './PopCat.css'
import img1 from '../component/menu/images/4siter.png';
import img2 from '../component/menu/images/7siter.png';
import img3 from '../component/menu/images/thar.png';



const PopCat = () => {
    return (
        <>
        <div className="hedd"><br /><h1>Customer Choice</h1><br /></div>
        <div class="box1">
            <div class="card1">
                <div class="imgBx1">
                <img src={img1} />
                </div>
                <div class="details">
                    <h2>4 SEATER<span>AC Car</span></h2>
                </div>
            </div>

            <div class="card1">
                <div class="imgBx1">
                <img src={img2} />
                </div>
                <div class="details">
                    <h2>7 SEATER<span>AC Car</span></h2>
                </div>
            </div>

            <div class="card1">
                <div class="imgBx1">
                <img src={img3} />
                </div>
                <div class="details">
                    <h2>THAR<span>"""""</span></h2>
                </div>
            </div>

        </div>
        <br />
        <br />
        </>
    )
}

export default PopCat
