import React, { Fragment } from "react";
import MovieList from "../components/movie/MovieList";

const HomePage = () => {
  return (
    <Fragment>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Now playing
        </h2>
        <div className="movie-list">
          <MovieList></MovieList>
        </div>
      </section>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Top rated
        </h2>
        <div className="movie-list">
          <MovieList type="top_rated"></MovieList>
        </div>
      </section>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Top trending
        </h2>
        <div className="movie-list">
          <MovieList type="popular"></MovieList>
        </div>
      </section>
    </Fragment>
  );
};

export default HomePage;
