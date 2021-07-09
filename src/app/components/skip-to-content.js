import checkFocus from 'App/utils/checkFocus'

class SkipToContent extends HTMLElement {
  constructor() {
    super()
    this.isActive = false
    Array.from(this.children).forEach((child) => {
      child.addEventListener('click', () => {
        this.changeState()
        this.isActive = false
      })

      child.addEventListener('focus', () => {
        this.changeState()
        this.isActive = true
      })
    })

    this.addEventListener('keydown', (event) => {
      if (event.code.toUpperCase() === 'TAB') {
        Array.from(this.children).forEach((child) => {
          if (!checkFocus(child)) this.changeState()
          this.isActive = false
        })
      }
    })
  }

  changeState() {
    this.classList.toggle('u-hidden-visually', this.isActive)
    this.classList.toggle('--active', !this.isActive)
  }
}

customElements.define('c-skip-to-content', SkipToContent)
