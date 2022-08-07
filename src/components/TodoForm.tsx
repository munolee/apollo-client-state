import React, {FC, useState} from 'react'
import {todoListVar} from "../stores/todo";
import styled from "styled-components";
import {useReactiveVar} from "@apollo/client";

const TodoForm: FC = () => {
    const [todoName, setTodoName] = useState('');
    const todoItems = useReactiveVar(todoListVar);

    const _onCreateTodo = () => {
        const _todoItems = [...todoItems, {id: todoItems[todoItems.length - 1].id + 1, name: todoName}]
        todoListVar(_todoItems)
    }

    return (
        <StyledContainer>
            <input type='text' value={todoName} onChange={(e) => setTodoName(e.target.value)}/>
            <StyledButton onClick={() => _onCreateTodo()}>Create</StyledButton>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
`

const StyledButton = styled.button`;
  margin-left: 12px;
  width: 150px;
  height: 30px;
  border-radius: 20px;
  border: none;
  padding: 0;
  background-color: #eee;
  color: #111;
  cursor: pointer;
`;

export default TodoForm