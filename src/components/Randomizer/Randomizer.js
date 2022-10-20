

export const Randomizer = () => {

    let rand = Array.from({length: 4}, () => Math.floor(Math.random() * 890))

    return (
        rand
    )

}