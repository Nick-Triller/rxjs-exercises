const Rx = require("rxjs");
const EventEmitter = require("events");

module.exports = () => {
    const fakeCheckbox = new EventEmitter();
    fakeCheckbox.checked = false;
    fakeCheckbox.change = function () {
        this.checked = !this.checked;
        console.log("checked = " + this.checked);
        this.emit("change", {target: this});
    }

    const source = Rx.Observable.interval(100)
        .scan((acc, curr) => acc+1)
        .map(x => Rx.Observable.create(observer => observer.next(x)));
}