class SimpleGreeting extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    console.log('simple-greeting component is initialized 🔥')
  }
}

customElements.define('simple-greeting', SimpleGreeting)
