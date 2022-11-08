import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
         <div className="navbar bg-primary text-primary-content">
         <h4 className='text-white'>hospitality</h4>
         <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
         <Link className='mr-5' to='/'>Home</Link>
         <Link to='/login'>Login</Link>
       </div>
    </div>
);
};

export default Header;