const Rx = require("rxjs");

module.exports = {
  "title": "#2",
  "description": "This is exercise #2",
  "code": () => {
    const source = Rx.Observable.interval(500).take(6);

    source.filter(x => x % 2 === 1)
        .map(x => x + "!")
        .forEach(x => console.log(x));
  }
}