import React from 'react';
import Rating from 'react-rating';
import { useHistory } from 'react-router';

import './Course.css'
const Course = (props) => {
    const history = useHistory();
    const { name, price, ins_name, img, rating } = props.course;
    const hanelViewMore = () => {
        history.push('/Services')
    }
    return (
        <div className='col-md-6 course-detail'>
            <div className='single-course d-flex flex-wrap' >
                <div>
                    <img src={img} alt="" className='img-fluid course-img' />
                </div>
                <div className='mx-4'>
                    <h4>{name}</h4>
                    <p>Instractor:{ins_name}</p>
                    <Rating
                        initialRating={rating}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly></Rating>
                    <h4>Price: {price}</h4>
                    <button onClick={hanelViewMore} className='btn btn-outline-success' >View More</button>
                </div>
            </div>
        </div>

    );
};

export default Course;