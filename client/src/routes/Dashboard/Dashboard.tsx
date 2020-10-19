import React, { useState, useEffect } from 'react'
import { IDashInvitation } from '../../types.d'
import axios from 'axios'
import Invitation from './components/Invitation'
import './style.css'

const Dashboard: React.FC = () => {

    const [items, setItems] = useState<Array<IDashInvitation>>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchItems = async () => {
            try {
                await axios.get('/api/v1/inviti').then(result => {
                    setItems(result.data)
                })
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchItems()
    },[isLoading])



    return (
        <div style={{ fontFamily: 'Poppins' }}>
            <h2>Lista Invitati</h2>
            <div className="counter container-fluid rounded shadow-sm" style={{ backgroundColor: '#eee', padding: '20px 0 20px 0' }}>
                <h5>Totali</h5>
                <div className="row">
                    <div className="col-6 d-flex justify-content-center align-items-center" style={{ fontWeight: 'bold' }}>
                        Totale Famiglie
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center" style={{ fontWeight: 'bold' }}>
                        Totale Invitati
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        {items.length}
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center">{
                        items.map((el: IDashInvitation) => { return el.presentsNumber }).reduce((total, current) => { return total + current }, 0)
                    }</div>
                </div>
            </div>
            <div className="container-fluid invitationsGrid rounded">
                <div className="row" style={{ fontWeight: 'bold', fontSize: '25px' }}>
                    <div className="col-5 d-flex justify-content-center align-items-center">Nome Famiglia</div>
                    <div className="col-5 d-flex justify-content-center align-items-center">Numero Presenti</div>
                    <div className="col-2 d-flex justify-content-center align-items-center"></div>
                </div>
                {isLoading ? <h1>Uhm.. vediamo chi c'è</h1> : <>{items.map((el: IDashInvitation) => {
                    return (
                        <Invitation familyName={el.familyName} presentsNumber={el.presentsNumber} _id={el._id} key={el._id} loading={[isLoading,setIsLoading]} />
                    )
                })}</>}
            </div>
        </div>
    )
}

export default Dashboard 