import { capitalize } from '@mui/material'
import './PokeStats.scss'
import { ProgressBar } from '../../Helpers/ProgressBar/ProgressBar'

export const PokeStats = ({ stats }) => {

    return (
        <div className="stats__container">
            <div className="stats">
                {stats.map((stat) =>
                    <div className='stats__bar' key={`${stat.stat.name}`}>
                        <div className='text__stat'>
                            <p className='name__stat'>{stat.stat.name === "special-attack" ? "S-attack" : stat.stat.name === "special-defense" ? "S-defense" : capitalize(stat.stat.name)}</p>
                            <p className='number__stat'>{stat.base_stat}</p>
                        </div><ProgressBar completed={stat.base_stat} />
                    </div>
                )}
            </div>

        </div>
    )
}

