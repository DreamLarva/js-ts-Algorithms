/*
编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

示例 1:

输入: "hello"
输出: "holle"
示例 2:

输入: "leetcode"
输出: "leotcede"
说明:
元音字母不包含字母"y"。
* */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s: string) {
  // 首尾指针
  const string_arr = s.split("");
  let left = 0;
  let right = string_arr.length - 1;
  const dictionary = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  while (left < right) {
    if (!dictionary.includes(string_arr[left])) {
      left++;
      continue;
    }
    if (!dictionary.includes(string_arr[right])) {
      right--;
      continue;
    }
    [string_arr[right], string_arr[left]] = [
      string_arr[left],
      string_arr[right],
    ];
    left++;
    right--;
  }

  return string_arr.join("");
};

import assert from "assert";

assert.strictEqual(reverseVowels("hello"), "holle");
assert.strictEqual(reverseVowels("leetcode"), "leotcede");
