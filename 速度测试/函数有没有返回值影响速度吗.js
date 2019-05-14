const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

suite

    .add('无返回值', function () {

    })
    .add('有返回值', function () {
        return arguments
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
 无返回值 x 700,851,792 ops/sec ±1.30% (88 runs sampled)
 有返回值 x 699,670,420 ops/sec ±1.26% (90 runs sampled)
 Fastest is 无返回值,有返回值
 结论是没有区别
 *
 * 其实相差的还不多
 * */
