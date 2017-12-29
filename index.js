const isPrimitive = require('is-primitive')

module.exports = inputArray => inputArray.every(i => isPrimitive(i))
