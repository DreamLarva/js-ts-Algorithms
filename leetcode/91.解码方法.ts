/*
91. 解码方法
一条包含字母 A-Z 的消息通过以下映射进行了 编码 ：

'A' -> 1
'B' -> 2
...
'Z' -> 26
要 解码 已编码的消息，所有数字必须基于上述映射的方法，反向映射回字母（可能有多种方法）。例如，"11106" 可以映射为：

"AAJF" ，将消息分组为 (1 1 10 6)
"KJF" ，将消息分组为 (11 10 6)
注意，消息不能分组为  (1 11 06) ，因为 "06" 不能映射为 "F" ，这是由于 "6" 和 "06" 在映射中并不等价。

给你一个只含数字的 非空 字符串 s ，请计算并返回 解码 方法的 总数 。

题目数据保证答案肯定是一个 32 位 的整数。



示例 1：

输入：s = "12"
输出：2
解释：它可以解码为 "AB"（1 2）或者 "L"（12）。
示例 2：

输入：s = "226"
输出：3
解释：它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。
示例 3：

输入：s = "0"
输出：0
解释：没有字符映射到以 0 开头的数字。
含有 0 的有效映射是 'J' -> "10" 和 'T'-> "20" 。
由于没有字符，因此没有有效的方法对此进行解码，因为所有数字都需要映射。
示例 4：

输入：s = "06"
输出：0
解释："06" 不能映射到 "F" ，因为字符串含有前导 0（"6" 和 "06" 在映射中并不等价）。


提示：
  1 <= s.length <= 100
  s 只包含数字，并且可能包含前导零。
* */

function numDecodings(s: string): number {
  /**
   * 动态规划
   * */
  if (s[0] === "0") return 0;
  const cache = Array(s.length).fill(0);
  cache[0] = 1;
  cache[0] = 1;

  for (let i = 1; i < s.length; i++) {
    let canOne = s[i] !== "0";
    let canTwo = !(
      s[i - 1] === "0" ||
      s[i - 1] > "2" ||
      (s[i - 1] === "2" && Number(s[i]) > 6)
    );

    if (canOne) {
      cache[i] += cache[i - 1];
    }
    if (canTwo) {
      cache[i] += cache[i - 2] ?? 1;
    }
  }

  return cache[cache.length - 1];
}

/**
 * 超时
 * */
function numDecodings1(s: string): number {
  // 回溯算法
  let result = 0;

  function step(s: string, index: number = 0) {
    // 用1位
    if (s[index] === "0") return;
    // 用完
    if (index === s.length - 1) return result++;
    step(s, index + 1);

    // 用2位
    // 不够用2位
    if (index + 1 > s.length - 1) return;

    const first = Number(s[index]); // 已经排除第一位是 0
    const second = Number(s[index + 1]);
    if (first > 2) return;
    if (first === 2 && second > 6) return;

    // 用完
    if (index + 1 === s.length - 1) return result++;

    step(s, index + 2);
  }

  step(s);

  return result;
}

import assert from "assert";
assert.strictEqual(numDecodings("12"), 2);
assert.strictEqual(numDecodings("226"), 3);
assert.strictEqual(numDecodings("0"), 0);
assert.strictEqual(numDecodings("06"), 0);
assert.strictEqual(
  numDecodings("111111111111111111111111111111111111111111111"),
  1836311903
);

assert.strictEqual(numDecodings("10"), 1);
assert.strictEqual(numDecodings("27"), 1);
assert.strictEqual(numDecodings("2101"), 1);
