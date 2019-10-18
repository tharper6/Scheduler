export interface ISport {
    id: number,
    sportname: string
}

export interface IUser {
    id: number,
    username: string,
    email: string,
    password: string,
    sportid: string,
    role: string,
    trainingrole: string,
    sportname: string,
    avatar: string
}

export interface IUser2 {
    id: number,
    username: string,
    email: string,
    role: string,
    trainingrole: string,
    bio: string,
    avatar: string,
    sportname: string
}

export interface ITrainer {
    id: number,
    username: string,
    email: string,
    sportid: number,
    trainingrole: string,
    sportname: string,
    bio: string,
    avatar: string
}

export interface ITrainer2 {
    id: number,
    username: string,
    email: string,
    role: string,
    trainingrole: string,
    sportname: string
}

export interface ISession {
    id: number,
    name: string,
    summary: string,
    date: Date,
    trainerid: number,
    traineeid: number,
    time: string,
    sportname: string,
    trainer_name: string,
    trainee_name: string
}