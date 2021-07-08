import checkFocus from 'App/utils/checkFocus'

class SkipToContent {
  constructor() {
    this.el = document.querySelector('[data-skip-to-content]')
    this.children = Array.from(this.el.children)

    this.children.forEach((child) => {
      child.addEventListener('click', () => {
        this.deactivate()
      })

      child.addEventListener('focus', () => {
        this.activate()
      })
    })

    this.el.addEventListener('keydown', (event) => {
      if (event.keyCode == 9)
        this.children.forEach((child) => {
          if (!checkFocus(child)) this.deactivate()
        })
    })
  }

  activate() {
    this.el.classList.remove('u-hidden-visually')
    this.el.classList.add('--active')
  }

  deactivate() {
    this.el.classList.add('u-hidden-visually')
    this.el.classList.remove('--active')
  }
}

export default new SkipToContent()
