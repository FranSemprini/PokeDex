import { AnimatePresence, } from "framer-motion"
import { Routes, Route, useLocation } from "react-router-dom"
import { Background } from "../components/Background/Background"
import { PkmDetailContainer } from "../components/PkmDetailContainer/PkmDetailContainer"
import { PokedexContainer } from "../components/PokedexContainer/PokedexContainer"


export const AppRouter = () => {

    const location = useLocation()

    return (
        <>
        <Background />
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                {/* <Route path="*" element={<Navigate to="/" />} /> */}
                <Route path="/" element={<PokedexContainer />} />
                <Route path="pokemon/:pkmId" element={<PkmDetailContainer />} />
            </Routes>
        </AnimatePresence>
        </>
    )
}