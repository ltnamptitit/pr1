import { createStore } from "redux";
import rootReducer from './reducer'

// const store = createStore(rootReducer, initValue, enhancers);
function loadFromLocalStage() {
    try {
        const lists = JSON.parse(localStorage.getItem('lists'))
        if (lists) {
            console.log(lists)
            return lists
        }
        else return undefined
    }
    catch (e) {
        console.warn(e)
        return undefined
    }
}
function saveToLocalStorage(state) {
    try {
        const lists = JSON.stringify(state)
        localStorage.setItem('lists', lists)
    }
    catch (e) {
        console.log(e)
    }
}


const store = createStore(rootReducer, loadFromLocalStage())

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
