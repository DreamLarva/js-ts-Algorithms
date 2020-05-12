/*
给定两个字符串 s 和 t，它们只包含小写字母。

字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。

请找出在 t 中被添加的字母。



示例:

输入：
s = "abcd"
t = "abcde"

输出：
e

解释：
'e' 是那个被添加的字母。
* */
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference1 = function (s: string, t: string) {
  let temp = 0;
  // 将 字符中串的为 转化成 数字的问题
  for (const char of t) {
    temp += char.charCodeAt(0);
  }

  for (const char of s) {
    temp -= char.charCodeAt(0);
  }

  return String.fromCharCode(temp);
};

var findTheDifference2 = function (s: string, t: string) {
  let temp = 0;
  // 将 字符中串的为 转化成 数字的问题
  for (const char of t) {
    temp ^= char.charCodeAt(0);
  }

  for (const char of s) {
    temp ^= char.charCodeAt(0);
  }

  return String.fromCharCode(temp);
};

import assert from "assert";

assert.strictEqual(findTheDifference1("abcd", "abcde"), "e");
assert.strictEqual(findTheDifference1("", "a"), "a");
assert.strictEqual(findTheDifference2("abcd", "abcde"), "e");
assert.strictEqual(findTheDifference2("", "a"), "a");

import Benchmark from "benchmark";

const suite = new Benchmark.Suite();
suite
  .add("+", function () {
    findTheDifference1("abcd", "abcde");
  })
  .add("^", function () {
    findTheDifference2("abcd", "abcde");
  })
  .on("cycle", function (event: Benchmark.Event) {
    console.log(String(event.target));
  })
  .on("complete", function (this: Benchmark.Suite) {
    // console.log('Fastest is ' + this.filter('fastest').map( 'name'));
  })
  // run async
  .run({ async: false });
