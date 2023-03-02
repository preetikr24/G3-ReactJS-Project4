import axios from "axios";
import IMovies from '../models/IMovies';


const getMovies = () =>{
    return axios.get<IMovies[]>( `${process.env.REACT_APP_API_BASE_URL}/movies-in-theaters`)
          .then( response => response.data)
};

const getMoviesById= (id:number) =>{
    return axios.get<IMovies>(`${process.env.REACT_APP_API_BASE_URL}/movies-in-theaters/${id}`)
        .then( response => response.data)
};
const getMoviesByTitle=(title:string)=> {
    return axios.get<IMovies[]>(`${process.env.REACT_APP_API_BASE_URL}/movies-in-theaters?title=${title}`)
    .then(response =>response.data)
}

export {
    getMovies,
    getMoviesById,
    getMoviesByTitle
};
