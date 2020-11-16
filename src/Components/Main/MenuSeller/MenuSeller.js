import React from 'react';
import menuSeller from '../../../Grocary/menuSeller.webp';
const MenuSeller = () => {
    return (
        <div className="" style={{width:'85vw'}}>
            <div className="container">
            <div className="row">
                <div className="col-md-3  border-right">
                <h3 className="bg-success text-white p-1">Seeds</h3>
                    <p>Beetroot</p>
                    <p>Badam</p>
                    <p>Cookies</p>
                    <p>Capsicum</p>
                    <p>Coriander</p>
                    <p>Choco</p> 
                    <p>Cookies</p>
                    <p>Cookies</p>
                </div>
                <div className="col-md-3  border-right">
                <h3 className="bg-success text-white p-1 w-100">Cookies</h3>
                    <p>Beetroot</p>
                    <p>Butter</p>
                    <p>Cookies</p>
                    <p>Capsicum</p>
                    <p>Coriander</p>
                    <p>Choco</p> 
                    <p>Cookies</p>
                    <p>Capsicum</p>
                </div>
                <div className="col-md-3  border-right">
                <h3 className="bg-success text-white p-1">Dairy</h3>
                    <p>Beetroot</p>
                    <p>Badam</p>
                    <p>Apple</p>
                    <p>Broccoli</p>
                    <p>Brown</p> 
                    <p>Rice</p>
                    <p>Butter</p>
                    <p>Broccoli</p>
                </div>
                <div className="col-md-3 mt-2">
                    <img src={menuSeller}  style={{height:'90%'}} alt=""/>
                </div>
            </div>
            </div>
        </div>
    );
};

export default MenuSeller;