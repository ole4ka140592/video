import React, {ChangeEvent, useState} from "react";
import s from "./Search.module.css";
import {getMovies} from "../bll/moviesReducer";
import {useAppDispatch} from "../store/hooks";


export const Search = () => {
    const [title, setTitle] = useState("")
    const dispatch = useAppDispatch()

    const inputTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const searchMovie = () => {
        // moviesAPI.getMoviesTitle(title)
        dispatch(getMovies(title))
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