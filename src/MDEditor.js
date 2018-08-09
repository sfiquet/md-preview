import React, { Component } from 'react';
import marked from 'marked';
import './MDEditor.css';

// modify markedjs's default behaviour
const renderer = new marked.Renderer();
const linkRenderer = renderer.link;
renderer.link = (href, title, text) => {
    const html = linkRenderer.call(renderer, href, title, text);
    return html.replace(/^<a /, '<a target="_blank" rel="nofollow noopener noreferrer" ');
};

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
      __html: marked(mdCode, { renderer, breaks: true })
    };
  }

  render() {
    return (
      <div className="MDEditor">
        <div className="row">
          <div className="form-group col-12 col-lg-6 bg-white d-flex flex-column" id="edit-block">
            <div className="d-flex justify-content-between align-items-center pb-2">
              <label className="d-block mb-0" htmlFor="editor">Edit</label>
              <a className="btn btn-primary d-md-none" href="#preview-block">Preview</a>
            </div>
            <textarea className="MDEditor-textarea form-control w-100" 
              id="editor" name="editor" value={this.state.markdown} onChange={this.handleChange} />
          </div>
          <div className="form-group col-12 col-lg-6 bg-white d-flex flex-column" id="preview-block">
            <div className="d-flex justify-content-between align-items-center pb-2">
              <label className="d-block mb-0" htmlFor="preview">Preview</label>
              <a className="btn btn-primary d-md-none" href="#edit-block">Edit</a>
            </div>
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
