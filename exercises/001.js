const Rx = require("rxjs");

module.exports = () => {
    const source = Rx.Observable.create(observer => {
        console.log("started");
        const id = setTimeout(() => {
            try {
                observer.next(2);
                throw "err";
            } catch (error) {
                observer.error(error);
            }
        }, 1000);

        // Unsubscribe handler; called on error, too
        return () => {
            console.log("unsubscribe handler")
            clearTimeout(id);
        };
    });

    const sub1 = source.subscribe(x => {
        console.log("next " + x);
    }, err => {
        console.error(err);
    }, () => {
        console.log("complete");
    });

    const sub2 = source.subscribe(x => {
        console.log("next " + x);
    }, err => {
        console.error(err);
    }, () => {
        console.log("complete");
    });
}