import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"
import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom'
import './SearchBar.scss'
import { capitalize } from "@mui/material";

export const SearchBar = () => {

    const [value, setInputValue] = useState("");

    const handleUserInput = (e) => {
        setInputValue(e.target.value);
    };

    const [pokemon, setPokemon] = useState([])

    const search = async (value, property) => {
        const pokemonsRef = collection(db, 'pokemons')
        const q = query(pokemonsRef, where(property, '==', value))
        const querySnapshots = await getDocs(q)
        querySnapshots && querySnapshots.docs.map((pk) => (setPokemon(pk.data())))

    }

    useEffect(() => {
        if (Number(value)) {
            search(Number(value), 'id')

        } else {
            search(value.toLocaleLowerCase(), 'name')
        }
        value !== pokemon && setPokemon([])
    }, [value])

    const ref = useRef(null);

    const clearSearch = () => {
        setPokemon('');
        setInputValue('')
    }

    return (
        <div className="searchbar__container">
            <input
                ref={ref}
                value={value}
                onChange={handleUserInput}
                name="search"
                type={`text`}
                placeholder="Search"
                variant="outlined"
                className="imput__form"
            />
            {<div className="searchbar__result">
                <Link className="link" to={`/pokemon/${pokemon.id}`} key={pokemon.name}><p onClick={clearSearch}> {pokemon.name && capitalize(pokemon.name)} {pokemon.id && `#${pokemon.id}`}</p></Link>
            </div>}
        </div>
    )

}