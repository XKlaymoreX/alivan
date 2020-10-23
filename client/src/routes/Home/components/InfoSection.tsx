import React from 'react'
import InfoCard from './InfoCard'
import CalendarSVG from '../media/svgs/calendar.svg'
import MapSVG from '../media/svgs/map.svg'
import RestaurantSVG from '../media/svgs/restaurant.svg'

const InfoSection: React.FC = () => {

    return (
        <div className="infoSection">
            <div className="infoIntroduction shadow-sm d-flex justify-content-center align-items-center" style={{ fontFamily: 'Poppins'}} id="infoAnchor">
                <h2>Informazioni Utili</h2>
            </div>
            <div className="infoGrid">
                <InfoCard svg={CalendarSVG} questionMark="Quando?" info="01/07/2021" details="1 Luglio 2021 - Ore: 11:30" href={""} hasLink={false} />
                <InfoCard svg={MapSVG} questionMark="Dove?" info="Monforte d'Alba" details="Vai alla Mappa" href={"https://goo.gl/maps/5yWbVswnEs46aqeA9"} hasLink={true} />
                <InfoCard svg={RestaurantSVG} questionMark="Ristorante?" info="Ristorante" details="La Torricella" href={"http://www.latorricella.eu/it/"} hasLink={true} />
            </div>
        </div>
    )
}

export default InfoSection
