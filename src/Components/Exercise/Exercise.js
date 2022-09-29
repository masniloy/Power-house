import React, { useEffect, useState } from 'react';
import './Exercise.css'
import SingleExercise from '../SingleExercise/SingleExercise';
import frofile from './niloy.jpeg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Exercise = () => {
    const [exercises, setexercise] = useState([]);
    const [exerciseTime, setexercisetime] = useState([]);
    const [extratime, setextratime] = useState(0)



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
    const button2 = () => {
        let freak = 2;
        setextratime(freak)
    }
    const button4 = () => {
        let freak = 4;
        setextratime(freak)
    }
    const button6 = () => {
        let freak = 6;
        setextratime(freak)
    }
    const button8 = () => {
        let freak = 8;
        setextratime(freak)
    }
    const button10 = () => {
        let freak = 10;
        setextratime(freak)
    }

    const showToastMessage = () => {
        toast.success('Congratulation you complete your exercise !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

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
                    <h4>Add a Break</h4>
                </div>
                <div className='buttons'>
                    <button onClick={button2}>2m</button>
                    <button onClick={button4}>4m</button>
                    <button onClick={button6}>6m</button>
                    <button onClick={button8}>8m</button>
                    <button onClick={button10}>10m</button>
                </div>

                <div className='timing'>
                    <h4>Exercise Details</h4>
                    <h5>Exercise Time: {totalTime}</h5>
                    <h5>Break Time: {extratime}</h5>
                </div>

                <button onClick={showToastMessage} className='done'>Activity Completed</button>
                <ToastContainer />

            </div>
        </div>


    );
};

export default Exercise;