import * as React from 'react';
import {useState, useEffect} from 'react';
import { RouteComponentProps } from 'react-router';
import {json} from '../Utils/api'

const Profile: React.SFC<IProfileProps> = (props) => {

    const [user, setUser] = useState();

    const getUser = async () => {
        let result = await json(`/api/users/${props.match.params.userid}`);
        // console.log(result)
        setUser(result);
        // console.log(user)
    }

    useEffect(() => {
        getUser();
    }, [])

    return(
        <>
        <h1>Profile</h1>
        <p>{user.name}</p>
        </>
    )
}

export interface IProfileProps extends RouteComponentProps<{userid: string}>{}

export default Profile;

