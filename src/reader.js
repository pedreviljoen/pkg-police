const readPkgUp = require('read-pkg-up')

async function readContents () {
    const contents = await readPkgUp()
    return contents
}

async function missingFields (input) {
    const contents = await readContents()
    const fields = Object.keys(contents.pkg)

    return input.filter(item => !fields.includes(item))
}

module.exports = {
    readContents,
    missingFields
}