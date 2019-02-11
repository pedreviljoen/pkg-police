const readPkgUp = require('read-pkg-up')

async function readContents () {
    const contents = await readPkgUp()
    return contents
}

module.exports = {
    readContents
}