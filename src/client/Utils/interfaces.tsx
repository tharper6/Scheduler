export interface ISport {
    id: number,
    sportname: string
}

export interface IUser {
    id: number,
    name: string,
    email: string,
    password: string,
    sportid: string,
    role: string
}