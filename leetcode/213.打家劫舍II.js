"use strict";
/*
213. 打家劫舍 II
你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。
同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，能够偷窃到的最高金额。



示例 1：

输入：nums = [2,3,2]
输出：3
解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
示例 2：

输入：nums = [1,2,3,1]
输出：4
解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
     偷窃到的最高金额 = 1 + 3 = 4 。
示例 3：

输入：nums = [0]
输出：0


提示：

1 <= nums.length <= 100
0 <= nums[i] <= 1000
* */
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var rob = function (nums) {
  const length = nums.length;
  if (length === 1) {
    return nums[0];
  } else if (length === 2) {
    return Math.max(nums[0], nums[1]);
  }
  // 分治法
  // 含有 nums 首位和 末位的分开 计算,然后取最大值
  // a , b , c , d , e , f
  // 分成 [a , b , c , d , e ] 和 [b , c , d , e , f]
  // 最大值 可能有三种情况 只 1.包含 a , 1.只包含 b , 3.既不包含 a 也不包含 b
  // 而这组 也同样包含可以取到 第三种结果的情况
  return Math.max(robRange(nums, 0, length - 2), robRange(nums, 1, length - 1));
};
const robRange = (nums, start, end) => {
  let first = nums[start],
    second = Math.max(nums[start], nums[start + 1]);
  for (let i = start + 2; i <= end; i++) {
    const temp = second;
    second = Math.max(first + nums[i], second);
    first = temp;
  }
  return second;
};
const assert_1 = __importDefault(require("assert"));
// assert.strictEqual(rob([2, 3, 2]), 3);
// assert.strictEqual(rob([1, 2, 3, 1]), 4);
// assert.strictEqual(rob([0]), 0);
assert_1.default.strictEqual(
  rob([1, 1, 3, 6, 7, 10, 7, 1, 8, 5, 9, 1, 4, 4, 3]),
  41
);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjEzLuaJk+WutuWKq+iIjUlJLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8yMTMu5omT5a625Yqr6IiNSUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE4Qkk7Ozs7O0FBRUosSUFBSSxHQUFHLEdBQUcsVUFBVSxJQUFjO0lBQ2hDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDM0IsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2hCO1NBQU0sSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbkM7SUFDRCxNQUFNO0lBQ04sOEJBQThCO0lBQzlCLHdCQUF3QjtJQUN4QixnREFBZ0Q7SUFDaEQsbURBQW1EO0lBQ25ELHlCQUF5QjtJQUN6QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hGLENBQUMsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHLENBQUMsSUFBYyxFQUFFLEtBQWEsRUFBRSxHQUFXLEVBQUUsRUFBRTtJQUM5RCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQ3JCLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEQsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDckMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDM0MsS0FBSyxHQUFHLElBQUksQ0FBQztLQUNkO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLHlDQUF5QztBQUN6Qyw0Q0FBNEM7QUFDNUMsbUNBQW1DO0FBQ25DLGdCQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4yMTMuIOaJk+WutuWKq+iIjSBJSVxu5L2g5piv5LiA5Liq5LiT5Lia55qE5bCP5YG377yM6K6h5YiS5YG356qD5rK/6KGX55qE5oi/5bGL77yM5q+P6Ze05oi/5YaF6YO96JeP5pyJ5LiA5a6a55qE546w6YeR44CC6L+Z5Liq5Zyw5pa55omA5pyJ55qE5oi/5bGL6YO9IOWbtOaIkOS4gOWciCDvvIzov5nmhI/lkbPnnYDnrKzkuIDkuKrmiL/lsYvlkozmnIDlkI7kuIDkuKrmiL/lsYvmmK/ntKfmjKjnnYDnmoTjgIJcbuWQjOaXtu+8jOebuOmCu+eahOaIv+Wxi+ijheacieebuOS6kui/numAmueahOmYsuebl+ezu+e7n++8jOWmguaenOS4pOmXtOebuOmCu+eahOaIv+Wxi+WcqOWQjOS4gOaZmuS4iuiiq+Wwj+WBt+mXr+WFpe+8jOezu+e7n+S8muiHquWKqOaKpeitpiDjgIJcblxu57uZ5a6a5LiA5Liq5Luj6KGo5q+P5Liq5oi/5bGL5a2Y5pS+6YeR6aKd55qE6Z2e6LSf5pW05pWw5pWw57uE77yM6K6h566X5L2gIOWcqOS4jeinpuWKqOitpuaKpeijhee9rueahOaDheWGteS4iyDvvIzog73lpJ/lgbfnqoPliLDnmoTmnIDpq5jph5Hpop3jgIJcblxuXG5cbuekuuS+iyAx77yaXG5cbui+k+WFpe+8mm51bXMgPSBbMiwzLDJdXG7ovpPlh7rvvJozXG7op6Pph4rvvJrkvaDkuI3og73lhYjlgbfnqoMgMSDlj7fmiL/lsYvvvIjph5Hpop0gPSAy77yJ77yM54S25ZCO5YG356qDIDMg5Y+35oi/5bGL77yI6YeR6aKdID0gMu+8iSwg5Zug5Li65LuW5Lus5piv55u46YK755qE44CCXG7npLrkvosgMu+8mlxuXG7ovpPlhaXvvJpudW1zID0gWzEsMiwzLDFdXG7ovpPlh7rvvJo0XG7op6Pph4rvvJrkvaDlj6/ku6XlhYjlgbfnqoMgMSDlj7fmiL/lsYvvvIjph5Hpop0gPSAx77yJ77yM54S25ZCO5YG356qDIDMg5Y+35oi/5bGL77yI6YeR6aKdID0gM++8ieOAglxuICAgICDlgbfnqoPliLDnmoTmnIDpq5jph5Hpop0gPSAxICsgMyA9IDQg44CCXG7npLrkvosgM++8mlxuXG7ovpPlhaXvvJpudW1zID0gWzBdXG7ovpPlh7rvvJowXG5cblxu5o+Q56S677yaXG5cbjEgPD0gbnVtcy5sZW5ndGggPD0gMTAwXG4wIDw9IG51bXNbaV0gPD0gMTAwMFxuKiAqL1xuXG52YXIgcm9iID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdKSB7XG4gIGNvbnN0IGxlbmd0aCA9IG51bXMubGVuZ3RoO1xuICBpZiAobGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIG51bXNbMF07XG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSAyKSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KG51bXNbMF0sIG51bXNbMV0pO1xuICB9XG4gIC8vIOWIhuayu+azlVxuICAvLyDlkKvmnIkgbnVtcyDpppbkvY3lkowg5pyr5L2N55qE5YiG5byAIOiuoeeulyznhLblkI7lj5bmnIDlpKflgLxcbiAgLy8gYSAsIGIgLCBjICwgZCAsIGUgLCBmXG4gIC8vIOWIhuaIkCBbYSAsIGIgLCBjICwgZCAsIGUgXSDlkowgW2IgLCBjICwgZCAsIGUgLCBmXVxuICAvLyDmnIDlpKflgLwg5Y+v6IO95pyJ5LiJ56eN5oOF5Ya1IOWPqiAxLuWMheWQqyBhICwgMS7lj6rljIXlkKsgYiAsIDMu5pei5LiN5YyF5ZCrIGEg5Lmf5LiN5YyF5ZCrIGJcbiAgLy8g6ICM6L+Z57uEIOS5n+WQjOagt+WMheWQq+WPr+S7peWPluWIsCDnrKzkuInnp43nu5PmnpznmoTmg4XlhrVcbiAgcmV0dXJuIE1hdGgubWF4KHJvYlJhbmdlKG51bXMsIDAsIGxlbmd0aCAtIDIpLCByb2JSYW5nZShudW1zLCAxLCBsZW5ndGggLSAxKSk7XG59O1xuXG5jb25zdCByb2JSYW5nZSA9IChudW1zOiBudW1iZXJbXSwgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpID0+IHtcbiAgbGV0IGZpcnN0ID0gbnVtc1tzdGFydF0sXG4gICAgc2Vjb25kID0gTWF0aC5tYXgobnVtc1tzdGFydF0sIG51bXNbc3RhcnQgKyAxXSk7XG4gIGZvciAobGV0IGkgPSBzdGFydCArIDI7IGkgPD0gZW5kOyBpKyspIHtcbiAgICBjb25zdCB0ZW1wID0gc2Vjb25kO1xuICAgIHNlY29uZCA9IE1hdGgubWF4KGZpcnN0ICsgbnVtc1tpXSwgc2Vjb25kKTtcbiAgICBmaXJzdCA9IHRlbXA7XG4gIH1cbiAgcmV0dXJuIHNlY29uZDtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG4vLyBhc3NlcnQuc3RyaWN0RXF1YWwocm9iKFsyLCAzLCAyXSksIDMpO1xuLy8gYXNzZXJ0LnN0cmljdEVxdWFsKHJvYihbMSwgMiwgMywgMV0pLCA0KTtcbi8vIGFzc2VydC5zdHJpY3RFcXVhbChyb2IoWzBdKSwgMCk7XG5hc3NlcnQuc3RyaWN0RXF1YWwocm9iKFsxLCAxLCAzLCA2LCA3LCAxMCwgNywgMSwgOCwgNSwgOSwgMSwgNCwgNCwgM10pLCA0MSk7XG4iXX0=
