"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定长度为 2n 的数组, 你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从1 到 n 的 min(ai, bi) 总和最大。

示例 1:

输入: [1,4,3,2]

输出: 4
解释: n 等于 2, 最大总和为 4 = min(1, 2) + min(3, 4).
提示:

n 是正整数,范围在 [1, 10000].
数组中的元素范围在 [-10000, 10000].

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/array-partition-i
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 双指针 怎么做啊?
 * */
var arrayPairSum = function (nums) {
    nums.sort((a, b) => a - b);
    let result = 0;
    for (let i = 0; i < nums.length; i += 2) {
        result += nums[i];
    }
    return result;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(arrayPairSum([1, 4, 3, 2]), 4);
assert_1.default.strictEqual(arrayPairSum([6214, -2290, 2833, -7908]), -5075);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTYxLuaVsOe7hOaLhuWIhkkuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzU2MS7mlbDnu4Tmi4bliIZJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUJJO0FBQ0o7OztHQUdHO0FBQ0g7O0tBRUs7QUFDTCxJQUFJLFlBQVksR0FBRyxVQUFVLElBQWM7SUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMzQixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDZixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3ZDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbkI7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUM7QUFDRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNsRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a6ZW/5bqm5Li6wqAybsKg55qE5pWw57uELCDkvaDnmoTku7vliqHmmK/lsIbov5nkupvmlbDliIbmiJDCoG4g5a+5LCDkvovlpoIgKGExLCBiMSksIChhMiwgYjIpLCAuLi4sIChhbiwgYm4pIO+8jOS9v+W+l+S7jjEg5YiwwqBuIOeahCBtaW4oYWksIGJpKSDmgLvlkozmnIDlpKfjgIJcclxuXHJcbuekuuS+iyAxOlxyXG5cclxu6L6T5YWlOiBbMSw0LDMsMl1cclxuXHJcbui+k+WHujogNFxyXG7op6Pph4o6IG4g562J5LqOIDIsIOacgOWkp+aAu+WSjOS4uiA0ID0gbWluKDEsIDIpICsgbWluKDMsIDQpLlxyXG7mj5DnpLo6XHJcblxyXG5uwqDmmK/mraPmlbTmlbAs6IyD5Zu05ZyoIFsxLCAxMDAwMF0uXHJcbuaVsOe7hOS4reeahOWFg+e0oOiMg+WbtOWcqCBbLTEwMDAwLCAxMDAwMF0uXHJcblxyXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxyXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9hcnJheS1wYXJ0aXRpb24taVxyXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcclxuKiAqL1xyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtc1xyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAqL1xyXG4vKipcclxuICog5Y+M5oyH6ZKIIOaAjuS5iOWBmuWVij9cclxuICogKi9cclxudmFyIGFycmF5UGFpclN1bSA9IGZ1bmN0aW9uIChudW1zOiBudW1iZXJbXSkge1xyXG4gIG51bXMuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xyXG4gIGxldCByZXN1bHQgPSAwO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtcy5sZW5ndGg7IGkgKz0gMikge1xyXG4gICAgcmVzdWx0ICs9IG51bXNbaV07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChhcnJheVBhaXJTdW0oWzEsIDQsIDMsIDJdKSwgNCk7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChhcnJheVBhaXJTdW0oWzYyMTQsIC0yMjkwLCAyODMzLCAtNzkwOF0pLCAtNTA3NSk7XHJcbiJdfQ==