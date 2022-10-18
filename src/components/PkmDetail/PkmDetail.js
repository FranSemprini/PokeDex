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

export const PkmDetail = ({ pkmToRender, pokemonSpecies }) => {

    const pageMotion = {
        initial: { x: -400, opacity:0 },
        animate: { x: 0, opacity:1, transition: { duration: 1 } },
        exit: { x: -300, opacity:0, transition: { duration: 1 } }
    };

    const color = pokemonSpecies.color.name
    const root = document.documentElement;
    root.style.setProperty('--pokeBkg-color', color)

    const [cardSide, setCardSide] = useState(null)

    const carSidedHandler = () => {
        cardSide === null ? setCardSide(`showBack`) : setCardSide(null)
    }

    return (
        <div className="pokemonDetail__container">
            <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageMotion}
            >
                <div className="detail__touchToSee"><p>Touch the card to see more</p><div className="detail__arrow">< TurnSlightRightIcon /></div></div>
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
                                        <PokeData exp={pkmToRender.base_experience} height={pkmToRender.height * 10} weight={pkmToRender.weight} abilities={pkmToRender.abilities} capture_rate={pokemonSpecies.capture_rate} abitat={pokemonSpecies.habitat ? pokemonSpecies.habitat.name : `Unknown`} />
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