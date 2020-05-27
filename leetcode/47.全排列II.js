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
             *
             * 是因为 之后的值 依然保留了排序的状态 回到之前的状态 一定破坏排序
             * 而破坏了排序的状态的 是没有意义的
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
    [3, 2, 1],
]);
assert_1.default.deepStrictEqual(permuteUnique([1, 1, 2]), [
    [1, 1, 2],
    [1, 2, 1],
    [2, 1, 1],
]);
const _46____1 = require("./46.\u5168\u6392\u5217");
const Benchmark = require("benchmark");
const suite = new Benchmark.Suite();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDcu5YWo5o6S5YiXSUkuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzQ3LuWFqOaOkuWIl0lJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztJQWdCSTs7Ozs7QUFFSjs7O0dBR0c7QUFDSCxJQUFJLGFBQWEsR0FBRyxVQUFVLElBQWM7SUFDMUMsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFFZCxNQUFNO0lBQ04sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBRVosTUFBTSxNQUFNLEdBQWUsRUFBRSxDQUFDO0lBQzlCLE1BQU0sR0FBRyxHQUE4QixFQUFFLENBQUM7SUFDMUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwQyxPQUFPLE1BQU0sQ0FBQztJQUVkLFNBQVMsU0FBUyxDQUFDLENBQVMsRUFBRSxJQUFjLEVBQUUsS0FBYTtRQUN6RCxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFO1lBQ2YsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFCO1FBRUQ7Ozs7O2FBS0s7UUFDTCxLQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9CLGlCQUFpQjtZQUNqQixJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQUUsU0FBUztZQUVuRCxvRUFBb0U7WUFDcEUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFFaEQ7Ozs7Ozs7aUJBT0s7WUFDTCxZQUFZO1lBQ1osU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixvREFBdUI7QUFFdkIsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQy9DLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUNWLENBQUMsQ0FBQztBQUVILGdCQUFNLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUMvQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDVixDQUFDLENBQUM7QUFFSCxvREFBbUM7QUFDbkMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3ZDLE1BQU0sS0FBSyxHQUFHLElBQUksU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRXBDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkU7QUFFRixNQUFNLE1BQU0sR0FBRyxnQkFBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0IsS0FBSztLQUNGLEdBQUcsQ0FBQyxXQUFXLEVBQUU7SUFDaEIsZ0JBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNsQixDQUFDLENBQUM7S0FDRCxHQUFHLENBQUMsTUFBTSxFQUFFO0lBQ1gsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3hCLENBQUMsQ0FBQztJQUVGLGdCQUFnQjtLQUNmLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxLQUFVO0lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ3BDLENBQUMsQ0FBQztLQUNELEVBQUUsQ0FBQyxVQUFVLEVBQUU7SUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ2xFLENBQUMsQ0FBQztJQUNGLFlBQVk7S0FDWCxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrlj6/ljIXlkKvph43lpI3mlbDlrZfnmoTluo/liJfvvIzov5Tlm57miYDmnInkuI3ph43lpI3nmoTlhajmjpLliJfjgIJcblxu56S65L6LOlxuXG7ovpPlhaU6IFsxLDEsMl1cbui+k+WHujpcbltcbiAgWzEsMSwyXSxcbiAgWzEsMiwxXSxcbiAgWzIsMSwxXVxuXVxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvcGVybXV0YXRpb25zLWlpXG7okZfkvZzmnYPlvZLpoobmiaPnvZHnu5zmiYDmnInjgILllYbkuJrovazovb3or7fogZTns7vlrpjmlrnmjojmnYPvvIzpnZ7llYbkuJrovazovb3or7fms6jmmI7lh7rlpITjgIJcbiogKi9cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXG4gKiBAcmV0dXJuIHtudW1iZXJbXVtdfVxuICovXG52YXIgcGVybXV0ZVVuaXF1ZSA9IGZ1bmN0aW9uIChudW1zOiBudW1iZXJbXSkge1xuICAvLyDln7rmnKzlkIwgNDYu5YWo5o6S5YiXLnRzXG4gIC8vIOmineWklueahOmcgOimgeaOkumZpOmHjeWkjeeahOmhuVxuXG4gIC8vIOWFiOaOkuW6j1xuICBudW1zLnNvcnQoKTtcblxuICBjb25zdCByZXN1bHQ6IG51bWJlcltdW10gPSBbXTtcbiAgY29uc3QgbWFwOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG4gIGJhY2t0cmFjayhudW1zLmxlbmd0aCAtIDEsIG51bXMsIDApO1xuICByZXR1cm4gcmVzdWx0O1xuXG4gIGZ1bmN0aW9uIGJhY2t0cmFjayhuOiBudW1iZXIsIG51bXM6IG51bWJlcltdLCBmaXJzdDogbnVtYmVyKSB7XG4gICAgLy8g5Lqk5o2i55qE5L2N572uIOW3sue7j+ayoeacieS6hiDov5Tlm57nu5PmnpxcbiAgICBpZiAobiA9PT0gZmlyc3QpIHtcbiAgICAgIHJldHVybiByZXN1bHQucHVzaChudW1zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDov5nph4zkuI0g5Lya5Zue5rqvIOebtOaOpSDlnKjkuIrkuIDlsYLnmoTlvqrnjq/kuIog6L+b6KGMXG4gICAgICog5pyA57uI55qE5pWI5p6c5pivIOavj+asoSDlsIbkuIDkuKrkuI3lkIznmoQg5pWw5pS+5YiwIGZpcnN0IOS9jSDkuIog54S25ZCO5ZCO6Z2i55qE5L2N6YCS5b2SIOiHquW3seeOqVxuICAgICAqIOWOn+WboOaYryDlhajmjpLliJdJIOS4rSDnlLHkuo7lgLzpg73kuI3lkIwg5omA5Lul5q+P5Liq5Lqk5o2i6YO95piv5pyJ5oSP5LmJ55qEIOebuOW9k+S6juaUvuWIsCDnrKzkuIDkvY1cbiAgICAgKiDlubbkuJTnlLHkuo4g5byA5aeL5piv5o6S5bqP55qEIOaJgOS7pSDkuqTmjaLlkI4gaSDkvY0g5LmL5ZCO55qE5Lmf5piv5o6S5bqP55qEXG4gICAgICogKi9cbiAgICBmb3IgKGxldCBpID0gZmlyc3Q7IGkgPD0gbjsgaSsrKSB7XG4gICAgICAvLyDmjpLpmaTnm7jlkIwg57uT5p6cIOWPquS/neeVmeesrOS4gOS4qlxuICAgICAgaWYgKGkgIT0gZmlyc3QgJiYgbnVtc1tmaXJzdF0gPT0gbnVtc1tpXSkgY29udGludWU7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKGBzdGFydCR7Zmlyc3R9YCwgbnVtcywgXCJzd2FwXCIsIG51bXNbZmlyc3RdLCBudW1zW2ldKTtcbiAgICAgIFtudW1zW2ZpcnN0XSwgbnVtc1tpXV0gPSBbbnVtc1tpXSwgbnVtc1tmaXJzdF1dO1xuXG4gICAgICAvKipcbiAgICAgICAqIOazqOaEj+S5i+WQjueahOS7o+eggVxuICAgICAgICogMS7mr4/mrKHkvKDpgJIg5bey57uP5Lqk5o2i6L+H5L2N572u55qE5ou36LSdP1xuICAgICAgICogMi7lubbkuI3pnIDopoHlm57muq/kuYvliY3nmoTnirbmgIE/XG4gICAgICAgKlxuICAgICAgICog5piv5Zug5Li6IOS5i+WQjueahOWAvCDkvp3nhLbkv53nlZnkuobmjpLluo/nmoTnirbmgIEg5Zue5Yiw5LmL5YmN55qE54q25oCBIOS4gOWumuegtOWdj+aOkuW6j1xuICAgICAgICog6ICM56C05Z2P5LqG5o6S5bqP55qE54q25oCB55qEIOaYr+ayoeacieaEj+S5ieeahFxuICAgICAgICogKi9cbiAgICAgIC8vIOS6pOaNouS4i+S4gOS4quS9jee9rueahOWAvFxuICAgICAgYmFja3RyYWNrKG4sIG51bXMuc2xpY2UoKSwgZmlyc3QgKyAxKTtcbiAgICB9XG4gIH1cbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuaW1wb3J0IHsgc29ydERlZXAgfSBmcm9tIFwiLi4vdXRpbC9hc3NlcnRIZWxwZXJcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChwZXJtdXRlVW5pcXVlKFsxLCAyLCAzXSksIFtcbiAgWzEsIDIsIDNdLFxuICBbMSwgMywgMl0sXG4gIFsyLCAxLCAzXSxcbiAgWzIsIDMsIDFdLFxuICBbMywgMSwgMl0sXG4gIFszLCAyLCAxXSxcbl0pO1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKHBlcm11dGVVbmlxdWUoWzEsIDEsIDJdKSwgW1xuICBbMSwgMSwgMl0sXG4gIFsxLCAyLCAxXSxcbiAgWzIsIDEsIDFdLFxuXSk7XG5cbmltcG9ydCB7IHBlcm11dGUgfSBmcm9tIFwiLi80Ni7lhajmjpLliJdcIjtcbmNvbnN0IEJlbmNobWFyayA9IHJlcXVpcmUoXCJiZW5jaG1hcmtcIik7XG5jb25zdCBzdWl0ZSA9IG5ldyBCZW5jaG1hcmsuU3VpdGUoKTtcblxuLypcbnN1aXRlXG4gICAgLmFkZChcImJhY2t0cmFja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHBlcm11dGUoWzEsIDIsIDNdKTtcbiAgICB9KVxuICAgIC5hZGQoXCJjb3B5XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcGVybXV0ZVVuaXF1ZShbMSwgMiwgM10pO1xuICAgIH0pXG5cbiAgICAvLyBhZGQgbGlzdGVuZXJzXG4gICAgLm9uKFwiY3ljbGVcIiwgZnVuY3Rpb24gKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5sb2coU3RyaW5nKGV2ZW50LnRhcmdldCkpO1xuICAgIH0pXG4gICAgLm9uKFwiY29tcGxldGVcIiwgZnVuY3Rpb24gKHRoaXM6IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZhc3Rlc3QgaXMgXCIgKyB0aGlzLmZpbHRlcihcImZhc3Rlc3RcIikubWFwKFwibmFtZVwiKSk7XG4gICAgfSlcbiAgICAvLyBydW4gYXN5bmNcbiAgICAucnVuKHthc3luYzogZmFsc2V9KTtcbiovXG5cbmNvbnN0IHNhbXBsZSA9IF8ucmFuZ2UoMCwgNik7XG5zdWl0ZVxuICAuYWRkKFwiYmFja3RyYWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBwZXJtdXRlKHNhbXBsZSk7XG4gIH0pXG4gIC5hZGQoXCJjb3B5XCIsIGZ1bmN0aW9uICgpIHtcbiAgICBwZXJtdXRlVW5pcXVlKHNhbXBsZSk7XG4gIH0pXG5cbiAgLy8gYWRkIGxpc3RlbmVyc1xuICAub24oXCJjeWNsZVwiLCBmdW5jdGlvbiAoZXZlbnQ6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKFN0cmluZyhldmVudC50YXJnZXQpKTtcbiAgfSlcbiAgLm9uKFwiY29tcGxldGVcIiwgZnVuY3Rpb24gKHRoaXM6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKFwiRmFzdGVzdCBpcyBcIiArIHRoaXMuZmlsdGVyKFwiZmFzdGVzdFwiKS5tYXAoXCJuYW1lXCIpKTtcbiAgfSlcbiAgLy8gcnVuIGFzeW5jXG4gIC5ydW4oeyBhc3luYzogZmFsc2UgfSk7XG4iXX0=