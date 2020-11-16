import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductData from '../../../ProductData';

const MenuItemDetails = () => {
    let { itemKey } = useParams();
    const matchedItem = ProductData.filter(item => item.id === itemKey)
   const {name,img,Price,weight,id} = matchedItem[0];
    const dispatch = useDispatch();
    const [value, setValue] = useState(1)
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                 <img src={img} className="w-100" alt=""/>
                </div>
                <div className="col-md-6 mt-5">
                    <h2 className="text-success">{name}</h2>
                    <h4 className="text-secondary mt-2">Price : ${Price}.00</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat...</p>
                    <h4 className="text-secondary">Size : {weight} Kg</h4>
                    <div className="d-flex justify-content-space-evenly mt-3">
                    <h3 className="text-success">Quantity : </h3>
                    <span className="inc ml-5"  onClick={() => setValue(value + 1)}><i className="fas fa-plus "></i></span>
                            <span className="productQuantity">{value}</span>
                            <span className="dec" onClick={() => setValue(value - 1)}><i className="fas fa-minus"></i></span>
                    </div>
                    <button className=" btn btn-success mt-4 w-100" onClick={() => dispatch({type : 'ADD_TO_ITEM',id,products : matchedItem ,value})}>Add To Card</button>
                </div>
              
            </div>
        </div>
    );
};

export default MenuItemDetails;