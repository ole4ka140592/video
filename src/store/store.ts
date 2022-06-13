import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {MoviesActionTypes, moviesReducer} from "../bll/moviesReducer";
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
    movies: moviesReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))


//types
type AppActionType = MoviesActionTypes
export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AppActionType>

// @ts-ignore
window.store = store