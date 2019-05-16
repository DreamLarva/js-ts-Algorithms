const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

class EmptyClass {
    constructor() {
    }
}

class Class20Props{
    constructor() {
        this.a = 1;
        this.a1 = 2;
        this.a2 = 3;
        this.a3 = 4;
        this.a4 = 11;
        this.a5 = 11;
        this.a6 = 11;
        this.a7 = 111;
        this.a8 = 12;
        this.a9 = 112;
        this.a10 = 231;
        this.a11 = 21;
        this.a12 = 31;
        this.a13 = 11;
        this.a14 = 21;
        this.a15 = 31;
        this.a16 = 41;
        this.a17 = 111;
        this.a18 = 123;
        this.a19 = 112;
        this.a20 = 121;
    }
}

class Class20Methods{
    a(){}
    a2(){}
    a3(){}
    a4(){}
    a5(){}
    a6(){}
    a7(){}
    a8(){}
    a9(){}
    a10(){}
    a11(){}
    a12(){}
    a13(){}
    a14(){}
    a15(){}
    a16(){}
    a17(){}
    a18(){}
    a19(){}
    a20(){}
}

class ExtendsClass20Methods extends Class20Methods{
    constructor() {
        super();
    }

}
class ExtendsClass20Props20Methods extends ExtendsClass20Methods{
    constructor() {
        super();
    }

}

// add tests
let a;
suite
    .add('空类', function () {
         new EmptyClass()
    })
    .add('类 20个属性', function () {
         new Class20Props()
    })
    .add('类 20个方法', function () {
         new Class20Methods()
    })
    .add('类 继承20个方法', function () {
         new ExtendsClass20Methods()
    })
    .add('类 继承20个属性 20个方法', function () {
         new ExtendsClass20Props20Methods()
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
 * 结论 基本没毛线区别 毕竟给予原型链啦
 * 继承需要 初始化多个实例 所以肯定有消耗
 * */

