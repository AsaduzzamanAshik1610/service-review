import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../Context/Authprovider';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(Authcontext)
    const location = useLocation();
    if(loading){
        return <h1 className='text-5xl'>Loading...</h1>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoutes;