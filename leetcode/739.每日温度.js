"use strict";
/*
根据每日 气温 列表，请重新生成一个列表，对应位置的输入是你需要再等待多久温度才会升高的天数。如果之后都不会升高，请输入 0 来代替。

例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的都是 [30, 100] 范围内的整数。
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
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
assert_1.default.deepStrictEqual(dailyTemperatures([89, 62, 70, 58, 47, 47, 46, 76, 100, 70]), [8, 1, 5, 4, 3, 2, 1, 1, 0, 0]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzM5Luavj+aXpea4qeW6pi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNzM5Luavj+aXpea4qeW6pi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztJQU1JOzs7OztBQUVKOzs7R0FHRztBQUNILElBQUksaUJBQWlCLEdBQUcsVUFBVSxDQUFXO0lBQ3pDLE1BQU07SUFDTixNQUFNLEtBQUssR0FBYSxFQUFFLENBQUM7SUFDM0IsTUFBTSxNQUFNLEdBQWEsRUFBRSxDQUFDO0lBQzVCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBRS9CLDJDQUEyQztRQUMzQyxPQUFPLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3RELE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUcsQ0FBQztZQUMvQix5QkFBeUI7WUFDekIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUM7U0FDckM7UUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2pCO0lBRUQsc0JBQXNCO0lBQ3RCLEtBQUssTUFBTSxLQUFLLElBQUksS0FBSyxFQUFFO1FBQ3ZCLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDckI7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUVsQixDQUFDLENBQUM7QUFHRixvREFBNEI7QUFFNUIsMEJBQTBCO0FBQzFCLDJEQUEyRDtBQUMzRCxnQ0FBZ0M7QUFDaEMsS0FBSztBQUNMLGdCQUFNLENBQUMsZUFBZSxDQUNsQixpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQzVELENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ2pDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7moLnmja7mr4/ml6Ug5rCU5ripIOWIl+ihqO+8jOivt+mHjeaWsOeUn+aIkOS4gOS4quWIl+ihqO+8jOWvueW6lOS9jee9rueahOi+k+WFpeaYr+S9oOmcgOimgeWGjeetieW+heWkmuS5hea4qeW6puaJjeS8muWNh+mrmOeahOWkqeaVsOOAguWmguaenOS5i+WQjumDveS4jeS8muWNh+mrmO+8jOivt+i+k+WFpSAwIOadpeS7o+abv+OAglxyXG5cclxu5L6L5aaC77yM57uZ5a6a5LiA5Liq5YiX6KGoIHRlbXBlcmF0dXJlcyA9IFs3MywgNzQsIDc1LCA3MSwgNjksIDcyLCA3NiwgNzNd77yM5L2g55qE6L6T5Ye65bqU6K+l5pivIFsxLCAxLCA0LCAyLCAxLCAxLCAwLCAwXeOAglxyXG5cclxu5o+Q56S677ya5rCU5ripIOWIl+ihqOmVv+W6pueahOiMg+WbtOaYryBbMSwgMzAwMDBd44CC5q+P5Liq5rCU5rip55qE5YC855qE6YO95pivIFszMCwgMTAwXSDojIPlm7TlhoXnmoTmlbTmlbDjgIJcclxuKiAqL1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyW119IFRcclxuICogQHJldHVybiB7bnVtYmVyW119XHJcbiAqL1xyXG52YXIgZGFpbHlUZW1wZXJhdHVyZXMgPSBmdW5jdGlvbiAoVDogbnVtYmVyW10pIHtcclxuICAgIC8vIOS9v+eUqOagiFxyXG4gICAgY29uc3Qgc3RhY2s6IG51bWJlcltdID0gW107XHJcbiAgICBjb25zdCByZXN1bHQ6IG51bWJlcltdID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IFQubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgLy8g5aaC5p6c5qCI6aG255qE5YC8IDwg5YeG5aSH5YWl5qCI55qE5YC8ICjms6jmhI/kuI3og73nrYnkuo4g5Zug5Li6IOS4gOagt+eahOWAvCDkvp3nhLbkuI3nrpfpgJLlop7llYopXHJcbiAgICAgICAgd2hpbGUgKHN0YWNrLmxlbmd0aCAmJiBUW3N0YWNrW3N0YWNrLmxlbmd0aCAtIDFdXSA8IFRbaV0pIHtcclxuICAgICAgICAgICAgY29uc3QgdG9wX2luZGV4ID0gc3RhY2sucG9wKCkhO1xyXG4gICAgICAgICAgICAvLyDnu5PmnpzlsLHmmK8g5YWl5qCI6aKd5YC855qE57Si5byVIOWHj+WOuyDmoIjlhoXlgLznmoTntKLlvJVcclxuICAgICAgICAgICAgcmVzdWx0W3RvcF9pbmRleF0gPSBpIC0gdG9wX2luZGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdGFjay5wdXNoKGkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWmguaenOagiOWGhSDov5jmnInlgLwg6K+05piO5LmL5ZCO5YaN5Lmf5rKh5pyJ6YCS5aKeXHJcbiAgICBmb3IgKGNvbnN0IGluZGV4IG9mIHN0YWNrKSB7XHJcbiAgICAgICAgcmVzdWx0W2luZGV4XSA9IDA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG5cclxufTtcclxuXHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbi8vIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbi8vICAgICBkYWlseVRlbXBlcmF0dXJlcyhbNzMsIDc0LCA3NSwgNzEsIDY5LCA3MiwgNzYsIDczXSksXHJcbi8vICAgICBbMSwgMSwgNCwgMiwgMSwgMSwgMCwgMF0sXHJcbi8vICk7XHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbiAgICBkYWlseVRlbXBlcmF0dXJlcyhbODksIDYyLCA3MCwgNTgsIDQ3LCA0NywgNDYsIDc2LCAxMDAsIDcwXSksXHJcbiAgICBbOCwgMSwgNSwgNCwgMywgMiwgMSwgMSwgMCwgMF0sXHJcbik7XHJcbiJdfQ==