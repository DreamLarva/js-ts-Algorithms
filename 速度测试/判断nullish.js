const _ = require("lodash");
const Benchmark = require("benchmark");
const suite = new Benchmark.Suite();

const a = 1;
const b = null;
const c = undefined;

suite
  .add("not null ==", function () {
    return a == null;
  })
  .add("not nul === null || === undefined", function () {
    return a === null || a === undefined;
  })
  .add("null == null", function () {
    return b == null;
  })
  .add("null === null || null === undefined", function () {
    return b === null || b === undefined;
  })
  .add("undefined == null", function () {
    return c == null;
  })
  .add("undefined === null || null === undefined", function () {
    return c === null || c === undefined;
  })
  .add("_.isNil", function () {
    return _.isNil(c);
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
 * 结论 没毛区别
 * */
