import Core from './components.core'

class Example extends Core {
  constructor(m) {
    super(m)
    this.init()
  }

  init() {
    console.log(this.$(''))
  }
}

export default new Example()
