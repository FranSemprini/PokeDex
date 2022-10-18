import {  useEffect ,useState } from "react"
import { usePkmContext } from "../../context/PkmContext"
import { Pokedex } from "../Pokedex/Pokedex"
import { Randomizer } from "../Randomizer/Randomizer"
import "./PokedexContainer.scss"

export const PokedexContainer = () => {

    const {setPokemon} = usePkmContext()

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
        setPokemon(null)
        getPokemons()
    }, [setPokemon])

    return (
        <div className="pokedexContainer__container">
            <Pokedex pokemon={pkmnToRender} />
        </div>
    )
}
