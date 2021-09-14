/*
524. 通过删除字母匹配到字典里最长单词
给你一个字符串 s 和一个字符串数组 dictionary 作为字典，找出并返回字典中最长的字符串，该字符串可以通过删除 s 中的某些字符得到。

如果答案不止一个，返回长度最长且字典序最小的字符串。如果答案不存在，则返回空字符串。



示例 1：

输入：s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]
输出："apple"
示例 2：

输入：s = "abpcplea", dictionary = ["a","b","c"]
输出："a"


提示：

1 <= s.length <= 1000
1 <= dictionary.length <= 1000
1 <= dictionary[i].length <= 1000
s 和 dictionary[i] 仅由小写英文字母组成

* */
function findLongestWord(s: string, dictionary: string[]): string {
  // 双指针
  dictionary.sort((a, b) => {
    if (b.length === a.length) {
      return a.localeCompare(b);
    } else {
      return b.length - a.length;
    }
  });

  console.log(dictionary);

  for (let i = 0; i < dictionary.length; i++) {
    let a = 0;
    let b = 0;
    const word = dictionary[i];
    while (a <= s.length - 1 && b <= word.length - 1) {
      if (s[a] === word[b]) {
        a++;
        b++;
      } else {
        a++;
      }
    }

    if (b === word.length && b <= s.length) return word;
  }
  return "";
}

import assert from "assert";

assert.strictEqual(
  findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"]),
  "apple"
);
assert.strictEqual(findLongestWord("abpcplea", ["a", "b", "c"]), "a");
assert.strictEqual(findLongestWord("abce", ["abe", "abc"]), "abc");
