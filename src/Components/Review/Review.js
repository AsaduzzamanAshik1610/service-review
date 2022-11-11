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
        </div>
    );
};

export default Review;