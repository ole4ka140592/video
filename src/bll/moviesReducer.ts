import {moviesAPI, MoviesType} from "../api/api";
import {Dispatch} from "redux";
import {AppRootStateType} from "../store/store";


const moviesInitialState = {
    Search: [] as MoviesType[],
    Response: "",
    totalResults: ""
}

export const moviesReducer = (state: MoviesInitialStateType = moviesInitialState, action: MoviesActionTypes):
    MoviesInitialStateType => {
    switch (action.type) {
        case 'MOVIES/SET_MOVIES':
            return {...state, ...action.payload}

        default:
            return state
    }
}


//actions
export const moviesActions = {
    setMovies: (movies: MoviesType[]) => ({type: 'MOVIES/SET_MOVIES', payload: {movies}} as const),
}

//thunks
export const getMovies = (title: string) => (dispatch: Dispatch, getState: () => AppRootStateType) => {
    debugger
    moviesAPI.getMoviesTitle(title)

        .then((res) => {
            // console.log("xxx")
            let movies = res.data.data
            console.log(movies)
            // let movies = data.Search
            // dispatch(moviesActions.setMovies(movies))
        })
}

//
// export const setTodolistsTC = () => (dispatch: Dispatch<TodolistsActionType>, getState: () => AppRootStateType): void => {
//
//     todolistApi.getTodos()
//         .then((res) => {
//             dispatch(setAppStatusAC("succeeded"))
//             dispatch(setTodolistsAC(res.data))
//         })
// }


export type MoviesActionTypes = ReturnType<typeof moviesActions.setMovies>




// export const setTasksTC = (todolistId: string) => (dispatch: Dispatch<TasksActionType>) => {
//     dispatch(setAppStatusAC("loading"))
//     todolistApi.getTasks(todolistId)
//         .then((res) => {
//             dispatch(setAppStatusAC("succeeded"))
//             let tasks = res.data.items
//             dispatch(setTasksAC(todolistId, tasks))
//         })
//         .catch((error) => {
//             handleServerNetworkError(dispatch, error.message)
//         })
// }

//types
// export type MoviesActionTypes = InferActionTypes<typeof moviesActions>
export type MoviesInitialStateType = typeof moviesInitialState