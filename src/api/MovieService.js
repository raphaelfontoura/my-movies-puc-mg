import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = ' https://api.themoviedb.org/3/'

const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`

export class MovieService {

  static getMovies() {
    return axios(withBaseUrl('movie/popular'));
  }

  static getMovieById(id) {
    return axios(withBaseUrl(`movie/${id}`));
  }

}
