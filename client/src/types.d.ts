import { Dispatch } from "react";

export interface IUser {
    id: string,
    user: string
}

export interface IInvitation {
    familyName : string,
    presentsNumber: number,
}
export interface IDashInvitation {
    _id:string,
    familyName : string,
    presentsNumber: number,
    loading:any
}

export interface UserAction {
    type : 'Login' | 'Logout',
    payload : any
}