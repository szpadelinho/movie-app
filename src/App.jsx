import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CharactersList from './CharactersList'

function App() {
  const [char, setChar] = useState([])

  async function fetchedCharacters(){
    // fetch("https://rickandmortyapi.com/api/character")
    //   .then(res => {
    //     //console.log(res)
    //     return res.json()
    //   })
    //   .then(data => {
    //     //console.log(data)
    //     const characters = data.results.map(character => {
    //       return {
    //         id: character.id,
    //         name: character.name,
    //         species: character.species,
    //         gender: character.gender,
    //         status: character.status
    //       }
    //     }) 
    //     console.log(characters)
    //   })
    //   .catch(err=>console.log(err))
    const res = await fetch("https://rickandmortyapi.com/api/character")
    const data = await res.json()
    const characters = data.results.map(character => {
      return {
          id: character.id,
          name: character.name,
          species: character.species,
          gender: character.gender,
          status: character.status
      }
    })
    setChar(characters)
  }

  return (
    <>
      <section>
        <button onClick={fetchedCharacters}>Fetch characters</button>
      </section>
      <section>
        <CharactersList chars={char}/>
      </section>
    </>
  )
}

export default App
