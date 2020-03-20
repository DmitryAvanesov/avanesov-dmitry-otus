import { LitElement, html } from 'lit-element';
import * as http from 'http';

const structure = process.argv[2];

class MyTree extends LitElement {
  static get properties() {
    return {

    };
  }

  constructor() {
    super();

  }

  render() {
    return html`
      <div></div>
    `;
  }
}

customElements.define('my-tree', MyTree);

class MyLeaf extends LitElement {
  static get properties() {
    return {
      id: { type: Number },
      nestingLevel: { type: Number }
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div>${this.id}</div>
    `;
  }
}

customElements.define('my-leaf', MyLeaf);


const data = JSON.stringify({
  documentObjectModel: html`<my-tree>
    <my-leaf .id=1></my-leaf>
  </my-tree>`
});

const options = {
  hostname: hostname,
  port: port,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = http.request(options).on('error', error => {
  console.error(error);
});

req.write(data);
req.end();
