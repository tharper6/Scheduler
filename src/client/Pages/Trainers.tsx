import * as React from 'react';
import {useState, useEffect,} from 'react';
import {json} from '../Utils/api';
import {ITrainer} from '../Utils/interfaces'
import {Link, RouteComponentProps} from 'react-router-dom'
import {User} from '../Utils/api'

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
            <div> {trainers.map(trainer => {
                return (
                    <div key={trainer.id}>
                        <section className="row justify-content-center">
                            <article className="col-md-10">
                            <div className="card m-2 rounded shadow">
                                <div className="card-body text-center pt-0">
                                <img src={trainer.avatar} alt="user avatar" style={{ height: '150px', width: '150px' }} className="mt-2 ml-1 border rounded-circle" />
                                    <p>{trainer.username}</p>
                                    <p>{trainer.email}</p>
                                    <p>{trainer.sportname}</p>
                                    <p>{trainer.bio}</p>
                                    <Link className="btn btn-dark col-md-12" to={`/schedule/${trainer.id}`}>Schedule Session</Link>
                                </div>
                            </div>
                            </article>
                        </section>
                    </div>
                )
            })}
            </div>
        </>
    )
}

export interface TrainersProps extends RouteComponentProps<{userid: string}> {
    trainers: ITrainer[]
}

export default Trainers;