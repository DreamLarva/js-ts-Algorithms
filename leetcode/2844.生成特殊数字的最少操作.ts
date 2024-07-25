/*
2844. 生成特殊数字的最少操作
中等

给你一个下标从 0 开始的字符串 num ，表示一个非负整数。

在一次操作中，您可以选择 num 的任意一位数字并将其删除。请注意，如果你删除 num 中的所有数字，则 num 变为 0。

返回最少需要多少次操作可以使 num 变成特殊数字。

如果整数 x 能被 25 整除，则该整数 x 被认为是特殊数字。


示例 1：

输入：num = "2245047"
输出：2
解释：删除数字 num[5] 和 num[6] ，得到数字 "22450" ，可以被 25 整除。
可以证明要使数字变成特殊数字，最少需要删除 2 位数字。
示例 2：

输入：num = "2908305"
输出：3
解释：删除 num[3]、num[4] 和 num[6] ，得到数字 "2900" ，可以被 25 整除。
可以证明要使数字变成特殊数字，最少需要删除 3 位数字。
示例 3：

输入：num = "10"
输出：1
解释：删除 num[0] ，得到数字 "0" ，可以被 25 整除。
可以证明要使数字变成特殊数字，最少需要删除 1 位数字。


提示

1 <= num.length <= 100
num 仅由数字 '0' 到 '9' 组成
num 不含任何前导零
* */
function minimumOperations(num: string): number {
  // 直接暴力的来
  // 既然能被25整除 结尾只能是 25 50 75 00
  // 从后往前查找
  let r = Infinity;
  const s = num;
  const l1 = s.lastIndexOf("5");
  if (l1 !== -1) {
    const max =
      l1 === 0
        ? -1
        : Math.max(s.lastIndexOf("2", l1 - 1), s.lastIndexOf("7", l1 - 1));
    if (max === -1) {
      r = s.length;
    } else {
      r = Math.min(r, s.length - max - 2);
    }
  }
  const l2 = s.lastIndexOf("0");
  if (l2 !== -1) {
    const max =
      l2 === 0
        ? -1
        : Math.max(s.lastIndexOf("5", l2 - 1), s.lastIndexOf("0", l2 - 1));
    if (max === -1) {
      r = Math.min(r, s.length - 1);
    } else {
      r = Math.min(r, s.length - max - 2);
    }
  }

  if (l1 === -1 && l2 === -1) {
    r = s.length;
  }

  return r;
}

function minimumOperations1(num: string): number {
  let find0 = -1;
  let find5 = -1;
  let r = Infinity;

  // 贪心算法 从右往左 找到就记下来 0,5 的位置
  for (let i = num.length - 1; i >= 0; i--) {
    if (find0 === -1) {
      if (num[i] === "0") {
        find0 = i;
      }
    } else {
      if (["5", "0"].includes(num[i])) {
        r = Math.min(num.length - i - 2, r);
      }
    }

    if (find5 === -1) {
      if (num[i] === "5") {
        find5 = i;
      }
    } else {
      if (["2", "7"].includes(num[i])) {
        r = Math.min(num.length - i - 2, r);
      }
    }
  }

  if (!Number.isFinite(r)) {
    if (find0 !== -1) {
      // 只保留 "0"
      r = num.length - 1;
    } else if (find5 !== -1) {
      // 统统不要
      r = num.length;
    } else {
      // 统统不要
      r = num.length;
    }
  }

  return r;
}

import assert from "assert";
assert.equal(minimumOperations1("405"), 2);
assert.equal(minimumOperations1("1"), 1);
assert.equal(minimumOperations1("0"), 0);
assert.equal(minimumOperations1("3678105825"), 0);
assert.equal(minimumOperations1("2245047"), 2);
assert.equal(minimumOperations1("2908305"), 3);
assert.equal(minimumOperations1("10"), 1);
assert.equal(minimumOperations1("5"), 1);
assert.equal(minimumOperations1("50"), 0);
assert.equal(minimumOperations1("25"), 0);
