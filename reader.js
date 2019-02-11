const readPkgUp = require('read-pkg-up')
const recommended = require('./config/recommended')

async function readContents () {
    const contents = await readPkgUp()
    return contents
}

async function missingFields () {
    const contents = await readContents()
    const fields = Object.keys(contents.pkg)

    return recommended.filter(item => !fields.includes(item))
}

module.exports = {
    readContents,
    missingFields
}