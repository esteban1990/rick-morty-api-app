import React from 'react'
import {Link} from 'react-router-dom'


export const NavBar = () => {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link className="navbar-brand" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                    <Link className="navbar-brand" to="/characters">Characters</Link>
                    </li>
                    <li class="nav-item">
                    <Link className="navbar-brand" to="/locations">Locations</Link>
                    </li>
                    <li class="nav-item">
                       <Link className="navbar-brand" to="/episodes">Episodes</Link>
                    </li>
                    <li class="nav-item">
                       <Link className="navbar-brand" to="/categories">Categories</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}
