import * as React from 'react';
import {useState, useEffect,} from 'react';
import {json} from '../Utils/api';
import {ITrainer} from '../Utils/interfaces'
import {Link, RouteComponentProps} from 'react-router-dom'
import {User} from '../Utils/api'
import { IoIosAmericanFootball } from 'react-icons/io';
import { TiBatteryHigh } from 'react-icons/ti';
import { endianness } from 'os';

const Trainers: React.SFC<TrainersProps> = (props) => {

    let [trainers, setTrainers] = useState <ITrainer[]>([]);

    const getTrainers = async () => {
        let trainers = await json('/api/trainingrole/trainer');
        setTrainers(trainers);
    }

    useEffect(() => {
        getTrainers();
    }, []);

    const sessionBtn =() => {
        props.history.push(`/schedule`);
    }

    return (
        <>
            <h1 className="text-center font-bold py-3 mt-4">Professional Trainers</h1>
            <div className="container">
                <div className="row justify-content-center" > {trainers.map(trainer => {
                    return (
                        <div key={trainer.id} className="card m-2 rounded shadow col-md-5">
                            <div className="card-body text-center align-items-center d-flex flex-column justify-content-between">
                                <img src={trainer.avatar} alt="user avatar" style={{ height: '150px', width: '150px' }} className="mt-2 ml-1 border rounded-circle" />
                                <p>{trainer.username}</p>
                                <p>{trainer.email}</p>
                                <p>{trainer.sportname} <img style={{ height: '50', width: '50' }} src={trainer.sportimg} alt="sportimage"/></p>
                                <p className="text-justify">{trainer.bio}</p>
                                <Link className="btn btn-dark btn-block" to={`/schedule/${trainer.username}`}>Schedule Session</Link>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        </>
    )
}

export interface TrainersProps extends RouteComponentProps<{userid: string}> {
    trainers: ITrainer[]
}

export default Trainers;

