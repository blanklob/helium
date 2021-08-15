export default class {
  constructor(options) {
    this.sName = options.name
    this.sAttr = `data-component-${this.sName}`
    this.sRoot = document.querySelector('[' + this.sAttr + ']')
  }

  $(query, context) {
    const classIndex = query.indexOf('.')
    const idIndex = query.indexOf('#')
    const attrIndex = query.indexOf('[')
    const indexes = [classIndex, idIndex, attrIndex].filter(
      (index) => index != -1
    )

    let index = false
    let name = query
    let more = ''
    let parent = this.sRoot

    if (indexes.length) {
      index = Math.min(...indexes)
      name = query.slice(0, index)
      more = query.slice(index)
    }

    if (typeof context == 'object') {
      parent = context
    }

    return parent.querySelectorAll('[' + this.sAttr + '=' + name + ']' + more)
  }
}
