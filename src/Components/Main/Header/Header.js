import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assest/logo.jpg';
const Header = () => {
    return (
        <div>
         <div className="navbar bg-primary text-primary-content">
         <img className='w-14 rounded-lg mr-5 ml-5' src={logo}></img>
         <h4 className='text-white mr-3'>Tour Bangladesh</h4>
         <Link className='mr-5' to='/'>Home</Link>
         <Link className='mr-3' to='/login'>Login</Link>
         <Link className='mr-3' to='/blog'>Blog</Link>
         <Link to='/services'>Services</Link>
       </div>
    </div>
);
};

export default Header;