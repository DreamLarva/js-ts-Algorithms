const Benchmark = require("benchmark");
const suite = new Benchmark.Suite();

const sample = Array(10000)
  .fill(0)
  .map((_, index) => () => {});
let b;
suite
  .add("for of", function () {
    for (const a of sample) {
      a();
    }
  })
  .add("for i", function () {
    for (let i = 0; i < sample.length; i++) {
      sample[i]();
    }
  })
  .add("forEach", function () {
    sample.forEach((v) => {
      v();
    });
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
 * 10 个样本
 * for of x 39,898,942 ops/sec ±1.50% (85 runs sampled)
 * for i x 81,617,824 ops/sec ±0.90% (91 runs sampled)
 * forEach x 51,867,782 ops/sec ±0.48% (97 runs sampled)

 *
 * 10000 个样本
 * for of x 50,970 ops/sec ±1.11% (90 runs sampled)
 * for i x 77,627 ops/sec ±1.41% (89 runs sampled)
 * forEach x 16,967 ops/sec ±18.38% (84 runs sampled)

 *
 * */
