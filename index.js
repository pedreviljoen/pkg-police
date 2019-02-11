#! /usr/bin/env node

const readPkgUp = require('read-pkg-up')
const toCamelCase = require('to-camel-case')
const qoa = require('qoa')


qoa.config({
    prefix: '•'
  })

readPkgUp().then(async ({pkg = {}} = {}) => {

        const missingFields = []

        if (pkg.name) {
            pkg.name = toCamelCase(pkg.name)
        } else {
            missingFields.push({
                type: 'input',
                query: 'Type the name of your package:',
                handle: 'name'
            })
        }

        if (!pkg.description || pkg.description.length > 100) {
            missingFields.push({
                type: 'input',
                query: 'Type the description of your package. Less than 100 characters is recommended.',
                handle: 'description'
            })
        }

        if (missingFields.length > 0) {
            const updates = await qoa.prompt(missingFields)
        }
       
})
.catch(console.error)