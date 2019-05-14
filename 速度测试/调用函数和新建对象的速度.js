const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

class A {
    constructor(data) {
        this.data = data
    }

    compute() {
        return this.data + 1
    }
}

function B(data) {
    return data + 1
}

// add tests
suite
    .add('class', function () {
        new A(1).compute()
    })
    .add('function', function () {
        B(1)
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
 * 结论 函数 比新建对象快
 * */

