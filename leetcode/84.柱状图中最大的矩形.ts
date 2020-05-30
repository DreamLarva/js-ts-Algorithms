/*
84. 柱状图中最大的矩形
给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

求在该柱状图中，能够勾勒出来的矩形的最大面积。





以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。
       _
     _| |
    |/|/|
    |/|/|  _
 _  |/|/|_| |
| |_|/|/| | |
| | |/|/| | |

图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。



示例:

输入: [2,1,5,6,2,3]
输出: 10
* */
import _ from "lodash";
import { mapAccumRight } from "ramda";
import { MaxHeap } from "../数据结构/堆";
/**
 * @param {number[]} heights
 * @return {number}
 */

/**
 * https://leetcode-cn.com/problems/largest-rectangle-in-histogram/solution/zhu-zhuang-tu-zhong-zui-da-de-ju-xing-by-leetcode-/
 * */
var largestRectangleArea = function (heights: number[]) {
  const stack: number[] = [];
  const len = heights.length;
  const left = Array(len).fill(0); // 不知道左边界的 默认到最左侧
  const right = Array(len).fill(len); // 不知道右边界 默认到最右侧
  for (let i = 0; i < len; i++) {
    while (stack.length !== 0 && heights[_.last(stack)!] >= heights[i]) {
      right[_.last(stack)!] = i;
      stack.pop();
    }
    left[i] = stack.length === 0 ? -1 : _.last(stack)!;
    stack.push(i);
  }

  let answer = 0;

  for (let i = 0; i < len; ++i) {
    answer = Math.max(answer, (right[i] - left[i] - 1) * heights[i]);
  }
  return answer;
};

/**
 * 低端单调栈慢的一批
 * */
var largestRectangleArea1 = function (heights: number[]): number {
  if (heights.length === 0) return 0;
  let answer = heights[0];

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] === -1) continue;
    answer = Math.max(heights[i], answer);
    const stack: number[] = [heights[i]]; // 只能接受更小值的单调栈
    for (let j = i + 1; j < heights.length; j++) {
      const top = _.last(stack)!;
      if (top >= heights[j]) {
        stack.push(heights[j]);
        answer = Math.max(heights[j] * stack.length, answer);
      } else {
        stack.push(top);
        answer = Math.max(top * stack.length, answer);
      }
      if (top === heights[j]) heights[j] = -1;
    }
  }
  return answer;
};

import assert from "assert";
// assert.strictEqual(largestRectangleArea([0, 9]), 9);
// assert.strictEqual(largestRectangleArea([2, 1, 5, 6, 2, 3]), 10);
// assert.strictEqual(largestRectangleArea([1, 1]), 2);
assert.strictEqual(largestRectangleArea([2, 1, 2]), 3);

// assert.strictEqual(largestRectangleArea1([0, 9]), 9);
// assert.strictEqual(largestRectangleArea1([2, 1, 5, 6, 2, 3]), 10);
