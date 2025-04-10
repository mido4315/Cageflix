# CageFlix 🎬

CageFlix is a web application that allows users to explore movies and TV shows featuring Nicolas Cage. It leverages IMDb datasets for movie data and TMDB for fetching posters, providing a seamless experience to browse Nicolas Cage's filmography with ratings, genres, and more. The project is divided into three main components: a backend API built with Node.js, a frontend built with React, and a data processing pipeline using Python.

## Features
- Browse Nicolas Cage's movies and TV shows with details like title, year, genres, ratings, and actors.
- View movie posters fetched from TMDB.
- Search and filter movies using the React frontend.
- Backend API to serve processed data.
- Data processing pipeline to clean and merge IMDb and TMDB datasets.

## Project Structure
The project is organized into three main directories:

Cageflix/ ├── backend/ # Express.js API for serving Cage data │ ├── node_modules/ │ ├── Nicolas_Cage_Works.csv # Final dataset │ ├── Nicolas_Cage_Works2.csv # Intermediate dataset │ ├── Nicolas_Cage_Works3.csv # Intermediate dataset │ ├── package.json │ ├── package-lock.json │ ├── server.js # Main Express server │ └── README.md (optional)

├── cageflix-frontend/ # React + Vite frontend app │ ├── node_modules/ │ ├── public/ │ ├── src/ │ │ ├── assets/ │ │ │ └── react.svg │ │ ├── components/ # React components │ │ │ ├── Loading.jsx │ │ │ ├── MovieCard.jsx │ │ │ └── Search.jsx │ │ ├── App.jsx │ │ ├── main.jsx │ │ ├── App.css │ │ └── index.css │ ├── index.html │ ├── vite.config.js │ ├── package.json │ └── README.md (optional)

├── data-processing/ # Python data filtering & cleaning │ ├── filter_nicolas_cage_works.ipynb # Jupyter notebook for data prep │ ├── cageflix_data.csv # Final data for backend │ └── README.md (optional)

├── README.md # Main project documentation (you’re here) └── .gitignore
