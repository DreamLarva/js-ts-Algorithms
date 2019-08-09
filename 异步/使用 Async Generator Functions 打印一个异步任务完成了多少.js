'use strict';

/**
 * 使用 Async Generator Functions 打印一个异步任务完成了多少
 * */
function asyncWork(time) {
    return new Promise(resolve => setTimeout(resolve, time))
}

function* someWork(count) {
    for (let i = 0; i < count; i++) {
        yield asyncWork((i + 1) * 500)
    }
}

async function* run() {
    let total = 5;
    let processed = 0;
    for await (const doc of someWork(5)) {
        // You can think of `yield` as reporting "I'm done with one unit of work"
        yield {processed: ++processed, total};
    }
}

(async () => {
    for await (const val of run()) {
        // Prints "1 / 5", "2 / 5", "3 / 5", etc.
        console.log(`${val.processed} / ${val.total}`);
    }
})();
