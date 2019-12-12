const EventEmitter = require('events').EventEmitter; 
const emit = new EventEmitter(); 
console.log('emit')
export { emit };