import React from 'react'
import InfoCard from './InfoCard'
import CalendarSVG from '../media/svgs/calendar.svg'
import MapSVG from '../media/svgs/map.svg'
import RestaurantSVG from '../media/svgs/restaurant.svg'
import copy from 'copy-to-clipboard'

const InfoSection: React.FC = () => {

    const copyToClip = () => {
        copy("IT 60 X054 2811 1010 0000 0123 456")
    }

    return (
        <div className="infoSection">
            <div className="infoIntroduction container-fluid shadow-sm d-flex justify-content-center align-items-center" style={{ fontFamily: 'Poppins', height: '70px' }}>
                <h2>Informazioni Utili</h2>
            </div>
            <div className="infoGrid">
                <InfoCard svg={CalendarSVG} questionMark="Quando?" info="01/07/2021" details="1 Luglio 2021" href={""} hasLink={false} />
                <InfoCard svg={MapSVG} questionMark="Dove?" info="Monforte d'Alba" details="Vai alla Mappa" href={"https://goo.gl/maps/5yWbVswnEs46aqeA9"} hasLink={true} />
                <InfoCard svg={RestaurantSVG} questionMark="Ristorante?" info="Ristorante" details="La Torricella" href={"http://www.latorricella.eu/it/"} hasLink={true} />
            </div>
            <div className="ibanSection container-fluid shadow-sm d-flex justify-content-center align-items-center flex-column" style={{ fontFamily: 'Poppins', height: 'auto' }}>
                <h4>Contribuzioni</h4>
                {/* <div className="ibanText container-fluid">
                    <input className="myIban" type="text" id="myIban" value="IT 60 X054 2811 1010 0000 0123 456" disabled={true}></input>
                    <div className="copyButton" onClick={() => copyToClip()}>Copia</div>
                </div> */}
            </div>
        </div>
    )
}

export default InfoSection
