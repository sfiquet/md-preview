import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Markdown Previewer</h1>
        </header>
        <main>
          <div>
            <label for="editor">Enter markdown code:</label>
            <textarea id="editor" name="editor" />
          </div>
          <div>
            <label for="preview">Preview:</label>
            <div id="preview"></div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
