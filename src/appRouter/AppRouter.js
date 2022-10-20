import { AnimatePresence, } from "framer-motion"
import { Routes, Route, useLocation, Navigate } from "react-router-dom"
import { Background } from "../components/Background/Background"
import { PkmDetailContainer } from "../components/PkmDetailContainer/PkmDetailContainer"
import { PokedexContainer } from "../components/PokedexContainer/PokedexContainer"
import { useMediaQuery } from 'react-responsive'
import './AppRouter.scss'

export const AppRouter = () => {

    const isDesktop = useMediaQuery({ query: '(min-width: 1023px)' })
    const location = useLocation()

    return (
        <>
            <Background />
            <div className="main__container">
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={!isDesktop ? <PokedexContainer /> : <Navigate to="/pokemon/1" />} />
                        <Route path="*" element={!isDesktop ? <Navigate to="/" /> : <Navigate to="/pokemon/1" />} />
                        <Route path="pokemon/:pkmId" element={<PkmDetailContainer />} />
                    </Routes>
                </AnimatePresence>
                {isDesktop && <PokedexContainer />}
            </div>
        </>
    )
}