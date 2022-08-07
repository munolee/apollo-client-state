import {FC, useEffect} from 'react'
import styled from "styled-components";
import {useReactiveVar} from "@apollo/client";
import {TodoListType, todoListVar} from "../stores/todo";

const TodoList: FC = () => {
    const todoItems = useReactiveVar(todoListVar);

    useEffect(() => {
        todoListVar([{id: 0, name: 'first Works'}])
    }, [])

    return (
        <ListContainer>
            {todoItems.map((item: TodoListType) =>
                <div key={item.id}>{item.name}</div>
            )}
        </ListContainer>
    )
}

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export default TodoList