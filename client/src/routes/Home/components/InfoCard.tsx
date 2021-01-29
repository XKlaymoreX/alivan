import React from 'react'

interface IInfoCard {
    svg: string,
    info: string,
    details: string,
    href: string,
    questionMark: string
}


const InfoCard : React.FC<IInfoCard> = (props) => {
    return (
        <div className="infoCard">
            <div className="infoCardLeft cardSection">
                <div className="infoCardTitle">
                   <span>{props.questionMark}</span>
                </div>
                <div className="infoCardContent">
                    <span>{props.info}</span>
                    <a href={props.href}><div className="linkText">{props.details}</div></a>
                </div>
            </div>
            <div className="infoCardRight cardSection">
                <img src={props.svg} alt="svg"></img>
            </div>
        </div>
    )
}

export default InfoCard
