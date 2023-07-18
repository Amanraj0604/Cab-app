import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../image/first.jpg"
import img2 from "../image/second.jpg"
import img3 from "../image/thired.jpg"
const Slide = () => {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src={img1} class="d-block w-100" alt="..."/>
                        {/* <div className="carousel-caption d-none d-md-block">
                        <button className="btn btn-warning"><Link to={'/Cabapp'}>BOOK HEAR</Link></button>
                        </div> */}
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src={img2} class="d-block w-100" alt="..."/>
                        {/* <div className="carousel-caption d-none d-md-block">
                        <button className="btn btn-warning"><Link to={'/Cabapp'}>BOOK HEAR</Link></button>
                        </div> */}
                </div>
                <div className="carousel-item">
                    <img src={img3} className="d-block w-100" alt="..."/>
                        {/* <div className="carousel-caption d-none d-md-block">
                        <button className="btn btn-warning"><Link to={'/Cabapp'}>BOOK HEAR</Link></button>
                        </div> */}
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden"></span>
            </button>
        </div>
    );
};

export default Slide
