import axios from "axios";
import ITopMovies from "../models/ITopMovies";


const getTopMovies = () =>{
    return axios.get<ITopMovies[]>( `${process.env.REACT_APP_API_BASE_URL}/top-rated-movies`)
          .then( response => response.data)
};

const getTopMoviesById= (id:number) =>{
    return axios.get<ITopMovies>(`${process.env.REACT_APP_API_BASE_URL}/top-rated-movies/${id}`)
        .then( response => response.data)
};

const getTopMoviesByTitle=(title:string)=> {
    return axios.get<ITopMovies[]>(`${process.env.REACT_APP_API_BASE_URL}/top-rated-movies?title=${title}`)
    .then(response =>response.data)
}

export {
   getTopMovies,
   getTopMoviesById,
   getTopMoviesByTitle
};
