import {moviesAPI, MoviesType} from "../api/api";
import {Dispatch} from "redux";
import {ActionsType, AppDispatch, AppRootStateType} from "../store/store";


const moviesInitialState = {
    Search: [] as MoviesType[],
    Response: "",
    totalResults: "",
    Error: ""
}

export type MoviesInitialStateType = typeof moviesInitialState

export const moviesReducer = (state: MoviesInitialStateType = moviesInitialState, action: MoviesActionTypes):
    MoviesInitialStateType => {
    switch (action.type) {
        case 'SET_MOVIES':
            return {...state, ...action.payload}

        default:
            return state
    }
}


//actions
export const moviesActions = {
    setMovies: (movies: MoviesType[]) => ({type: 'SET_MOVIES', payload: {movies}} as const),
}

//thunks
// export const getMovies = (title: string) => (dispatch:Dispatch) : void=> {
//
//     moviesAPI.getMoviesTitle(title)
//         .then((res) => {
//             // console.log("xxx")
//             // let movies = res.data.data
//             console.log("dddd")
//             // let movies = data.Search
//             // dispatch(moviesActions.setMovies(movies))
//         })
// }

export const getMovies = (title: string) => (dispatch:Dispatch)=> {
    debugger
    moviesAPI.getMoviesTitle(title)
        .then((res)=> {
            let movies = res.data.Search
            dispatch(moviesActions.setMovies(movies))
        })
}

export type MoviesActionTypes = ReturnType<typeof moviesActions.setMovies>




