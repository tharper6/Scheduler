import * as React from 'react';
import {useState} from 'react'
import { Calendar } from 'react-calendar/dist/entry';


const Schedule: React.SFC<ScheduleProps> = (props) => {

    let [calendarDate, setCalendarDate] = useState();


    const calendarChange = (date: any) => {
        setCalendarDate(calendarDate)
    }

    return(
        <>
        <h1>Schedule</h1>
         <Calendar value={calendarDate} onChange={calendarChange} /> 
        </>
    )
}

export interface ScheduleProps{}

export default Schedule;