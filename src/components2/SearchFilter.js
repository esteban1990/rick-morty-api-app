import React from 'react'

export const SearchFilter = ({filtrar,setFiltrar}) => {

    const handleChange = (e) => {
        setFiltrar(e.target.value)
    }
    return (
        <>
        <form>
            <input type="text"
                    value={filtrar}
                    onChange={handleChange}
                    placeholder="Ingresa un nombre"
                    />
        </form>
            
        </>
    )
}
