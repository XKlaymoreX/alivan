export interface IUser {
    id: string,
    user: string
}

export interface UserAction {
    type : 'Login' | 'Logout',
    payload : any
}