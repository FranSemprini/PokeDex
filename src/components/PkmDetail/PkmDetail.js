import { PokeImg } from "../PokeImg/PokeImg"
import { PokeStats } from "../PokeStats/PokeStats"
import { PokeData } from "../PokeData/PokeData"
import { PokeDesc } from "../PokeDesc/PokeDesc"
import { PokeType } from "../PokeType/PokeTtype"
import { PokeAbilities } from "../PokeAbilities/PokeAbilities"
import { PokeEvosContainer } from "../PokeEvosContainer/PokeEvosContainer"
import { capitalize } from "@mui/material"
import TurnSlightRightIcon from '@mui/icons-material/TurnSlightRight';
import { motion } from 'framer-motion'
import "./PkmDetail.scss"
import { useState } from "react"
import { GoToPokedex } from "../GoToPokedex/GoToPokedex"
import { useMediaQuery } from 'react-responsive'

export const PkmDetail = ({ pkmToRender, pokemonSpecies }) => {

    const pageMotion = {
        initial: { x: -400, opacity: 0 },
        animate: { x: 0, opacity: 1, transition: { duration: 1 } },
        exit: { x: -300, opacity: 0, transition: { duration: 1 } }
    };

    const isDesktop = useMediaQuery({ query: '(min-width: 1023px)' })
    const color = pokemonSpecies.color.name
    const root = document.documentElement;
    root.style.setProperty('--pokeBkg-color', color)

    const [cardSide, setCardSide] = useState(null)

    const carSidedHandler = () => {
        cardSide === null ? setCardSide(`showBack`) : setCardSide(null)
    }

    return (
        <div className="pokemonDetail__container">
            {!isDesktop && <motion.div key="button" className="goToPokedex__container"
                initial={{ x: -300 }}
                animate={{ x: -50, transition: { duration: 1, delay: 0.8 } }}
                exit={{ x: -200, transition: { duration: 0.5 } }}
            >
                <GoToPokedex />
            </motion.div>}

            <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageMotion}
            >
                <motion.div key="touchToSee"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1, delay: 0.8 } }}
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                >
                    <div className="detail__touchToSee"><p>Touch the card to see more details</p><div className="detail__arrow">< TurnSlightRightIcon /></div></div>
                </motion.div>
                <div className="flip-card" onClick={carSidedHandler}>
                    <div className={`card__container flip-card-inner ${cardSide}`}>
                        <div className="flip-card-front">
                            <div className="pokemonDetail__card">
                                <div className="pokemonDetail__TitleId">
                                    <h1 className="pokemonDetail__title">{capitalize((pkmToRender.name))}</h1>
                                    <h3 className="pokemonDetail__number">#{pkmToRender.id}</h3>
                                </div>
                                <div className="pokemonDetail__firstRow">
                                    <div className="firstRow__inner">
                                        <PokeImg sprites={pkmToRender.sprites} color={pokemonSpecies.color.name} />
                                        <PokeType types={pkmToRender.types} />
                                    </div>
                                    <div className="pokemonDetail__l">
                                        <PokeDesc desc={pokemonSpecies.flavor_text_entries} />
                                    </div>
                                </div>
                                <div className="pokemonDetail__secondRow">
                                    <PokeStats stats={pkmToRender.stats} />
                                </div>
                            </div>
                        </div>
                        <div className="flip-card-back">
                            <div className="pokemonDetail__card">
                                <div className="pokemonDetail__TitleId">
                                    <h1 className="pokemonDetail__title">{capitalize((pkmToRender.name))}</h1>
                                    <h3 className="pokemonDetail__number">#{pkmToRender.id}</h3>
                                </div>
                                <div className="pokemonDetail__thirdRow">
                                    <div className="pokemonDetail__thirdRowL">
                                        <PokeData exp={pkmToRender.base_experience} height={pkmToRender.height * 10} weight={pkmToRender.weight} abitat={pokemonSpecies.habitat ? pokemonSpecies.habitat.name : `Unknown`} />
                                        <PokeAbilities abilities={pkmToRender.abilities} />
                                    </div>
                                </div>
                                <div className="pokemonDetail__fourthdRow">
                                    <PokeEvosContainer evos={pokemonSpecies.evolution_chain} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}