import React from "react";
import Slider from "react-slick";
import client1 from '../../../Grocary/client/client1.webp';
import client2 from '../../../Grocary/client/client2.webp';
import client3 from '../../../Grocary/client/client3.webp';
 
export default function ClientSay() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
      };
  return (
      <div className="client-container">
      <div className="container my-4 pt-5">
          <div className="text-center py-3">
          <h1 className="text-success">Our Client Say!</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          </div>
    <Slider {...settings}>
            <div>
            <div class="card text-center shadow my-5 bg-white">
                    <div class="card-header d-flex mx-auto align-items-center bg-transparent border-0">
                       <img src={client1} alt=""/>
                       <h3 className="ml-3">Jara Jofra</h3>
                    </div>
                    <div class="card-body">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur temporibus expedita natus earum doloremque ullam omnis corrupti itaque neque similique ea voluptates hic repudiandae reprehenderit
                           assumenda dolore, nesciunt consequatur odio incidunt et numquam. Nihil, ab eos. Voluptate, qui. Dolore, neque.</p>
                    </div>
                    </div>
            </div>

          
            <div>
            <div class="card text-center shadow my-5 ">
                    <div class="card-header d-flex mx-auto align-items-center bg-transparent border-0">
                       <img src={client2} alt=""/>
                       <h3 className="ml-3">Rimman Fardele</h3>
                    </div>
                    <div class="card-body">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur temporibus expedita natus earum doloremque ullam omnis corrupti itaque neque similique ea voluptates hic repudiandae reprehenderit
                           assumenda dolore, nesciunt consequatur odio incidunt et numquam. Nihil, ab eos. Voluptate, qui. Dolore, neque. numquam. Nihil, ab eos. Voluptate, qui. Dolore, neque.</p>
                    </div>
                    </div>
            </div>
            <div>
            <div class="card text-center shadow my-5 ">
                    <div class="card-header d-flex mx-auto align-items-center bg-transparent border-0">
                       <img src={client3} alt=""/>
                       <h3 className="ml-3">Alex Jreas</h3>
                    </div>
                    <div class="card-body">
                      <p>Lorem ipsum dolor sit amet consectetur adipis expedita natus earum doloremque ullam omnis corrupti itaque neque similique ea voluptates hic repudiandae reprehenderit
                           assumenda dolore, nesciunt consequatur odio incidunt et numquam. Nihil, ab eos. Voluptate, qui. Dolore, neque. numquam. Nihil, ab eos. Voluptate, qui. Dolore, neque.</p>
                    </div>
                    </div>
                    </div>
       
    
    </Slider>
    </div>
    </div>
  );
}