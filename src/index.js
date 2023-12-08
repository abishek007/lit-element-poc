/*
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('test-element')
export default class TestElement extends LitElement {
  render() {
    return html`
    <select>
      <option value="value1">Option 1</option>
      <option value="value2">Option 2</option>
      <option value="value3">Option 3</option>
    </select>
        `;
  }
}
*/

import { LitElement, html, css } from 'lit';

class DropdownComponent extends LitElement {
  static styles = css`
    /* Define your CSS styles for the dropdown here */
    /* Example styles for the dropdown */
    :host {
      display: inline-block;
      position: relative;
    }

    .dropdown {
      position: absolute;
      display: none;
      background-color: #fff;
      border: 1px solid #ccc;
      padding: 5px;
      z-index: 1;
    }

    :host([opened]) .dropdown {
      display: block;
    }
  `;

  static properties = {
    options: { type: Array },
    selectedOption: { type: String },
    opened: { type: Boolean, reflect: true }, // Reflect the opened state to an attribute
  };

  constructor() {
    super();
    this.options = ["value1", "value2", "value3"];
    this.selectedOption = '';
    this.opened = false;
  }

  render() {
    return html`
      <div @click="${this.toggleDropdown}">
        Selected Option: ${this.selectedOption}
      </div>
      <div class="dropdown">
        ${this.options.map(
      option =>
        html`<div @click="${() => this.selectOption(option)}">${option}</div>`
    )}
      </div>
    `;
  }

  toggleDropdown() {
    this.opened = !this.opened;
  }

  selectOption(option) {
    this.selectedOption = option;
    this.opened = false;
  }
}

customElements.define('dropdown-component', DropdownComponent);
