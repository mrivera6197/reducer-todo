import React, { useReducer } from 'react'

import reducer, { initialState } from './reducers/index'
import { addTodo, toggleCompleted, clearCompleted } from './actions/index'

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'

import './App.css';
import styled from 'styled-components'

const StyledApp = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addTodo = (todo) => {
    dispatch(addTodo(todo))
  }

  const completeTodo = (todo) => {
    dispatch(toggleCompleted(todo))
  }

  const clearTodos = () => {
    dispatch(clearCompleted(state))
  }

  return (
    <StyledApp>
      <div className="container">
        <TodoForm addTodo={addTodo} clearTodos={clearTodos}/>
        <TodoList completeTodo={completeTodo} todoList={state} clearTodos={clearTodos}/>
      </div>
    </StyledApp>
  );
}

export default App;