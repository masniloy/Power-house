import React, { useEffect, useState } from 'react';
import './Exercise.css'
import SingleExercise from '../SingleExercise/SingleExercise';

const Exercise = () => {
    const [exercises, setexercise] = useState([]);
    const [exerciseTime, setexercisetime] = useState([]);



    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setexercise(data))
    }, [])

    const ExerciseDetail = (exercises) => {
        console.log(exercises.time)
        const newexerciseTime = [...exerciseTime, exercises.time]
        setexercisetime(newexerciseTime);

    }

    return (
        <div>
            <div>
                <h3>Select today's exercise</h3>

                <div className='exercise-container'>
                    {
                        exercises.map(exercise => <SingleExercise
                            key={exercise.id}
                            name={exercise.name}
                            image={exercise.image}
                            description={exercise.description}
                            for_age={exercise.for_age}
                            time={exercise.time}
                            ExerciseDetail={ExerciseDetail}
                        ></SingleExercise>)
                    }

                </div>
            </div>
            <div>
                <h1>total time: {exerciseTime}</h1>

            </div>
        </div>


    );
};

export default Exercise;