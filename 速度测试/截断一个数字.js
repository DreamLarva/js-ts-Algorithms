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

console.log(a("12345", 2));
console.log(b("12345", 2));

const Benchmark = require("benchmark");
const suite = new Benchmark.Suite();

// add tests
suite
  .add("a", function () {
    a("12345.12345", 20);
  })
  .add("b", function () {
    b("12345.12345", 20);
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
