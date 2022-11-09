import React from 'react';

const ServicesDetailes = ({service}) => {
    const {_id, img,title, description, price} = service;
    return (
        <div className='mb-5'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <h2 className='text-lg text-orange-600'>Price:{price}</h2>
                    <div className="card-actions justify-end">
                    <button className="btn btn-active btn-secondary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetailes;