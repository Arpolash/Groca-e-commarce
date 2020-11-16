import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../Grocary/logo/logo.webp';
import MenuSeller from '../Main/MenuSeller/MenuSeller';
const Navbar = () => {
  const state = useSelector(state => state);
  console.log(state.qty)
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light">
        <Link to="/">
        <img src={logo} alt=""/></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item px-3active">
        <Link to="/" class="nav-link" href="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item"px-3>
        <Link to="/" class="nav-link">Shop</Link>
      </li>
      <li class="nav-item px-3dropdown">
        <Link to="/" class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Best Sellers
        </Link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <MenuSeller></MenuSeller>
        </div>
      </li>
      <li class="nav-item px-3dropdown">
        <Link to="/" class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Deal of the Day
        </Link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <MenuSeller></MenuSeller>
        </div>
      </li>
      <li class="nav-item px-3dropdown">
        <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         pages
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/">Action</a>
          <a class="dropdown-item" href="/">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="/">Something else here</a>
        </div>
      </li>
      <li class="nav-item px-3">
        <a class="nav-link" href="/">
            Contact Us <span class="sr-only"></span></a>
      </li>
    
     <li class="nav-item mt-2">
     <Link to="/cart">
        <i class="fas fa-cart-arrow-down "></i><span>{state.qty}</span> </Link>
      </li>
    
      <li class="nav-item ">
        <a class="nav-link" href="/">
        <i class="fas fa-user-alt"></i></a>
      </li>
     
    </ul>
  </div>
</nav>
      <div className="row mt-5 ml-5">
        <div className="col-md-3">
        <div class="dropdown ">
          <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-bars mr-2"></i> All Departments
          </button>
          <div class="dropdown-menu w-75" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="/">Organic</a>
            <a class="dropdown-item" href="/">Meat</a>
            <a class="dropdown-item" href="/">Food Grains</a>
            <a class="dropdown-item" href="/">Nutrition</a>
          </div>
        </div>
        </div>
      <div className="col-md-3">
        <div class="dropdown pl-5">
          <button class="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          All Categories
          </button>
          <div class="dropdown-menu w-25" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="/">Fruits</a>
            <a class="dropdown-item" href="/">Meat</a>
            <a class="dropdown-item" href="/">Vegetable</a>
            <a class="dropdown-item" href="/">Flour</a>
          </div>
      </div>
        </div>
      <div className="col-md-6">
          <div className="pr-5">
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2 w-75" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-success my-2 my-sm-0" type="submit">Search</button>
          </form>
     </div>
      </div>
      </div>
        </div>
    );
};

export default Navbar;