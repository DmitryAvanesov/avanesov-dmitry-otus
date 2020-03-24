import { LitElement, html } from 'lit-element';
import './my-leaf';

class MyTree extends LitElement {
  static get properties() {
    return { structure: String };
  }

  render() {
    return html`
      <ul>
        <my-leaf leaf=${this.structure}></my-leaf>
      </ul>
    `;
  }
}

customElements.define('my-tree', MyTree);