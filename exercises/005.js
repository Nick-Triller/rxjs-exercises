const Rx = require("rxjs");

module.exports = () => {
    const source = [1,2,3,4,5];

    // Filtering everything, then mapping everything, then reducing everything
    const result = source.filter((x, i, arr) => {
        console.log("filtering " + x);
        console.log("is source " + (arr === source)); // true
        return x % 2 === 0;
    })
    .map((x, i, arr) => {
        console.log("mapping " + x);
        console.log("is source " + (arr === source)); // false; new array
        return x + "!";
    })
    .reduce((p, x, i, arr) => {
        console.log("reducing " + x);
        console.log("is source " + (arr === source)); // false; new array
        return p + x;
    }, "");

    console.log(result);

    console.log("");
    // With rxjs, each value passes through all operations with no intermediary arrays
    const sourceObservable = Rx.Observable.from(source);
    sourceObservable.filter((x) => {
        console.log("filtering " + x);
        return x % 2 === 0;
    })
    .map((x) => {
        console.log("maping " + x);
        return x + "!";
    })
    .reduce((p, x) => {
        console.log("reducing " + x)
        return p + x;
    })
    .subscribe(result => {
        console.log(result);
    })
}