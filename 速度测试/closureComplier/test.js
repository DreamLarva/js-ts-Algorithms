const Benchmark = require("benchmark");
const suite = new Benchmark.Suite();
const beforeCompile = require("./beforeCompile");
const afterCompile = require("./afterCompile");

const sample = [0, 1, 2, 3];
suite

  .add("afterCompile", function () {
    afterCompile("abacddcabacddcabacddcabacddc");
  })
  .add("beforeCompile", function () {
    beforeCompile("abacddcabacddcabacddcabacddc");
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
 * 结论 google 的 closure complier 并没有什么卵用
 * */
