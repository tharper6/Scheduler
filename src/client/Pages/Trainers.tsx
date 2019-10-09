import * as React from 'react';
import {useState, useEffect} from 'react';
import {json} from '../Utils/api'

const Trainers: React.SFC<TrainersProps> = (props) => {

    let [trainers, setTrainers] = useState([]);

    const getTrainers = async () => {
        let trainers = json('/api/trainingrole/trainer');
        setTrainers([trainers]);
        console.log(trainers)
    }

    useEffect(() => {
        getTrainers();
        // console.log(trainers);
    }, [])

    return(
        <>
        <p>Trainers</p>
        <div> {trainers.map(trainer => {
            return(
                <p>{trainer.name}</p>
            )
        })} </div>
        </>
    )
}

export interface TrainersProps{}

export default Trainers;