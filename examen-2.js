//Número 11
const events = require('events');
const myEmitt = new events.EventEmitter();

function createEmitter(onOpen, onClose) {
    myEmitt.on('open', onOpen);
    myEmitt.on('closed', onClose);
}
function opened(emitter) {
    myEmitt.emit('open', emitter)
}
function closed(emitter) {
    myEmitt.emit('closed', emitter)
}
let emitter = createEmitter(
    () => console.log("Opened!"), () => console.log("Closed!")
);

opened(emitter);
closed(emitter);

module.exports.createEmitter = createEmitter;
module.exports.opened = opened;
module.exports.closed = closed;
