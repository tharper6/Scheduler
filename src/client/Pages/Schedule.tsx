import * as React from 'react';
import {useState, useEffect} from 'react'
import { Calendar } from 'react-calendar/dist/entry';
import {json} from '../Utils/api'
import { RouteComponentProps } from 'react-router';
import { ISport } from '../Utils/interfaces';


const Schedule: React.SFC<ScheduleProps> = (props) => {

    let [date, setdate] = useState<Date>(new Date());
    let [sports, setSports] = useState <ISport[]>([]);
    let [name, setName] = useState('');
    let [sport, setSport] = useState('0');
    let [summary, setSummary] = useState('');

    const getSports = async () => {
        let result = await json('/api/sports');
        setSports(result)
    };

    useEffect(() => {
        getSports();
    }, [])

    const calendarChange = (date: Date) => {
        setdate(date)
    }

    const schedule = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        try {
            console.log(date)
            let result = await json('/api/sessions', 'POST', {name, sport, summary, date});
            
            
        } catch (error) {
            console.log(error);
            throw error
        }
        // console.log({ name, sport, summary, date })
    }

    return(
        <>
            <section className="row justify-content-center my-3">
                <div className="col-md-6">
                    <form className="bg-white form-group border border-dark rounded p-2 font-weight-bolder">
                        <label className="">Name:</label>
                        <input value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setName(e.target.value)}} type="text" className="form-control p-2" />
                        <label className="pt-1">Sport:</label>
                        <select value={sport} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {setSport(e.target.value)}} className="form-control p-2">
                            <option value="default align-text-bottom">Please Select a Sport...</option>
                            {sports.map(sport => {
                                return (
                                    <option value={sport.id}>{sport.sportname}</option>
                                )
                            })}
                        </select>
                        <label className="pt-1">Summary of Training Needed:</label>
                        <textarea value={summary} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {setSummary(e.target.value)}} className="form-control p-2" rows={5}></textarea>
                        <label className="pt-1">Select A Date:</label>
                            <Calendar className="mx-auto my-1 shadow-sm" value={date} onChange={calendarChange} />
                            <button onClick={schedule} className="btn btn-dark btn-block pt-2">Schedule Session!</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export interface ScheduleProps extends RouteComponentProps<{userid: string}> {
    sports: ISport[];
}

export default Schedule;