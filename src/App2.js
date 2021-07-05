import React, { useState, useEffect } from 'react'

import { Card } from './components2/Card'
import { SearchFilter } from './components2/SearchFilter'

const App2 = () => {

    const [personajes, setPersonajes] = useState([])
    const [loading, setLoading] = useState(true)
    const [filtrar, setFiltrar] = useState('')


    useEffect(() => {
        const getPersonajes = async () => {
            try {
                const url = 'https://rickandmortyapi.com/api/character'
                const response = await fetch(url)
                const data = await response.json();
                // console.log(data.results)
                setPersonajes(data.results)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getPersonajes();
    }, [])

    const personajesFiltrados = personajes.filter((personaje => {
        return personaje.name.toLowerCase().includes(filtrar.toLowerCase())
    }))


    return (
        <div>
            <SearchFilter filtrar={filtrar} setFiltrar={setFiltrar} />


            <section className="lista-personajes">
                {
                    loading ? (
                        <p>Cargando...</p>
                        
                    ) : personajesFiltrados.length > 0 ? 
                    
                    (
                        personajesFiltrados.map(personaje => {
                            return (
                                <Card
                                    key={personaje.id}
                                    personaje={personaje}
                                />
                            )
                        })

                    ) : (
                                <p>
                                    No se encontro personajes ne la busqeda
                                </p>
                            )

                }


            </section>
        </div>
    )
}
export default App2;