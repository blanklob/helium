const fs = require('fs')
const path = require('path')

// Get root and section dir
const rootDir = path.dirname(path.dirname(path.dirname(__dirname)))
const stylesDir = path.join(path.join(rootDir, 'src'), 'styles')
const sectionsStylesDir = path.join(stylesDir, 'sections')

module.exports = function () {
  const entrypoints = {}

  fs.readdirSync(sectionsStylesDir).forEach((file) => {
    const sectionName = path.parse(file).name
    if (!sectionName.startsWith('_'))
      entrypoints[`section-${sectionName}`] = path.join(
        sectionsStylesDir,
        `${sectionName}.scss`
      )
  })

  return entrypoints
}
