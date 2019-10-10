import * as React from 'react';
import {useState, useEffect} from 'react';
import {json} from '../Utils/api';
import {ITrainer} from '../Utils/interfaces'

const Trainees: React.SFC<ITraineesProps> = (props) => {

    let [trainees, setTrainees] = useState <ITrainer[]>([]);

    const getTrainees = async() => {
        let trainees = await json('/api/trainingrole/trainee');
        setTrainees(trainees)
    }

    useEffect(() => {
        getTrainees();
    }, [])

    return(
        <>
        <h1>Trainees</h1>
        <div>
            {trainees.map(trainee => {
            return(
                <>
                <p>{trainee.name}</p>
                <p>{trainee.email}</p>
                <p>{trainee.sportname}</p>
                </>
            )
        })}
        </div>
        </>
    )
};

export interface ITraineesProps {
    trainees: ITrainer[]
}

export default Trainees;