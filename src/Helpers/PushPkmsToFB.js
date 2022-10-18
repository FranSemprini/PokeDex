import { db } from "../firebase/config"
import { addDoc, collection, } from "firebase/firestore"


export const PushPkmsToFB = () => {

    const retrieveNewPkmn = async (url) => {
        const pokeResponse = await fetch(url)
        const pokemon = await pokeResponse.json()
        return pokemon
    }

    const updateFB = () => {
        let types = []
        retrieveNewPkmn(`https://pokeapi.co/api/v2/pokemon/?limit=1000}`)
            .then((eles) => {
                eles.results.forEach(element => {
                    retrieveNewPkmn(element.url)
                        .then((e) => {
                            e.types.forEach((el) => types.push(el.type.name))
                            addDoc(collection(db, `pokemons`), { name: e.name, id: e.id, types })
                            types = []
                        })
                });
            })
    }

    // updateFB()
}