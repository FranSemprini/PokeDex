import { capitalize } from "@mui/material"
import { Link } from "react-router-dom"
import "./PokeEvos.scss"

export const PokeEvos = ({ evolutions }) => {

    const getIds = (toGet) => {
        return (toGet).split("/")[6]
    }

    let evolve = evolutions.chain
    const chainToRender = [evolve.species.name]
    const evosImg = [getIds(evolve.species.url)]

    if (evolve.evolves_to) {
        (evolve.evolves_to.map((evo) => { chainToRender.push(evo.species.name); evosImg.push(getIds(evo.species.url)) }))
    }

    while ((evolve.evolves_to).length) {
        evolve.evolves_to.map((evo) => evolve = evo)
        console.log()
        chainToRender.includes(evolve.species.name) === false && chainToRender.push(evolve.species.name); evosImg.includes(getIds(evolve.species.url)) === false && evosImg.push(getIds(evolve.species.url))
    }

    return (
        <div className="evolution__container">
            <h3>Evolutions</h3>
            <div className="evolutions__container">
                {chainToRender.map((evos, index) => {
                    const evosToShow = evosImg[index]
                    return (
                        <div className="evolutions__evolution" key={evos} >
                            <Link className="link" to={`/pokemon/${evosToShow}`}>
                                <div className="evoImg__container"><img alt={evos} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evosToShow}.png`} /></div>
                                <p>{capitalize(evos)}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}