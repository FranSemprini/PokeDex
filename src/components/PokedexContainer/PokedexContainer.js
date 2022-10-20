import { useEffect, useState } from "react"
import { usePkmContext } from "../../context/PkmContext"
import { Pokedex } from "../Pokedex/Pokedex"
import { Randomizer } from "../Randomizer/Randomizer"

export const PokedexContainer = ( ) => {

    const { setPokemon, activePokemon } = usePkmContext()

    const [pkmnToRender, setPkmnToRender] = useState([])

    // const [activeOffset, setActiveOffset] = useState(activePokemon ? activePokemon.id - 4 >= 0 ? activePokemon.id - 1 : 0 : 0)
    const [activeOffset, setActiveOffset] = useState(0)

    const retrieveNewPkmns = async (url) => {
        const pokeResponse = await fetch(url)
        const pokemon = await pokeResponse.json()
        return pokemon
    }

    const handlePageLeft = () => {
        activeOffset > 0 && setActiveOffset(activeOffset - 4)
    }

    const handlePageRigth = () => {
        activeOffset <= 890 && setActiveOffset(activeOffset + 4)
    }


    useEffect(() => {
        const getPkms = async () => {
            const retrievePkms = await retrieveNewPkmns(`https://pokeapi.co/api/v2/pokemon/?limit=4&offset=${activeOffset}}`)
            const pkmsPromise = await Promise.all(retrievePkms.results.map((pk) => {
                const retrievePkm = retrieveNewPkmns(pk.url).then((pk) => {
                    return pk
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
    }, [pkmnToRender, activeOffset])

    return (
        <div className="pokedexContainer__container">
            <Pokedex pokemon={pkmnToRender} handlePageLeft={handlePageLeft} handlePageRigth={handlePageRigth} />
        </div>
    )
}
