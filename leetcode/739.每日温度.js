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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzM5Luavj+aXpea4qeW6pi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNzM5Luavj+aXpea4qeW6pi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztJQU1JOzs7OztBQUVKOzs7R0FHRztBQUNILElBQUksaUJBQWlCLEdBQUcsVUFBVSxDQUFXO0lBQzNDLE1BQU07SUFDTixNQUFNLEtBQUssR0FBYSxFQUFFLENBQUM7SUFDM0IsTUFBTSxNQUFNLEdBQWEsRUFBRSxDQUFDO0lBQzVCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2pDLDJDQUEyQztRQUMzQyxPQUFPLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3hELE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUcsQ0FBQztZQUMvQix5QkFBeUI7WUFDekIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUM7U0FDbkM7UUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2Y7SUFFRCxzQkFBc0I7SUFDdEIsS0FBSyxNQUFNLEtBQUssSUFBSSxLQUFLLEVBQUU7UUFDekIsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNuQjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QiwwQkFBMEI7QUFDMUIsMkRBQTJEO0FBQzNELGdDQUFnQztBQUNoQyxLQUFLO0FBQ0wsZ0JBQU0sQ0FBQyxlQUFlLENBQ3BCLGlCQUFpQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFDNUQsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDL0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbuagueaNruavj+aXpSDmsJTmuKkg5YiX6KGo77yM6K+36YeN5paw55Sf5oiQ5LiA5Liq5YiX6KGo77yM5a+55bqU5L2N572u55qE6L6T5YWl5piv5L2g6ZyA6KaB5YaN562J5b6F5aSa5LmF5rip5bqm5omN5Lya5Y2H6auY55qE5aSp5pWw44CC5aaC5p6c5LmL5ZCO6YO95LiN5Lya5Y2H6auY77yM6K+36L6T5YWlIDAg5p2l5Luj5pu/44CCXHJcblxyXG7kvovlpoLvvIznu5nlrprkuIDkuKrliJfooaggdGVtcGVyYXR1cmVzID0gWzczLCA3NCwgNzUsIDcxLCA2OSwgNzIsIDc2LCA3M13vvIzkvaDnmoTovpPlh7rlupTor6XmmK8gWzEsIDEsIDQsIDIsIDEsIDEsIDAsIDBd44CCXHJcblxyXG7mj5DnpLrvvJrmsJTmuKkg5YiX6KGo6ZW/5bqm55qE6IyD5Zu05pivIFsxLCAzMDAwMF3jgILmr4/kuKrmsJTmuKnnmoTlgLznmoTpg73mmK8gWzMwLCAxMDBdIOiMg+WbtOWGheeahOaVtOaVsOOAglxyXG4qICovXHJcblxyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJbXX0gVFxyXG4gKiBAcmV0dXJuIHtudW1iZXJbXX1cclxuICovXHJcbnZhciBkYWlseVRlbXBlcmF0dXJlcyA9IGZ1bmN0aW9uIChUOiBudW1iZXJbXSkge1xyXG4gIC8vIOS9v+eUqOagiFxyXG4gIGNvbnN0IHN0YWNrOiBudW1iZXJbXSA9IFtdO1xyXG4gIGNvbnN0IHJlc3VsdDogbnVtYmVyW10gPSBbXTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IFQubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vIOWmguaenOagiOmhtueahOWAvCA8IOWHhuWkh+WFpeagiOeahOWAvCAo5rOo5oSP5LiN6IO9562J5LqOIOWboOS4uiDkuIDmoLfnmoTlgLwg5L6d54S25LiN566X6YCS5aKe5ZWKKVxyXG4gICAgd2hpbGUgKHN0YWNrLmxlbmd0aCAmJiBUW3N0YWNrW3N0YWNrLmxlbmd0aCAtIDFdXSA8IFRbaV0pIHtcclxuICAgICAgY29uc3QgdG9wX2luZGV4ID0gc3RhY2sucG9wKCkhO1xyXG4gICAgICAvLyDnu5PmnpzlsLHmmK8g5YWl5qCI6aKd5YC855qE57Si5byVIOWHj+WOuyDmoIjlhoXlgLznmoTntKLlvJVcclxuICAgICAgcmVzdWx0W3RvcF9pbmRleF0gPSBpIC0gdG9wX2luZGV4O1xyXG4gICAgfVxyXG4gICAgc3RhY2sucHVzaChpKTtcclxuICB9XHJcblxyXG4gIC8vIOWmguaenOagiOWGhSDov5jmnInlgLwg6K+05piO5LmL5ZCO5YaN5Lmf5rKh5pyJ6YCS5aKeXHJcbiAgZm9yIChjb25zdCBpbmRleCBvZiBzdGFjaykge1xyXG4gICAgcmVzdWx0W2luZGV4XSA9IDA7XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbi8vIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbi8vICAgICBkYWlseVRlbXBlcmF0dXJlcyhbNzMsIDc0LCA3NSwgNzEsIDY5LCA3MiwgNzYsIDczXSksXHJcbi8vICAgICBbMSwgMSwgNCwgMiwgMSwgMSwgMCwgMF0sXHJcbi8vICk7XHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbiAgZGFpbHlUZW1wZXJhdHVyZXMoWzg5LCA2MiwgNzAsIDU4LCA0NywgNDcsIDQ2LCA3NiwgMTAwLCA3MF0pLFxyXG4gIFs4LCAxLCA1LCA0LCAzLCAyLCAxLCAxLCAwLCAwXVxyXG4pO1xyXG4iXX0=