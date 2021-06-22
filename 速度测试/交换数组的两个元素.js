const Benchmark = require("benchmark");
const suite = new Benchmark.Suite();

const sample = [0, 1, 2, 3];
suite
  .add("使用临时变量", function () {
    const temp = sample[0];
    sample[0] = sample[1];
    sample[1] = sample[2];
    sample[2] = sample[3];
    sample[3] = temp;
  })
  .add("使用数组解构", function () {
    [sample[0], sample[1], sample[2], sample[3]] = [
      sample[1],
      sample[2],
      sample[3],
      sample[0],
    ];
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
 * 交换两个
 * 使用临时变量 x 592,492,348 ops/sec ±0.92% (90 runs sampled)
 * 使用数组解构 x 519,918,156 ops/sec ±1.12% (91 runs sampled)
 * Fastest is 使用临时变量
 *
 * 交换 4 个
 * 使用临时变量 x 440,126,934 ops/sec ±0.88% (92 runs sampled)
 * 使用数组解构 x 152,257,331 ops/sec ±0.87% (89 runs sampled)
 *
 * 交换的数量多了 似乎有点影响 但是都是千万次的级别 区别也不大
 * */
