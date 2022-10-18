import { Link } from "react-router-dom"
import "./GoToPokedex.scss"

export const GoToPokedex = () => {

    return (
        <div className="goToPokedex__container">
            <Link to={"/"}><div className="goToPokedex__button"></div></Link>
        </div>
    )
}
