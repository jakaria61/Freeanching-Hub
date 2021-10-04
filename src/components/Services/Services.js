
import React, { useEffect, useState } from 'react';
import CourseContainer from '../CourseContainer/CourseContainer';

const Services = () => {
    const [clases, setClass] = useState([]);
    useEffect(() => {
        fetch('./FakeData.JSON')
            .then(res => res.json())
            .then(data => setClass(data))
    }, [])
    return (
        <div className='container' >
            <div className='row all-course mt-4'>
                {
                    clases.map(clas => <CourseContainer key={clas.id} clas={clas} ></CourseContainer>)
                }
            </div>
        </div>
    );
};

export default Services;