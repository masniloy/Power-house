import React, { useEffect, useState } from 'react';
import './Exercise.css'
import SingleExercise from '../SingleExercise/SingleExercise';

const Exercise = () => {
    const [exercises, setexercise] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setexercise(data))
    }, [])
    return (
        <div>
            <h3>Select today's exercise {exercises.length}</h3>

            <div className='exercise-container'>
                {
                    exercises.map(exercise => <SingleExercise
                        key={exercise.id}
                        name={exercise.name}
                        image={exercise.image}
                        description={exercise.description}
                        for_age={exercise.for_age}
                        time={exercise.time}

                    ></SingleExercise>)
                }

            </div>
        </div>
    );
};

export default Exercise;