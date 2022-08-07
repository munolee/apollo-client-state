import React from 'react';
import {ApolloProvider} from "@apollo/client";
import apollo from "./apollo";

function App() {
  return (
      <ApolloProvider client={apollo}>
          <div className="App">
              <header className="App-header">
              </header>
          </div>
      </ApolloProvider>
  );
}

export default App;
