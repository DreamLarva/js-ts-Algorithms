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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDcu5YWo5o6S5YiXSUkuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzQ3LuWFqOaOkuWIl0lJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztJQWdCSTs7Ozs7QUFFSjs7O0dBR0c7QUFDSCxJQUFJLGFBQWEsR0FBRyxVQUFVLElBQWM7SUFDeEMsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFFZCxNQUFNO0lBQ04sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBRVosTUFBTSxNQUFNLEdBQWUsRUFBRSxDQUFDO0lBQzlCLE1BQU0sR0FBRyxHQUE4QixFQUFFLENBQUM7SUFDMUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwQyxPQUFPLE1BQU0sQ0FBQztJQUVkLFNBQVMsU0FBUyxDQUFDLENBQVMsRUFBRSxJQUFjLEVBQUUsS0FBYTtRQUN2RCxtQkFBbUI7UUFDbkIsSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFO1lBQ2IsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVCO1FBRUQ7Ozs7O2FBS0s7UUFDTCxLQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBRTdCLGlCQUFpQjtZQUNqQixJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQUUsU0FBUztZQUVuRCxvRUFBb0U7WUFDcEUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFFaEQ7Ozs7Ozs7aUJBT0s7WUFDTCxZQUFZO1lBQ1osU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3pDO0lBQ0wsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUdGLG9EQUE0QjtBQUU1QixvREFBdUI7QUFHdkIsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDeEI7SUFDSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNULENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDWixDQUNKLENBQUM7QUFHRixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUN4QjtJQUNJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDVCxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUNaLENBQ0osQ0FBQztBQUtGLG9EQUFpQztBQUNqQyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDdkMsTUFBTSxLQUFLLEdBQUcsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDO0FBRWxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkU7QUFHRixNQUFNLE1BQU0sR0FBRyxnQkFBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUIsS0FBSztLQUNBLEdBQUcsQ0FBQyxXQUFXLEVBQUU7SUFDZCxnQkFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3BCLENBQUMsQ0FBQztLQUNELEdBQUcsQ0FBQyxNQUFNLEVBQUU7SUFDVCxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDMUIsQ0FBQyxDQUFDO0lBRUYsZ0JBQWdCO0tBQ2YsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVLEtBQVU7SUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDdEMsQ0FBQyxDQUFDO0tBQ0QsRUFBRSxDQUFDLFVBQVUsRUFBRTtJQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDcEUsQ0FBQyxDQUFDO0lBQ0YsWUFBWTtLQUNYLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4quWPr+WMheWQq+mHjeWkjeaVsOWtl+eahOW6j+WIl++8jOi/lOWbnuaJgOacieS4jemHjeWkjeeahOWFqOaOkuWIl+OAglxuXG7npLrkvos6XG5cbui+k+WFpTogWzEsMSwyXVxu6L6T5Ye6OlxuW1xuICBbMSwxLDJdLFxuICBbMSwyLDFdLFxuICBbMiwxLDFdXG5dXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9wZXJtdXRhdGlvbnMtaWlcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcbiAqIEByZXR1cm4ge251bWJlcltdW119XG4gKi9cbnZhciBwZXJtdXRlVW5pcXVlID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdKSB7XG4gICAgLy8g5Z+65pys5ZCMIDQ2LuWFqOaOkuWIly50c1xuICAgIC8vIOmineWklueahOmcgOimgeaOkumZpOmHjeWkjeeahOmhuVxuXG4gICAgLy8g5YWI5o6S5bqPXG4gICAgbnVtcy5zb3J0KCk7XG5cbiAgICBjb25zdCByZXN1bHQ6IG51bWJlcltdW10gPSBbXTtcbiAgICBjb25zdCBtYXA6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcbiAgICBiYWNrdHJhY2sobnVtcy5sZW5ndGggLSAxLCBudW1zLCAwKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgZnVuY3Rpb24gYmFja3RyYWNrKG46IG51bWJlciwgbnVtczogbnVtYmVyW10sIGZpcnN0OiBudW1iZXIpIHtcbiAgICAgICAgLy8g5Lqk5o2i55qE5L2N572uIOW3sue7j+ayoeacieS6hiDov5Tlm57nu5PmnpxcbiAgICAgICAgaWYgKG4gPT09IGZpcnN0KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LnB1c2gobnVtcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6L+Z6YeM5LiNIOS8muWbnua6ryDnm7TmjqUg5Zyo5LiK5LiA5bGC55qE5b6q546v5LiKIOi/m+ihjFxuICAgICAgICAgKiDmnIDnu4jnmoTmlYjmnpzmmK8g5q+P5qyhIOWwhuS4gOS4quS4jeWQjOeahCDmlbDmlL7liLAgZmlyc3Qg5L2NIOS4iiDnhLblkI7lkI7pnaLnmoTkvY3pgJLlvZIg6Ieq5bex546pXG4gICAgICAgICAqIOWOn+WboOaYryDlhajmjpLliJdJIOS4rSDnlLHkuo7lgLzpg73kuI3lkIwg5omA5Lul5q+P5Liq5Lqk5o2i6YO95piv5pyJ5oSP5LmJ55qEIOebuOW9k+S6juaUvuWIsCDnrKzkuIDkvY1cbiAgICAgICAgICog5bm25LiU55Sx5LqOIOW8gOWni+aYr+aOkuW6j+eahCDmiYDku6Ug5Lqk5o2i5ZCOIGkg5L2NIOS5i+WQjueahOS5n+aYr+aOkuW6j+eahFxuICAgICAgICAgKiAqL1xuICAgICAgICBmb3IgKGxldCBpID0gZmlyc3Q7IGkgPD0gbjsgaSsrKSB7XG5cbiAgICAgICAgICAgIC8vIOaOkumZpOebuOWQjCDnu5Pmnpwg5Y+q5L+d55WZ56ys5LiA5LiqXG4gICAgICAgICAgICBpZiAoaSAhPSBmaXJzdCAmJiBudW1zW2ZpcnN0XSA9PSBudW1zW2ldKSBjb250aW51ZTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYHN0YXJ0JHtmaXJzdH1gLCBudW1zLCBcInN3YXBcIiwgbnVtc1tmaXJzdF0sIG51bXNbaV0pO1xuICAgICAgICAgICAgW251bXNbZmlyc3RdLCBudW1zW2ldXSA9IFtudW1zW2ldLCBudW1zW2ZpcnN0XV07XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog5rOo5oSP5LmL5ZCO55qE5Luj56CBXG4gICAgICAgICAgICAgKiAxLuavj+asoeS8oOmAkiDlt7Lnu4/kuqTmjaLov4fkvY3nva7nmoTmi7fotJ0/XG4gICAgICAgICAgICAgKiAyLuW5tuS4jemcgOimgeWbnua6r+S5i+WJjeeahOeKtuaAgT9cbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiDmmK/lm6DkuLog5LmL5ZCO55qE5YC8IOS+neeEtuS/neeVmeS6huaOkuW6j+eahOeKtuaAgSDlm57liLDkuYvliY3nmoTnirbmgIEg5LiA5a6a56C05Z2P5o6S5bqPXG4gICAgICAgICAgICAgKiDogIznoLTlnY/kuobmjpLluo/nmoTnirbmgIHnmoQg5piv5rKh5pyJ5oSP5LmJ55qEXG4gICAgICAgICAgICAgKiAqL1xuICAgICAgICAgICAgLy8g5Lqk5o2i5LiL5LiA5Liq5L2N572u55qE5YC8XG4gICAgICAgICAgICBiYWNrdHJhY2sobiwgbnVtcy5zbGljZSgpLCBmaXJzdCArIDEpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcbmltcG9ydCB7c29ydERlZXB9IGZyb20gXCIuLi91dGlsL2Fzc2VydEhlbHBlclwiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuXG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gICAgcGVybXV0ZVVuaXF1ZShbMSwgMiwgM10pLFxuICAgIFtcbiAgICAgICAgWzEsIDIsIDNdLFxuICAgICAgICBbMSwgMywgMl0sXG4gICAgICAgIFsyLCAxLCAzXSxcbiAgICAgICAgWzIsIDMsIDFdLFxuICAgICAgICBbMywgMSwgMl0sXG4gICAgICAgIFszLCAyLCAxXVxuICAgIF0sXG4pO1xuXG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gICAgcGVybXV0ZVVuaXF1ZShbMSwgMSwgMl0pLFxuICAgIFtcbiAgICAgICAgWzEsIDEsIDJdLFxuICAgICAgICBbMSwgMiwgMV0sXG4gICAgICAgIFsyLCAxLCAxXSxcbiAgICBdLFxuKTtcblxuXG5cblxuaW1wb3J0IHtwZXJtdXRlfSBmcm9tIFwiLi80Ni7lhajmjpLliJdcIjtcbmNvbnN0IEJlbmNobWFyayA9IHJlcXVpcmUoXCJiZW5jaG1hcmtcIik7XG5jb25zdCBzdWl0ZSA9IG5ldyBCZW5jaG1hcmsuU3VpdGU7XG5cbi8qXG5zdWl0ZVxuICAgIC5hZGQoXCJiYWNrdHJhY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBwZXJtdXRlKFsxLCAyLCAzXSk7XG4gICAgfSlcbiAgICAuYWRkKFwiY29weVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHBlcm11dGVVbmlxdWUoWzEsIDIsIDNdKTtcbiAgICB9KVxuXG4gICAgLy8gYWRkIGxpc3RlbmVyc1xuICAgIC5vbihcImN5Y2xlXCIsIGZ1bmN0aW9uIChldmVudDogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFN0cmluZyhldmVudC50YXJnZXQpKTtcbiAgICB9KVxuICAgIC5vbihcImNvbXBsZXRlXCIsIGZ1bmN0aW9uICh0aGlzOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJGYXN0ZXN0IGlzIFwiICsgdGhpcy5maWx0ZXIoXCJmYXN0ZXN0XCIpLm1hcChcIm5hbWVcIikpO1xuICAgIH0pXG4gICAgLy8gcnVuIGFzeW5jXG4gICAgLnJ1bih7YXN5bmM6IGZhbHNlfSk7XG4qL1xuXG5cbmNvbnN0IHNhbXBsZSA9IF8ucmFuZ2UoMCw2KTtcbnN1aXRlXG4gICAgLmFkZChcImJhY2t0cmFja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHBlcm11dGUoc2FtcGxlKTtcbiAgICB9KVxuICAgIC5hZGQoXCJjb3B5XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcGVybXV0ZVVuaXF1ZShzYW1wbGUpO1xuICAgIH0pXG5cbiAgICAvLyBhZGQgbGlzdGVuZXJzXG4gICAgLm9uKFwiY3ljbGVcIiwgZnVuY3Rpb24gKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5sb2coU3RyaW5nKGV2ZW50LnRhcmdldCkpO1xuICAgIH0pXG4gICAgLm9uKFwiY29tcGxldGVcIiwgZnVuY3Rpb24gKHRoaXM6IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZhc3Rlc3QgaXMgXCIgKyB0aGlzLmZpbHRlcihcImZhc3Rlc3RcIikubWFwKFwibmFtZVwiKSk7XG4gICAgfSlcbiAgICAvLyBydW4gYXN5bmNcbiAgICAucnVuKHthc3luYzogZmFsc2V9KTtcbiJdfQ==
