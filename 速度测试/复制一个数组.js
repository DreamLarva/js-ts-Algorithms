const Benchmark = require("benchmark");
const suite = new Benchmark.Suite();

const sample1 = Array(999999).fill(1);
const sample2 = Array(999).fill(1);

suite
  .add("slice", function () {
    return sample2.slice()
  })
  .add("concat", function () {
    return sample2.concat();
  })
  .add("...", function () {
    return [...sample2];
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
 * 无论大样本 还是 小样本 都是 slice 速度最快
 * slice x 1,863,185 ops/sec ±3.39% (83 runs sampled)
 * concat x 1,542,334 ops/sec ±4.14% (82 runs sampled)
 * ... x 619,306 ops/sec ±2.71% (86 runs sampled)
 * */
