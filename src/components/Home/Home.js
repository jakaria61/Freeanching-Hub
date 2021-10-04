import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Home.css'
const Home = () => {
    const [courses, setCourse] = useState([])
    useEffect(() => {
        fetch('./FakeData.JSON')
            .then(res => res.json())
            .then(data => setCourse(data.slice(0, 4)))
    }, [])
    return (
        <div className=" container">
            <h1 className='heading'>Popular Course</h1>
            <div className='row all-course mt-4 '>
                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Home;