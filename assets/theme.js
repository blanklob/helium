!(function () {
  'use strict'
  new (class {
    constructor() {
      ;(this.el = document.querySelector('[data-skip-to-content]')),
        (this.children = Array.from(this.el.children)),
        this.children.forEach((e) => {
          e.addEventListener('click', () => {
            this.deactivate()
          }),
            e.addEventListener('focus', () => {
              this.activate()
            })
        }),
        this.el.addEventListener('keydown', (e) => {
          9 == e.keyCode &&
            this.children.forEach((e) => {
              var t, i
              ;(t = e),
                (i = document.activeElement) && i != document.body
                  ? document.querySelector &&
                    (i = document.querySelector(':focus'))
                  : (i = null),
                t !== i && this.deactivate()
            })
        })
    }
    activate() {
      this.el.classList.remove('u-hidden-visually'),
        this.el.classList.add('--active')
    }
    deactivate() {
      this.el.classList.add('u-hidden-visually'),
        this.el.classList.remove('--active')
    }
  })()
})()
