export class SimpleGreeting extends HTMLElement {
  constructor() {
    super()
  }
}

customElements.define('simple-greeting', SimpleGreeting);
