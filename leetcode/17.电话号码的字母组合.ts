/*
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

"2"  对应  "abc"
"3"  对应  "def"
"4"  对应  "ghi"
"5"  对应  "jkl"
"6"  对应  "mno"
"7"  对应  "pqrs"
"8"  对应  "tuv"
"9"  对应  "wxyz"

示例:

输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
说明:
尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits: string) {
  if (digits.length === 0) return [];
  // 广度优先 深度优先 皆可
  // 但是 还是回溯法更佳
  type digitKeys = "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
  const map: { [key in digitKeys]: string } = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  };
  const result: string[] = [];
  backTrack("", digits);
  return result;

  function backTrack(curStr: string, restStr: string) {
    if (restStr.length === 0) {
      result.push(curStr);
      return;
    }
    const mappingData = map[restStr[0] as digitKeys];
    for (let i = 0; i < mappingData.length; i++) {
      backTrack(curStr + mappingData[i], restStr.slice(1));
    }
  }
};

import assert from "assert";
assert.deepStrictEqual(letterCombinations("").sort(), [].sort());
assert.deepStrictEqual(
  letterCombinations("23").sort(),
  ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].sort()
);
assert.deepStrictEqual(
  letterCombinations("295").sort(),
  [
    "awj",
    "awk",
    "awl",
    "axj",
    "axk",
    "axl",
    "ayj",
    "ayk",
    "ayl",
    "azj",
    "azk",
    "azl",
    "bwj",
    "bwk",
    "bwl",
    "bxj",
    "bxk",
    "bxl",
    "byj",
    "byk",
    "byl",
    "bzj",
    "bzk",
    "bzl",
    "cwj",
    "cwk",
    "cwl",
    "cxj",
    "cxk",
    "cxl",
    "cyj",
    "cyk",
    "cyl",
    "czj",
    "czk",
    "czl",
  ].sort()
);
