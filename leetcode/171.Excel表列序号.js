"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个Excel表格中的列名称，返回其相应的列序号。

例如，

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28
    ...
示例 1:

输入: "A"
输出: 1
示例 2:

输入: "AB"
输出: 28
示例 3:

输入: "ZY"
输出: 701
* */
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
    return s.split("").reduceRight((pre, cur, index) => pre + (cur.charCodeAt(0) - 65 + 1) * (26 ** (s.length - 1 - index)), 0);
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(titleToNumber("AB"), 28);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcxLkV4Y2Vs6KGo5YiX5bqP5Y+3LmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xNzEuRXhjZWzooajliJfluo/lj7cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXlCSTtBQUNKOzs7R0FHRztBQUNILElBQUksYUFBYSxHQUFHLFVBQVUsQ0FBUztJQUNuQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUMvQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQ2pFLENBQUMsQ0FBQyxDQUFDO0FBQ2IsQ0FBQyxDQUFDO0FBR0Ysb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4gOS4qkV4Y2Vs6KGo5qC85Lit55qE5YiX5ZCN56ew77yM6L+U5Zue5YW255u45bqU55qE5YiX5bqP5Y+344CCXHJcblxyXG7kvovlpoLvvIxcclxuXHJcbiAgICBBIC0+IDFcclxuICAgIEIgLT4gMlxyXG4gICAgQyAtPiAzXHJcbiAgICAuLi5cclxuICAgIFogLT4gMjZcclxuICAgIEFBIC0+IDI3XHJcbiAgICBBQiAtPiAyOFxyXG4gICAgLi4uXHJcbuekuuS+iyAxOlxyXG5cclxu6L6T5YWlOiBcIkFcIlxyXG7ovpPlh7o6IDFcclxu56S65L6LIDI6XHJcblxyXG7ovpPlhaU6IFwiQUJcIlxyXG7ovpPlh7o6IDI4XHJcbuekuuS+iyAzOlxyXG5cclxu6L6T5YWlOiBcIlpZXCJcclxu6L6T5Ye6OiA3MDFcclxuKiAqL1xyXG4vKipcclxuICogQHBhcmFtIHtzdHJpbmd9IHNcclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cclxudmFyIHRpdGxlVG9OdW1iZXIgPSBmdW5jdGlvbiAoczogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gcy5zcGxpdChcIlwiKS5yZWR1Y2VSaWdodCgocHJlLCBjdXIsIGluZGV4KSA9PlxyXG4gICAgICAgIHByZSArIChjdXIuY2hhckNvZGVBdCgwKSAtIDY1ICsgMSkgKiAoMjYgKiogKHMubGVuZ3RoIC0gMSAtIGluZGV4KSlcclxuICAgICAgICAsIDApO1xyXG59O1xyXG5cclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKHRpdGxlVG9OdW1iZXIoXCJBQlwiKSwgMjgpO1xyXG4iXX0=