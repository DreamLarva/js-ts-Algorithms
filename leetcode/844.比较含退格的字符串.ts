/*
844. 比较含退格的字符串
给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。

注意：如果对空文本输入退格字符，文本继续为空。



示例 1：

输入：S = "ab#c", T = "ad#c"
输出：true
解释：S 和 T 都会变成 “ac”。
示例 2：

输入：S = "ab##", T = "c#d#"
输出：true
解释：S 和 T 都会变成 “”。
示例 3：

输入：S = "a##c", T = "#a#c"
输出：true
解释：S 和 T 都会变成 “c”。
示例 4：

输入：S = "a#c", T = "b"
输出：false
解释：S 会变成 “c”，但 T 仍然是 “b”。


提示：

1 <= S.length <= 200
1 <= T.length <= 200
S 和 T 只含有小写字母以及字符 '#'。


进阶：

你可以用 O(N) 的时间复杂度和 O(1) 的空间复杂度解决该问题吗？
* */
function backspaceCompare(S: string, T: string): boolean {
  let S_i = S.length - 1;
  let S_d = 0;
  let T_i = T.length - 1;
  let T_d = 0;

  while (S_i >= 0 || T_i >= 0) {
    if (S_d > 0) {
      if (S[S_i] !== "#") {
        S_d--;
        S_i--;
        continue;
      }
    }

    if (S[S_i] === "#") {
      S_d++;
      S_i--;
      continue;
    }

    if (T_d > 0) {
      if (T[T_i] !== "#") {
        T_d--;
        T_i--;
        continue;
      }
    }

    if (T[T_i] === "#") {
      T_d++;
      T_i--;
      continue;
    }

    // S 和 T 的位置上都是非 # 的值
    if (T[T_i] === S[S_i]) {
      T_i--;
      S_i--;
    } else {
      return false;
    }
  }

  return true;
}

import assert from "assert";
assert.strictEqual(backspaceCompare("ab#c", "ad#c"), true);
assert.strictEqual(backspaceCompare("ab##", "c#d#"), true);
assert.strictEqual(backspaceCompare("a##c", "#a#c"), true);
assert.strictEqual(backspaceCompare("a#c", "b"), false);
