const initState = {
    lists: [],
    todo: []
}

const rootReduder = (state = initState, action) => {
    switch (action.type) {
        case 'lists/addTodo':
            return {
                ...state,
                lists: [
                    ...state.lists,
                    action.payload
                ]
            }
        case 'lists/updateTodo':
            return {
                ...state,
                lists: [
                    ...state.lists.map(item => {
                        return item.id === action.payload.id ? action.payload : item
                    })
                ]
            }
        case 'lists/deleteTodo':
            return {
                ...state,
                lists: [
                    ...state.lists.filter(item => { return item.id !== action.payload.id })
                ]
            }
        default:
            return state
    }
}

export default rootReduder;