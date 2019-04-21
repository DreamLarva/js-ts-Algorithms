var a = 1;
window.bb = 2;

// 上下文的this
(function () {
    console.log(this);
    console.log(this.a, this.bb)
}());


function test() {
    var a = 100;
    var b = 200;

    // 上下文是依然是window
    (function () {
        console.log(this);
        console.log(this.a, this.bb)
    }())
}

test();


var test1 = {
    a: 1111111111,
    // 上下文还是window
    b: (function () {
        console.log(this);
        console.log(a)
    }())
};


// 结论立即执行函数的作用域一定是 window

