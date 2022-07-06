import { createStore } from "redux";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhancers = composeWithDevTools()

const loadFromLocalStorage = () => {
	const initState = {
		todoList: []
	}
	try {
		const todoList = JSON.parse(localStorage.getItem('todoList'))
		if (todoList) {
			return {
				...initState,
				todoList: [...todoList]
			}
		}
		else {
			return initState
		}
	}
	catch (e) {
		console.log(e)
		return initState
	}
}

const saveToLocalStorage = (state) => {
	// console.log(state) 
	const todoList = JSON.stringify(state.todoList)
	localStorage.setItem('todoList', todoList)
}

const store = createStore(rootReducer, loadFromLocalStorage(), composedEnhancers)
store.subscribe(() => saveToLocalStorage(store.getState()))

export default store;