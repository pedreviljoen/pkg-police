const { missingFields } = require('./reader')
const recommendedTest = require('./config/recommendedTest')
const recommended = require('./config/recommended')

test('Missing fields: hello', () => {
    return missingFields(recommendedTest).then(res => {
        expect(res).toEqual(["hello"])
    })
})

test('Missing fields: None', () => {
    return missingFields(recommended).then(res => {
        expect(res).toEqual([])
    })
})
