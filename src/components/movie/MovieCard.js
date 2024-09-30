import React from "react";
import { useNavigate } from "react-router-dom";
//props
const MovieCard = ({ item }) => {
  const { title, vote_average, release_date, poster_path, id } = item; //props.item
  const navigate = useNavigate();
  return (
    <div className="movie-card flex flex-col rounded-lg bg-slate-800 p-3 text-white h-full select-none">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <div className="flex item-center justify-between text-sm opacity-50 mb-5 mt-auto">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
        <button
          onClick={() => navigate(`/movie/${id}`)}
          className="w-full capitalize px-6 bg-primary rounded-lg py-3 "
        >
          Watch now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
