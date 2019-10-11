import * as React from 'react';
import {useState, useEffect,} from 'react';
import {json} from '../Utils/api';
import {ITrainer} from '../Utils/interfaces'
import {Link, RouteComponentProps} from 'react-router-dom'

const Sessions: React.SFC<SessionsProps> = (props) => {

    
    return (
        <>
           <h1>sessions</h1>
        </>
    )
}

export interface SessionsProps extends RouteComponentProps<{userid: string}> {
}

export default Sessions;