import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home'
import DetailPokemon from './components/DetailPokemon/DetailPokemon';
import CreatedPokemon from './components/CreatedPokemon/CreatedPokemon';

function App() {
    return (
        <div className='App'>
            <Routes>
                <Route exact path='/' element={<LandingPage />} />
                <Route exact path='/home' element={<Home />} />
                <Route exact path='/home/:id' element={<DetailPokemon />} />
                <Route exact path='/createdPokemon' element={<CreatedPokemon />} />
                <Route exact path='*' element={<Navigate to={'/'} />} />
            </Routes>
        </div>
    );
}

export default App;
