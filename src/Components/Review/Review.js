import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../Context/Authprovider';

const Review = () => {
    const {user} = useContext(Authcontext);
    const [review, setreview] = useState([])
    console.log(user);
   
    useEffect(()=>{
        fetch(`https://b6a11-service-review-server-side-asaduzzaman-ashik1610.vercel.app/review?email=${user?.email}`)
        .then(res=> res.json())
        .then(data=> setreview(data))
    },[user?.email])
    return (
        <div>
            <h2 className='text-5xl'>You have {review.length}</h2>
            <table className="table w-full">
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {/* {
            orders.map(order=> <OrderRaw 
                key={order._id}
                order={order}
                handleDelete= {handleDelete}
                handlestatusUpdate= {handlestatusUpdate}
            ></OrderRaw>)
        } */}
    </tbody>
  </table>
        </div>
    );
};

export default Review;