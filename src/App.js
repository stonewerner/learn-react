import React from 'react';
import {useEffect, useState} from 'react';

import './App.css';
import SearchIcon from './search.svg';

import MovieCard from './MovieCard';

const apiKey = process.env.REACT_APP_API_KEY;

const API_URL = `https://www.omdbapi.com?apikey=${apiKey}`;

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
        //console.log("APIKEY: ", apiKey);
        //console.log("ENV VAR:", process.env.REACT_APP_API_KEY);
    }

    useEffect(() => {
        searchMovies('surfing') //shows on homepage

    }, []);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          searchMovies(searchTerm);
        }
      };



    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input 
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <img
                    src={SearchIcon}
                    alt="Search"
                    onClick={() => searchMovies(searchTerm)}
                    onKeyDown={e => e.key === 'Enter' ? searchMovies(searchTerm):null}
                />
            </div>

            {movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : 
                (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )}

            

        </div>
    );
}

export default App;