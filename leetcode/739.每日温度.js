"use strict";
/*
根据每日 气温 列表，请重新生成一个列表，对应位置的输入是你需要再等待多久温度才会升高的天数。如果之后都不会升高，请输入 0 来代替。

例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的都是 [30, 100] 范围内的整数。
* */
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  // 使用栈
  const stack = [];
  const result = [];
  for (let i = 0; i < T.length; i++) {
    // 如果栈顶的值 < 准备入栈的值 (注意不能等于 因为 一样的值 依然不算递增啊)
    while (stack.length && T[stack[stack.length - 1]] < T[i]) {
      const top_index = stack.pop();
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
const assert_1 = __importDefault(require("assert"));
// assert.deepStrictEqual(
//     dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]),
//     [1, 1, 4, 2, 1, 1, 0, 0],
// );
assert_1.default.deepStrictEqual(
  dailyTemperatures([89, 62, 70, 58, 47, 47, 46, 76, 100, 70]),
  [8, 1, 5, 4, 3, 2, 1, 1, 0, 0]
);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzM5Luavj+aXpea4qeW6pi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNzM5Luavj+aXpea4qeW6pi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztJQU1JOzs7OztBQUVKOzs7R0FHRztBQUNILElBQUksaUJBQWlCLEdBQUcsVUFBVSxDQUFXO0lBQzNDLE1BQU07SUFDTixNQUFNLEtBQUssR0FBYSxFQUFFLENBQUM7SUFDM0IsTUFBTSxNQUFNLEdBQWEsRUFBRSxDQUFDO0lBQzVCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2pDLDJDQUEyQztRQUMzQyxPQUFPLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3hELE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUcsQ0FBQztZQUMvQix5QkFBeUI7WUFDekIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUM7U0FDbkM7UUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2Y7SUFFRCxzQkFBc0I7SUFDdEIsS0FBSyxNQUFNLEtBQUssSUFBSSxLQUFLLEVBQUU7UUFDekIsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNuQjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QiwwQkFBMEI7QUFDMUIsMkRBQTJEO0FBQzNELGdDQUFnQztBQUNoQyxLQUFLO0FBQ0wsZ0JBQU0sQ0FBQyxlQUFlLENBQ3BCLGlCQUFpQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFDNUQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDL0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7moLnmja7mr4/ml6Ug5rCU5ripIOWIl+ihqO+8jOivt+mHjeaWsOeUn+aIkOS4gOS4quWIl+ihqO+8jOWvueW6lOS9jee9rueahOi+k+WFpeaYr+S9oOmcgOimgeWGjeetieW+heWkmuS5hea4qeW6puaJjeS8muWNh+mrmOeahOWkqeaVsOOAguWmguaenOS5i+WQjumDveS4jeS8muWNh+mrmO+8jOivt+i+k+WFpSAwIOadpeS7o+abv+OAglxuXG7kvovlpoLvvIznu5nlrprkuIDkuKrliJfooaggdGVtcGVyYXR1cmVzID0gWzczLCA3NCwgNzUsIDcxLCA2OSwgNzIsIDc2LCA3M13vvIzkvaDnmoTovpPlh7rlupTor6XmmK8gWzEsIDEsIDQsIDIsIDEsIDEsIDAsIDBd44CCXG5cbuaPkOekuu+8muawlOa4qSDliJfooajplb/luqbnmoTojIPlm7TmmK8gWzEsIDMwMDAwXeOAguavj+S4quawlOa4qeeahOWAvOeahOmDveaYryBbMzAsIDEwMF0g6IyD5Zu05YaF55qE5pW05pWw44CCXG4qICovXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJbXX0gVFxuICogQHJldHVybiB7bnVtYmVyW119XG4gKi9cbnZhciBkYWlseVRlbXBlcmF0dXJlcyA9IGZ1bmN0aW9uIChUOiBudW1iZXJbXSkge1xuICAvLyDkvb/nlKjmoIhcbiAgY29uc3Qgc3RhY2s6IG51bWJlcltdID0gW107XG4gIGNvbnN0IHJlc3VsdDogbnVtYmVyW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBULmxlbmd0aDsgaSsrKSB7XG4gICAgLy8g5aaC5p6c5qCI6aG255qE5YC8IDwg5YeG5aSH5YWl5qCI55qE5YC8ICjms6jmhI/kuI3og73nrYnkuo4g5Zug5Li6IOS4gOagt+eahOWAvCDkvp3nhLbkuI3nrpfpgJLlop7llYopXG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCAmJiBUW3N0YWNrW3N0YWNrLmxlbmd0aCAtIDFdXSA8IFRbaV0pIHtcbiAgICAgIGNvbnN0IHRvcF9pbmRleCA9IHN0YWNrLnBvcCgpITtcbiAgICAgIC8vIOe7k+aenOWwseaYryDlhaXmoIjpop3lgLznmoTntKLlvJUg5YeP5Y67IOagiOWGheWAvOeahOe0ouW8lVxuICAgICAgcmVzdWx0W3RvcF9pbmRleF0gPSBpIC0gdG9wX2luZGV4O1xuICAgIH1cbiAgICBzdGFjay5wdXNoKGkpO1xuICB9XG5cbiAgLy8g5aaC5p6c5qCI5YaFIOi/mOacieWAvCDor7TmmI7kuYvlkI7lho3kuZ/msqHmnInpgJLlop5cbiAgZm9yIChjb25zdCBpbmRleCBvZiBzdGFjaykge1xuICAgIHJlc3VsdFtpbmRleF0gPSAwO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuLy8gYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbi8vICAgICBkYWlseVRlbXBlcmF0dXJlcyhbNzMsIDc0LCA3NSwgNzEsIDY5LCA3MiwgNzYsIDczXSksXG4vLyAgICAgWzEsIDEsIDQsIDIsIDEsIDEsIDAsIDBdLFxuLy8gKTtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gIGRhaWx5VGVtcGVyYXR1cmVzKFs4OSwgNjIsIDcwLCA1OCwgNDcsIDQ3LCA0NiwgNzYsIDEwMCwgNzBdKSxcbiAgWzgsIDEsIDUsIDQsIDMsIDIsIDEsIDEsIDAsIDBdXG4pO1xuIl19
