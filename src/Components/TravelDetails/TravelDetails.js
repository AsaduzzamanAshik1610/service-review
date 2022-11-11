import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Authcontext } from '../Context/Authprovider';

const TravelDetails = () => {
    const userDetail = useLoaderData()
    const {user} = useContext(Authcontext)
    const { _id, img, title, description, price } = userDetail;
    const handleAddUser = event => {
        event.preventDefault()
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const reviews = {
            service:_id,
            serviceName:title,
            email,
            phone,
            message,
            name
        }
        console.log(reviews)
        fetch('https://b6a11-service-review-server-side-asaduzzaman-ashik1610.vercel.app/review', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(reviews)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                alert('review placed successfully')
                form.reset();
            }
        })
        .catch(er=> console.log(er))

    }
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
            <form onSubmit={handleAddUser} className='bg-red-600 p-5 m-5 rounded-lg'>
                <h2 className='text-4xl text-black'>You are about to review: {title}</h2>
                <h4 className='text-3xl text-orange-200'>Price:{price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-bordered text-black bg-white w-full max" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered text-black bg-white w-full max" />
                    <input name="phone" type="text" placeholder="Your Phone" required className="input input-bordered text-black bg-white w-full max" />
                    <input name="email" type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered text-black bg-white w-full max" />
                </div>
                <textarea name='message' className="textarea textarea-bordered h-24 w-full mt-3 bg-white text-black" placeholder="please your message" required></textarea>
                <button className='bg-primary p-3 rounded text-white'>Review</button>
            </form>
        </div>
    );
};

export default TravelDetails;