"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。
 * */
/**
 * 根据提议不能使用 数组的 filter splice slice 等生成数组的方法
 * */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0,
    j = 0;
  for (; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // j 为 除去 0 后目标能 i 下标不为 0 数据 放数据的位置(数据不为 0 会 + 1)
      nums[j++] = nums[i];
    }
  }
  while (j < nums.length) {
    nums[j++] = 0;
  }
};
const assert_1 = __importDefault(require("assert"));
const sample = [1, 0, 0, 1];
moveZeroes(sample);
assert_1.default.deepStrictEqual(sample, [1, 1, 0, 0]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjgzLuenu+WKqOmbti5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjgzLuenu+WKqOmbti50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7OztLQVdLO0FBQ0w7O0tBRUs7QUFDTDs7O0dBR0c7QUFDSCxJQUFJLFVBQVUsR0FBRyxVQUFVLElBQWM7SUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUNQLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDUixPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzNCLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqQixpREFBaUQ7WUFDakQsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JCO0tBQ0Y7SUFDRCxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ3RCLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNmO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLE1BQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDNUIsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25CLGdCQUFNLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq5pWw57uEIG51bXPvvIznvJblhpnkuIDkuKrlh73mlbDlsIbmiYDmnIkgMCDnp7vliqjliLDmlbDnu4TnmoTmnKvlsL7vvIzlkIzml7bkv53mjIHpnZ7pm7blhYPntKDnmoTnm7jlr7npobrluo/jgIJcblxu56S65L6LOlxuXG7ovpPlhaU6IFswLDEsMCwzLDEyXVxu6L6T5Ye6OiBbMSwzLDEyLDAsMF1cbuivtOaYjjpcblxu5b+F6aG75Zyo5Y6f5pWw57uE5LiK5pON5L2c77yM5LiN6IO95ou36LSd6aKd5aSW55qE5pWw57uE44CCXG7lsL3ph4/lh4/lsJHmk43kvZzmrKHmlbDjgIJcbiAqICovXG4vKipcbiAqIOagueaNruaPkOiuruS4jeiDveS9v+eUqCDmlbDnu4TnmoQgZmlsdGVyIHNwbGljZSBzbGljZSDnrYnnlJ/miJDmlbDnu4TnmoTmlrnms5VcbiAqICovXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcbiAqIEByZXR1cm4ge3ZvaWR9IERvIG5vdCByZXR1cm4gYW55dGhpbmcsIG1vZGlmeSBudW1zIGluLXBsYWNlIGluc3RlYWQuXG4gKi9cbnZhciBtb3ZlWmVyb2VzID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdKSB7XG4gIGxldCBpID0gMCxcbiAgICBqID0gMDtcbiAgZm9yICg7IGkgPCBudW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG51bXNbaV0gIT09IDApIHtcbiAgICAgIC8vIGog5Li6IOmZpOWOuyAwIOWQjuebruagh+iDvSBpIOS4i+agh+S4jeS4uiAwIOaVsOaNriDmlL7mlbDmja7nmoTkvY3nva4o5pWw5o2u5LiN5Li6IDAg5LyaICsgMSlcbiAgICAgIG51bXNbaisrXSA9IG51bXNbaV07XG4gICAgfVxuICB9XG4gIHdoaWxlIChqIDwgbnVtcy5sZW5ndGgpIHtcbiAgICBudW1zW2orK10gPSAwO1xuICB9XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuY29uc3Qgc2FtcGxlID0gWzEsIDAsIDAsIDFdO1xubW92ZVplcm9lcyhzYW1wbGUpO1xuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChzYW1wbGUsIFsxLCAxLCAwLCAwXSk7XG4iXX0=
