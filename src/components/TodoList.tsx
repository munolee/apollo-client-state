import React, {FC} from 'react'
import styled from "styled-components";
import {useReactiveVar} from "@apollo/client";
import {TodoListType, todoListVar} from "../stores/todo";

const TodoList: FC = () => {
    const todoItems = useReactiveVar(todoListVar);

    return (
        <StyledContainer>
            <ListTodo>
                {todoItems.map((item: TodoListType) =>
                    <div key={item.id}>{item.name}</div>
                )}
            </ListTodo>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const ListTodo = styled.div`
  //display: flex;
  //flex-direction: row;
  //justify-content: center;
  //align-items: center;
`

export default TodoList