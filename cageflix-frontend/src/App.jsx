//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

import React from "react";
import { useState, useEffect, useMemo } from "react";
import Search from "./components/Search";
import Loading from "./components/Loading";
import MovieCard from "./components/MovieCard";
import Fuse from "fuse.js";

const API_BASE_URL = "https://cageflix.onrender.com";

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState("");

  const fetchNicolasCageWorks = async () => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endPoint = `${API_BASE_URL}/api/nicolas-cage`;
      const response = await fetch(endPoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setMovieList(data || []);
    } catch (error) {
      console.error(`Error Fetching movies: ${error}`);
      setErrorMessage("Error Fetching movies. Please try again later");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNicolasCageWorks();
  }, []);

  const fuse = useMemo(() => {
    return new Fuse(movieList, {
      keys: ["primaryTitle", "startYear", "genres", "actors"],
      threshold: 0.4,
    });
  }, [movieList]);

  // Get filtered results
  const filteredMovies = searchTerm
    ? fuse.search(searchTerm).map((result) => result.item)
    : movieList;

  return (
    <main>
      <div className="pattern"></div>
      <div className="wrapper">
        <header>
          <img src="./hero-5.png" alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Nicolas Cage</span> Movies
            You'll Love Without The Hassle
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
        <section className="all-movies">
          <h2 className="mt-[20px]">All Movies</h2>
          {isLoading ? (
            <Loading />
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {filteredMovies.map((movie, idx) => (
                <MovieCard key={idx} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};

export default App;
