import React from 'react';
import slider1 from '../../../Grocary/Banner/Banner1.webp';
import slider2 from '../../../Grocary/Banner/Banner2.webp';
import slider3 from '../../../Grocary/Banner/Banner3.webp';
import './Slider.scss';
import bannerBottom1 from '../../../Grocary/Header Bottom/header-bottom1.webp';
import bannerBottom2 from '../../../Grocary/Header Bottom/Header-bottom2.webp';
const Slider = () => {
    return (
        <div className="mt-5">
            <div id="carouselExampleControls" class="carousel slide pb-5" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={slider1} class="d-block w-100" alt="..."/>
      <div className="mb-5 banner-text2">
          <h3>Natural Health care Ingredients</h3>
          <h1 className="text-success">Grocery Shopping</h1>
          <h5>Save upto 30% off</h5>
          <button className="btn btn-success">Shop Now</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src={slider2} class="d-block w-100" alt="..."/>
      <div className="mb-5 banner-text groca-style">
          <h3>GROCA</h3>
          <h1 className="text-success">Vegetable 100% organic</h1>
          <h5>Natural Health Care Ingredients</h5>
          <h1>50% off</h1>
          <button className="btn btn-success">Shop Now</button>
      </div>
     
    </div>
    <div class="carousel-item">
      <img src={slider3} class="d-block w-100" alt="..."/>
      <div className="mb-5 banner-text2">
          <h3>100% Healthy & Affordable</h3>
          <h1 className="text-success"> Organic Vegetables</h1>
          <h5>Small Changes Big Difference</h5>
          <button className="btn btn-success">Shop Now</button>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        <div className="container mb-5">
        <div className="row ">
           <div className="col-md-6 col-12">
               <div className="row d-flex justify-content-center align-items-center">
               <div className="col-md-6">
                <div className="sliderBottom-img" >
                    <img src={bannerBottom1}  alt=""/>
                </div>
            </div>
            <div className="col-md-6  p-3 col-12 text-white" style={{backgroundColor:'#c04c30e3'}}>
            <h2>Veggies</h2>
            <h5>100% Organic Products</h5>
            <button className="btn btn-success">Buy Now</button>
            </div>
               </div>
           </div>
           <div className="col-md-6 col-12 ">
           <div className="row d-flex justify-content-center align-items-center">
               <div className="col-md-6">
                <div className="sliderBottom-img">
                    <img src={bannerBottom2} alt=""/>
                </div>
            </div>
            <div className="col-md-6 p-3 col-12 text-white" style={{backgroundColor:'#cecb19e3'}}>
            <h2>Veggies</h2>
            <h5>100% Organic Products</h5>
            <button className="btn btn-success">Buy Now</button>
            </div>
               </div>
           </div>
        </div>
        </div>
        </div>
    );
};

export default Slider;