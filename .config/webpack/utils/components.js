const fs = require('fs')
const path = require('path')

// Get root and component dir
const rootDir = path.dirname(path.dirname(path.dirname(__dirname)))
const componentsPath = path.join(path.join(rootDir, 'src'), 'components')

module.exports = function () {
  const entrypoints = {}
  const componentsStylesPath = path.join(componentsPath, 'styles')
  const componentsScriptsPath = path.join(componentsPath, 'scripts')

  fs.readdirSync(componentsStylesPath).forEach((file) => {
    const componentName = path.parse(file).name
    entrypoints[`component-${componentName}`] = []

    entrypoints[`component-${componentName}`].push(
      path.join(componentsStylesPath, `${componentName}.scss`)
    )
  })

  fs.readdirSync(componentsScriptsPath).forEach((file) => {
    const componentName = path.parse(file).name
    const sectionsScript = path.join(
      componentsScriptsPath,
      `${componentName}.js`
    )

    if (fs.existsSync(sectionsScript)) {
      entrypoints[`component-${componentName}`].push(
        path.join(componentsScriptsPath, `${componentName}.js`)
      )
    }
  })

  return entrypoints
}
