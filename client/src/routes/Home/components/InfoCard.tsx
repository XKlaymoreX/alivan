import React from 'react'

interface IInfoCard {
    svg: string,
    info: string,
    details: string,
    hasLink: boolean,
    href: string, 
    questionMark: string
}

const InfoCard: React.FC<IInfoCard> = (props) => {
    return (
        <div className="myCard rounded shadow-lg d-flex flex-column justify-content-around" style={{ height: '250px', width: '300px', margin: '20px', padding: '10px', backgroundColor: 'white' }}>
            <div className="myQuestion">
                {props.questionMark}
            </div>
            <div className="myImage">
                <img src={props.svg} alt=""></img>
            </div>
            <div className="myInfo" style={{ color: '#AAA', fontFamily: 'Poppins' }}>
                {props.info}
            </div>
            <div className="myDetails" style={{ color: 'black', fontFamily: 'Poppins' }}>
                {props.hasLink ? (<a href={props.href} style={{textDecoration:'none'}}>{props.details}</a>) : (<div>{props.details}</div>)}
            </div>
        </div>
    )
}

export default InfoCard
