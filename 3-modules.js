// Modules - Encapsulated Code (only share minimum)
// CommonJS, every file is module (by default)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternate')
require('./7-mind-grenade')

console.log(names)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

