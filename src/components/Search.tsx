import React, {ChangeEvent, useState} from "react";
import s from "./Search.module.css";
import {getMovies, moviesActions} from "../bll/moviesReducer";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store/store";
import {moviesAPI} from "../api/api";


export const Search = () => {
    const [title, setTitle] = useState("")
    const dispatch = useDispatch<AppDispatch>()

    const inputTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const searchMovie = () => {
        // moviesAPI.getMoviesTitle(title)
        dispatch(getMovies())
        setTitle("")
    }


    return (
        <>
            <h3>Search movie by name</h3>
            <div className={s.search}>
                <input value={title} onChange={inputTitle}/>
                <button onClick={searchMovie}>Search</button>
            </div>
        </>
    )
}