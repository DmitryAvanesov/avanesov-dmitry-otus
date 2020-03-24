import { LitElement, html } from 'lit-element';

class MyLeaf extends LitElement {
  static get properties() {
    return { leaf: Object };
  }

  render() {
    this.leaf = JSON.parse(this.leaf);

    return html`
      <li id="${this.leaf.id}">
        ${this.leaf.id}
        ${'items' in this.leaf ? html`
          <ul>${this.renderChildren(this.leaf.items)}</ul>
        ` : html``}
      </li>
    `;
  }

  renderChildren(children) {
    return html`
      ${children.map(child => html`
        <my-leaf leaf=${JSON.stringify(child)}></my-leaf>
      `)}
    `;
  }
}

customElements.define('my-leaf', MyLeaf);