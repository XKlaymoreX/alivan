import React from 'react'
import InfoCard from './InfoCard'
import CalendarSVG from '../media/svgs/calendar.svg'
import MapSVG from '../media/svgs/map.svg'
import RestaurantSVG from '../media/svgs/restaurant.svg'

const InfoSection: React.FC = () => {

    return (
        <div className="infoSection">
            <div className="infoIntroduction shadow-sm d-flex justify-content-center align-items-center" style={{ fontFamily: 'Poppins'}} id="infoAnchor">
                <span>Informazioni</span>
            </div>
            <div className="infoGrid ">
                <InfoCard svg={CalendarSVG} questionMark="Quando?" info="1 Luglio 2021|11:30am" details="Salva Evento" href={"https://calendar.google.com/event?action=TEMPLATE&tmeid=MXV1ZzJvN2c1Z21mN29lM3R0Z2k3bmxhOG4gaG96YS5jcmlzdGlhbjAxQG0&tmsrc=hoza.cristian01%40gmail.com"} />
                <InfoCard svg={MapSVG} questionMark="Dove?" info="Monforte d'Alba" details="Vai alla Mappa" href={"https://goo.gl/maps/5yWbVswnEs46aqeA9"}/>
                <InfoCard svg={RestaurantSVG} questionMark="Ristorante?" info="Ristorante 'La Torricella'" details="Vai al Sito" href={"http://www.latorricella.eu/it/"} />
            </div>
        </div>
    )
}

export default InfoSection
