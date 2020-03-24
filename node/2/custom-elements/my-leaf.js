import { LitElement, html } from 'lit-element';

class MyLeaf extends LitElement {
  render() {
    return html`
      <ul>
        ${this.structure.items.map(i => html`<li id="${i.id}">${i.id}</li>`)}
      </ul>
    `;
  }
}

customElements.define('my-leaf', MyLeaf);