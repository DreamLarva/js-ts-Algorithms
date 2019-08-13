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
    // 先排序 ?
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDcu5YWo5o6S5YiXSUkuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzQ3LuWFqOaOkuWIl0lJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztJQWdCSTs7Ozs7QUFFSjs7O0dBR0c7QUFDSCxJQUFJLGFBQWEsR0FBRyxVQUFVLElBQWM7SUFDeEMsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFFZCxRQUFRO0lBQ1IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBRVosTUFBTSxNQUFNLEdBQWUsRUFBRSxDQUFDO0lBQzlCLE1BQU0sR0FBRyxHQUE4QixFQUFFLENBQUM7SUFDMUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwQyxPQUFPLE1BQU0sQ0FBQztJQUVkLFNBQVMsU0FBUyxDQUFDLENBQVMsRUFBRSxJQUFjLEVBQUUsS0FBYTtRQUN2RCxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFO1lBQ2IsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVCO1FBRUQ7Ozs7YUFJSztRQUNMLEtBQUssSUFBSSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFFN0IsaUJBQWlCO1lBQ2pCLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFBRSxTQUFTO1lBRW5ELG9FQUFvRTtZQUNwRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUVoRDs7OztpQkFJSztZQUNMLFlBQVk7WUFDWixTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDekM7SUFDTCxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBR0Ysb0RBQTRCO0FBRTVCLG9EQUF1QjtBQUd2QixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUN4QjtJQUNJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUNaLENBQ0osQ0FBQztBQUdGLGdCQUFNLENBQUMsZUFBZSxDQUNsQixhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQ3hCO0lBQ0ksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0NBQ1osQ0FDSixDQUFDO0FBS0Ysb0RBQWlDO0FBQ2pDLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN2QyxNQUFNLEtBQUssR0FBRyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUM7QUFFbEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWtCRTtBQUdGLE1BQU0sTUFBTSxHQUFHLGdCQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztBQUM1QixLQUFLO0tBQ0EsR0FBRyxDQUFDLFdBQVcsRUFBRTtJQUNkLGdCQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEIsQ0FBQyxDQUFDO0tBQ0QsR0FBRyxDQUFDLE1BQU0sRUFBRTtJQUNULGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMxQixDQUFDLENBQUM7SUFFRixnQkFBZ0I7S0FDZixFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVUsS0FBVTtJQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUN0QyxDQUFDLENBQUM7S0FDRCxFQUFFLENBQUMsVUFBVSxFQUFFO0lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNwRSxDQUFDLENBQUM7SUFDRixZQUFZO0tBQ1gsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprkuIDkuKrlj6/ljIXlkKvph43lpI3mlbDlrZfnmoTluo/liJfvvIzov5Tlm57miYDmnInkuI3ph43lpI3nmoTlhajmjpLliJfjgIJcclxuXHJcbuekuuS+izpcclxuXHJcbui+k+WFpTogWzEsMSwyXVxyXG7ovpPlh7o6XHJcbltcclxuICBbMSwxLDJdLFxyXG4gIFsxLDIsMV0sXHJcbiAgWzIsMSwxXVxyXG5dXHJcblxyXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxyXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9wZXJtdXRhdGlvbnMtaWlcclxu6JGX5L2c5p2D5b2S6aKG5omj572R57uc5omA5pyJ44CC5ZWG5Lia6L2s6L296K+36IGU57O75a6Y5pa55o6I5p2D77yM6Z2e5ZWG5Lia6L2s6L296K+35rOo5piO5Ye65aSE44CCXHJcbiogKi9cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXHJcbiAqIEByZXR1cm4ge251bWJlcltdW119XHJcbiAqL1xyXG52YXIgcGVybXV0ZVVuaXF1ZSA9IGZ1bmN0aW9uIChudW1zOiBudW1iZXJbXSkge1xyXG4gICAgLy8g5Z+65pys5ZCMIDQ2LuWFqOaOkuWIly50c1xyXG4gICAgLy8g6aKd5aSW55qE6ZyA6KaB5o6S6Zmk6YeN5aSN55qE6aG5XHJcblxyXG4gICAgLy8g5YWI5o6S5bqPID9cclxuICAgIG51bXMuc29ydCgpO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdDogbnVtYmVyW11bXSA9IFtdO1xyXG4gICAgY29uc3QgbWFwOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcbiAgICBiYWNrdHJhY2sobnVtcy5sZW5ndGggLSAxLCBudW1zLCAwKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgZnVuY3Rpb24gYmFja3RyYWNrKG46IG51bWJlciwgbnVtczogbnVtYmVyW10sIGZpcnN0OiBudW1iZXIpIHtcclxuICAgICAgICAvLyDkuqTmjaLnmoTkvY3nva4g5bey57uP5rKh5pyJ5LqGIOi/lOWbnue7k+aenFxyXG4gICAgICAgIGlmIChuID09PSBmaXJzdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LnB1c2gobnVtcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDov5nph4zkuI0g5Lya5Zue5rqvIOebtOaOpSDlnKjkuIrkuIDlsYLnmoTlvqrnjq/kuIog6L+b6KGMXHJcbiAgICAgICAgICog5pyA57uI55qE5pWI5p6c5pivIOavj+asoSDlsIbkuIDkuKrkuI3lkIznmoQg5pWw5pS+5YiwIGZpcnN0IOS9jSDkuIog54S25ZCO5ZCO6Z2i55qE5L2N6YCS5b2SIOiHquW3seeOqVxyXG4gICAgICAgICAqIOWOn+WboOaYryDlhajmjpLliJdJIOS4rSDnlLHkuo7lgLzpg73kuI3lkIwg5omA5Lul5q+P5Liq5Lqk5o2i6YO95piv5pyJ5oSP5LmJ55qEIOebuOW9k+S6juaUvuWIsCDnrKzkuIDkvY1cclxuICAgICAgICAgKiAqL1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBmaXJzdDsgaSA8PSBuOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIC8vIOaOkumZpOebuOWQjCDnu5Pmnpwg5Y+q5L+d55WZ56ys5LiA5LiqXHJcbiAgICAgICAgICAgIGlmIChpICE9IGZpcnN0ICYmIG51bXNbZmlyc3RdID09IG51bXNbaV0pIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYHN0YXJ0JHtmaXJzdH1gLCBudW1zLCBcInN3YXBcIiwgbnVtc1tmaXJzdF0sIG51bXNbaV0pO1xyXG4gICAgICAgICAgICBbbnVtc1tmaXJzdF0sIG51bXNbaV1dID0gW251bXNbaV0sIG51bXNbZmlyc3RdXTtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiDms6jmhI/kuYvlkI7nmoTku6PnoIFcclxuICAgICAgICAgICAgICogMS7mr4/mrKHkvKDpgJIg5bey57uP5Lqk5o2i6L+H5L2N572u55qE5ou36LSdP1xyXG4gICAgICAgICAgICAgKiAyLuW5tuS4jemcgOimgeWbnua6r+S5i+WJjeeahOeKtuaAgT9cclxuICAgICAgICAgICAgICogKi9cclxuICAgICAgICAgICAgLy8g5Lqk5o2i5LiL5LiA5Liq5L2N572u55qE5YC8XHJcbiAgICAgICAgICAgIGJhY2t0cmFjayhuLCBudW1zLnNsaWNlKCksIGZpcnN0ICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5pbXBvcnQge3NvcnREZWVwfSBmcm9tIFwiLi4vdXRpbC9hc3NlcnRIZWxwZXJcIjtcclxuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuXHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbiAgICBwZXJtdXRlVW5pcXVlKFsxLCAyLCAzXSksXHJcbiAgICBbXHJcbiAgICAgICAgWzEsIDIsIDNdLFxyXG4gICAgICAgIFsxLCAzLCAyXSxcclxuICAgICAgICBbMiwgMSwgM10sXHJcbiAgICAgICAgWzIsIDMsIDFdLFxyXG4gICAgICAgIFszLCAxLCAyXSxcclxuICAgICAgICBbMywgMiwgMV1cclxuICAgIF0sXHJcbik7XHJcblxyXG5cclxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcclxuICAgIHBlcm11dGVVbmlxdWUoWzEsIDEsIDJdKSxcclxuICAgIFtcclxuICAgICAgICBbMSwgMSwgMl0sXHJcbiAgICAgICAgWzEsIDIsIDFdLFxyXG4gICAgICAgIFsyLCAxLCAxXSxcclxuICAgIF0sXHJcbik7XHJcblxyXG5cclxuXHJcblxyXG5pbXBvcnQge3Blcm11dGV9IGZyb20gXCIuLzQ2LuWFqOaOkuWIl1wiO1xyXG5jb25zdCBCZW5jaG1hcmsgPSByZXF1aXJlKFwiYmVuY2htYXJrXCIpO1xyXG5jb25zdCBzdWl0ZSA9IG5ldyBCZW5jaG1hcmsuU3VpdGU7XHJcblxyXG4vKlxyXG5zdWl0ZVxyXG4gICAgLmFkZChcImJhY2t0cmFja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcGVybXV0ZShbMSwgMiwgM10pO1xyXG4gICAgfSlcclxuICAgIC5hZGQoXCJjb3B5XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBwZXJtdXRlVW5pcXVlKFsxLCAyLCAzXSk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIGFkZCBsaXN0ZW5lcnNcclxuICAgIC5vbihcImN5Y2xlXCIsIGZ1bmN0aW9uIChldmVudDogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coU3RyaW5nKGV2ZW50LnRhcmdldCkpO1xyXG4gICAgfSlcclxuICAgIC5vbihcImNvbXBsZXRlXCIsIGZ1bmN0aW9uICh0aGlzOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZhc3Rlc3QgaXMgXCIgKyB0aGlzLmZpbHRlcihcImZhc3Rlc3RcIikubWFwKFwibmFtZVwiKSk7XHJcbiAgICB9KVxyXG4gICAgLy8gcnVuIGFzeW5jXHJcbiAgICAucnVuKHthc3luYzogZmFsc2V9KTtcclxuKi9cclxuXHJcblxyXG5jb25zdCBzYW1wbGUgPSBfLnJhbmdlKDAsNik7XHJcbnN1aXRlXHJcbiAgICAuYWRkKFwiYmFja3RyYWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBwZXJtdXRlKHNhbXBsZSk7XHJcbiAgICB9KVxyXG4gICAgLmFkZChcImNvcHlcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHBlcm11dGVVbmlxdWUoc2FtcGxlKTtcclxuICAgIH0pXHJcblxyXG4gICAgLy8gYWRkIGxpc3RlbmVyc1xyXG4gICAgLm9uKFwiY3ljbGVcIiwgZnVuY3Rpb24gKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhTdHJpbmcoZXZlbnQudGFyZ2V0KSk7XHJcbiAgICB9KVxyXG4gICAgLm9uKFwiY29tcGxldGVcIiwgZnVuY3Rpb24gKHRoaXM6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmFzdGVzdCBpcyBcIiArIHRoaXMuZmlsdGVyKFwiZmFzdGVzdFwiKS5tYXAoXCJuYW1lXCIpKTtcclxuICAgIH0pXHJcbiAgICAvLyBydW4gYXN5bmNcclxuICAgIC5ydW4oe2FzeW5jOiBmYWxzZX0pO1xyXG4iXX0=