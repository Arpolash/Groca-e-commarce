import React from 'react';

const NewsLatter = () => {
    return (
        <div className="my-5 bg-success" style={{height:'300px',position:'relative'}}>
             <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}>
            <h3 className="text-center text-white mb-4">Subscribe to our NewsLatter </h3>
            <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2 w-75" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-danger my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
        </div>
    );
};

export default NewsLatter;