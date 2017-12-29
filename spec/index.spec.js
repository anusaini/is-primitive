/* global describe it expect */

const isPrimitiveArray = require('../index')

describe('index', () => {
  it('returns true if inputArray contains all the primitive values', () => {
    const primitiveArray = [1, 'a', 0, '', true, false]
    expect(isPrimitiveArray(primitiveArray)).toBe(true)
  })
  it('returns false if inputArray contains even one non primitive value', () => {
    const primitiveArray = [1, 'a', 0, '', true, false, {}]
    expect(isPrimitiveArray(primitiveArray)).toBe(false)
  })
})
