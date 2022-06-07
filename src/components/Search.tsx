import React, {ChangeEvent, useState} from "react";
import s from "./Search.module.css"
import {usersAPI} from "../api/api";

export const Search = () => {
    const [title, setTitle] = useState("")

    const inputTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const searchMovie = () => {

        console.log(title)
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