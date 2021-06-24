import gcd from "./求最大公约数";

/**
 * 最小公倍数等于 a * b / 最大公约数
 * */

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

import assert from "assert";
assert.strictEqual(lcm(18, 24), 72);
assert.strictEqual(lcm(20, 2100), 2100);
