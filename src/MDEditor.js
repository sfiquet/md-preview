import React, { Component } from 'react';
import './MDEditor.css';

class MDEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { markdown: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({markdown: event.target.value});
  }

  render() {
    return (
      <div className="MDEditor">
        <div className="row">
          <div className="form-group col-12 col-lg-6 bg-white d-flex flex-column">
            <label className="d-block" htmlFor="editor">Edit</label>
            <textarea className="MDEditor-textarea form-control w-100" 
              id="editor" name="editor" value={this.state.markdown} onChange={this.handleChange} />
          </div>
        <div className="form-group col-12 col-lg-6 bg-white d-flex flex-column">
          <label className="d-block" htmlFor="preview">Preview</label>
          <div className="MDEditor-preview text-left p-2 w-100 bg-light" id="preview">{this.state.markdown}</div>
        </div>
        </div>
      </div>
    );
  }
}

export default MDEditor;
