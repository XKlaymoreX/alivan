import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {IDashInvitation} from '../../../types'
import Invitation from './TrashedItem'

const Bin : React.FC = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [items, setItems] = useState<Array<IDashInvitation>>([])

    useEffect(() => {
        const fetchItems = async () => {
            try {
                await axios.get('/api/v1/inviti/bin').then(result => {
                    setItems(result.data)
                    setIsLoading(false)
                })
            } catch (error) {
                console.log(error)
            }
        }
        fetchItems()
    }, [isLoading])



    return (
        <>
            {isLoading ? <h1>Uhm.. vediamo chi c'è</h1> : <>{items.map((el: IDashInvitation) => {
                return (
                    <Invitation familyName={el.familyName} presentsNumber={el.presentsNumber} _id={el._id} key={el._id} loading={[isLoading, setIsLoading]} />
                )
            })}</>}
        </>
    )
}

export default Bin
