import React from 'react'
import classnames from 'classnames'
interface IInfoCardSmall {
    svg: string,
    info: string,
    details: string,
    href: string,
    questionMark: string
}

const InfoCardSmall: React.FC<IInfoCardSmall> = (props) => {


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
        <div className={classnames("myCardSmall", "rounded", {'shadow-lg':useShadow })}  >
            <div className="cardContentSmall">
                <div className="myQuestionSmall">
                    {props.questionMark}
                </div>
                <div className="myImageSmall">
                    <img src={props.svg} alt=""></img>
                </div>
                <div className="myInfoSmall" >
                    {props.info}
                </div>
                <div className="myDetailsSmall" >
                    <a href={props.href} >{props.details}</a> 
                </div>
            </div>
        </div>
    )
}

export default InfoCardSmall
