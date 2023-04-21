/*
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"
* */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s: string) {
  const str = [...s];
  let result: string[] = [];
  if (str.join("") === str.reverse().join("")) {
    return str.join("");
  }
  str.forEach((v, i, a) => {
    // 123321 格式
    if (v === a[i + 1]) {
      let temp = 1;
      while (
        i - temp >= 0 &&
        i + 1 + temp <= a.length - 1 &&
        a[i + 1 + temp] === a[i - temp]
        ) {
        temp++;
      }
      temp--;
      if (result.length < 2 + 2 * temp) {
        // 这个第一个 2 改成1 竟然不会有错误
        result = a.slice(i - temp, i + 1 + temp + 1);
      }
    }
    // 12321 格式
    if (a[i + 1] === a[i - 1]) {
      let temp = 1;
      while (
        i - temp >= 0 &&
        i + temp <= a.length - 1 &&
        a[i + temp] === a[i - temp]
        ) {
        temp++;
      }
      temp--;
      if (result.length < 1 + 2 * temp) {
        result = a.slice(i - temp, i + temp + 1);
      }
    }
  });
  return result.join("") || str[0];
};

import assert from "assert";
import Benchmark from "benchmark";
/**
 * Manacher算法
 * 时间复杂度为 O(n)
 * */
import {manacher1} from "../算法/manacher马拉车算法";

assert.strictEqual(longestPalindrome("cbbd"), "bb");
assert.strictEqual(longestPalindrome("abacddc"), "cddc");
assert.strictEqual(manacher1("abacddc"), "cddc");
assert.strictEqual(manacher1("abacddc"), "cddc");


const sample1 = "abacddc";
const sample2 = "abacddcabacddcabacddcabacddcabacddcabacddcabacddcabacddcabacddcabacddcabacddcabacddc";
const suite = new Benchmark.Suite()
suite
  // add listeners
  .add("mine", function (event) {
    longestPalindrome(sample2)
  })
  .add("Manacher算法", function (event) {
    manacher1(sample2)
  })
  .on("cycle", function (event: Benchmark.Event) {
    console.log(String(event.target));
  })
  .on("complete", function (this: Benchmark.Suite) {
    console.log('Fastest is ' + this.filter('fastest').map( 'name'));
  })
  // run async
  .run({async: false});


