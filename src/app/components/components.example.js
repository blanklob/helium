import Core from './components.core'

class Example extends Core {
  constructor(m) {
    super(m)
    this.init()
  }

  init() {
    this.$('title')[0].innerText =
      'Thanks for chosing this setup for your Shopify Theme.'
  }
}

export default new Example({
  name: 'example',
})
