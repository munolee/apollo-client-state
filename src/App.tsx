import React from 'react';
import {ApolloProvider} from "@apollo/client";
import apollo from "./apollo";
import TodoList from "./components/TodoList";

function App() {
  return (
      <ApolloProvider client={apollo}>
          {/*<div className="App">*/}
          {/*    <header className="App-header">*/}
          {/*    </header>*/}
          {/*</div>*/}
          <TodoList />
      </ApolloProvider>
  );
}

export default App;
