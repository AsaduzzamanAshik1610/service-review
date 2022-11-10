import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TravelDetails = () => {
    const user = useLoaderData()
    const { _id, img, title, description, price } = user;
    return (
        <div className='mt-5'>
            <div className="card w-64 bg-base-100 mx-auto shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-3xl text-orange-600 mr-5'>Price:{price}</p>
                </div>
            </div>
            <div className='bg-current	m-5 rounded-lg'>
                <p className='p-5 m-5 text-white'>Description:{description}</p>
            </div>
        </div>
    );
};

export default TravelDetails;