import React from 'react'
import classnames from 'classnames'
interface IInfoCard {
    svg: string,
    info: string,
    details: string,
    href: string,
    questionMark: string
}

const InfoCard: React.FC<IInfoCard> = (props) => {


    const [useShadow, setShadow] = React.useState(true)

    React.useEffect(() => {
        window.addEventListener('resize', () => {
            if(window.innerWidth < 992){
                setShadow(false)
            }else{
                setShadow(true)
            }
        })

        window.addEventListener('load', () => {
            if(window.innerWidth < 992){
                setShadow(false)
            }else{
                setShadow(true)
            }
        })
        return 

        window.removeEventListener('resize', () => {
            if(window.innerWidth < 992){
                setShadow(false)
            }else{
                setShadow(true)
            }
        })
        window.removeEventListener('load', () => {
            if(window.innerWidth < 992){
                setShadow(false)
            }else{
                setShadow(true)
            }
        })

    }, [])



    return (
        <div className={classnames("myCard", "rounded", {'shadow-lg':useShadow })}  >
            <div className="cardContent">
                <div className="myQuestion">
                    {props.questionMark}
                </div>
                <div className="myImage">
                    <img src={props.svg} alt=""></img>
                </div>
                <div className="myInfo" >
                    {props.info}
                </div>
                <div className="myDetails" >
                    <a href={props.href} >{props.details}</a> 
                </div>
            </div>
        </div>
    )
}

export default InfoCard
