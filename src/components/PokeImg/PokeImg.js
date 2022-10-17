import { useEffect, useState } from "react"
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
import FlareIcon from '@mui/icons-material/Flare';
import './PokeImg.scss'

export const PokeImg = ({ sprites }) => {

    const [pkmnSprite, setPkmnSprite] = useState()

    const [shiny, setShiny] = useState(`_default`)
    const [rotate, setRotate] = useState('front')

    const shinyHandler = (e) => {
        e.stopPropagation()
        shiny === `_default` ? setShiny(`_shiny`) : setShiny(`_default`)
    }

    const rotateHandler = (e) => {
        e.stopPropagation()
        if (rotate === `front`) {
            setRotate("back")
        } else {
            setRotate("front")
        }
    }

    useEffect(() => {
        setPkmnSprite(sprites[`${rotate}${shiny}`])
    }, [rotate, shiny, sprites ])

    return (
        <div className="img__container">
            <div className="sprite__container"><img className="img__sprite" src={pkmnSprite} alt={``} /></div>
            <div className="img__buttons">
                <div className="rotate__select" onClick={rotateHandler}><ThreeSixtyIcon fontSize="small" /></div>
                <div onClick={shinyHandler} className= {shiny === `_default` ? `shiny__select` : `shiny__select--selected shiny__select`}><FlareIcon fontSize="small"/></div>
            </div>
        </div>
    )




}