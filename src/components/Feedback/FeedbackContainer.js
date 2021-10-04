import React from 'react';
import './FeedbackContainer.css'
const FeedbackContainer = (props) => {
    const { img, name, review, Role } = props.comentetor;
    return (
        <div className='col-md-4'>
            <div className='feedback-details d-flex flex-wrap justify-content-center' >
                <div>
                    <img src={img} alt="" className='img-fluid feeback-img' />
                </div>
                <div className='mx-4'>
                    <h2>{name}</h2>
                    <p>{Role}</p>
                    <p>{review}</p>
                </div>
            </div>
        </div>

    );
};

export default FeedbackContainer;