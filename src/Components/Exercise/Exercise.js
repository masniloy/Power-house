import React, { useEffect, useState } from 'react';
import './Exercise.css'
import SingleExercise from '../SingleExercise/SingleExercise';
import frofile from './niloy.jpeg'

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

    let totalTime = 0;
    for (const time of exerciseTime) {
        totalTime = totalTime + time;
    }

    return (
        <div className='fullBody'>
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
            <div className='result container '>
                <div className='user'>
                    <img src={frofile} alt="imag" />
                    <h3>M. A. SAIMUN</h3>
                </div>
                <div className='deteils justify-content-between'>
                    <div className='kg'>
                        <h2>73</h2>
                        <p>kg</p>
                    </div>
                    <div className='kg'>
                        <h2>67</h2>
                        <p>inch</p>
                    </div>
                    <div className='kg'>
                        <h2>24</h2>
                        <p>yrs</p>
                    </div>


                </div>
                <div>
                    <h4>Exercise Details</h4>
                    <p>total time: {totalTime}</p>
                </div>



            </div>
        </div>


    );
};

export default Exercise;