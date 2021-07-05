import React from 'react'


export const GridLocations = ({ location }) => {
    console.log(location)

    return (

        <div class="card" key={location.id}>
            <div class="card-body">
                <h5> Name: {location.name}</h5>
                <p>Dimension: <span>{location.dimension}</span></p>
                <li>Type: {location.type}</li>
            </div>
            <ul>
                <h1>Residents:</h1>
                {
                    location.residents.map(resident => {
                        return (
                            <a href={resident}><li>{resident}</li></a>
                        )
                    })
                }
            </ul>
            <div class="card-body">
                <a href={location.url} class="card-link">{location.url}</a>

            </div>
        </div>

    )
}
