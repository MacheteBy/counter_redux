import { combineReducers, createStore } from "redux";
import { counterReducer } from "./counterReducer";



let rootReducer = combineReducers({
    counter: counterReducer,
})

export const store = createStore(rootReducer)

export type AppRoteStateType = ReturnType<typeof rootReducer>

