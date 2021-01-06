import React from 'react'
import { IDashInvitation } from '../../../types.d'
import axios from 'axios'

const Invitation: React.FC<IDashInvitation> = (props) => {

    const delButtonStyle = {
        textDecoration: 'none',
        color: 'white',
        borderRadius: '6px 6px 6px 6px',
        margin: '1px 0 1px 0'
    }

    const destroyItem = async () => {
        props.loading[1](!props.loading[0])
        try {
        await axios.delete(`/api/v1/inviti/bin/${props._id}`)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="row rounded shadow-sm" id={props._id} style={{ fontSize: '20px', minHeight: '50px', backgroundColor: '#eee', marginBottom: '10px' }}>
            <div className="col-5 d-flex justify-content-center align-items-center">{props.familyName}</div>
            <div className="col-5 d-flex justify-content-center align-items-center">{props.presentsNumber}</div>
            <div className="col-2 d-flex justify-content-center align-items-center">
                <div className="row h-80">
                    <a className="col-12 d-flex justify-content-center align-items-center bg-danger" href="javascript:void(0)" style={delButtonStyle} onClick={() => destroyItem()}>Del</a>
                </div>
            </div>
        </div>
    )
}

export default Invitation
