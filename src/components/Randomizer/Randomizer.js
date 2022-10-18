

export const Randomizer = () => {

    let rand = Array.from({length: 4}, () => Math.floor(Math.random() * 900))

    return (
        rand
    )

}