import * as React from 'react';
import {useState, useEffect} from 'react'
import { Calendar } from 'react-calendar/dist/entry';
import {json, User} from '../Utils/api'
import { RouteComponentProps } from 'react-router';
import { ISport, ITrainer2, IUser, IUser2 } from '../Utils/interfaces';
import Swal from 'sweetalert2';


const Schedule: React.SFC<ScheduleProps> = (props) => {

    let [date, setdate] = useState<Date>(new Date());
    let [sports, setSports] = useState <ISport[]>([]);
    let [name, setName] = useState('');
    let [sportid, setSportid] = useState('0');
    let [summary, setSummary] = useState('');
    let [trainers, setTrainers] = useState<ITrainer2[]>([]);
    let [selectedTrainer, setSelectedTrainer] = useState('');
    let [trainee, setTrainee] = useState(User.userid);
    let [timepicker, settimepicker] = useState('')

    const getSports = async () => {
        let result = await json('/api/sports');
        setSports(result)
    };

    const getTrainers = async () => {
        let result = await json('/api/trainingrole/trainer');
        setTrainers(result);
    }

    useEffect(() => {
        if (!User || User.role === null) {
            props.history.push('/login')
        } else {
            getSports();
            getTrainers();
        }
    }, [])

    const calendarChange = (date: Date) => {
        setdate(date)
    }

    const schedule = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            let result = await json('/api/sessions', 'POST', {
                name, 
                sportid,
                trainerid: selectedTrainer,
                traineeid: trainee, 
                summary, 
                date,
                time: timepicker
            });
            Swal.fire({
                position: 'top-end',
                type: 'success',
                title: 'You have scheduled your session!',
                showConfirmButton: false,
                timer: 2000
              })
            props.history.push(`/profile/${User.userid}`);
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    console.log(User.sportname)
    
    return (
        <>
            <section className="row justify-content-center my-3 mt-5">
                <div className="col-md-6">
                    <form className="bg-white form-group border border-dark rounded p-2 font-weight-bolder">
                        <label className="">Session Name:</label>
                        <input value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value) }} type="text" className="form-control p-2" placeholder="Basketball - Shooting" />
                        <label className="pt-1">Sport:</label>
                        <select value={sportid} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { setSportid(e.target.value) }} className="form-control p-2">
                        <option> Please Select A Sport ...</option>
                            {sports.map(sport => {
                                return (
                                    <option key={sport.id} value={sport.id}>{sport.sportname}</option>
                                )
                            })}
                        </select>
                        <label>Trainer:</label>
                        {/* <input className="form-control p-2" type="text" value={props.match.params.username} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSelectedTrainer(props.match.params.username)}/> */}
                        <select value={selectedTrainer} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { setSelectedTrainer(e.target.value) }} className="form-control p-2">
                            <option> Please Select A Trainer ...</option>
                            {trainers.map(trainer => {
                                return (
                                    <option key={trainer.id} value={trainer.id}>{trainer.username}</option>
                                )
                            })}
                          </select> 
                        <label className="pt-1">Summary of Training Needed:</label>
                        <textarea value={summary} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => { setSummary(e.target.value) }} className="form-control p-2" rows={5} placeholder="During my current season I am 18 for 80 on three-pointers. I think my problem is my shooting motion and arc."></textarea>
                        <label className="pt-1">Select A Date:</label>
                        <Calendar className="mx-auto my-1 shadow-sm" value={date} onChange={calendarChange} />
                        <label className="pt-1">Schedule A Time:</label>
                        <input value={timepicker} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { settimepicker(e.target.value) }} type="time" className="form-control p-2 text-center" placeholder="Basketball - Shooting" />
                        <button onClick={schedule} className="btn btn-dark btn-block pt-2 mt-2">Schedule Session!</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export interface ScheduleProps extends RouteComponentProps<{username: string}> {
    sports: ISport[],
    trainers: ITrainer2[],
}

export default Schedule;