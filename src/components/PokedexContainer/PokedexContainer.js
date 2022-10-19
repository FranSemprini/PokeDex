import { useEffect, useState } from "react"
import { usePkmContext } from "../../context/PkmContext"
import { Pokedex } from "../Pokedex/Pokedex"
import { Randomizer } from "../Randomizer/Randomizer"
import "./PokedexContainer.scss"

export const PokedexContainer = () => {

    const { setPokemon } = usePkmContext()

    const [pkmnToRender, setPkmnToRender] = useState([])

    const retrieveNewPkmns = async (url) => {
        const pokeResponse = await fetch(url)
        const pokemon = await pokeResponse.json()
        return pokemon
    }

    useEffect(() => {
        const getPkms = async () => {
            const retrievePkms = await retrieveNewPkmns(`https://pokeapi.co/api/v2/pokemon/?limit=4&offset=0}`)
            const pkmsPromise = await Promise.all(retrievePkms.results.map(async (e) => {
                const retrievePkm = retrieveNewPkmns(e.url).then((e) => {
                    return e
                })
                return retrievePkm
            }))
            return pkmsPromise
        }
        getPkms().then((e) => setPkmnToRender(e))
        // const getPokemons = async () => {
        //     let mapPokemons = await Promise.all(Randomizer().map(async (pkm) => {
        //         const pokeResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkm}`)
        //         const pokemon = await pokeResponse.json()
        //         return pokemon
        //     }))
        //     setPkmnToRender(mapPokemons)
        // }
        //     getPokemons()
        setPokemon(null)
    }, [pkmnToRender])

    return (
        <div className="pokedexContainer__container">
            <Pokedex pokemon={pkmnToRender} />
        </div>
    )
}
