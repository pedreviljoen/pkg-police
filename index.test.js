const { missingFields, readContents } = require('./reader')
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

test('Valid package', () => {
    return readContents().then(res => {
        expect(res).toBeInstanceOf(Object)
    })
})

test('Valid array', () => {
    return readContents().then(res => {
        expect(Object.keys(res.pkg)).toBeInstanceOf(Array)
    })
})

test('Should return array with one outstanding', () => {
    return missingFields(recommendedTest).then(res => {
        expect(res[0]).toBeDefined()
    })
})

test('Outstanding should be of type string', () => {
    return missingFields(recommendedTest).then(res => {
        expect(typeof res[0]).toBe('string')
    })
})