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

    return (
        <>
            <h1>Trainees</h1>
            <div>
                {trainees.map(trainee => {
                    return (
                        <>
                           <div key={trainee.id}>
                        <section className="row justify-content-center">
                            <article className="col-md-10">
                            <div className="card m-2 rounded shadow">
                                <div className="card-body text-center pt-0">
                                <img src={trainee.avatar} alt="user avatar" style={{ height: '150px', width: '150px' }} className="mt-2 ml-1 border rounded-circle" />
                                    <p>{trainee.username}</p>
                                    <p>{trainee.email}</p>
                                    <p>{trainee.sportname}</p>
                                </div>
                            </div>
                            </article>
                        </section>
                    </div>
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