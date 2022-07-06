
const rootReducer = (state, action) => {
	switch (action.type) {
		case 'LIST/ADD_TODO':
			return {
				...state,
				todoList: [...state.todoList, action.payload]
			}

		case 'LIST/UPDATE_TODO':
			return {
				...state,
				todoList: [
					...state.todoList.map(item => {
						return item.id === action.payload.id ? action.payload : item
					})
				]
			}
		case 'LIST/DELETE_TODO':
			return {
				...state,
				todoList: [
					...state.todoList.filter(item => {
						return item.id !== action.payload.id
					})
				]
			}
		default:
			return state
	}
}

export default rootReducer