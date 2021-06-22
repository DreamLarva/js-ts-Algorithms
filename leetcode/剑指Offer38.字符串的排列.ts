/*
剑指 Offer 38. 字符串的排列
输入一个字符串，打印出该字符串中字符的所有排列。



你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。



示例:

输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]


限制：

1 <= s 的长度 <= 8
* */
function permutation(s: string): string[] {
  const rec: string[] = [];
  /**
   * 用于判断 哪个位置的值true已经被使用了
   * */
  const vis: boolean[] = [];
  const n = s.length;
  const arr = Array.from(s).sort();
  const backtrack = (arr: string[], i: number, n: number, perm: string[]) => {
    if (i === n) {
      rec.push(perm.join(""));
      return;
    }

    for (let j = 0; j < n; j++) {
      /**
       * 1. 如果 当前位置的值被用过的 当然不能用
       * 2. 如果 当前值和前一值相同 且上一个值能用, 则当前值也不能用(因为一样)
       * */
      if (vis[j] || (!vis[j - 1] && arr[j - 1] === arr[j])) continue;

      vis[j] = true;
      perm.push(arr[j]);
      backtrack(arr, i + 1, n, perm);
      perm.pop();
      vis[j] = false;
    }
  };

  backtrack(arr, 0, n, []);
  return rec;
}

import assert from "assert";
assert.deepStrictEqual(
  new Set(permutation("abc")),
  new Set(["abc", "acb", "bac", "bca", "cab", "cba"])
);
