import React, { useEffect, useState } from 'react';
import ServicesDetailes from '../ServicesDetailes/ServicesDetailes';

const Allservices = () => {
  
    const [services, setservices] = useState([]);
    useEffect(()=>{
       fetch('http://localhost:5000/services')
           .then(res => res.json())
           .then(data => setservices(data))
   },[])
            return (
            <div className='grid grid-cols-1 md:grid-cols-2 ml-12 mb-5 lg:grid-cols-3 mt-5'>
                {
                    services.map(service => <ServicesDetailes
                        key={service}
                        service={service}
                    ></ServicesDetailes>)
                }
            </div>
            );
    

};

export default Allservices;