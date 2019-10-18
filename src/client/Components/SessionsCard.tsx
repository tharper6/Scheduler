// import * as React from 'react';
// import { ISession, IUser } from '../Utils/interfaces';
// import * as moment from 'moment';

// const SessionsCard: React.SFC<SessionCardProps> = (props) => {

//     if (props.user.trainingrole === 'trainer') {
//         return (
//             <p className="text-center">
//                 <i>Trainee: </i>
//                 <i> {props.ses} </i>
//              </p>
//         )
//     } else {
//         return (
//             <p className="text-center">
//                 <i>Trainer: </i>
//                 <i> {session.trainerid} </i>
//             </p>
//         )
//     }

//     return(
//         <div>{this.props.sessions.map(session => {
//             return (
//                 <>
//                     <div className="card mt-2">
//                         <h5 className="card-header text-center">{session.name}</h5>
//                         <div className="card-body">
//                             <p className="text-center">
//                                 <i>Date: </i>
//                                 <i>{moment(session.date).format('LL')}</i>
//                             </p>
//                             <p className="text-center">
//                                 <i>Details: </i>
//                                 <i>{session.summary}</i>
//                             </p>
                            
//                         </div>
//                     </div>
//                 </>
//             )
//         })}</div>
//     )
// }

// export interface SessionCardProps {
//     user: IUser,
//     session: ISession []
// }

// export default SessionsCard;

// {(() => {
//     if (this.props.user.trainingrole === 'trainer') {
//         return (
//             <p className="text-center">
//                 <i>Trainee: </i>
//                 <i> {session.traineeid} </i>
//             </p>
//         )
//     } else {
//         return (
//             <p className="text-center">
//                 <i>Trainer: </i>
//                 <i> {session.trainerid} </i>
//             </p>
//         )
//     }
// })}