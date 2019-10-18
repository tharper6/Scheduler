import * as React from 'react';
import {useState, useEffect} from 'react';
import {json, User} from '../Utils/api'
import { RouteComponentProps } from 'react-router';
import { IUser2 } from '../Utils/interfaces';
import { Link } from 'react-router-dom';

const TrainerBio: React.SFC<TrainerBioProps> = (props) => {

    const [bio, setbio] = useState('');
    // const [user, setuser] = useState({
    //     id: 0,
    //     username: '',
    //     email: '',
    //     role: '',
    //     trainingrole: '',
    //     bio: '',
    //     avatar: '',
    //     sportname: ''
    // });

    const getBio = async () => {
        let result = await json(`/api/users/${User.userid}`);
        setbio(result.bio);
    }

    const addBio = async () => {
        try {
            let userBio = await json(`/api/trainingrole/trainers/${User.userid}`, 'POST', {bio});
            this.props.history.push(`/profile/${User.userid}`)
        } catch (error) {
            console.log(error);
            throw error
        };
    }

    const updateBio = async () => {
        try {
            let result = await json(`/api/trainingrole/trainers/${User.userid}`, 'PUT', {bio});
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBio();
    }, [])

    return (
        <>
        <main className="container">
            <br/>
            <form className="form-group mt-4 shadow">
                <h3 className="text-center">Biography:</h3>
                <textarea value={bio} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setbio(e.target.value)} className="form-control" rows={10}></textarea>
                <div className="row justify-content-around">
                {/* <div className="d-inline col-md-12"> */}
                <button onClick={addBio} className="col-md-3 mt-2 btn btn-dark">Add Bio!</button>
                <button onClick={updateBio} className="col-md-3 mt-2 btn btn-dark">Update Bio!</button>
                <Link className="btn btn-dark col-md-3 mt-2 rounded" to={`/profile/${User.userid}`}>Back To Profile!</Link>
                </div>
                {/* </div> */}
            </form>
        </main>
        </>
    )
}

export interface TrainerBioProps extends RouteComponentProps<{userid: string}> {
    user: IUser2
}

export default TrainerBio;