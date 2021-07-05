import React, { useState, useEffect } from 'react'
import { GetCharacters } from './components/GetCharacters';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { GetLocations } from './components/GetLocations';
import { GetEpisodes } from './components/GetEpisodes';
import { SearchCategory } from './components/SearchCategory';


const App = () => {


  return (
    <div>
      <Router>

        <NavBar />

        <Route exact path="/">
          <Home />
        </Route>

        {/* <Route exact path="/categories">
          <SearchCategory/>
        </Route> */}

        <Route excat path="/characters">
          <GetCharacters />
        </Route>

      <Route exact path="/locations">
        <GetLocations/>
      </Route>

      <Route exact path="/episodes">
        <GetEpisodes/>
      </Route>

      </Router>

    </div>
  )
}

export default App