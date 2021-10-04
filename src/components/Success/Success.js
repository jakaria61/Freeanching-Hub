import './Success.css'
import React, { useEffect, useState } from 'react';
import FeedbackContainer from '../Feedback/FeedbackContainer';
const Success = () => {
    const [commentetos, setComnettetor] = useState([])
    useEffect(() => {
        fetch('./fake.JSON')
            .then(res => res.json())
            .then(data => setComnettetor(data))
    }, [])
    return (
        <div className='row  '>
            <h1 className='succes-history'>Our Success History</h1>
            <div className='row all-course  '>
                {
                    commentetos.map(comentetor => <FeedbackContainer key={comentetor.id} comentetor={comentetor}></FeedbackContainer>)
                }


            </div>
        </div>
    );
};

export default Success;