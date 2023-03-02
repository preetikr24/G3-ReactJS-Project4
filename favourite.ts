import axios from "axios";
import IFavourites from "../models/IFavourites";



const getFavMovies = () =>{
    return axios.get<IFavourites[]>( `${process.env.REACT_APP_API_BASE_URL}/favourite`)
          .then( response => response.data)
};

const getFavMoviesById= (id:number) =>{
    return axios.get<IFavourites>(`${process.env.REACT_APP_API_BASE_URL}/favourite/${id}`)
        .then( response => response.data)
};
const getFavMoviesByTitle=(title:string)=> {
    return axios.get<IFavourites[]>(`${process.env.REACT_APP_API_BASE_URL}/favourite?title=${title}`)
    .then(response =>response.data)
}

export {
   getFavMovies,
   getFavMoviesById,
   getFavMoviesByTitle
};
