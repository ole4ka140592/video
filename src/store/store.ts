import {applyMiddleware, combineReducers, createStore, legacy_createStore} from "redux";
import thunk, {ThunkAction} from "redux-thunk";
import {MoviesActionTypes, moviesReducer} from "../bll/moviesReducer";


const rootReducer = combineReducers({
    movies: moviesReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>


//types
export type ActionsType = MoviesActionTypes
// export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never


// @ts-ignore
window.store = store