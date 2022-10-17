import "./PokeType.scss"

export const PokeType = ({ types }) => {

    let typesToMap = types.map((type) => type)
    
    return (
        <div className="types__container">
            {typesToMap.map(type =>
                <p className={`type__default ${type.type.name}`} key={type.type.name}>{(type.type.name).toUpperCase()}</p>
            )}
        </div>
    )
}