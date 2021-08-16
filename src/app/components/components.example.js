import Core from './components.core'

class Example extends Core {
  constructor(m) {
    super(m)
    this.init()
  }

  init() {
    this.$('heading')[0].innerText =
      'Thanks for choosing this setup for your Shopify Theme.'
    this.$('subheading')[0].innerHTML =
      'Modern development on Shopify using Webpack 5 fully supporting<br>Online Store 2.0 features and github integration.'
  }
}

export default new Example({
  name: 'example',
})
