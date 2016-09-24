const Rx = require("rxjs");

module.exports = () => {
    const source = Rx.Observable.interval(500).take(6);

    source.filter(x => x % 2 === 1)
        .map(x => x + "!")
        .forEach(x => console.log(x));
}