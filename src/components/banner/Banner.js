import React from "react";
import useSWR from "swr";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { fetcher } from "../../config";

const Banner = () => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=95f2419536f533cdaa1dadf83c606027`,
    fetcher
  );
  const movies = data?.results || [];
  return (
    <section className="banner h-[500px] page-container mb-10 overflow-hidden">
      <Swiper grabCursor={"true"} slidesPerView={"auto"}>
      {movies.length > 0 &&
        movies.map((item) => (
          <SwiperSlide key={item.id}>
            <BannerItem item={item}></BannerItem>
          </SwiperSlide>
        ))}
        
      </Swiper>
    </section>
  );
};

function BannerItem({item}) {
    const { title, poster_path } = item;
  return (
    <div className="relative w-full h-full rounded-lg">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt="avenger"
        className="object-cover w-full h-full rounded-lg "
      />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-5">{title}</h2>
        <div className="flex items-center gap-x-3 mb-8">
          <span className="py-2 px-4 border border-white rounded-md">
            Adventure
          </span>
          <span className="py-2 px-4 border border-white rounded-md">
            Adventure
          </span>
          <span className="py-2 px-4 border border-white rounded-md">
            Adventure
          </span>
        </div>
      </div>
    </div>
  );
}

export default Banner;
