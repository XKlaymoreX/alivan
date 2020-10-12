import React from 'react'
import { IInvitation } from '../../../types.d'

const Invitation: React.FC<IInvitation> = (props) => {
    return (
            <div className="row rounded shadow-sm" style={{fontSize:'20px', minHeight:'50px', backgroundColor:'#eee', marginBottom:'10px'}}>
                <div className="col-6 d-flex justify-content-center align-items-center">{props.familyName}</div>
                <div className="col-6 d-flex justify-content-center align-items-center">{props.presentsNumber}</div>
            </div>
    )
}

export default Invitation
