
const CharactersList = ( {chars}) => {
    return(
        <p>{chars.map(char => {
            return <p>{char.name}, {char.status}, {char.species}, {char.gender}</p>
        })}</p>
    )
}

export default CharactersList