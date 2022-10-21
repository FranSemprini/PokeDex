import { useNavigate } from 'react-router-dom'
import './Pokedex.scss'
import pokedexBkg from "../../assests/pokedex-bkgd.png"
import { useCurrentWidth } from "../../hooks/getWidth"
import { motion } from 'framer-motion'
import { SearchBar } from '../SearchBar/SearchBar'
import { PokedexArrow } from '../PokedexArrow/PokedexArrow'
import { CircularProgress } from '@mui/material'

export const Pokedex = ({ pokemon = [], handlePageLeft, handlePageRigth, loaded, onLoad }) => {

    const pageMotion = {
        initial: { y: -750 },
        animate: { y: 0, transition: { duration: 1 } },
        exit: { y: -750, transition: { duration: 1, when: ` afterParent` } }
    };

    const navigate = useNavigate()

    let width = useCurrentWidth();
    const root = document.documentElement

    root.style.setProperty('--size', `${width < 460 ? width - width * 0.38 : 295}px`)

    return (
        <div className='pokedex__container'>
            <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageMotion}
            >
                <div className='pokedex'>
                    <img className='pokedex__img' src={pokedexBkg} alt="Pokedex" />
                    <div className='pokedexarrow__container'>
                        <div className='pokedexarrow__container--foward' onClick={handlePageRigth}><PokedexArrow /></div>
                        <div className='pokedexarrow__container--backward' onClick={handlePageLeft}><PokedexArrow /></div>
                    </div>
                    <div className='searchbar__container'><SearchBar /></div>
                    <div className="pkms__container">
                        {pokemon.map((pkm) =>
                            <div className="pkm__container" key={pkm.name} onClick={() => { navigate(`/pokemon/${pkm.id}`) }} >
                                <p>{(pkm.name.toUpperCase()).split('-')[0]}</p>
                                <div> <img className='pkm__img' style={{ display: loaded ? 'unset' : 'none' }} onLoad={onLoad} src={pkm.sprites.front_default} alt={pkm.name} />
                                    {!loaded && <CircularProgress color="secondary" />}
                                </div>
                                <p> {`#${pkm.id}`}</p>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}