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
        <footer className="App-footer py-4">
          <div className="container">
            <div className="d-flex flex-wrap justify-content-around pb-4">
              <div className="text-center text-sm-left p-2">
                <div className="font-weight-bold">Markdown Reference</div>
                <a className="d-block text-decoration-none" target="_blank" rel="nofollow noopener noreferrer" href="https://daringfireball.net/projects/markdown/syntax">Markdown Syntax</a>
                <a className="d-block text-decoration-none" target="_blank" rel="nofollow noopener noreferrer" href="https://help.github.com/articles/basic-writing-and-formatting-syntax/">GitHub Flavored Syntax</a>
              </div>
              <div className="text-center text-sm-left p-2">
                <div className="font-weight-bold">About This Project</div>
                <a className="d-block text-decoration-none" target="_blank" rel="nofollow noopener noreferrer" href="https://learn.freecodecamp.org/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer">Specifications</a>
                <a className="d-block text-decoration-none" target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/sfiquet/md-preview">Source Code</a>
              </div>
            </div>

            <div className="d-flex flex-wrap justify-content-center">
              <div className="mr-1">This is a <a target="_blank" rel="nofollow noopener noreferrer" href="https://www.freecodecamp.org">freeCodeCamp</a> project by</div>
              <div>Sylvie Fiquet</div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
