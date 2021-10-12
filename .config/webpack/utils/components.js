const fs = require('fs')
const path = require('path')

// Get root and component dir
const rootDir = path.dirname(path.dirname(path.dirname(__dirname)))
const stylesDir = path.join(path.join(rootDir, 'src'), 'styles')
const scriptsDir = path.join(path.join(rootDir, 'src'), 'scripts')

module.exports = function () {
  const entrypoints = {}
  const componentsStyles = path.join(stylesDir, 'components')
  const componentsScripts = path.join(scriptsDir, 'components')

  fs.readdirSync(componentsStyles).forEach((file) => {
    const componentName = path.parse(file).name
    if (!componentName.startsWith('_')) {
      entrypoints[`component-${componentName}`] = []
      entrypoints[`component-${componentName}`].push(
        path.join(componentsStyles, `${componentName}.scss`)
      )
    }
  })

  fs.readdirSync(componentsScripts).forEach((file) => {
    const componentName = path.parse(file).name
    const componentFile = path.join(componentsScripts, `${componentName}.js`)

    if (fs.existsSync(componentFile)) {
      if (!entrypoints.hasOwnProperty(`component-${componentName}`)) {
        entrypoints[`component-${componentName}`] = []
      }

      entrypoints[`component-${componentName}`].push(
        path.join(componentsScripts, `${componentName}.js`)
      )
    }
  })

  return entrypoints
}
