
import Todo from './Todo'
import styled from 'styled-components'

const StyledList = styled.div `

`

const TodoList = ({ todoList, completeTodo }) => {
    return (
        <StyledList>
            <div>
                {todoList.map((todo) => (
                    <Todo key={todo.id} todo={todo} completeTodo={completeTodo}/>
                ))}
            </div>
        </StyledList>
    )
}

export default TodoList