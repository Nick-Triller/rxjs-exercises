const Rx = require("rxjs");

module.exports = {
  "title": "#3",
  "description": "This is exercise #3",
  "code": () => {
    const promise = new Promise(resolve => {
        setTimeout(() => {
            console.log("promise timeout hit");
            resolve(42);
        }, 500);
    });
    console.log("promise started");

    promise.then(x => console.log(x));

    var source = Rx.Observable.create(observer => {
        setTimeout(() => {
            console.log("observable timeout hit");            
            observer.next(42);
            observer.complete();
        }, 1000);
        console.log("observable started");
    });

    const sub = source
        .forEach(x => console.log(x))
        .then(() => console.log("forEach returns promise on complete"));
  }
}

// Observables are lazy, while promises are not.
// Observable timeout would not run without subscription.
// Unlike promises, observables can be canceled because observables embody 
// everything thats necessery to tear them down.