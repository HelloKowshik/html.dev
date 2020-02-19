// Async Iterator

let asyncIterable = {
    [Symbol.asyncIterator]() {
        let i = 0;
        return {
            next() {
                if (i < 5) {
                    return Promise.resolve({
                        value: i++,
                        done: false 
                    })
                } else {
                    return Promise.resolve({
                        value: 'Complete',
                        done: true
                    })
                }
            }
        }
    }
};
let iterate = asyncIterable[Symbol.asyncIterator]();
// console.log(iterate.next());
// console.log(iterate.next());
// (async function () {
//     console.log(await iterate.next());
//     console.log(await iterate.next());
//     console.log(await iterate.next());
//     console.log(await iterate.next());
//     console.log(await iterate.next());
//     console.log(await iterate.next());
//     console.log(await iterate.next());
// })();

// for await of loop

(async function () {
    for await (let v of asyncIterable) {
        console.log(v);
    }
})();