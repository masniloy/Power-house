import React from 'react';
import './SingleExercise.css'

const SingleExercise = (props) => {
    const { name, image, description, for_age, time } = props;
    return (
        <div>
            <div className='WorkCard'>
                <img src={image} alt="" />
                <h3>{name}</h3>
                <p>{description}</p>
                <p>Age: {for_age}</p>
                <p>Time: {time}m</p>
                <button className='btn '>Add To List</button>

            </div>
        </div>
    );
};

export default SingleExercise;