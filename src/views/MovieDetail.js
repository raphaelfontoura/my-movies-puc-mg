import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { MovieService } from "../api/MovieService";
import { MovieDetailContainer } from "../styles/MovieDetailContainer";

const BASE_URL = 'https://image.tmdb.org/t/p/original/'

export const MovieDetail = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  const fetchMovie = async () => {
    const { data } = await MovieService.getMovieById(id);
    setMovie(data);
    console.log(data)
  }

  useEffect(() => {
    fetchMovie();
  });

  return (
    <MovieDetailContainer>
      <h1>{movie.title}</h1>

      <img src={`${BASE_URL}${movie.backdrop_path}`} alt="Movie cover" />

      <span><em>{movie.tagline}</em></span>
      <article>
        {movie.overview}
      </article>
    </MovieDetailContainer>
  )
}
