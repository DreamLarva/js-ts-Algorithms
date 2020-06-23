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

/**
 * todo
 * Manacher算法
 * 时间复杂度为 O(n)
 * */
function Manacher(s: string) {
  // 添加在每个字符中间添加 # 将字符串隔开
  // 就能将 所有 1221 这样的 转化为 1#2#2#1 就可以 同 121 这样格式一样处理
  let text = "";
  for (let i = 0; i < s.length - 1; i++) {
    text += s[i] + "#";
  }
  text += s[s.length - 1];

  // 从左向右 中心拓展判断是不是 回文
  let index = 0;
  const map: number[] = [];
  while (index < text.length) {
    const middle = index;
    // if (text[middle] === "#"){
    //     index++;
    //     continue
    // }

    let range = 1;
    while (
      middle - range > 0 &&
      middle + range < text.length &&
      text[middle - range] === text[middle + range]
    ) {
      range++;
    }
    map[middle] = range;
    index++;
    while (index < middle + range - 1) {}
  }
  console.log(map);

  return true;
}

import assert from "assert";

assert.strictEqual(longestPalindrome("cbbd"), "bb");
assert.strictEqual(longestPalindrome("abacddc"), "cddc");

Manacher("1234");
