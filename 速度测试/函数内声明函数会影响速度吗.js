var Benchmark = require("benchmark");
var suite = new Benchmark.Suite();

// add tests
suite
  .add("outBlock", function () {
    a();
  })
  .add("inBlock", function () {
    a();
    function a() {
      let i = 100;
      while (i) {
        b();
        i--;
      }

      function b() {
        let i = 100;
        while (i) {
          c();
          i--;
        }

        function c() {
          let i = 100;
          while (i) {
            d();
            i--;
          }

          function d() {}
        }
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

function a() {
  let i = 100;
  while (i) {
    b();
    i--;
  }
}

function b() {
  let i = 100;
  while (i) {
    c();
    i--;
  }
}

function c() {
  let i = 100;
  while (i) {
    d();
    i--;
  }
}

function d() {}

/**
 * outBlock x 1,714 ops/sec ±1.63% (87 runs sampled)
 * inBlock x 1,669 ops/sec ±1.20% (88 runs sampled)
 * inBlock 比outBlock 应该多声明 10 ** 6 次函数 然而可能运行可能还稍快一点....
 * */
