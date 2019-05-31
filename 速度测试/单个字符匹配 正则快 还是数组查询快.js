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
 * 直接在字符串上查询速度最快
 * */
