class SimpleExample extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    console.log('simple-example component is initialized 🔥')
  }
}

customElements.define('simple-example', SimpleExample)
