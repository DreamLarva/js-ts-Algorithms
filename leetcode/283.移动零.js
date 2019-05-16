"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
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
    let i = 0, j = 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjgzLuenu+WKqOmbti5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjgzLuenu+WKqOmbti50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7OztLQVdLO0FBQ0w7O0tBRUs7QUFDTDs7O0dBR0c7QUFDSCxJQUFJLFVBQVUsR0FBRyxVQUFVLElBQWM7SUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakIsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN6QixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDZixpREFBaUQ7WUFDakQsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZCO0tBQ0o7SUFDRCxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ3BCLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNqQjtBQUNMLENBQUMsQ0FBQztBQUdGLG9EQUE0QjtBQUU1QixNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzVCLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNuQixnQkFBTSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a5LiA5Liq5pWw57uEIG51bXPvvIznvJblhpnkuIDkuKrlh73mlbDlsIbmiYDmnIkgMCDnp7vliqjliLDmlbDnu4TnmoTmnKvlsL7vvIzlkIzml7bkv53mjIHpnZ7pm7blhYPntKDnmoTnm7jlr7npobrluo/jgIJcclxuXHJcbuekuuS+izpcclxuXHJcbui+k+WFpTogWzAsMSwwLDMsMTJdXHJcbui+k+WHujogWzEsMywxMiwwLDBdXHJcbuivtOaYjjpcclxuXHJcbuW/hemhu+WcqOWOn+aVsOe7hOS4iuaTjeS9nO+8jOS4jeiDveaLt+i0nemineWklueahOaVsOe7hOOAglxyXG7lsL3ph4/lh4/lsJHmk43kvZzmrKHmlbDjgIJcclxuICogKi9cclxuLyoqXHJcbiAqIOagueaNruaPkOiuruS4jeiDveS9v+eUqCDmlbDnu4TnmoQgZmlsdGVyIHNwbGljZSBzbGljZSDnrYnnlJ/miJDmlbDnu4TnmoTmlrnms5VcclxuICogKi9cclxuLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcclxuICogQHJldHVybiB7dm9pZH0gRG8gbm90IHJldHVybiBhbnl0aGluZywgbW9kaWZ5IG51bXMgaW4tcGxhY2UgaW5zdGVhZC5cclxuICovXHJcbnZhciBtb3ZlWmVyb2VzID0gZnVuY3Rpb24gKG51bXM6IG51bWJlcltdKSB7XHJcbiAgICBsZXQgaSA9IDAsIGogPSAwO1xyXG4gICAgZm9yICg7IGkgPCBudW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKG51bXNbaV0gIT09IDApIHtcclxuICAgICAgICAgICAgLy8gaiDkuLog6Zmk5Y67IDAg5ZCO55uu5qCH6IO9IGkg5LiL5qCH5LiN5Li6IDAg5pWw5o2uIOaUvuaVsOaNrueahOS9jee9rijmlbDmja7kuI3kuLogMCDkvJogKyAxKVxyXG4gICAgICAgICAgICBudW1zW2orK10gPSBudW1zW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHdoaWxlIChqIDwgbnVtcy5sZW5ndGgpIHtcclxuICAgICAgICBudW1zW2orK10gPSAwO1xyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuY29uc3Qgc2FtcGxlID0gWzEsIDAsIDAsIDFdO1xyXG5tb3ZlWmVyb2VzKHNhbXBsZSk7XHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoc2FtcGxlLCBbMSwgMSwgMCwgMF0pO1xyXG4iXX0=