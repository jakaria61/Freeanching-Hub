import React from 'react';
import Rating from 'react-rating';
import './CourseContainer.css'
const CourseContainer = (props) => {
    const { name, price, ins_name, img, rating } = props.clas;
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
                    <h4>Price:TK{price}</h4>
                    <button className='btn btn-outline-success' >Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default CourseContainer;