import React, { useState, useEffect } from 'react'
import { IDashInvitation } from '../../../types'
import Invitation from './Invitation'
import axios from 'axios'

const ItemsGrid: React.FC<any> = (props) => {

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [items, setItems] = useState<Array<IDashInvitation>>([])



    useEffect(() => {
        const fetchItems = async () => {
            try {
                await axios.get('/api/v1/inviti').then(result => {
                    setItems(result.data)
                    setIsLoading(false)
                    props.calculationMethods[0](items.length)
                    props.calculationMethods[1](items.map((el: IDashInvitation) => { return el.presentsNumber }).reduce((total, current) => { return total + current }, 0))
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

export default ItemsGrid
