module.exports = [
    {
        name: 'CHECKER',
        type: 'input',
        message: 'Would you like us to check your package.json? [y/N]',
        validate: function(value) {
            if (value.length && (value.toLowerCase() === 'y' || value.toLowerCase() === 'n')){
                return true
            } else {
                return 'Please enter a valid response [y/N] '
            }
        }
    }
]