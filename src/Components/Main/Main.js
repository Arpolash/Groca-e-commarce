import React from 'react';
import Discount from '../../Components/Main/Discount/Discount';
import ClientSay from '../../Components/Main/ClientSay/ClientSay';
import News from '../../Components/Main/News/News';
import NewsLatter from '../../Components/Main/NewsLatter/NewsLatter';
import Partner from '../../Components/Main/Partner/Partner';
import Footer from '../../Components/Main/Footer/Footer';
import Menu from '../../Components/Main/Menu/Menu';
import Slider from '../../Components/Main/Slider/Slider';

const Main = () => {
    return (
        <>
            <Slider></Slider>
      <Menu></Menu>
      <Discount></Discount>
      <ClientSay></ClientSay>
      <News></News>
      <NewsLatter></NewsLatter>
      <Partner></Partner>
      <Footer></Footer>
        </>
    );
};

export default Main;