import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../../Components/assest/images/cox.5.jpg'
const Travelpart = () => {
    return (
        <div>
            <div className=" mt-5 card card-compact w-96 bg-base-100 mx-auto shadow-xl">
                <figure><img src={pic} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Coxbazer beach side</h2>
                    <p>onek popular resort saradeser manush ekhane ase moja kore. tachara amader desher onek boro beach deshe bidesh theke onek porjotok ase </p>
                    <h2 className='text-orange-600'>cost: 2000tk</h2>
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