export const addTodo = (todo) => {
    return {
        type: 'LIST/ADD_TODO',
        payload: todo
    }
}

export const deleteTodo = (todo) => {
    return {
        type: 'LIST/DELETE_TODO',
        payload: todo
    }
}

export const editTodo = (editedTodo) => {
    return {
        type: 'LIST/UPDATE_TODO',
        payload: editedTodo
    }
}