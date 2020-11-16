import React from 'react';
import foodMan from '../../../Grocary/foodMan.png';
import Countdown from 'react-countdown';
const Discount = () => {
    const Completionist = () => <span>You are good to go!</span>;
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return <Completionist />;
        } else {
          // Render a countdown
          return (
              <>
              <div className="row mt-5">
                  <div className="col-md-3">
                      <h2 className="text-success">{days}</h2>
                      <span>Days</span>
                  </div>
                  <div className="col-md-3">
                  <h2  className="text-success">{hours}</h2>
                      <span>Hours</span>
                  </div>
                  <div className="col-md-3">
                  <h2  className="text-success">{minutes}</h2>
                      <span>Minutes</span>
                  </div>
                  <div className="col-md-3">
                  <h2  className="text-success">{seconds}</h2>
                      <span>Seconds</span>
                  </div>
                  <button className="btn btn-success mx-auto mt-5 w-100">Buy Now</button>
              </div>
            </>
          );
        }
      };
    return (
        <div className="container pl-md-5">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6 pt-5 ">
               <h4 className="text-success mb-3"> Special Discount</h4>
                  <p>  for all Grocery products
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                     the industry's standard dummy text ever since the 1500s.</p>
                                    <Countdown
                    date={Date.now() + 999999000}
                    renderer={renderer}
                />
                                </div>
                <div className="col-md-6">
                    <img  className="w-100" src={foodMan} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Discount;