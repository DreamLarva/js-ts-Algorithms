const Benchmark = require("benchmark");
const suite = new Benchmark.Suite();

const sample = Array(10)
  .fill(0)
  .map((_, index) => index);
let b;
suite
  .add("for of", function () {
    for (const a of sample) {
      a;
    }
  })
  .add("for i", function () {
    for (let i = 0; i < sample.length; i++) {
      sample[i];
    }
  })
  .add("forEach", function () {
    sample.forEach((v) => {
      v;
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
 * for of x 58,253,952 ops/sec ±0.92% (89 runs sampled)
 * for i x 99,727,582 ops/sec ±1.21% (92 runs sampled)
 * forEach x 129,609,707 ops/sec ±2.13% (91 runs sampled)
 *
 * 10000 个样本
 * for of x 81,615 ops/sec ±0.96% (92 runs sampled)
 * for i x 139,511 ops/sec ±2.47% (88 runs sampled)
 * forEach x 19,925 ops/sec ±24.08% (89 runs sampled)
 *
 * */
