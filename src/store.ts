import {combineReducers, createStore} from "redux";

let rootReducer = combineReducers({

})

export let store = createStore(rootReducer);

// @ts-ignore
window.store = store