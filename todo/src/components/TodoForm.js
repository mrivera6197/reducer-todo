import React, { useState, useReducer } from 'react'
import styled from 'styled-components'

const StyledForm = styled.div `
    form {
        margin-top: 7rem;
    }

    button, input {
        padding: 0.5rem;
        font-family: 'Inter', sans-serif;
    }

    input {
        width: 15rem;
    }

    button {
        width: 5rem;
    }
`

const TodoForm = ({addTodo, clearTodos}) => {
    const [values, setValues] = useState('')

    const onChange = e => {
        setValues(e.target.value)
    }

    const submitForm = e => {
        e.preventDefault()
        addTodo(values)
        setValues('')
    }

    return (
        <StyledForm>
            <form onSubmit={submitForm}>
                <input 
                    type='text'
                    name='todo'
                    placeholder='new task'
                    value={values}
                    onChange={onChange}
                />
                <button>add</button>
                <button onClick={clearTodos}>clear</button>
            </form>
        </StyledForm>
    )
}

export default TodoForm