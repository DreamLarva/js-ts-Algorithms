"use strict";
/*
给定一个可包含重复数字的序列，返回所有不重复的全排列。

示例:

输入: [1,1,2]
输出:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/permutations-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    // 基本同 46.全排列.ts
    // 额外的需要排除重复的项
    // 先排序
    nums.sort();
    const result = [];
    const map = {};
    backtrack(nums.length - 1, nums, 0);
    return result;
    function backtrack(n, nums, first) {
        // 交换的位置 已经没有了 返回结果
        if (n === first) {
            return result.push(nums);
        }
        /**
         * 这里不 会回溯 直接 在上一层的循环上 进行
         * 最终的效果是 每次 将一个不同的 数放到 first 位 上 然后后面的位递归 自己玩
         * 原因是 全排列I 中 由于值都不同 所以每个交换都是有意义的 相当于放到 第一位
         * 并且由于 开始是排序的 所以 交换后 i 位 之后的也是排序的
         * */
        for (let i = first; i <= n; i++) {
            // 排除相同 结果 只保留第一个
            if (i != first && nums[first] == nums[i])
                continue;
            // console.log(`start${first}`, nums, "swap", nums[first], nums[i]);
            [nums[first], nums[i]] = [nums[i], nums[first]];
            /**
             * 注意之后的代码
             * 1.每次传递 已经交换过位置的拷贝?
             * 2.并不需要回溯之前的状态?
             * */
            // 交换下一个位置的值
            backtrack(n, nums.slice(), first + 1);
        }
    }
};
const assert_1 = __importDefault(require("assert"));
const lodash_1 = __importDefault(require("lodash"));
assert_1.default.deepStrictEqual(permuteUnique([1, 2, 3]), [
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1]
]);
assert_1.default.deepStrictEqual(permuteUnique([1, 1, 2]), [
    [1, 1, 2],
    [1, 2, 1],
    [2, 1, 1],
]);
const _46____1 = require("./46.\u5168\u6392\u5217");
const Benchmark = require("benchmark");
const suite = new Benchmark.Suite;
/*
suite
    .add("backtrack", function () {
        permute([1, 2, 3]);
    })
    .add("copy", function () {
        permuteUnique([1, 2, 3]);
    })

    // add listeners
    .on("cycle", function (event: any) {
        console.log(String(event.target));
    })
    .on("complete", function (this: any) {
        console.log("Fastest is " + this.filter("fastest").map("name"));
    })
    // run async
    .run({async: false});
*/
const sample = lodash_1.default.range(0, 6);
suite
    .add("backtrack", function () {
    _46____1.permute(sample);
})
    .add("copy", function () {
    permuteUnique(sample);
})
    // add listeners
    .on("cycle", function (event) {
    console.log(String(event.target));
})
    .on("complete", function () {
    console.log("Fastest is " + this.filter("fastest").map("name"));
})
    // run async
    .run({ async: false });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDcu5YWo5o6S5YiXSUkuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzQ3LuWFqOaOkuWIl0lJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztJQWdCSTs7Ozs7QUFFSjs7O0dBR0c7QUFDSCxJQUFJLGFBQWEsR0FBRyxVQUFVLElBQWM7SUFDeEMsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFFZCxNQUFNO0lBQ04sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBRVosTUFBTSxNQUFNLEdBQWUsRUFBRSxDQUFDO0lBQzlCLE1BQU0sR0FBRyxHQUE4QixFQUFFLENBQUM7SUFDMUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwQyxPQUFPLE1BQU0sQ0FBQztJQUVkLFNBQVMsU0FBUyxDQUFDLENBQVMsRUFBRSxJQUFjLEVBQUUsS0FBYTtRQUN2RCxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFO1lBQ2IsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVCO1FBRUQ7Ozs7O2FBS0s7UUFDTCxLQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBRTdCLGlCQUFpQjtZQUNqQixJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQUUsU0FBUztZQUVuRCxvRUFBb0U7WUFDcEUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFFaEQ7Ozs7aUJBSUs7WUFDTCxZQUFZO1lBQ1osU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3pDO0lBQ0wsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUdGLG9EQUE0QjtBQUU1QixvREFBdUI7QUFHdkIsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDeEI7SUFDSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDWixDQUNKLENBQUM7QUFHRixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUN4QjtJQUNJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUNaLENBQ0osQ0FBQztBQUtGLG9EQUFpQztBQUNqQyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDdkMsTUFBTSxLQUFLLEdBQUcsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDO0FBRWxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkU7QUFHRixNQUFNLE1BQU0sR0FBRyxnQkFBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUIsS0FBSztLQUNBLEdBQUcsQ0FBQyxXQUFXLEVBQUU7SUFDZCxnQkFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3BCLENBQUMsQ0FBQztLQUNELEdBQUcsQ0FBQyxNQUFNLEVBQUU7SUFDVCxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDMUIsQ0FBQyxDQUFDO0lBRUYsZ0JBQWdCO0tBQ2YsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVLEtBQVU7SUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDdEMsQ0FBQyxDQUFDO0tBQ0QsRUFBRSxDQUFDLFVBQVUsRUFBRTtJQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDcEUsQ0FBQyxDQUFDO0lBQ0YsWUFBWTtLQUNYLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a5LiA5Liq5Y+v5YyF5ZCr6YeN5aSN5pWw5a2X55qE5bqP5YiX77yM6L+U5Zue5omA5pyJ5LiN6YeN5aSN55qE5YWo5o6S5YiX44CCXHJcblxyXG7npLrkvos6XHJcblxyXG7ovpPlhaU6IFsxLDEsMl1cclxu6L6T5Ye6OlxyXG5bXHJcbiAgWzEsMSwyXSxcclxuICBbMSwyLDFdLFxyXG4gIFsyLDEsMV1cclxuXVxyXG5cclxu5p2l5rqQ77ya5Yqb5omj77yITGVldENvZGXvvIlcclxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvcGVybXV0YXRpb25zLWlpXHJcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxyXG4qICovXHJcblxyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtc1xyXG4gKiBAcmV0dXJuIHtudW1iZXJbXVtdfVxyXG4gKi9cclxudmFyIHBlcm11dGVVbmlxdWUgPSBmdW5jdGlvbiAobnVtczogbnVtYmVyW10pIHtcclxuICAgIC8vIOWfuuacrOWQjCA0Ni7lhajmjpLliJcudHNcclxuICAgIC8vIOmineWklueahOmcgOimgeaOkumZpOmHjeWkjeeahOmhuVxyXG5cclxuICAgIC8vIOWFiOaOkuW6j1xyXG4gICAgbnVtcy5zb3J0KCk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0OiBudW1iZXJbXVtdID0gW107XHJcbiAgICBjb25zdCBtYXA6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuICAgIGJhY2t0cmFjayhudW1zLmxlbmd0aCAtIDEsIG51bXMsIDApO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuXHJcbiAgICBmdW5jdGlvbiBiYWNrdHJhY2sobjogbnVtYmVyLCBudW1zOiBudW1iZXJbXSwgZmlyc3Q6IG51bWJlcikge1xyXG4gICAgICAgIC8vIOS6pOaNoueahOS9jee9riDlt7Lnu4/msqHmnInkuoYg6L+U5Zue57uT5p6cXHJcbiAgICAgICAgaWYgKG4gPT09IGZpcnN0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQucHVzaChudW1zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOi/memHjOS4jSDkvJrlm57muq8g55u05o6lIOWcqOS4iuS4gOWxgueahOW+queOr+S4iiDov5vooYxcclxuICAgICAgICAgKiDmnIDnu4jnmoTmlYjmnpzmmK8g5q+P5qyhIOWwhuS4gOS4quS4jeWQjOeahCDmlbDmlL7liLAgZmlyc3Qg5L2NIOS4iiDnhLblkI7lkI7pnaLnmoTkvY3pgJLlvZIg6Ieq5bex546pXHJcbiAgICAgICAgICog5Y6f5Zug5pivIOWFqOaOkuWIl0kg5LitIOeUseS6juWAvOmDveS4jeWQjCDmiYDku6Xmr4/kuKrkuqTmjaLpg73mmK/mnInmhI/kuYnnmoQg55u45b2T5LqO5pS+5YiwIOesrOS4gOS9jVxyXG4gICAgICAgICAqIOW5tuS4lOeUseS6jiDlvIDlp4vmmK/mjpLluo/nmoQg5omA5LulIOS6pOaNouWQjiBpIOS9jSDkuYvlkI7nmoTkuZ/mmK/mjpLluo/nmoRcclxuICAgICAgICAgKiAqL1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBmaXJzdDsgaSA8PSBuOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIC8vIOaOkumZpOebuOWQjCDnu5Pmnpwg5Y+q5L+d55WZ56ys5LiA5LiqXHJcbiAgICAgICAgICAgIGlmIChpICE9IGZpcnN0ICYmIG51bXNbZmlyc3RdID09IG51bXNbaV0pIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYHN0YXJ0JHtmaXJzdH1gLCBudW1zLCBcInN3YXBcIiwgbnVtc1tmaXJzdF0sIG51bXNbaV0pO1xyXG4gICAgICAgICAgICBbbnVtc1tmaXJzdF0sIG51bXNbaV1dID0gW251bXNbaV0sIG51bXNbZmlyc3RdXTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDms6jmhI/kuYvlkI7nmoTku6PnoIFcclxuICAgICAgICAgICAgICogMS7mr4/mrKHkvKDpgJIg5bey57uP5Lqk5o2i6L+H5L2N572u55qE5ou36LSdP1xyXG4gICAgICAgICAgICAgKiAyLuW5tuS4jemcgOimgeWbnua6r+S5i+WJjeeahOeKtuaAgT9cclxuICAgICAgICAgICAgICogKi9cclxuICAgICAgICAgICAgLy8g5Lqk5o2i5LiL5LiA5Liq5L2N572u55qE5YC8XHJcbiAgICAgICAgICAgIGJhY2t0cmFjayhuLCBudW1zLnNsaWNlKCksIGZpcnN0ICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5pbXBvcnQge3NvcnREZWVwfSBmcm9tIFwiLi4vdXRpbC9hc3NlcnRIZWxwZXJcIjtcclxuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuXHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbiAgICBwZXJtdXRlVW5pcXVlKFsxLCAyLCAzXSksXHJcbiAgICBbXHJcbiAgICAgICAgWzEsIDIsIDNdLFxyXG4gICAgICAgIFsxLCAzLCAyXSxcclxuICAgICAgICBbMiwgMSwgM10sXHJcbiAgICAgICAgWzIsIDMsIDFdLFxyXG4gICAgICAgIFszLCAxLCAyXSxcclxuICAgICAgICBbMywgMiwgMV1cclxuICAgIF0sXHJcbik7XHJcblxyXG5cclxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcclxuICAgIHBlcm11dGVVbmlxdWUoWzEsIDEsIDJdKSxcclxuICAgIFtcclxuICAgICAgICBbMSwgMSwgMl0sXHJcbiAgICAgICAgWzEsIDIsIDFdLFxyXG4gICAgICAgIFsyLCAxLCAxXSxcclxuICAgIF0sXHJcbik7XHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQge3Blcm11dGV9IGZyb20gXCIuLzQ2LuWFqOaOkuWIl1wiO1xyXG5jb25zdCBCZW5jaG1hcmsgPSByZXF1aXJlKFwiYmVuY2htYXJrXCIpO1xyXG5jb25zdCBzdWl0ZSA9IG5ldyBCZW5jaG1hcmsuU3VpdGU7XHJcblxyXG4vKlxyXG5zdWl0ZVxyXG4gICAgLmFkZChcImJhY2t0cmFja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcGVybXV0ZShbMSwgMiwgM10pO1xyXG4gICAgfSlcclxuICAgIC5hZGQoXCJjb3B5XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBwZXJtdXRlVW5pcXVlKFsxLCAyLCAzXSk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIGFkZCBsaXN0ZW5lcnNcclxuICAgIC5vbihcImN5Y2xlXCIsIGZ1bmN0aW9uIChldmVudDogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coU3RyaW5nKGV2ZW50LnRhcmdldCkpO1xyXG4gICAgfSlcclxuICAgIC5vbihcImNvbXBsZXRlXCIsIGZ1bmN0aW9uICh0aGlzOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZhc3Rlc3QgaXMgXCIgKyB0aGlzLmZpbHRlcihcImZhc3Rlc3RcIikubWFwKFwibmFtZVwiKSk7XHJcbiAgICB9KVxyXG4gICAgLy8gcnVuIGFzeW5jXHJcbiAgICAucnVuKHthc3luYzogZmFsc2V9KTtcclxuKi9cclxuXHJcblxyXG5jb25zdCBzYW1wbGUgPSBfLnJhbmdlKDAsNik7XHJcbnN1aXRlXHJcbiAgICAuYWRkKFwiYmFja3RyYWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBwZXJtdXRlKHNhbXBsZSk7XHJcbiAgICB9KVxyXG4gICAgLmFkZChcImNvcHlcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHBlcm11dGVVbmlxdWUoc2FtcGxlKTtcclxuICAgIH0pXHJcblxyXG4gICAgLy8gYWRkIGxpc3RlbmVyc1xyXG4gICAgLm9uKFwiY3ljbGVcIiwgZnVuY3Rpb24gKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhTdHJpbmcoZXZlbnQudGFyZ2V0KSk7XHJcbiAgICB9KVxyXG4gICAgLm9uKFwiY29tcGxldGVcIiwgZnVuY3Rpb24gKHRoaXM6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmFzdGVzdCBpcyBcIiArIHRoaXMuZmlsdGVyKFwiZmFzdGVzdFwiKS5tYXAoXCJuYW1lXCIpKTtcclxuICAgIH0pXHJcbiAgICAvLyBydW4gYXN5bmNcclxuICAgIC5ydW4oe2FzeW5jOiBmYWxzZX0pO1xyXG4iXX0=