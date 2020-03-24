import { LitElement, html } from 'lit-element';
import './my-leaf';

class MyTree extends LitElement {
  static get properties() {
    return { structure: String };
  }

  render() {
    this.structure = new Array(JSON.parse(this.structure));

    return html`
      <ul>
        ${this.renderLevel(this.structure)}
      </ul>
    `;
  }

  renderLevel(level) {
    return html`
      ${level.map(leaf => html`
        <li id="${leaf.id}">
          ${leaf.id}
          ${'items' in leaf ? html`
            <ul>${this.renderLevel(leaf.items)}</ul>
          ` : html``}</li>
      `)}
    `;
  }
}

customElements.define('my-tree', MyTree);