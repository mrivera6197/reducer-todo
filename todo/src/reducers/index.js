
import { ADD_TODO, TOGGLE_TODO, CLEAR } from '../actions/index'

export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'reducer-todo',
        completed: false,
        id: 1234567891
    }
]

const reducer = (state, action) => {
    switch(action.type) {
        case ADD_TODO: 
             return [...state, {item: action.item, completed: false, id: action.id}]
        case TOGGLE_TODO: 
            return [
                ...state.map((todo) => {
                    if (todo.id === action.payload.id) {
                        return { ...todo, completed: !todo.completed }
                    } else {
                        return todo
                    }
                })
            ]
        case CLEAR: 
            return [...state.filter((todo) => !todo.completed)]
        default: 
            return state
    }
}

export default reducer 