const _ = require("lodash");
/**
 * generator 等于白给一个闭包
 * 虽然可能速度会慢一点
 * 但是可以使用 for of 直接迭代
 * 且可以递归
 * */
function* getItem(arr) {
  for (let i = 0; i < arr.length; i++) {
    yield arr[i]
  }
}

function getItem2(arr) {
  let index = 0;
  return function () {
    if (index < arr.length) {
      return { done: false, value: arr[index++] };
    }
    return { done: true, value: undefined };
  };
}

const Benchmark = require("benchmark");
const suite = new Benchmark.Suite();
const data = _.range(1000);
const t1 = getItem(data);
const t2 = getItem2(data);

suite
  .add("generator", function () {

    for (const tElement of t1) {
    }
  })
  .add("closure", function () {

    while (true) {
      const r = t2();
      if (r.done) {
        break;
      }
    }
  })
  // add listeners
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  // run async
  .run({ async: false });
