import React from 'react'
import InfoCard from './InfoCard'
import CalendarSVG from '../media/svgs/calendar.svg'
import MapSVG from '../media/svgs/map.svg'
import RestaurantSVG from '../media/svgs/restaurant.svg'

const InfoSection: React.FC = () => {

    return (
        <div className="infoSection" id="infosection">
            <div className="infoIntroduction shadow-sm d-flex justify-content-center align-items-center" style={{ fontFamily: 'Poppins'}} id="infoAnchor">
                <span>Informazioni</span>
            </div>
            <div className="infoGrid ">
                <InfoCard svg={CalendarSVG} questionMark="Quando?" info="1 Luglio 2021-11:30am" details="Salva Evento" href={"https://calendar.google.com/calendar/r/eventedit?text=Matrimonio+Alice+Ivan&dates=20210701T100000+0200/20210701T103000+0200&details=Matrimonio&location=Località+S.+Anna,+98,+12065+Monforte+d'Alba+CN"} />
                <InfoCard svg={MapSVG} questionMark="Dove?" info="Monforte d'Alba" details="Vai alla Mappa" href={"https://goo.gl/maps/5yWbVswnEs46aqeA9"}/>
                <InfoCard svg={RestaurantSVG} questionMark="Ristorante?" info="Ristorante 'La Torricella'" details="Vai al Sito" href={"http://www.latorricella.eu/it/"} />
            </div>
        </div>
    )
}

export default InfoSection
