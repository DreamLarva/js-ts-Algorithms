/*
1190. 反转每对括号间的子串
给出一个字符串 s（仅含有小写英文字母和括号）。

请你按照从括号内到外的顺序，逐层反转每对匹配括号中的字符串，并返回最终的结果。

注意，您的结果中 不应 包含任何括号。



示例 1：

输入：s = "(abcd)"
输出："dcba"
示例 2：

输入：s = "(u(love)i)"
输出："iloveu"
示例 3：

输入：s = "(ed(et(oc))el)"
输出："leetcode"
示例 4：

输入：s = "a(bcdefghijkl(mno)p)q"
输出："apmnolkjihgfedcbq"


提示：

0 <= s.length <= 2000
s 中只有小写英文字母和括号
我们确保所有括号都是成对出现的
* */
function reverseParentheses(s: string): string {
  const stack1: [number, number][] = [];
  const stack2: number[] = [];
  let i = 0;
  while (i < s.length) {
    if (s[i] === "(") {
      stack2.push(i);
    } else if (s[i] === ")") {
      stack1.push([stack2.pop()!, i]);
    }
    i++;
  }

  const _s = s.split("");
  stack1.forEach(([start, end]) => {
    _s.splice(
      start + 1,
      end - start - 1,
      ..._s.slice(start + 1, end).reverse()
    );
  });

  return _s.join("").replace(/[()]/g, "");
}

/**
 *
 * 官方最优解
 * 第一步我们向右移动到左括号，此时我们跳跃到该左括号对应的右括号（进入了更深一层）；
 * 第二到第三步我们在括号内部向左移动（完成了更深层的遍历）；
 * 第四步我们向左移动到左括号，此时我们跳跃到该左括号对应的右括号（返回到上一层）；
 * 第五步我们在括号外向右移动（继续遍历）。
 * */
function reverseParentheses2(s: string) {
  const n = s.length;
  const pair = new Array(n).fill(0);
  /**
   * 创建一个 () 位置 对应 数组
   * */
  const stack = [];
  for (let i = 0; i < n; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] == ")") {
      const j = stack.pop()!;
      pair[i] = j;
      pair[j] = i;
    }
  }

  const sb = [];
  let index = 0;
  let step = 1; // 1 代表向右走 ; -1代表向左走
  while (index < n) {
    if (s[index] === "(" || s[index] === ")") {
      index = pair[index];
      step = -step; // 碰到 ( ) 就调转方向
    } else {
      sb.push(s[index]);
    }
    index += step;
  }
  return sb.join("");
}

import assert from "assert";

assert.strictEqual(reverseParentheses("(abcd)"), "dcba");
assert.strictEqual(reverseParentheses("(u(love)i)"), "iloveu");
assert.strictEqual(reverseParentheses("(ed(et(oc))el)"), "leetcode");
assert.strictEqual(
  reverseParentheses("a(bcdefghijkl(mno)p)q"),
  "apmnolkjihgfedcbq"
);
