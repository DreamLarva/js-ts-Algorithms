"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
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
  return s
    .split("")
    .reduceRight(
      (pre, cur, index) =>
        pre + (cur.charCodeAt(0) - 65 + 1) * 26 ** (s.length - 1 - index),
      0
    );
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(titleToNumber("AB"), 28);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcxLkV4Y2Vs6KGo5YiX5bqP5Y+3LmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xNzEuRXhjZWzooajliJfluo/lj7cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXlCSTtBQUNKOzs7R0FHRztBQUNILElBQUksYUFBYSxHQUFHLFVBQVUsQ0FBUztJQUNuQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUMvQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQ2pFLENBQUMsQ0FBQyxDQUFDO0FBQ2IsQ0FBQyxDQUFDO0FBR0Ysb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKpFeGNlbOihqOagvOS4reeahOWIl+WQjeensO+8jOi/lOWbnuWFtuebuOW6lOeahOWIl+W6j+WPt+OAglxuXG7kvovlpoLvvIxcblxuICAgIEEgLT4gMVxuICAgIEIgLT4gMlxuICAgIEMgLT4gM1xuICAgIC4uLlxuICAgIFogLT4gMjZcbiAgICBBQSAtPiAyN1xuICAgIEFCIC0+IDI4XG4gICAgLi4uXG7npLrkvosgMTpcblxu6L6T5YWlOiBcIkFcIlxu6L6T5Ye6OiAxXG7npLrkvosgMjpcblxu6L6T5YWlOiBcIkFCXCJcbui+k+WHujogMjhcbuekuuS+iyAzOlxuXG7ovpPlhaU6IFwiWllcIlxu6L6T5Ye6OiA3MDFcbiogKi9cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHNcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIHRpdGxlVG9OdW1iZXIgPSBmdW5jdGlvbiAoczogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHMuc3BsaXQoXCJcIikucmVkdWNlUmlnaHQoKHByZSwgY3VyLCBpbmRleCkgPT5cbiAgICAgICAgcHJlICsgKGN1ci5jaGFyQ29kZUF0KDApIC0gNjUgKyAxKSAqICgyNiAqKiAocy5sZW5ndGggLSAxIC0gaW5kZXgpKVxuICAgICAgICAsIDApO1xufTtcblxuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKHRpdGxlVG9OdW1iZXIoXCJBQlwiKSwgMjgpO1xuIl19
