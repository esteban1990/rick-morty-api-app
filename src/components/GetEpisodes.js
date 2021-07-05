import React, { useState, useEffect } from 'react'
import { GridEpisodes } from './GridEpisodes';

export const GetEpisodes = () => {

    const [episodes,setEpisodes] = useState([])

    useEffect(() => {
        getDataEpisodes();
    },[])

    const getDataEpisodes = async() => {
        const url = "https://rickandmortyapi.com/api/episode"
        const resp = await fetch(url)
        const data = await resp.json();
        // console.log(data.results)
        setEpisodes(data.results)
    }
    return (
        <div>
            {
                episodes.map(episode => {
                    return(
                        <GridEpisodes
                        key={episode.id}
                        episode={episode}
                        />
                    )
                })
            }
            
        </div>
    )
}
