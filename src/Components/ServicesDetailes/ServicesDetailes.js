import React from 'react';
import { Link } from 'react-router-dom';

const ServicesDetailes = ({ service }) => {
    const { _id, img, title, description, price } = service;
    return (
        <div className='mb-5'>
            <div className="card card-compact w-64 mx-auto gap-x-6 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <h2 className='text-lg text-orange-600'>Price:{price}</h2>
                    <div className="card-actions justify-end">
                        <Link to={`/services/${_id}`}>
                            <button className="btn btn-active btn-secondary">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetailes;