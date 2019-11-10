import * as React from 'react';
import {useState, useEffect} from 'react';
import {json} from '../Utils/api';
import {ITrainer} from '../Utils/interfaces'
import { Link } from 'react-router-dom';

const Trainees: React.SFC<ITraineesProps> = (props) => {

    let [trainees, setTrainees] = useState <ITrainer[]>([]);

    const getTrainees = async() => {
        let trainees = await json('/api/trainingrole/trainee');
        setTrainees(trainees)
    }

    useEffect(() => {
        getTrainees();
    }, [])

    return (
        <>
            <h1 className="text-center">Trainees</h1>
            <div className="container">
            <div className="row justify-content-center"> {trainees.map(trainee => {
                    return (
                        <>
                            <div className="card m-2 rounded shadow col-md-5" key={trainee.id}>
                                <div className="card-body text-center pt-0">
                                <img src={trainee.avatar} alt="user avatar" style={{ height: '150px', width: '150px' }} className="mt-2 ml-1 border rounded-circle" />
                                    <p>{trainee.username}</p>
                                    <p>{trainee.email}</p>
                                    <p>{trainee.sportname} <img style={{ height: '50', width: '50' }} src={trainee.sportimg} alt="sportimage"/></p>
                                    <Link className="btn btn-dark col-md-6" to={`/contact/${trainee.id}`}>Contact</Link>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
            </div>
        </>
    )
};

export interface ITraineesProps {
    trainees: ITrainer[]
}

export default Trainees;