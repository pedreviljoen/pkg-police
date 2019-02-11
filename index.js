const {readContents} = require('./reader')
const recommended = require('./config/recommended')

readContents().then(res => {
    try {
        const fields = Object.keys(res.pkg)
        const missing = recommended.filter(item => !fields.includes(item))

        if (missing.length > 0) {
            // notify that there are fields missing
        } else {
            // notify that everything seems all right :)
        }
    } catch (error) {
        console.log(error)
    }
})