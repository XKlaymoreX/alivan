import { Reducer, ReducerAction } from 'react'
import { IUser, UserAction } from '../../types.d'

export const UserReducer  = (state : IUser, action : UserAction) => {
    switch(action.type){
        case 'Login' : {
            
            return state
        }
        case 'Logout' : {
            return state
        }
        default : {
            return state
        }
    }
}

export default UserReducer