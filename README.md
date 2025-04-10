# CageFlix 🎬

CageFlix is a web application that allows users to explore movies and TV shows featuring Nicolas Cage. It leverages IMDb datasets for movie data and TMDB for fetching posters, providing a seamless experience to browse Nicolas Cage's filmography with ratings, genres, and more. The project is divided into three main components: a backend API built with Node.js, a frontend built with React, and a data processing pipeline using Python.

## 🛠 Tech Stack & Why

| Layer     | Tech                    | Why It Was Chosen                              |
|-----------|-------------------------|------------------------------------------------|
| Frontend  | React + Vite            | Fast dev environment, modern UI framework      |
| Backend   | Express.js (Node.js)    | Lightweight and simple for APIs                |
| Data Prep | Python, Pandas, Jupyter | Great for working with datasets                |
| Data      | IMDb + TMDB APIs        | IMDb = truth, TMDB = posters                   |

## ✨ Features

- ✅ Clean, responsive UI built with modular React components (e.g., MovieCard, Search, Loading).
- ✅ Browse Nicolas Cage’s movies and TV shows.
- ✅ Fuzzy search and filter by name, genre, actors, and year using Fuse.js.
- ✅ Dynamic movie cards with details and loading states.
- ✅ Backend API to serve processed movie data.
- ✅ Data processing pipeline in Python to clean, merge, and transform IMDb and TMDB datasets.


## 📁 Project Structure
The project is organized into three main directories:

Cageflix/\
├── backend/              → Express.js API serving Cage movie data\
├── cageflix-frontend/    → React + Vite frontend for UI\
├── data-processing/      → Python + Jupyter scripts for data cleaning and processing\
└── README.md             → Main project documentation


## 🚀 Live Demos

### Frontend Demo

The frontend is live and accessible here: [https://cageflix-frontend.onrender.com](https://cageflix-frontend.onrender.com)  
You can interact with the app, browse movies, and explore details fetched from the backend.

### Backend API

The backend is live and can be accessed here: [https://cageflix.onrender.com/api/nicolas-cage]()  
It returns a JSON response with the following fields:

```json
{
  "tconst": "tt1234567",
  "primaryTitle": "Example Movie",
  "startYear": "2004",
  "genres": "Action,Drama",
  "averageRating": 6.9,
  "numVotes": 12345,
  "actors": "Nicolas Cage, ...",
  "posterUrl": "https://image.tmdb.org/..."
}
```
## 🚀 Setup Instructions

Make sure you have **Node.js**, **npm**, and optionally **Jupyter** + **Python 3** installed.

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/cageflix.git
cd cageflix
```
### 2. Backend (Express API)
```bash
cd backend
npm install
node server.js
```
### 3. Frontend (React + Vite)
```bash
cd cageflix-frontend
npm install
npm run dev
```
### 4. Data Processing (Optional but fun)
```bash
cd data-processing
jupyter notebook filter_nicolas_cage_works.ipynb
```


