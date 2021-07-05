import React from 'react'

export const GridCharacter = ({ character }) => {
    console.log(character)
    return (
        <div class="card" key={character.id}>
            <img src={character.image} class="img-fluid rounded-circle w-25" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Name: {character.name}</h5>
                <li>Specie: <strong>{character.species}</strong></li>
                <li>Gender: <strong>{character.gender}</strong></li>
                <li>Status: <strong>{character.status}</strong></li>
            </div>
            <ul class="list-group list-group-flush">
                <h1>Episodes</h1>
                {
                    character.episode.map(episodes => {
                        return (
                           <a href={episodes}><li>{episodes}</li></a>
                        )
                    })
                }
            </ul>
            <div class="card-body">
                <a href={character.url}>{character.url}</a>
            </div>
        </div>
    )
}
