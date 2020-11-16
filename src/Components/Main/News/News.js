import React from 'react';
import blog1 from '../../../Grocary/news/blog1.webp';
import blog2 from '../../../Grocary/news/blog2.webp';
import blog3 from '../../../Grocary/news/blog3.webp';

const News = () => {
    return (
        <div className="container my-5">
           <div className="text-center mb-5">
           <h1>Our Latest News</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
           </div>
           <div className="row">
                <div className="col-md-6">
                    <img src={blog1} className="w-100 rounded" alt=""/>
                </div>
               <div className="col-md-3">
                    <div className="news-img">
                        <img src={blog2} className="w-100 rounded" alt=""/>
                    </div>
                    <div className="news-img">
                        <img src={blog3} className="w-100 mt-3 rounded" alt=""/>
                    </div>
                
               </div>
               <div className="col-md-3">
                       <div className="news-details">
                        <h6>March 25, 2020</h6>
                        <h6>Best way to eat Dry Fruits and Nuts</h6>
                        <p>March 25, 2020
                        Best way to eat Dry Fruits and NutsLorem ipsum dolor..</p>
                  <button className="btn btn-success">Read More</button>
                    </div>
                        <div className="news-details mt-4">
                        <h6>March 25, 2020</h6>
                        <h6>Best way to eat Dry Fruits and Nuts</h6>
                        <p>March 25, 2020
                        Best way to eat Dry Fruits and NutsLorem ipsum dolor..</p>
                  <button className="btn btn-success">Read More</button>
                    </div>
               </div>
           </div>
           <div className="row mt-5">
               <div className="col-md-6 pt-3">
               <h6>March 25, 2020</h6>
               <h5>Best In Quality Fresh Meat & Seafood</h5>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna a...</p>
               <button className="btn btn-success">Read More</button>
               </div>
               <div className="col-md-6">
                   <div className="row">
                       <div className="col-md-6">
                           <img src={blog1} className="w-100 rounded" alt=""/>
                       </div>
                       <div className="col-md-6">
                       <h6>March 25, 2020</h6>
                       <h5>Go Early For Shopping The Freshest food</h5>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing  tempo...</p>
                       <button className="btn btn-success">Read More</button>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    );
};

export default News;