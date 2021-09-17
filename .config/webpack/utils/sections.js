const fs = require('fs')
const path = require('path')

// Get root and section dir
const rootDir = path.dirname(path.dirname(path.dirname(__dirname)))
const sectionsPath = path.join(path.join(rootDir, 'src'), 'sections')

module.exports = function () {
  const entrypoints = {}
  const sectionsStylesPath = path.join(sectionsPath, 'styles')
  const sectionsScriptsPath = path.join(sectionsPath, 'scripts')

  fs.readdirSync(sectionsStylesPath).forEach((file) => {
    const sectionName = path.parse(file).name
    entrypoints[`section-${sectionName}`] = []

    entrypoints[`section-${sectionName}`].push(
      path.join(sectionsStylesPath, `${sectionName}.scss`)
    )
  })

  fs.readdirSync(sectionsScriptsPath).forEach((file) => {
    const sectionName = path.parse(file).name
    const sectionsScript = path.join(sectionsScriptsPath, `${sectionName}.js`)

    if (fs.existsSync(sectionsScript)) {
      entrypoints[`section-${sectionName}`].push(
        path.join(sectionsScriptsPath, `${sectionName}.js`)
      )
    }
  })

  return entrypoints
}
