import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('test-element')
export default class TestElement extends LitElement {
  render() {
    return html`
            <h1>Hello World!</p>
        `;
  }
}
