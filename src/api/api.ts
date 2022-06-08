import axios from "axios";
import {Search} from "../components/Search";
import {Dispatch} from "redux";

const instance = axios.create({
    baseURL: "http://www.omdbapi.com",
})

const key = "2dbc2ac2"

export const moviesAPI = {
    getMoviesTitle(title: string) {
        const query = `?apikey=${key}&s=${title}`
        return instance.get(query)

        // .then(({data}) => {
        //     console.log(data)
        //    const {Error, Search, Response} = data
        //
        //
        //     return Response === "True" ? console.log(JSON.stringify(Search)) : console.log(JSON.stringify(Error))
        // })

    },
}

export type MoviesType = {
    Title: '',
    Year: '',
    imdbID: '',
    Type: '',
    Poster: ''
}
