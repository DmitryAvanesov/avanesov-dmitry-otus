import { LitElement, html } from 'lit-element';

class MyLeaf extends LitElement {
  static get properties() {
    return { subtree: String };
  }

  render() {
    this.subtree = JSON.parse(this.subtree);

    return html`
      <li id="${this.subtree.id}">
        ${this.subtree.id}
        ${'items' in this.subtree ? html`
          <ul>${this.renderChildren(this.subtree.items)}</ul>
        ` : html``}
      </li>
    `;
  }

  renderChildren(children) {
    return html`
      ${children.map(child => html`
        <my-leaf subtree=${JSON.stringify(child)}></my-leaf>
      `)}
    `;
  }
}

customElements.define('my-leaf', MyLeaf);