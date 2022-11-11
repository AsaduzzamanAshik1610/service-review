import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../assest/images/cox.1.jpg';
import pic2 from '../assest/images/cox.2.jpg';
import pic3 from '../assest/images/cox.5.jpg';
import pic4 from '../assest/images/image.saint.jpg';
import Services from '../Services/Services';
import Travelpart from '../Travelpart/Travelpart';
const Home = () => {
    return (
            <div>
            <div className="carousel w-3/4 mt-5 py-10 mx-auto h-96">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={pic1} className="w-full rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={pic2} className="w-full rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={pic3} className="w-full rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={pic4} className="w-full rounded-lg" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <Services></Services>
            <Link to='/services'>
            <button className='bg-warning p-3 rounded-lg text-white'>seall service</button>
            </Link>
            <Travelpart></Travelpart>
        </div>
        
       
    );
};

export default Home;