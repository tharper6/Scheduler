import * as React from 'react';
import {useState, useEffect,} from 'react';
import {json} from '../Utils/api';
import {ITrainer} from '../Utils/interfaces'
import {Link, RouteComponentProps} from 'react-router-dom'

const Trainers: React.SFC<TrainersProps> = (props) => {

    let [trainers, setTrainers] = useState <ITrainer[]>([]);

    const getTrainers = async () => {
        let trainers = await json('/api/trainingrole/trainer');
        setTrainers(trainers);
        console.log(trainers)
    }

    useEffect(() => {
        getTrainers();
    }, []);

    return (
        <>
            <p>Trainers</p>
            <div> {trainers.map(trainer => {
                return (
                    <>
                        <section className="row justify-content-center">
                            <div className="card col-md-8">
                                <div className="card-body text-center">
                                    <p>{trainer.name}</p>
                                    <p>{trainer.email}</p>
                                    <p>{trainer.sportname}</p>
                                    <Link className="btn btn-dark col-md-12" to={`/schedule/${trainer.id}`}>Schedule Session</Link>
                                </div>
                            </div>
                        </section>
                    </>
                )
            })} </div>
        </>
    )
}

export interface TrainersProps extends RouteComponentProps<{userid: string}> {
    trainers: ITrainer[]
}

export default Trainers;