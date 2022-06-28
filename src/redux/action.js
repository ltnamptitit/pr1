export const addTask = (newTask) => {
    return {
        type: 'lists/addTodo',
        payload: newTask
    }
}

export const updateTask = (editedTask) => {
    return {
        type: 'lists/updateTodo',
        payload: editedTask
    }
}

export const deleteTask = (deleteTask) => {
    return {
        type: 'lists/deleteTodo',
        payload: deleteTask
    }
}