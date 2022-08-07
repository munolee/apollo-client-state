import {makeVar} from "@apollo/client";

export type TodoListType = {
    id: number;
    name: string
}

export const todoListVar = makeVar<TodoListType[]>([{id: 1, name: 'first Works'}]);

export const setTodoList = (list: TodoListType[]) => {
    todoListVar([...list]);
};