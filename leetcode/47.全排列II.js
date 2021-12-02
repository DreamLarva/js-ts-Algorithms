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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
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
      if (i != first && nums[first] == nums[i]) continue;
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
    (0, _46____1.permute)(sample);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDcu5YWo5o6S5YiXSUkuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzQ3LuWFqOaOkuWIl0lJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztJQWdCSTs7Ozs7QUFFSjs7O0dBR0c7QUFDSCxJQUFJLGFBQWEsR0FBRyxVQUFVLElBQWM7SUFDMUMsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFFZCxNQUFNO0lBQ04sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBRVosTUFBTSxNQUFNLEdBQWUsRUFBRSxDQUFDO0lBQzlCLE1BQU0sR0FBRyxHQUE4QixFQUFFLENBQUM7SUFDMUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwQyxPQUFPLE1BQU0sQ0FBQztJQUVkLFNBQVMsU0FBUyxDQUFDLENBQVMsRUFBRSxJQUFjLEVBQUUsS0FBYTtRQUN6RCxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFO1lBQ2YsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFCO1FBRUQ7Ozs7O2FBS0s7UUFDTCxLQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9CLGlCQUFpQjtZQUNqQixJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQUUsU0FBUztZQUVuRCxvRUFBb0U7WUFDcEUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFFaEQ7Ozs7Ozs7aUJBT0s7WUFDTCxZQUFZO1lBQ1osU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixvREFBdUI7QUFFdkIsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQy9DLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUNWLENBQUMsQ0FBQztBQUVILGdCQUFNLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUMvQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDVixDQUFDLENBQUM7QUFFSCxvREFBbUM7QUFDbkMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3ZDLE1BQU0sS0FBSyxHQUFHLElBQUksU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRXBDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkU7QUFFRixNQUFNLE1BQU0sR0FBRyxnQkFBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0IsS0FBSztLQUNGLEdBQUcsQ0FBQyxXQUFXLEVBQUU7SUFDaEIsSUFBQSxnQkFBTyxFQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2xCLENBQUMsQ0FBQztLQUNELEdBQUcsQ0FBQyxNQUFNLEVBQUU7SUFDWCxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDeEIsQ0FBQyxDQUFDO0lBRUYsZ0JBQWdCO0tBQ2YsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVLEtBQVU7SUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFDO0tBQ0QsRUFBRSxDQUFDLFVBQVUsRUFBRTtJQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDbEUsQ0FBQyxDQUFDO0lBQ0YsWUFBWTtLQUNYLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4quWPr+WMheWQq+mHjeWkjeaVsOWtl+eahOW6j+WIl++8jOi/lOWbnuaJgOacieS4jemHjeWkjeeahOWFqOaOkuWIl+OAglxuXG7npLrkvos6XG5cbui+k+WFpTogWzEsMSwyXVxu6L6T5Ye6OlxuW1xuICBbMSwxLDJdLFxuICBbMSwyLDFdLFxuICBbMiwxLDFdXG5dXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9wZXJtdXRhdGlvbnMtaWlcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcbiAqIEByZXR1cm4ge251bWJlcltdW119XG4gKi9cbnZhciBwZXJtdXRlVW5pcXVlID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdKSB7XG4gIC8vIOWfuuacrOWQjCA0Ni7lhajmjpLliJcudHNcbiAgLy8g6aKd5aSW55qE6ZyA6KaB5o6S6Zmk6YeN5aSN55qE6aG5XG5cbiAgLy8g5YWI5o6S5bqPXG4gIG51bXMuc29ydCgpO1xuXG4gIGNvbnN0IHJlc3VsdDogbnVtYmVyW11bXSA9IFtdO1xuICBjb25zdCBtYXA6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgYmFja3RyYWNrKG51bXMubGVuZ3RoIC0gMSwgbnVtcywgMCk7XG4gIHJldHVybiByZXN1bHQ7XG5cbiAgZnVuY3Rpb24gYmFja3RyYWNrKG46IG51bWJlciwgbnVtczogbnVtYmVyW10sIGZpcnN0OiBudW1iZXIpIHtcbiAgICAvLyDkuqTmjaLnmoTkvY3nva4g5bey57uP5rKh5pyJ5LqGIOi/lOWbnue7k+aenFxuICAgIGlmIChuID09PSBmaXJzdCkge1xuICAgICAgcmV0dXJuIHJlc3VsdC5wdXNoKG51bXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi/memHjOS4jSDkvJrlm57muq8g55u05o6lIOWcqOS4iuS4gOWxgueahOW+queOr+S4iiDov5vooYxcbiAgICAgKiDmnIDnu4jnmoTmlYjmnpzmmK8g5q+P5qyhIOWwhuS4gOS4quS4jeWQjOeahCDmlbDmlL7liLAgZmlyc3Qg5L2NIOS4iiDnhLblkI7lkI7pnaLnmoTkvY3pgJLlvZIg6Ieq5bex546pXG4gICAgICog5Y6f5Zug5pivIOWFqOaOkuWIl0kg5LitIOeUseS6juWAvOmDveS4jeWQjCDmiYDku6Xmr4/kuKrkuqTmjaLpg73mmK/mnInmhI/kuYnnmoQg55u45b2T5LqO5pS+5YiwIOesrOS4gOS9jVxuICAgICAqIOW5tuS4lOeUseS6jiDlvIDlp4vmmK/mjpLluo/nmoQg5omA5LulIOS6pOaNouWQjiBpIOS9jSDkuYvlkI7nmoTkuZ/mmK/mjpLluo/nmoRcbiAgICAgKiAqL1xuICAgIGZvciAobGV0IGkgPSBmaXJzdDsgaSA8PSBuOyBpKyspIHtcbiAgICAgIC8vIOaOkumZpOebuOWQjCDnu5Pmnpwg5Y+q5L+d55WZ56ys5LiA5LiqXG4gICAgICBpZiAoaSAhPSBmaXJzdCAmJiBudW1zW2ZpcnN0XSA9PSBudW1zW2ldKSBjb250aW51ZTtcblxuICAgICAgLy8gY29uc29sZS5sb2coYHN0YXJ0JHtmaXJzdH1gLCBudW1zLCBcInN3YXBcIiwgbnVtc1tmaXJzdF0sIG51bXNbaV0pO1xuICAgICAgW251bXNbZmlyc3RdLCBudW1zW2ldXSA9IFtudW1zW2ldLCBudW1zW2ZpcnN0XV07XG5cbiAgICAgIC8qKlxuICAgICAgICog5rOo5oSP5LmL5ZCO55qE5Luj56CBXG4gICAgICAgKiAxLuavj+asoeS8oOmAkiDlt7Lnu4/kuqTmjaLov4fkvY3nva7nmoTmi7fotJ0/XG4gICAgICAgKiAyLuW5tuS4jemcgOimgeWbnua6r+S5i+WJjeeahOeKtuaAgT9cbiAgICAgICAqXG4gICAgICAgKiDmmK/lm6DkuLog5LmL5ZCO55qE5YC8IOS+neeEtuS/neeVmeS6huaOkuW6j+eahOeKtuaAgSDlm57liLDkuYvliY3nmoTnirbmgIEg5LiA5a6a56C05Z2P5o6S5bqPXG4gICAgICAgKiDogIznoLTlnY/kuobmjpLluo/nmoTnirbmgIHnmoQg5piv5rKh5pyJ5oSP5LmJ55qEXG4gICAgICAgKiAqL1xuICAgICAgLy8g5Lqk5o2i5LiL5LiA5Liq5L2N572u55qE5YC8XG4gICAgICBiYWNrdHJhY2sobiwgbnVtcy5zbGljZSgpLCBmaXJzdCArIDEpO1xuICAgIH1cbiAgfVxufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5pbXBvcnQgeyBzb3J0RGVlcCB9IGZyb20gXCIuLi91dGlsL2Fzc2VydEhlbHBlclwiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKHBlcm11dGVVbmlxdWUoWzEsIDIsIDNdKSwgW1xuICBbMSwgMiwgM10sXG4gIFsxLCAzLCAyXSxcbiAgWzIsIDEsIDNdLFxuICBbMiwgMywgMV0sXG4gIFszLCAxLCAyXSxcbiAgWzMsIDIsIDFdLFxuXSk7XG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwocGVybXV0ZVVuaXF1ZShbMSwgMSwgMl0pLCBbXG4gIFsxLCAxLCAyXSxcbiAgWzEsIDIsIDFdLFxuICBbMiwgMSwgMV0sXG5dKTtcblxuaW1wb3J0IHsgcGVybXV0ZSB9IGZyb20gXCIuLzQ2LuWFqOaOkuWIl1wiO1xuY29uc3QgQmVuY2htYXJrID0gcmVxdWlyZShcImJlbmNobWFya1wiKTtcbmNvbnN0IHN1aXRlID0gbmV3IEJlbmNobWFyay5TdWl0ZSgpO1xuXG4vKlxuc3VpdGVcbiAgICAuYWRkKFwiYmFja3RyYWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcGVybXV0ZShbMSwgMiwgM10pO1xuICAgIH0pXG4gICAgLmFkZChcImNvcHlcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBwZXJtdXRlVW5pcXVlKFsxLCAyLCAzXSk7XG4gICAgfSlcblxuICAgIC8vIGFkZCBsaXN0ZW5lcnNcbiAgICAub24oXCJjeWNsZVwiLCBmdW5jdGlvbiAoZXZlbnQ6IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZyhTdHJpbmcoZXZlbnQudGFyZ2V0KSk7XG4gICAgfSlcbiAgICAub24oXCJjb21wbGV0ZVwiLCBmdW5jdGlvbiAodGhpczogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmFzdGVzdCBpcyBcIiArIHRoaXMuZmlsdGVyKFwiZmFzdGVzdFwiKS5tYXAoXCJuYW1lXCIpKTtcbiAgICB9KVxuICAgIC8vIHJ1biBhc3luY1xuICAgIC5ydW4oe2FzeW5jOiBmYWxzZX0pO1xuKi9cblxuY29uc3Qgc2FtcGxlID0gXy5yYW5nZSgwLCA2KTtcbnN1aXRlXG4gIC5hZGQoXCJiYWNrdHJhY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIHBlcm11dGUoc2FtcGxlKTtcbiAgfSlcbiAgLmFkZChcImNvcHlcIiwgZnVuY3Rpb24gKCkge1xuICAgIHBlcm11dGVVbmlxdWUoc2FtcGxlKTtcbiAgfSlcblxuICAvLyBhZGQgbGlzdGVuZXJzXG4gIC5vbihcImN5Y2xlXCIsIGZ1bmN0aW9uIChldmVudDogYW55KSB7XG4gICAgY29uc29sZS5sb2coU3RyaW5nKGV2ZW50LnRhcmdldCkpO1xuICB9KVxuICAub24oXCJjb21wbGV0ZVwiLCBmdW5jdGlvbiAodGhpczogYW55KSB7XG4gICAgY29uc29sZS5sb2coXCJGYXN0ZXN0IGlzIFwiICsgdGhpcy5maWx0ZXIoXCJmYXN0ZXN0XCIpLm1hcChcIm5hbWVcIikpO1xuICB9KVxuICAvLyBydW4gYXN5bmNcbiAgLnJ1bih7IGFzeW5jOiBmYWxzZSB9KTtcbiJdfQ==
