import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MenuContext } from '../../../App';
import ProductData from '../../../ProductData';

const MenuItem = () => {
    const [menu,setMenu] = useContext(MenuContext);
    const [menuItem,setMenuItem] = useState([]);
    console.log(menuItem)

    useEffect(()=>{
        const matchedItem = ProductData.filter(item => item.category === menu.toLowerCase());
        setMenuItem(matchedItem)
    },[menu]);
    const dispatch = useDispatch();

    const state = useSelector(state => state);
    console.log(state)
    return (
        <div className="container">
        <div className="row">
           {
               menuItem.map(item => (
                   <div className="col-md-3 col-6">
                         <div className="card-body item-card shadow mb-3 text-center">
                            <Link to={"/item/"+item.id}> <img src={item.img} className="w-100" alt=""/>
                            <h5 className="text-capitalize text-dark">{item.name}</h5>
                            </Link>
                         {
                             item.weight === 1 ?   
                             <>
                             <span><i class="fas fa-star text-warning"></i></span>
                             <span><i class="fas fa-star text-warning"></i></span>
                             <span><i class="fas fa-star text-warning"></i></span>
                             <span><i class="fas fa-star text-warning"></i></span>
                             <span><i class="fas fa-star text-secondary"></i></span>
                             </>
                             
                             : 
                             <>
                             <span><i class="fas fa-star text-warning"></i></span>
                             <span><i class="fas fa-star text-warning"></i></span>
                             <span><i class="fas fa-star text-warning"></i></span>
                             <span><i class="fas fa-star text-warning"></i></span>
                             <span><i class="fas fa-star text-warning"></i></span>
                             </>

                         
                         }
                            <p>{item.weight}Kg</p>
                          <span className="font-weight-bold">${item.Price}</span> <del className="text-secondary">${item.Price + 20}</del>
                          
                            <br/>
                            <br/>
                            <button onClick={() => dispatch({type : 'ADD_TO_CART',id: item.id, products : menuItem})} className="btn btn-success">Add To Cart</button>
                          
                        
                           
                           {
                               item.status === 'new' &&  <h5 className="item-status new">{item.status}</h5>
                           }
                           {
                               item.status ==='Hot' && <h5 className="item-status hot">{item.status}</h5>
                           }
                          
                     </div>
                   </div>
               ))
           }
        </div>
        </div>
    );
};

export default MenuItem;