import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";



const rootReducer = combineReducers({
    counter: counterReducer
})


let preloadedState;
const persistedCounterString = localStorage.getItem("appStore")
if (persistedCounterString){
    preloadedState = JSON.parse(persistedCounterString)
}


export const store = createStore(rootReducer,preloadedState)


store.subscribe( () => {
    localStorage.setItem("appStore", JSON.stringify(store.getState()))
    localStorage.setItem("scoreNumber", JSON.stringify(store.getState().counter.scoreNumber))
}
)

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store


// @ts-ignore
window.store = store
