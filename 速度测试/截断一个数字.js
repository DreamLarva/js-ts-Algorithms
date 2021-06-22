function a(num, fractionDigits) {
  num = parseFloat(num);
  return (
    Math.floor(num * Math.pow(10, fractionDigits)) /
    Math.pow(10, fractionDigits)
  ).toFixed(fractionDigits);
}

function b(str, fractionDigits) {
  str = String(str);
  const [a, b = ""] = str.split(".");
  return a + "." + b.substr(0, 2).padEnd(2, "0");
}


const Benchmark = require("benchmark");
const suite = new Benchmark.Suite();

// add tests
suite
  .add("数学方法", function () {
    a("12345123451234512345123451234512345.123451234512345123451234512345123451234512345", 20);
  })
  .add("字符串方法", function () {
    b("12345123451234512345123451234512345.123451234512345123451234512345123451234512345", 20);
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
 * 数学方法 x 2,702,888 ops/sec ±1.09% (90 runs sampled)
 * 字符串方法 x 7,272,226 ops/sec ±1.40% (87 runs sampled)
 * */
