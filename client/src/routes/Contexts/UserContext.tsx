import React, {createContext, useReducer} from 'react'
import { useAccordionToggle } from 'react-bootstrap'
import { IUser, UserAction } from '../../types.d'
import userReducer from './UserReducer'


const emptyUser : IUser = {
    id:'',
    user: ''
}
export const userContext = createContext([{}])

export const UserContext : React.FC = (props) => {
     const [user, dispatch]  = useReducer<React.Reducer<IUser,UserAction>>(userReducer, emptyUser)

    return (
        <userContext.Provider value={[user, dispatch]}>
            {props.children}
        </userContext.Provider>
    )
}

