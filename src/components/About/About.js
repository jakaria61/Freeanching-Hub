import React from 'react';
import img from '../image/about.jpg'
import about from '../image/banner.jpg'
import './About.css'
const About = () => {
    return (
        <div >
            <div className='about-banner'>
                <img src={about} alt="" />
            </div>
            <div className='container my-4 about-container'>
                <div className='row'>
                    <div className=' d-flex flex-wrap'>
                        <div className='col-md-6'>
                            <img src={img} alt="" className='img-fluid ' />
                        </div>
                        <div className='col-md-6'>
                            <p>Hi! My name is Jakaria. Welcome to my personal page that I’ve designed to showcase my skills and expertise that I’ve accumulated over the year. I’ve also placed all my social links at the left side, feel free to connect with me. I’d love to be given the opportunity to hear from you.

                                I like to call myself “a passionate computer science student". I always had a wish on my mind that I will do something for the computer science students that’s why I made lots of videos on different subjects. My first priority is making the subject more interesting and clear so you can feel it and don’t get bore. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;