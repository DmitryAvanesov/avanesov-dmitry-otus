import { LitElement, html } from 'lit-element';
import './my-leaf';

class MyTree extends LitElement {
  static get properties() {
    return { tree: String };
  }

  render() {
    return html`
      <ul>
        <my-leaf subtree=${this.tree}></my-leaf>
      </ul>
    `;
  }
}

customElements.define('my-tree', MyTree);