import React, { useState } from 'react'
import ItemsGrid from './components/ItemsGrid'
import Bin from './components/Bin'
import './style.css'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

const Dashboard: React.FC = () => {

    const [isBinSelected, setBinSelected] = useState<boolean>(false)
    const [nItems, setNItems] = useState<number>()
    const [totals, setTotals] = useState<number>()
    const [redirect,setRedirect] = useState<boolean>(false)
    const [logOutRed,setLogOut] = useState<boolean>(false)

    const logOut = async () => {
        try {
            await axios.get('/Private/LogOut')
            setLogOut(true)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="d-flex flex-column" style={{ fontFamily: 'Poppins' }}>
            {redirect ? <Redirect to="/"></Redirect> : <></>}
            {logOutRed ? <Redirect to="/Private"></Redirect> : <></>}
            <h2>Lista Invitati</h2>
            <div className="commandSection container-fluid rounded shadow-sm" style={{backgroundColor:'#eee', marginBottom:'10px',height:'50px'}}>
                <div className="row h-100 text-black" style={{fontSize:'20px', userSelect:'none' , cursor:'pointer'}}>
                    <div className="col-6 d-flex justify-content-center align-items-center border-right controlButton" onClick={() =>  setRedirect(true)}>Home</div>
                    <div className="col-6 d-flex justify-content-center align-items-center border-left controlButton" onClick={() => logOut()} >Log Out</div>
                </div>
            </div>
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
                        {nItems}
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        {totals}
                    </div>
                </div> 
            </div>
            <div className="itemsSelector container-fluid rounded shadow-sm" style={{ backgroundColor: '#eee', height: '100px', marginTop: '10px' }}>
                <div className="row rounded text-white" style={{ height: '100%', fontSize: '20px' }}>
                    <div className="col-6 d-flex justify-content-center align-items-center" style={{ backgroundColor: isBinSelected ? '#28A745' :  '#1d8233', borderTopLeftRadius: '6px', borderBottomLeftRadius: '6px', cursor:'pointer', userSelect:'none' }} onClick={() => setBinSelected(false)}>Invitati</div>
                    <div className="col-6 d-flex justify-content-center align-items-center" style={{ backgroundColor: isBinSelected ? '#BF2F3B' : '#DC3545', borderBottomRightRadius: '6px', borderTopRightRadius: '6px', cursor:'pointer', userSelect:'none'  }} onClick={() => setBinSelected(true)}>Cestino</div>
                </div>
            </div>
            <div className="container-fluid invitationsGrid rounded">
                <div className="row" style={{ fontWeight: 'bold', fontSize: '25px' }}>
                    <div className="col-5 d-flex justify-content-center align-items-center">Nome Famiglia</div>
                    <div className="col-5 d-flex justify-content-center align-items-center">Numero Presenti</div>
                    <div className="col-2 d-flex justify-content-center align-items-center"></div>
                </div>
                {isBinSelected ? <Bin /> : <ItemsGrid calculationMethods={[setNItems, setTotals]} /> }
            </div>
        </div>
    )
}

export default Dashboard 