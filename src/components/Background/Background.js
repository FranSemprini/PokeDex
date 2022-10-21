import './Background.scss'
import  pokemonLogo from '../../assests/pokemon_logo.png'


export const Background = () => {

    return (
        <div className="background__container">
            <img className='pokelogo' alt='Pokemon' src={pokemonLogo} /> 
        </div>
    )
}
