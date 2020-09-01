import _ from "lodash";
const obj = {
  get prop() {
    console.log("getter has run");

    // Replace me!
    return Math.random() < 0.5;
  },
  set prop(_val: boolean) {
    console.log("setter has run");
  },
};

function foo() {
  console.log("right side evaluated");
  return true;
}

console.log("This one always runs the setter");
obj.prop = obj.prop || foo();

console.log("This one *sometimes* runs the setter");
obj.prop ||= foo();

var objects = [
  { a: 1, b: 2, c: 3 },

  { a: 4, b: 5, c: 6 },
];

console.log(_.filter(objects, _.matches({ a: 4, c: 6 })));

console.log(_.matches(1)(1));

const valueToDesc = _.find([{ value: 1 }], { value: 2 })?.value ?? "--";

const positiveOrNegative = _.cond<number, string>([
  [(v) => v === 0, _.toString],
  [(v) => v > 0, (v) => "+" + v],
  [(v) => v < 0, (v) => "-" + v],
]);

const gte = _.curryRight(_.gte);
const getUnit = _.cond<number, string>([
  [gte(10 ** 8), _.constant("亿元")],
  [gte(10 ** 4), _.constant("万元")],
  [_.stubTrue, _.constant("元")],
]);
function getUnit2(data: number) {
  data = Math.abs(data);
  return getUnit(data);
}

const fun1 = <T extends Function>(fun: Function) =>
  _.wrap(fun, function (fun, ...args) {
    return args.length < fun.length || _.some(args, _.isNil)
      ? void 0
      : fun(...args);
  });

function a<P1 extends any[], R>(fun: (...args1: P1) => R) {
  return function (...args2: Partial<P1>): R | null {
    return args2.length < fun.length || args2.some(_.isNil)
      ? null
      : fun(...(args2 as P1));
  };
}

console.log(a((a: number, b: number) => a + b)(1, 1));
