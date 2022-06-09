import React from 'react';
import './App.css';
import {Search} from "./components/Search";


function App() {


    // let searchAll = [
    //     {
    //         Title: "Happy Gilmore",
    //         Year: "1996",
    //         imdbID: "tt0116483",
    //         Type: "movie",
    //         Poster: "https://m0.jpg"
    //     },
    //     {
    //         Title: "Happy Feet",
    //         Year: "2006",
    //         imdbID: "tt0366548",
    //         Type: "movie",
    //         Poster: "https://m.me4jpg"
    //     },
    //     {
    //         Title: "Happy Death Day",
    //         Year: "2017",
    //         imdbID: "tt5308322",
    //         Type: "movie",
    //         Poster: "https://m.pg"
    //     },
    // ]

    return (
        <div className="App">
            <Search/>
        </div>
    );
}

export default App;
