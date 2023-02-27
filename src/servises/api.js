import axios from 'axios';

// axios.defaults.baseURL = 'https://api.themoviedb.org/';
// axios.defaults.api_key = '8aba4e3419a44727b7eb66f35fce4fa2';

  const BASE_URL = 'https://api.themoviedb.org/';
  const API_KEY = '8aba4e3419a44727b7eb66f35fce4fa2';

  /**
   * getPopularFilmList description
   * @return {JSON} obj response
   */
 export async function getPopularFilmList(page) {
    const response = await axios.get(
      `${BASE_URL}3/trending/movie/day`,
      {
        params: {
          api_key: API_KEY,
          page: page || 1,
        },
      }
    );

    validateDataResponse(response.data);
    return response.data;
  }

  /**
   * getFilmListByKeyWord description
   * @param  {string} keyWord description
   * @return {JSON}  obj response
   */
 export async function getFilmListByKeyWord(keyWord, page) {
    const response = await axios.get(`${BASE_URL}3/search/movie`, {
      params: {
        api_key: API_KEY,
        query: keyWord,
        page: 1,
      },
    });

    validateDataResponse(response.data);
    return response.data;
  }

  /**
   * getFilmFullInfo description
   * @param  {number} filmId description
   * @return {JSON}  obj response
   */
 export async function getFilmFullInfo(filmId) {
   const response = await axios.get(`${BASE_URL}3/movie/${filmId}`, {
     params: {
       api_key: API_KEY,
     },
   });

   validateDataResponse(response.data);
   return response.data;
 }

export async function getMovieActors(filmId) {
   const response = await axios.get(`${BASE_URL}3/movie/${filmId}/credits`, {
      params: {
        api_key: API_KEY,
      },
   });
  
  validateDataResponse(response.data);
    return response.data;
  }

  export async function getMovieReviews(filmId) {
    const response = await axios.get(`${BASE_URL}3/movie/${filmId}/reviews`, {
      params: {
        api_key: API_KEY,
      },
    });

    validateDataResponse(response.data);
    return response.data;
  }

  export function validateDataResponse(data) {
    if (data.poster_path) {
      data.poster_path = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
    }

    if (data.backdrop_path) {
      data.backdrop_path = `https://image.tmdb.org/t/p/w500${data.backdrop_path}`;
    }

    return data;
  }

