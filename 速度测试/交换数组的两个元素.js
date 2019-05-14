const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

const sample = [0, 1];
suite
    .add('使用临时变量', function () {
        const temp = sample[0];
        sample[0] = sample[1];
        sample[1] = temp;
    })
    .add('使用数组解构', function () {
        [sample[1], sample[0]] = [sample[0], sample[1]]

    })


    // add listeners
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({'async': false});

/**
 * 使用临时变量 x 592,492,348 ops/sec ±0.92% (90 runs sampled)
 * 使用数组解构 x 519,918,156 ops/sec ±1.12% (91 runs sampled)
 * Fastest is 使用临时变量
 *
 * 其实相差的还不多
 * */
