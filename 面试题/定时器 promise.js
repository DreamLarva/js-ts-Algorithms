/**
 * @link http://www.tuicool.com/articles/MnY7N3a
 * setTimeout 中的是 marcoTask
 * promise 中的为 microtasks
 * 每次执行 marcoTask 前就要执行全部 堆栈中的 marcoTask
 * 所以promise 中的先执行
 * */
setTimeout(function () {
    console.log(1)
}, 0);
setTimeout(function () {
    console.log(6)
}, 0);
new Promise(resolve => {
    console.log(2);
    for (var i = 0; i < 10000; i++) {
        i === 9999 && resolve();
    }
    setTimeout(function () {
        console.log(7)
    }, 0);
    console.log(3);
}).then(function () {
    setTimeout(function () {
        console.log(8)
    }, 0);
    console.log(4);
});
for (var i = 0; i < 10000; i++) {
    i === 9999 && setTimeout(function () {
        console.log(9)
    }, 0);
}
console.log(5);

// 2 3 5 4 1 6 7 9 8

