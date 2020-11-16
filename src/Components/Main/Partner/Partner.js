import React from 'react';
import Slider from "react-slick";
import partner1 from '../../../Grocary/supsore/spon1.webp';
import partner2 from '../../../Grocary/supsore/spon2.webp';
import partner3 from '../../../Grocary/supsore/spon3.webp';
import partner4 from '../../../Grocary/supsore/spon4.webp';
import partner5 from '../../../Grocary/supsore/spon5.webp';
import partner6 from '../../../Grocary/supsore/spon6.webp';
import partner7 from '../../../Grocary/supsore/spon7.webp';
import partner8 from '../../../Grocary/supsore/spon8.webp';
import partner9 from '../../../Grocary/supsore/spon9.webp';
import partner10 from '../../../Grocary/supsore/spon10.webp';


const Partner = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 5500,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
      };
    return (
        <div style={{width:'98%'}}>
             <Slider {...settings}>
            <div className="d-flex">
                <img src={partner9} alt=""/>
                <img src={partner4} alt=""/>
                <img src={partner5} alt=""/>
            </div>
            <div className="d-flex">
                <img src={partner1} alt=""/>
                <img src={partner2} alt=""/>
                <img src={partner3} alt=""/>
                
            </div>
            <div className="d-flex">
                <img src={partner6} alt=""/>
                <img src={partner7} alt=""/>
                <img src={partner2} alt=""/>
            </div>
            <div className="d-flex">
                <img src={partner10} alt=""/>
                <img src={partner4} alt=""/>
                <img src={partner8} alt=""/>
            </div>
    </Slider>
        </div>
    );
};

export default Partner;