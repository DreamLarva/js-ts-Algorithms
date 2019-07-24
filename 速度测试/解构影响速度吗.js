const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;


const data = {
    "a": 0,
    "b": 1,
    "c": 2,
    "d": 3,
    "e": 4,
    "f": 5,
    "g": 6,
    "h": 7,
    "i": 8,
    "j": 9,
    "k": 10,
    "l": 11,
    "m": 12,
    "n": 13,
    "o": 14,
    "p": 15,
    "q": 16,
    "r": 17,
    "s": 18,
    "t": 19,
    "u": 20,
    "v": 21,
    "w": 22,
    "x": 23,
    "y": 24,
    "z": 25,
};

function useStructure({a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z}) {
    return {a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z}
}

function formal({a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z}) {
    return {a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z}
}

function useStructure1({p, q, r, s, t, u, v, w, x, y, z}) {
    return {p, q, r, s, t, u, v, w, x, y, z}
}

function useStructure2({a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z}) {
    return {p, q, r, s, t, u, v, w, x, y, z}
}

function useStructure3({a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z}) {

}

suite
    .add('直接传递', function () {
        useStructure(data)
    })
    .add('解构全部后传递全部', function () {
        formal(data)
    })
    .add('解构部分后传递全部', function () {
        useStructure1(data)
    })
    .add('解构全部传递部分', function () {
        useStructure1(data)
    })
    .add('解构全部不传递', function () {
        useStructure1(data)
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
 * 结论
 * 似乎解构 并不影响速度
 *
 * 直接传递 x 655,812,878 ops/sec ±1.28% (86 runs sampled)
 * 解构全部后传递全部 x 660,473,721 ops/sec ±0.97% (93 runs sampled)
 * 解构部分后传递全部 x 684,001,896 ops/sec ±0.94% (91 runs sampled)
 * 解构全部传递部分 x 688,658,206 ops/sec ±0.76% (90 runs sampled)
 * 解构全部不传递 x 679,781,029 ops/sec ±1.06% (91 runs sampled)
 * */

