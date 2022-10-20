import { PkmDetailContainer } from "../PkmDetailContainer/PkmDetailContainer"
import { PokedexContainer } from "../PokedexContainer/PokedexContainer"
import { Routes, Route, useLocation, Navigate } from "react-router-dom"
import './DesktopPage.scss'

export const DesktopPage = () => {

    console.log(`asd`)

    return (
        <div className="desktop__container">
            <PkmDetailContainer />
            <PokedexContainer />
        </div>
    )
}