import React from 'react';
import {ApolloProvider} from "@apollo/client";
import apollo from "./apollo";
import TodoList from "./components/TodoList";

function App() {
  return (
      <ApolloProvider client={apollo}>
          <TodoList />
      </ApolloProvider>
  );
}

export default App;
