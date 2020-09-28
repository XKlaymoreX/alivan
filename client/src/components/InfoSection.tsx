import React from 'react'
import InfoCard from './InfoCard'
import CalendarSVG from '../media/svgs/calendar.svg'
import MapSVG from '../media/svgs/map.svg'
import RestaurantSVG from '../media/svgs/restaurant.svg'


const InfoSection : React.FC = () => {
    return (
        <div className="d-flex flex-row justify-content-around">
            <InfoCard svg={CalendarSVG} info="01/07/2021" details="1 Luglio 2021" href={""} hasLink={false} />
            <InfoCard svg={MapSVG} info="Monforte d'Alba" details="Vai alla Mappa" href={"https://goo.gl/maps/5yWbVswnEs46aqeA9"} hasLink={true}/>
            <InfoCard svg={RestaurantSVG} info="Ristorante" details="La Torricella" href={""} hasLink={false} />

        </div>
    )
}

export default  InfoSection
