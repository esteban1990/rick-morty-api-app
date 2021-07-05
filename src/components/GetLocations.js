import React, { useState, useEffect } from 'react'
import { GridLocations } from './GridLocations';

export const GetLocations = () => {

    const [locations,setLocations] = useState([])
    
    useEffect(() => {
        getDataLocations();
    },[])

    const getDataLocations = async() => {
        const url = "https://rickandmortyapi.com/api/location"
        const resp = await fetch(url)
        const data =  await resp.json();
        // console.log(data.results)
        setLocations(data.results)
    }
    return (
        <div>
            {
                locations.map(location => {
                    return(
                        <GridLocations
                        key={location}
                        location={location}
                        />
                    )
                })
            }
        </div>
    )
}
