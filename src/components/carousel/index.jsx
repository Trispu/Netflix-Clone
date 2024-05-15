// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./index.scss";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Carousel({ numberOfSlide, category }) {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    const response = await axios.get(
      "https://6627a8deb625bf088c09302d.mockapi.io/Movie"
    );
    console.log(response.data);
    setMovies(response.data);
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div className="carousel">
      <Swiper
        slidesPerView={numberOfSlide}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {movies.filter(movie=>movie.category===category).map((movie) => (
          <SwiperSlide key={movie.id}>
            <img src={movie.poster_path} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
