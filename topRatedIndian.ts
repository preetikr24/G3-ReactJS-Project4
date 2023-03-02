import axios from "axios";
import IIndian from "../models/IIndian";



const getIndianMovies = () =>{
    return axios.get<IIndian[]>( `${process.env.REACT_APP_API_BASE_URL}/top-rated-india`)
          .then( response => response.data)
};

const getIndianMoviesById= (id:number) =>{
    return axios.get<IIndian>(`${process.env.REACT_APP_API_BASE_URL}/top-rated-india/${id}`)
        .then( response => response.data)
};
const getIndianMoviesByTitle=(title:string)=> {
    return axios.get<IIndian[]>(`${process.env.REACT_APP_API_BASE_URL}/top-rated-india?title=${title}`)
    .then(response =>response.data)
}

export {
   getIndianMovies,
   getIndianMoviesById,
   getIndianMoviesByTitle
};
