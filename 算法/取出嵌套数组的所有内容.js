function iterTree1(arr) {
  var result = [];

  function iter(arr) {
    if (Array.isArray(arr)) {
      arr.forEach((v) => iter(v));
    } else {
      result.push(arr);
    }
  }

  iter(arr);
  return result;
}

function iterTree2(arr) {
  var result = [];

  function iter(arr) {
    if (Array.isArray(arr) && arr.every((v) => !Array.isArray(v))) {
      result = [...result, ...arr];
    } else if (Array.isArray(arr)) {
      arr.forEach((v) => iter(v));
    } else {
      result.push(arr);
    }
  }

  iter(arr);
  return result;
}

function* iterTree3(tree) {
  if (Array.isArray(tree)) {
    for (let i = 0; i < tree.length; i++) {
      yield* iterTree3(tree[i]);
    }
  } else {
    yield tree;
  }
}

var sample = [1, [2, 3, [4, 5], 6], 7, [8, 9, [10, 11, [12]]]];
const Benchmark = require("benchmark");
const suite = new Benchmark.Suite();
suite
  .add("iterTree1", function () {
    iterTree1(sample);
  })
  .add("iterTree3", function () {
    iterTree2(sample);
  })
  .add("iterTree3 generator", function () {
    iterTree3(sample);
  })
  .add("iterTree3 array", function () {
    [...iterTree3(sample)];
  })
  /** node 12 才有该方法 */
  // .add('原生', function () {
  //     sample.flat(Infinity)
  // })

  // add listeners
  .on("cycle", function (event) {
    console.log(String(event.target));
  })
  .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  // run async
  .run({ async: false });
