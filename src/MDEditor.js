import React, { Component } from 'react';
import marked from 'marked';
import './MDEditor.css';

const defaultText = 
`# Header
## Subheader
Link example: [FreeCodeCamp](https://freecodecamp.org)

Here's some inline code: \`const myNumber = 42;\` and here's a code block:
\`\`\`
let i = 0;
while (i < 10){
  console.log(i);
  i++;
}
\`\`\`

Here's a list:
- egg
- flours
- tomatoes

quote:
> Here's a quote

An image:

![React Logo w/ Text](https://goo.gl/Umyytc)

Text can be in *italics* or **bold** or ***both***
`;

class MDEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { markdown: defaultText };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({markdown: event.target.value});
  }

  getMarkdownHTML(mdCode){
    return {
      __html: marked(mdCode)
    };
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
          <div className="MDEditor-preview text-left p-2 w-100 bg-light" 
            id="preview" dangerouslySetInnerHTML={this.getMarkdownHTML(this.state.markdown)}>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default MDEditor;
