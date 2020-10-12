import { Dispatch } from "react";

export interface IUser {
    id: string,
    user: string
}

export interface IInvitation {
    familyName : string,
    presentsNumber: number,
}

export interface UserAction {
    type : 'Login' | 'Logout',
    payload : any
}