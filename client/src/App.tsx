import React from 'react';
import './App.css';
import MovieList from "./components/MovieList";
import NewMovieForm from "./components/NewMovieForm";


function App() {
    return (

        <div className={'App'}>
            <MovieList/>
            <NewMovieForm/>
        </div>

    );
}

export default App;
