import styled from 'styled-components'

const StyledTodo = styled.div`
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
    }

    .completed {
        text-decoration: line-through;
    }

    .todos {
        margin: 0;
    }

    button {
        padding: 0.75rem;
        font-family: 'Inter', sans-serif;
        background: white;
        border: none;
        box-shadow: 1px 1px 2px;
    }
`

const Todo = ({ todo, completeTodo}) => {
    return (
        <StyledTodo>
            <div className='container'>
                    <button 
                    onClick={() => completeTodo(todo)}
                    className={todo.completed ? 'completed' : 'todos'}>
                    {todo.item}</button>
            </div>
        </StyledTodo>
    )
}

export default Todo