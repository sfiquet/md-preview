import React, { Component } from 'react';
import './MDEditor.css';

class MDEditor extends Component {
  render() {
    return (
      <div className="MDEditor">
        <div className="row">
          <div className="form-group col-12 col-lg-6 bg-white d-flex flex-column">
            <label className="d-block" htmlFor="editor">Edit</label>
            <textarea className="MDEditor-textarea form-control w-100" id="editor" name="editor" />
          </div>
        <div className="form-group col-12 col-lg-6 bg-white d-flex flex-column">
          <label className="d-block" htmlFor="preview">Preview</label>
          <div className="MDEditor-preview w-100 bg-light" id="preview"></div>
        </div>
        </div>
      </div>
    );
  }
}

export default MDEditor;
