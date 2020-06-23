const Benchmark = require("benchmark");
const suite = new Benchmark.Suite();

const date = new Date();
const string = date.toString();
const timeStamp = date.getTime();

suite
  .add("直接使用日期对象", function () {
    new Date(date);
  })
  .add("使用字符串", function () {
    new Date(string);
  })
  .add("使用时间戳", function () {
    new Date(timeStamp);
  })
  .add("直接新建", function () {
    new Date();
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

/**
 * 直接使用日期对象 x 7,871,118 ops/sec ±1.28% (91 runs sampled)
 * 使用字符串 x 1,347,504 ops/sec ±2.11% (90 runs sampled)
 * 使用时间戳 x 7,794,224 ops/sec ±1.34% (91 runs sampled)
 * 直接新建 x 5,210,657 ops/sec ±0.86% (91 runs sampled)
 *
 * 结论 实际上 日期对象 只是保留时间戳
 * 其他的数值 都是 get函数 或者 其他方法实时计算的
 * 所以 直接能得到时间戳的 日期对象 和 时间戳 本身更快
 *
 * 直接新建 和 通过 字符串新建 相对较慢
 * */
