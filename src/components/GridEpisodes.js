import React from 'react'

export const GridEpisodes = ({ episode }) => {
    console.log(episode)
    return (
        <div class="card" key={episode.id}>
            <a href={episode.url} />
            <div class="card-body">
                <h5 class="card-title">Name: {episode.name}</h5>
                <p>Episode: <span>{episode.episode}</span></p>
                <p>Date: {episode.air_date}</p>
            </div>
            <ul class="list-group list-group-flush">
                {
                    episode.characters.map(character => {
                        return (
                            <a href={character}><li key={character.id}>{character}</li></a>
                        )
                    })
                }
            </ul>
            <div class="card-body">
                <a href={episode.url}>{episode.url}</a>

            </div>
        </div>
    )
}
