import {moviesAPI, MoviesType} from "../api/api";
import {Dispatch} from "redux";
import {AppThunk} from "../store/store";


const moviesInitialState = {
    Response: "",
    totalResults: "",
    Search: Array<MoviesType>
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

export const moviesActions = {
    setMovies: (movies: MoviesType[]) => ({type: 'SET_MOVIES', payload: {movies}} as const),
    // setTotalResults: (totalResults: string) =>
    //     ({type: 'SET_TOTAL_RESULT', payload: {totalResults}} as const),
    // setResponse: (response: string) => ({type: 'SET_RESPONSE', payload: {response}} as const),
}

export const getMovies = (title: string): AppThunk => {
    return (dispatch) => {
        moviesAPI.getMoviesTitle(title)
            .then((data)=> {
                console.log("ddd")
                // let movies = data.data.Search
                // let response = data.data.Response
                // let totalResults = data.data.setTotalResults
                // dispatch(moviesActions.setMovies(movies))
                // dispatch(moviesActions.setResponse(response))
                // dispatch(moviesActions.setTotalResults(totalResults))
            })
    }
}

export type MoviesActionTypes = ReturnType<typeof moviesActions.setMovies>
// | ReturnType<typeof moviesActions.setTotalResults> | ReturnType<typeof moviesActions.setResponse>




