import React, { Component } from 'react';
import MDEditor from './MDEditor';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header p-1">
          <div className="App-title">
            <span className="App-title-markdown d-inline-block">Markdown</span>
            <span className="App-title-previewer d-inline-block align-bottom">Previewer</span>
          </div>
        </header>
        <main className="container pb-4">
          <MDEditor></MDEditor>
        </main>
      </div>
    );
  }
}

export default App;
