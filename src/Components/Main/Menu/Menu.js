import React, { useContext } from 'react';
import { MenuContext } from '../../../App';
import fruits from '../../../Grocary/icon/fruits.webp';
import meat from '../../../Grocary/icon/meat.webp';
import flour from '../../../Grocary/icon/flour.webp';
import vegies from '../../../Grocary/icon/vegies.webp';
import ProductData from '../../../ProductData';
import MenuItem from './MenuItem';

const Menu = () => {
    const [menu,setMenu] = useContext(MenuContext)
    console.log(menu)
    return (
        <div className="container">
            <div className="text-center">
            <h1>Our Products</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
            <div className="my-5 list-icon">
            <ul className="nav justify-content-center">
                <li onClick={() => setMenu('vegetable')} className="nav-item  text-center mx-4">
                <img src={vegies} alt="not found"/>
                    <h5>Vegetables</h5>
                </li>
                <li onClick={() => setMenu('flour')} className="nav-item  text-center mx-4">
                <img src={flour} alt="not found"/>
                    <h5>Flour</h5>
                </li>
                <li onClick={() => setMenu('fruits')} className="nav-item  text-center mx-4">
                <img src={fruits} alt="not found"/>
                    <h5>Fruits</h5>
                </li>
                <li onClick={() => setMenu('meat')} className="nav-item  text-center mx-4">
                <img src={meat} alt="not found"/>
                    <h5>Meat</h5>
                </li>
                </ul>
            </div>
            <div>
                <MenuItem></MenuItem>
            </div>
        </div>
    );
};

export default Menu;