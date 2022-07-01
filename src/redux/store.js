import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { createStore } from "redux";
import rootReducer from './reducer'

// const store = createStore(rootReducer, initValue, enhancers);
function loadFromLocalStage() {
	try {
		const lists = JSON.parse(localStorage.getItem('lists'))
		if (lists) {
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

const data = async () => {
	const dataRef = collection(db, 'todo-list')
	const dataFromFirebase = await getDocs(dataRef)
	const data1 = dataFromFirebase.docs.map(doc => doc.data())
	return data1;
}

console.log(data())
// getDataFromFireBase()
const store = createStore(rootReducer, data())

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
