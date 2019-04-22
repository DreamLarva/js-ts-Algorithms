/**
 * 定时器对队列的工作方式是，当特定时间过去后将代码插入。
 * 注意，给队列添加代码并不意味着对它立刻执行，而只能表示它会尽快执行。设定一个 150ms 后执行的定时器不代表到了 150ms代码就立刻执行，它表示代码会在 150ms 后被加入到队列中。
 * 如果在这个时间点上，队列中没有其他东西，那么这段代码就会被执行，表面上看上去好像代码就在精确指定的时间点上执行了。
 * 其他情况下，代码可能明显地等待更长时间才执行。
 * */
function timeEscaped(num) {
    let start = new Date().getTime();

    while (new Date().getTime() <= start + num) {

    }
    console.log("过了" + num + "ms")
    console.log(Date.now())
}

setTimeout(function () {
    console.log(Date.now())
    console.log("setTimeOut")
}, 7000);
timeEscaped(3000);
timeEscaped(3000);
// setTimeout在 最后执行


