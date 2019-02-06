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
`# Using Markdown
In the words of its creator John Gruber:
> Markdown’s syntax is intended for one purpose: to be used as a format for *writing* for the web.

Markdown allows you to concentrate on your content without being distracted by the HTML syntax.
<br />

## Basics
---
### Headers
Start a line with one to six \`#\` to define a header.

### Styling text
Add emphasis to text by wrapping it in asterisks \`*\` or underscores \`_\`: Use one pair for *italics*, two for **bold**, three for ***both***. You can also **mix _and_ match**.

Any of Markdown's special characters will be treated as normal characters if you escape them with \`\\\`, e.g. you can write \\_italics\\_ instead of _italics_.

### Code
You can style inline code by wrapping it between backticks \`\`\` like this: \`const myNumber = 42;\`

Wrap block code between a pair of triple backticks:
\`\`\`
let i = 0;
while (i < 10){
  console.log(i);
  i++;
}
\`\`\`

### Lists
You can write an unordered list with \`*\`, \`-\` or \`+\`:
- egg
+ flour
* tomatoes

You can write an ordered list with a number followed by a period:
1. one
2. two
3. three

### Quote
You can quote a text by preceding it with \`>\`:
> In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.
― J.R.R. Tolkien, The Hobbit

### Links
To include a link, such as [freeCodeCamp](https://www.freecodecamp.org), use the following format:
\`[text](url)\`

### Image
To include an image, use the following format:
\`![alt text](url)\`

![Spiral galaxy NGC 4414](https://upload.wikimedia.org/wikipedia/commons/c/c3/NGC_4414_%28NASA-med%29.jpg)

<br />

## Syntax Reference
---
You can find a lot more details about Markdown here:

- [Standard Markdown](https://daringfireball.net/projects/markdown/syntax): by John Gruber, the creator of Markdown.

- [Github Flavored Markdown](https://help.github.com/articles/basic-writing-and-formatting-syntax/) or GFM: an extended version of Markdown specifically for use on Github.
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
          <div className="form-group col-12 col-lg-6 d-flex flex-column pt-2 mb-2" id="edit-block">
            <div className="d-flex justify-content-between align-items-center pb-2">
              <label className="d-block text-white mb-0" htmlFor="editor">Edit</label>
              <a className="btn MDEditor-btn d-md-none" href="#preview-block">Preview</a>
            </div>
            <textarea className="MDEditor-textarea form-control w-100" 
              id="editor" name="editor" value={this.state.markdown} onChange={this.handleChange} />
          </div>
          <div className="form-group col-12 col-lg-6 d-flex flex-column pt-2 mb-2" id="preview-block">
            <div className="d-flex justify-content-between align-items-center pb-2">
              <label className="d-block text-white mb-0" htmlFor="preview">Preview</label>
              <a className="btn MDEditor-btn d-md-none" href="#edit-block">Edit</a>
            </div>
            <div className="MDEditor-preview text-left p-2 w-100 bg-white rounded" 
              id="preview" dangerouslySetInnerHTML={this.getMarkdownHTML(this.state.markdown)}>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MDEditor;
