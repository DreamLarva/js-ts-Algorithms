import R from "ramda";

var trace = R.curry(function (tag, x) {
  console.log(tag, x);
  return x;
});
var dasherize = R.compose(
    R.andThen(console.log),
  (str: string) => Promise.resolve(str),
  R.join("-"),
  R.map(R.toLower),
  // R.tap(console.log),
  R.split(" "),
  R.replace(/\s{2,}/gi, " ")
);

dasherize("AA BB")
