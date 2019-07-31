const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

const alphabet_string = "abcdefghijklmnopqrestuvwzyz";
const alphabet_array = alphabet_string.split("");
const alphabet_set = new Set(alphabet_array);
const alphabet_reg = /^[a-z]$/;
const sample = "z";

suite
    .add('正则', function () {
        return alphabet_reg.test(sample)
    })
    .add('数组查询', function () {
        return alphabet_array.indexOf(sample) !== -1
    })
    .add('字符串查询', function () {
        return alphabet_string.indexOf(sample) !== -1
    })
    .add('set查询', function () {
        return alphabet_set.has(sample);
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
 * 正则 x 37,509,892 ops/sec ±1.82% (87 runs sampled)
 * 数组查询 x 16,648,233 ops/sec ±0.97% (91 runs sampled)
 * 字符串查询 x 696,219,487 ops/sec ±0.77% (95 runs sampled)
 * set查询 x 110,929,501 ops/sec ±1.25% (89 runs sampled)
 * 直接在字符串上查询速度最快
 * */
