import axios from "axios";
import ICommingSoon from "../models/ICommingSoon";



const getComingMovies = () =>{
    return axios.get<ICommingSoon[]>( `${process.env.REACT_APP_API_BASE_URL}/movies-coming`)
          .then( response => response.data)
};

const getComingMoviesById= (id:number) =>{
    return axios.get<ICommingSoon>(`${process.env.REACT_APP_API_BASE_URL}/movies-coming/${id}`)
        .then( response => response.data)
};

const getComingMoviesByTitle=(title:string)=> {
    return axios.get<ICommingSoon[]>(`${process.env.REACT_APP_API_BASE_URL}/movies-coming?title=${title}`)
    .then(response =>response.data)
}

export {
    getComingMovies,
    getComingMoviesById,
    getComingMoviesByTitle
};
