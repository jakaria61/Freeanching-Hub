import React from 'react';
import './Topsection.css'
import freelancing from '../image/freelance.jpg'
const Topsection = () => {
    return (
        <div className='topsection-container '>
            <div>
                <h1 className='title'>Freelancing Hub</h1>
                <p>Make Money online .</p>
            </div>
            <div className=' row d-flex flex-wrap '>
                <div className='col-md-6'>
                    <img src={freelancing} alt="" className='img-fluid free-img' />
                </div>
                <div className='col-md-6 mt-4'>
                    <p>Thinking about getting started in freelancing but don’t know where to start? Then this guide is for you.we are created this as an ultimate guide on how to start freelancing for beginners. Whether you want to start freelancing as a writer, web designer, or developer, this guide will help you start your journey in 10 simple steps. Before you move any further, I need to clarify a few things.</p>

                    <button className='btn btn-outline-success mx-4' >Start Now</button>
                    <button className='btn btn-outline-success' >Learn More</button>

                </div>
            </div>
        </div>
    );
};

export default Topsection;