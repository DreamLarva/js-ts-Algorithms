/*
根据每日 气温 列表，请重新生成一个列表，对应位置的输入是你需要再等待多久温度才会升高的天数。如果之后都不会升高，请输入 0 来代替。

例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的都是 [30, 100] 范围内的整数。
* */

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T: number[]) {
  // 使用栈
  const stack: number[] = [];
  const result: number[] = [];
  for (let i = 0; i < T.length; i++) {
    // 如果栈顶的值 < 准备入栈的值 (注意不能等于 因为 一样的值 依然不算递增啊)
    while (stack.length && T[stack[stack.length - 1]] < T[i]) {
      const top_index = stack.pop()!;
      // 结果就是 入栈额值的索引 减去 栈内值的索引
      result[top_index] = i - top_index;
    }
    stack.push(i);
  }

  // 如果栈内 还有值 说明之后再也没有递增
  for (const index of stack) {
    result[index] = 0;
  }
  return result;
};

import assert from "assert";

// assert.deepStrictEqual(
//     dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]),
//     [1, 1, 4, 2, 1, 1, 0, 0],
// );
assert.deepStrictEqual(
  dailyTemperatures([89, 62, 70, 58, 47, 47, 46, 76, 100, 70]),
  [8, 1, 5, 4, 3, 2, 1, 1, 0, 0]
);
