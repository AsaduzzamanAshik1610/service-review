import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../../Components/assest/images/cox.5.jpg'
const Travelpart = () => {
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={pic} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <Link to='/travel'>
                          <button className="btn btn-primary">travel</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Travelpart;