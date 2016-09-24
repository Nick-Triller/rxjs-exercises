const Rx = require("rxjs");
const EventEmitter = require("events");

module.exports = () => {
    const fakeButton = new EventEmitter();
    fakeButton.click = function() { 
        this.emit("click") 
    }

    const clicks = Rx.Observable.fromEvent(fakeButton, "click");
    const flush = Rx.Observable.interval(200);

    // Applies an accumulator function over the source Observable, and returns each 
    // intermediate result, with an optional seed value.
    clicks.scan((acc, curr) => acc+1, 0)
        // Buffer takes observable
        .buffer(flush)
        .filter(x => x.length > 0)
        .forEach(x => console.log(x));

    setInterval(() => fakeButton.click(), 20);
}