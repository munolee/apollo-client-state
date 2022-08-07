import {makeVar} from "@apollo/client";

export type TodoListType = {
    id: number;
    name: string
}

export const todoListVar = makeVar<TodoListType[]>([]);

export const setTodoList = (list: TodoListType[]) => {
    todoListVar([...list]);
};