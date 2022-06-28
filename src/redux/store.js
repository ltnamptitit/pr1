import { createStore } from "redux";
import rootReducer from './reducer'

// const store = createStore(rootReducer, initValue, enhancers);
function loadFromLocalStage() {
    let localList = [];
    try {
        const lists = JSON.parse(localStorage.getItem('lists'))
        if (Array.isArray(lists)) {
            localList = [...lists]
        }
    }
    catch { }
}

// function saveLocalStorage() {

// }

const store = createStore(rootReducer, loadFromLocalStage())

export default store;
