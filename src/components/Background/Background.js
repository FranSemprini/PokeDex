import { usePkmContext } from '../../context/PkmContext'
import { GoToPokedex } from '../GoToPokedex/GoToPokedex'
import './Background.scss'
import { AnimatePresence, motion } from "framer-motion"

export const Background = () => {

    const { activePokemon } = usePkmContext()

    return (
        <div className="background__container">
            <h1>Pokedex</h1>
            <AnimatePresence>
                {activePokemon && (
                    <motion.div key="button"
                        initial={{ x: -200 }}
                        animate={{ x: -50, transition: { duration: 1, delay: 0.8 } }}
                        exit={{ x: -200, transition: { duration: 0.5 } }}
                    >
                         <GoToPokedex />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
