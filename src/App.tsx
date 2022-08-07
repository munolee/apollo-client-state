import React from 'react';
import {ApolloProvider} from "@apollo/client";
import apollo from "./apollo";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
    return (
        <ApolloProvider client={apollo}>
            <TodoList/>
            <TodoForm/>
        </ApolloProvider>
    );
}

export default App;
