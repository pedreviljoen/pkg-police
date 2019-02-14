const writePkg = require("write-pkg")
const { readContents } = require("./reader")

const writeToPackage = async (outstanding = {}) => {
  const contents = await readContents()
  const newFileJson = Object.assign(contents.pkg, outstanding)

  try {
    await writePkg(newFileJson)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  writeToPackage
}
