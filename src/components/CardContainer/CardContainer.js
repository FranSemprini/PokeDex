import { useEffect, useState } from "react"
import { MainScreen } from "../Pokedex/MainScreen"
import { Randomizer } from "../Randomizer/Randomizer"
import './MainScreenContainer.scss'

export const MainScreenContainer = () => {

    const [pkmnToRender, setPkmnToRender] = useState([])

    useEffect(() => {
        const getPokemons = async () => {
            let mapPokemons = await Promise.all(Randomizer().map(async (pkm) => {
                const pokeResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkm}`)
                const pokemon = await pokeResponse.json()
                return pokemon
            }))
            setPkmnToRender(mapPokemons)
        }
        getPokemons()
    }, [])

    return (
        <div className="main__container">
            <MainScreen pokemon={pkmnToRender} />
        </div>
    )
}
