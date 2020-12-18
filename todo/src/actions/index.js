
export const [ADD_TODO, TOGGLE_TODO, CLEAR] = ['ADD_TODO', 'TOGGLE_TODO', 'CLEAR']

export const addTodo = (value) => {
    return { type: ADD_TODO, payload: value }
}

export const toggleCompleted = (todo) => {
    return { type: TOGGLE_TODO, payload: todo }
}

export const clearCompleted = () => {
    return { type: CLEAR }
}