import React, { Component } from 'react';
import MDEditor from './MDEditor';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Markdown Previewer</h1>
        </header>
        <main className="container pt-2 pb-4">
          <MDEditor></MDEditor>
        </main>
      </div>
    );
  }
}

export default App;
