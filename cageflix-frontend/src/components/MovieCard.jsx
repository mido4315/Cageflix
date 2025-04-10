import React from "react";

const MovieCard = ({ movie }) => {
  const {
    tconst,
    primaryTitle,
    startYear,
    genres,
    averageRating,
    numVotes,
    actors,
    posterUrl,
  } = movie;

  return (
    <div className="movie-card">
      <img src={posterUrl || "./no-movie.png"} alt="No Image" />
      <div className="mt-4">
        <h3>{primaryTitle}</h3>
        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="Rating" />
            <p>{averageRating || "N/A"}</p>
          </div>

          <p className="lang">
            <span>•</span> EN
          </p>
          <p className="year">{startYear}</p>
          <p className="genre">{genres.split(",")[0]}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
