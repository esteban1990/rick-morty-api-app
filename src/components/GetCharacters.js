import React, { useState, useEffect } from 'react'
import { GridCharacter } from './GridCharacter'

export const GetCharacters = () => {

    const [characters,setCharacters] = useState([])

    useEffect(()=> {
        getDataCharacters()
    },[])


    const getDataCharacters = async() => {
        const url = "https://rickandmortyapi.com/api/character"
        const resp = await fetch(url)
        const data = await resp.json();
        // console.log(data.results)
        setCharacters(data.results)

    }

    return (
        <div>
            {
                characters.map(character => {
                    return (
                        <GridCharacter
                        key={character.id}
                        character={character}
                        />
                    )
                })
            }
        </div>
    )
}
