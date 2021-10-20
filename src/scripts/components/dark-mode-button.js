class DarkModeButton extends HTMLElement {
  constructor() {
    super()
    this.button = this.querySelector('button')
    this.moonIcon = this.querySelector('.-moon')
    this.sunIcon = this.querySelector('.-sun')
    this.sunIcon.classList.add('u-hide')

    if (!this.button) return
    this.toggleMode = this.toggleMode.bind(this)
    this.button.addEventListener('click', this.toggleMode)
  }

  toggleMode() {
    document.documentElement.classList.toggle('is-dark')
    this.moonIcon.classList.toggle('u-hide')
    this.sunIcon.classList.toggle('u-hide')
  }
}

customElements.define('dark-mode-button', DarkModeButton)
