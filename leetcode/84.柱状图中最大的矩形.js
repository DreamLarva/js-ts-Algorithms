"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
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
const lodash_1 = __importDefault(require("lodash"));
/**
 * @param {number[]} heights
 * @return {number}
 */
/**
 * https://leetcode-cn.com/problems/largest-rectangle-in-histogram/solution/zhu-zhuang-tu-zhong-zui-da-de-ju-xing-by-leetcode-/
 * */
var largestRectangleArea = function (heights) {
  const stack = [];
  const len = heights.length;
  const left = Array(len).fill(0); // 不知道左边界的 默认到最左侧
  const right = Array(len).fill(len); // 不知道右边界 默认到最右侧
  for (let i = 0; i < len; i++) {
    while (
      stack.length !== 0 &&
      heights[lodash_1.default.last(stack)] >= heights[i]
    ) {
      right[lodash_1.default.last(stack)] = i;
      stack.pop();
    }
    left[i] = stack.length === 0 ? -1 : lodash_1.default.last(stack);
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
var largestRectangleArea1 = function (heights) {
  if (heights.length === 0) return 0;
  let answer = heights[0];
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] === -1) continue;
    answer = Math.max(heights[i], answer);
    const stack = [heights[i]]; // 只能接受更小值的单调栈
    for (let j = i + 1; j < heights.length; j++) {
      const top = lodash_1.default.last(stack);
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
const assert_1 = __importDefault(require("assert"));
// assert.strictEqual(largestRectangleArea([0, 9]), 9);
// assert.strictEqual(largestRectangleArea([2, 1, 5, 6, 2, 3]), 10);
// assert.strictEqual(largestRectangleArea([1, 1]), 2);
assert_1.default.strictEqual(largestRectangleArea([2, 1, 2]), 3);
// assert.strictEqual(largestRectangleArea1([0, 9]), 9);
// assert.strictEqual(largestRectangleArea1([2, 1, 5, 6, 2, 3]), 10);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODQu5p+x54q25Zu+5Lit5pyA5aSn55qE55+p5b2iLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS84NC7mn7Hnirblm77kuK3mnIDlpKfnmoTnn6nlvaIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBMkJJO0FBQ0osb0RBQXVCO0FBR3ZCOzs7R0FHRztBQUVIOztLQUVLO0FBQ0wsSUFBSSxvQkFBb0IsR0FBRyxVQUFVLE9BQWlCO0lBQ3BELE1BQU0sS0FBSyxHQUFhLEVBQUUsQ0FBQztJQUMzQixNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQzNCLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUI7SUFDbEQsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGdCQUFnQjtJQUNwRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzVCLE9BQU8sS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksT0FBTyxDQUFDLGdCQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2xFLEtBQUssQ0FBQyxnQkFBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQixLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDYjtRQUNELElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDO1FBQ25ELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDZjtJQUVELElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUVmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDNUIsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNsRTtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGOztLQUVLO0FBQ0wsSUFBSSxxQkFBcUIsR0FBRyxVQUFVLE9BQWlCO0lBQ3JELElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQUUsT0FBTyxDQUFDLENBQUM7SUFDbkMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXhCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3ZDLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUFFLFNBQVM7UUFDaEMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sS0FBSyxHQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjO1FBQ3BELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxNQUFNLEdBQUcsR0FBRyxnQkFBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUUsQ0FBQztZQUMzQixJQUFJLEdBQUcsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ3REO2lCQUFNO2dCQUNMLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hCLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQy9DO1lBQ0QsSUFBSSxHQUFHLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDekM7S0FDRjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUM1Qix1REFBdUQ7QUFDdkQsb0VBQW9FO0FBQ3BFLHVEQUF1RDtBQUN2RCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUV2RCx3REFBd0Q7QUFDeEQscUVBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiLypcbjg0LiDmn7Hnirblm77kuK3mnIDlpKfnmoTnn6nlvaJcbue7meWumiBuIOS4qumdnui0n+aVtOaVsO+8jOeUqOadpeihqOekuuafseeKtuWbvuS4reWQhOS4quafseWtkOeahOmrmOW6puOAguavj+S4quafseWtkOW9vOatpOebuOmCu++8jOS4lOWuveW6puS4uiAxIOOAglxuXG7msYLlnKjor6Xmn7Hnirblm77kuK3vvIzog73lpJ/li77li5Llh7rmnaXnmoTnn6nlvaLnmoTmnIDlpKfpnaLnp6/jgIJcblxuXG5cblxuXG7ku6XkuIrmmK/mn7Hnirblm77nmoTnpLrkvovvvIzlhbbkuK3mr4/kuKrmn7HlrZDnmoTlrr3luqbkuLogMe+8jOe7meWumueahOmrmOW6puS4uiBbMiwxLDUsNiwyLDNd44CCXG4gICAgICAgX1xuICAgICBffCB8XG4gICAgfC98L3xcbiAgICB8L3wvfCAgX1xuIF8gIHwvfC98X3wgfFxufCB8X3wvfC98IHwgfFxufCB8IHwvfC98IHwgfFxuXG7lm77kuK3pmLTlvbHpg6jliIbkuLrmiYDog73li77li5Llh7rnmoTmnIDlpKfnn6nlvaLpnaLnp6/vvIzlhbbpnaLnp6/kuLogMTAg5Liq5Y2V5L2N44CCXG5cblxuXG7npLrkvos6XG5cbui+k+WFpTogWzIsMSw1LDYsMiwzXVxu6L6T5Ye6OiAxMFxuKiAqL1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgbWFwQWNjdW1SaWdodCB9IGZyb20gXCJyYW1kYVwiO1xuaW1wb3J0IHsgTWF4SGVhcCB9IGZyb20gXCIuLi/mlbDmja7nu5PmnoQv5aCGXCI7XG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW119IGhlaWdodHNcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuXG4vKipcbiAqIGh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL2xhcmdlc3QtcmVjdGFuZ2xlLWluLWhpc3RvZ3JhbS9zb2x1dGlvbi96aHUtemh1YW5nLXR1LXpob25nLXp1aS1kYS1kZS1qdS14aW5nLWJ5LWxlZXRjb2RlLS9cbiAqICovXG52YXIgbGFyZ2VzdFJlY3RhbmdsZUFyZWEgPSBmdW5jdGlvbiAoaGVpZ2h0czogbnVtYmVyW10pIHtcbiAgY29uc3Qgc3RhY2s6IG51bWJlcltdID0gW107XG4gIGNvbnN0IGxlbiA9IGhlaWdodHMubGVuZ3RoO1xuICBjb25zdCBsZWZ0ID0gQXJyYXkobGVuKS5maWxsKDApOyAvLyDkuI3nn6XpgZPlt6bovrnnlYznmoQg6buY6K6k5Yiw5pyA5bem5L6nXG4gIGNvbnN0IHJpZ2h0ID0gQXJyYXkobGVuKS5maWxsKGxlbik7IC8vIOS4jeefpemBk+WPs+i+ueeVjCDpu5jorqTliLDmnIDlj7PkvqdcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIHdoaWxlIChzdGFjay5sZW5ndGggIT09IDAgJiYgaGVpZ2h0c1tfLmxhc3Qoc3RhY2spIV0gPj0gaGVpZ2h0c1tpXSkge1xuICAgICAgcmlnaHRbXy5sYXN0KHN0YWNrKSFdID0gaTtcbiAgICAgIHN0YWNrLnBvcCgpO1xuICAgIH1cbiAgICBsZWZ0W2ldID0gc3RhY2subGVuZ3RoID09PSAwID8gLTEgOiBfLmxhc3Qoc3RhY2spITtcbiAgICBzdGFjay5wdXNoKGkpO1xuICB9XG5cbiAgbGV0IGFuc3dlciA9IDA7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIGFuc3dlciA9IE1hdGgubWF4KGFuc3dlciwgKHJpZ2h0W2ldIC0gbGVmdFtpXSAtIDEpICogaGVpZ2h0c1tpXSk7XG4gIH1cbiAgcmV0dXJuIGFuc3dlcjtcbn07XG5cbi8qKlxuICog5L2O56uv5Y2V6LCD5qCI5oWi55qE5LiA5om5XG4gKiAqL1xudmFyIGxhcmdlc3RSZWN0YW5nbGVBcmVhMSA9IGZ1bmN0aW9uIChoZWlnaHRzOiBudW1iZXJbXSk6IG51bWJlciB7XG4gIGlmIChoZWlnaHRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDA7XG4gIGxldCBhbnN3ZXIgPSBoZWlnaHRzWzBdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaGVpZ2h0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChoZWlnaHRzW2ldID09PSAtMSkgY29udGludWU7XG4gICAgYW5zd2VyID0gTWF0aC5tYXgoaGVpZ2h0c1tpXSwgYW5zd2VyKTtcbiAgICBjb25zdCBzdGFjazogbnVtYmVyW10gPSBbaGVpZ2h0c1tpXV07IC8vIOWPquiDveaOpeWPl+abtOWwj+WAvOeahOWNleiwg+agiFxuICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IGhlaWdodHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGNvbnN0IHRvcCA9IF8ubGFzdChzdGFjaykhO1xuICAgICAgaWYgKHRvcCA+PSBoZWlnaHRzW2pdKSB7XG4gICAgICAgIHN0YWNrLnB1c2goaGVpZ2h0c1tqXSk7XG4gICAgICAgIGFuc3dlciA9IE1hdGgubWF4KGhlaWdodHNbal0gKiBzdGFjay5sZW5ndGgsIGFuc3dlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGFjay5wdXNoKHRvcCk7XG4gICAgICAgIGFuc3dlciA9IE1hdGgubWF4KHRvcCAqIHN0YWNrLmxlbmd0aCwgYW5zd2VyKTtcbiAgICAgIH1cbiAgICAgIGlmICh0b3AgPT09IGhlaWdodHNbal0pIGhlaWdodHNbal0gPSAtMTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFuc3dlcjtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuLy8gYXNzZXJ0LnN0cmljdEVxdWFsKGxhcmdlc3RSZWN0YW5nbGVBcmVhKFswLCA5XSksIDkpO1xuLy8gYXNzZXJ0LnN0cmljdEVxdWFsKGxhcmdlc3RSZWN0YW5nbGVBcmVhKFsyLCAxLCA1LCA2LCAyLCAzXSksIDEwKTtcbi8vIGFzc2VydC5zdHJpY3RFcXVhbChsYXJnZXN0UmVjdGFuZ2xlQXJlYShbMSwgMV0pLCAyKTtcbmFzc2VydC5zdHJpY3RFcXVhbChsYXJnZXN0UmVjdGFuZ2xlQXJlYShbMiwgMSwgMl0pLCAzKTtcblxuLy8gYXNzZXJ0LnN0cmljdEVxdWFsKGxhcmdlc3RSZWN0YW5nbGVBcmVhMShbMCwgOV0pLCA5KTtcbi8vIGFzc2VydC5zdHJpY3RFcXVhbChsYXJnZXN0UmVjdGFuZ2xlQXJlYTEoWzIsIDEsIDUsIDYsIDIsIDNdKSwgMTApO1xuIl19
