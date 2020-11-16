import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
    const shoppingCart = useSelector(state => state.shoppingCart);
    const state = useSelector(state => state)
    
    const dispatch = useDispatch();
    return (
        <div className="container mt-5 border-top">
           <div className="row">
               <div className="col-md-8 border-right">
               {
                   shoppingCart.length ? shoppingCart.map(product =>(
                        <div className="cart" key={product.id}>
                            <span className="cartProImage">
                                <img src={product.img} alt="not found"/>
                            </span>
                            <span className="cartProductName">{product.name}</span>
                            <span className="cartProductPrice">${product.Price}.00</span>
                            <span className="inc" onClick={() => dispatch({type : 'INC',id : product.id})}><i className="fas fa-plus"></i></span>
                            <span className="productQuantity">{product.qty}</span>
                            <span className="dec"><i className="fas fa-minus" onClick={() => dispatch({type:'DEC',id : product.id})}></i></span>
                            <span className="productTotalPrice">${product.qty * product.Price}.00</span>
                            <button className="deleteCartPro" onClick={() => dispatch({type : 'DELETE',id : product.id})}><i className="fas fa-trash-alt"></i></button>
                        </div>
                   )): 'Your cart is currently empty!'
               }
               </div>

               <div className="col-md-4">
<h4 className="mt-5 ">ORDER SUMMARY</h4>
<div className="row my-3 text-success">
    <div className="col-md-6">
        Total Price
    </div>
    <div className="col-md-6">
        ${state.totalPrice}
    </div>
</div>
<p>Shipping, taxes, and discounts will be calculated at checkout.</p>
<button className="btn btn-success w-100">Proceed To Checkout </button>
               </div>
           </div>
        </div>
      
    );
};

export default Cart;