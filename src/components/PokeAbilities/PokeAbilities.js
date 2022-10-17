import { capitalize } from "@mui/material"
import "./PokeAbilities.scss"

export const PokeAbilities = ({ abilities }) => {

    return (
        <div className="pokeData__abilities">
            <h3>Abilities</h3>
            <div className="abilities">
                {abilities.map((ability) =>
                    <p className="ability" key={ability.ability.name}>{capitalize(ability.ability.name)}</p>
                )}
            </div>
        </div>
    )
}