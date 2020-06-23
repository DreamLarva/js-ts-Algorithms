function bankNoValidate(num) {
  num += "";
  var Last = parseInt(num.substr(-1));
  var withoutLast = num.slice(0, -1);

  withoutLast = withoutLast
    .split("")
    .reverse()
    .reduce(function (prev, current, index) {
      prev = parseInt(prev);
      current = parseInt(current);
      if (index === 1) {
        current = current + process(prev * 2);
      } else if (index % 2 === 1) {
        current = prev + current;
      } else if (index % 2 === 0) {
        current = prev + process(current * 2);
      }
      return current;
    });

  function process(num) {
    return num > 9 ? Math.floor(num / 10) + (num % 10) : num;
  }

  // console.log(withoutLast, Last);
  return (withoutLast + Last) % 10 === 0;
}

const assert = require("assert");
assert.ok(bankNoValidate("6217002255962693679"));
assert.ok(bankNoValidate("6226095711989751"));
