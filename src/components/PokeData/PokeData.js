import { capitalize } from "@mui/material"
import "./PokeData.scss"

export const PokeData = ({ exp, height, weight, abilities, capture_rate, abitat }) => {

    return (
        <div className="pokeData__container">
            <h3>Data</h3>
            <div className="pokeData">
                <p className="pokeData__data"><span className="span__bold">Exp</span> {exp}</p>
                <p className="pokeData__data"><span className="span__bold">Height</span> {height} cm</p>
                <p className="pokeData__data"><span className="span__bold">Weight</span> {weight} kg</p>
                <p className="pokeData__data"><span className="span__bold">Habitat</span> {capitalize(abitat)}</p>
            </div>
        </div>
    )
}