import { useNavigate } from 'react-router-dom'
import './Pokedex.scss'
import pokedexBkg from "../../assests/pokedex-bkgd.png"
import { useCurrentWidth } from "../../hooks/getWidth"
import { motion } from 'framer-motion'
import { SearchBar } from '../SearchBar/SearchBar'


export const Pokedex = ({ pokemon = [] }) => {

    const pageMotion = {
        initial: { y: -750 },
        animate: { y: 0, transition: { duration: 1 } },
        exit: { y: -750, transition: { duration: 1, when:` afterParent` } }
    };

    const navigate = useNavigate()

    let width = useCurrentWidth();
    const root = document.documentElement

    root.style.setProperty('--size', `${width < 460 ? width - width * 0.43 : 290}px`)

    return (
        <div className='pokedex__container' key="pokedex__container">
            <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageMotion}
            >
                <div className='pokedex'>
                    <img className='pokedex__img' src={pokedexBkg} alt="Pokedex" />
                    <div className='searchbar__container'><SearchBar /></div>
                    <div className="pkms__container">
                        {pokemon.map((pkm) =>
                            <button key={pkm.name} onClick={() => { navigate(`/pokemon/${pkm.id}`) }}>
                                <div className="pkm__container" >
                                    <div ><img src={pkm.sprites.front_default} alt={pkm.name}/></div>
                                    <p key={`name${pkm.name}`}>{(pkm.name.toUpperCase()).split('-')[0]} {`#${pkm.id}`}</p>
                                </div>
                            </button>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}