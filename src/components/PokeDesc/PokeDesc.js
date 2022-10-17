import { capitalize } from "@mui/material"
import "./PokeDesc.scss"
import pokeball from "../../assests/pokeball-iconwhite.png"


export const PokeDesc = ({ desc }) => {

    let flavorTexts = desc.map((el) => el)
    let text = flavorTexts.find((el) => el.language.name === `en`)

    return (
        <div className="desc__container">
            <div className="pokeball__container"><img className="desk__pokeball" alt="Pokaball" src={pokeball} /></div>
            <p className="desc__text">{capitalize((text.flavor_text).replace('\f', ' ').toLowerCase())}</p>
            <p className="desc__from">Pokemon {text.version.name}</p>
            <div className="pokeball__container--bottom"><img alt="Pokaball" className="desk__pokeball" src={pokeball} /></div>
        </div>
    )
}