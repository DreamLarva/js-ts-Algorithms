"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
剑指 Offer 03. 数组中重复的数字
找出数组中重复的数字。


在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

示例 1：

输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3


限制：

2 <= n <= 100000


* */
function findRepeatNumber(nums) {
  const m = {};
  for (let i = 0; i < nums.length; i++) {
    if (m[nums[i]]) {
      return nums[i];
    }
    m[nums[i]] = true;
  }
  return 0;
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]), 2);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5YmR5oyHT2ZmZXIwMy7mlbDnu4TkuK3ph43lpI3nmoTmlbDlrZcuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlL+WJkeaMh09mZmVyMDMu5pWw57uE5Lit6YeN5aSN55qE5pWw5a2XLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFtQkk7QUFDSixTQUFTLGdCQUFnQixDQUFDLElBQWM7SUFDdEMsTUFBTSxDQUFDLEdBQStCLEVBQUUsQ0FBQztJQUN6QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNwQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2hCO1FBRUQsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztLQUNuQjtJQUVELE9BQU8sQ0FBQyxDQUFDO0FBQ1gsQ0FBQztBQUVELG9EQUE0QjtBQUM1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu5YmR5oyHIE9mZmVyIDAzLiDmlbDnu4TkuK3ph43lpI3nmoTmlbDlrZdcbuaJvuWHuuaVsOe7hOS4remHjeWkjeeahOaVsOWtl+OAglxuXG5cbuWcqOS4gOS4qumVv+W6puS4uiBuIOeahOaVsOe7hCBudW1zIOmHjOeahOaJgOacieaVsOWtl+mDveWcqCAw772ebi0xIOeahOiMg+WbtOWGheOAguaVsOe7hOS4reafkOS6m+aVsOWtl+aYr+mHjeWkjeeahO+8jOS9huS4jeefpemBk+acieWHoOS4quaVsOWtl+mHjeWkjeS6hu+8jOS5n+S4jeefpemBk+avj+S4quaVsOWtl+mHjeWkjeS6huWHoOasoeOAguivt+aJvuWHuuaVsOe7hOS4reS7u+aEj+S4gOS4qumHjeWkjeeahOaVsOWtl+OAglxuXG7npLrkvosgMe+8mlxuXG7ovpPlhaXvvJpcblsyLCAzLCAxLCAwLCAyLCA1LCAzXVxu6L6T5Ye677yaMiDmiJYgM1xuXG5cbumZkOWItu+8mlxuXG4yIDw9IG4gPD0gMTAwMDAwXG5cblxuKiAqL1xuZnVuY3Rpb24gZmluZFJlcGVhdE51bWJlcihudW1zOiBudW1iZXJbXSk6IG51bWJlciB7XG4gIGNvbnN0IG06IHsgW2tleTogbnVtYmVyXTogYm9vbGVhbiB9ID0ge307XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChtW251bXNbaV1dKSB7XG4gICAgICByZXR1cm4gbnVtc1tpXTtcbiAgICB9XG5cbiAgICBtW251bXNbaV1dID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiAwO1xufVxuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcbmFzc2VydC5zdHJpY3RFcXVhbChmaW5kUmVwZWF0TnVtYmVyKFsyLCAzLCAxLCAwLCAyLCA1LCAzXSksIDIpO1xuIl19
