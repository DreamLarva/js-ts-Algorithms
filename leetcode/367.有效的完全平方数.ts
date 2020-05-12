/*
给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。

说明：不要使用任何内置的库函数，如  sqrt。

示例 1：

输入：16
输出：True
示例 2：

输入：14
输出：False
* */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num: number) {
  let i = 1;
  let n = i * i;
  while (n <= num) {
    if (n == num) return true;
    else {
      i++;
      n = i ** 2;
    }
  }
  return false;
};
/**
 * 非递增而是递减
 * */
var isPerfectSquare2 = function (num: number) {
  let i = num >> 2;
  let n = i * i;
  while (n >= num) {
    if (n == num) return true;
    else {
      i--;
      n = i ** 2;
    }
  }
  return false;
};

/**
 * 二分
 * */
var isPerfectSquare3 = function (num: number) {
  let start = 1;
  let end = num;
  let mid = Math.floor(start + (end - start) / 2);
  while (start <= end) {
    if (mid ** 2 > num) {
      end = mid - 1;
    } else if (mid ** 2 < num) {
      start = mid + 1;
    } else return true;

    mid = Math.floor((end - start) / 2 + start);
  }
  return false;
};
/**
 * 公式
 * 利用 1+3+5+7+9+…+(2n-1)=n^2，即完全平方数肯定是前n个连续奇数的和
 * */
var isPerfectSquare4 = function (num: number) {
  let i = 1;
  while (num > 0) {
    num -= i;
    i += 2;
  }
  return num === 0;
};

/**
 * 牛顿迭代法 同 69题
 * */
var isPerfectSquare5 = function (num: number) {
  if (num === 1) return true;
  let r = num;
  while (r * r > num) {
    r = (r + num / r) / 2;
  }
  return Number.isInteger(r) && r * r === num;
};

import assert from "assert";
import Benchmark from "benchmark";

assert.strictEqual(isPerfectSquare5(16), true);
assert.strictEqual(isPerfectSquare5(17), false);
// 使用牛顿迭代法 超时
// assert.strictEqual(
//     isPerfectSquare5(5),
//     false,
// );

const suite = new Benchmark.Suite();
suite
  .add("递增", function () {
    isPerfectSquare(99999);
  })
  .add("递减", function () {
    isPerfectSquare2(99999);
  })
  .add("二分", function () {
    isPerfectSquare3(99999);
  })
  .add("公式", function () {
    isPerfectSquare4(99999);
  })
  .add("牛顿", function () {
    isPerfectSquare5(99999);
  })
  .on("cycle", function (event: Benchmark.Event) {
    console.log(String(event.target));
  })
  .on("complete", function (this: Benchmark.Suite) {
    // console.log('Fastest is ' + this.filter('fastest').map( 'name'));
  })
  // run async
  .run({ async: false });
