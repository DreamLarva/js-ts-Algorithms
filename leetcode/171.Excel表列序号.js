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
    return s
        .split("")
        .reduceRight((pre, cur, index) => pre + (cur.charCodeAt(0) - 65 + 1) * 26 ** (s.length - 1 - index), 0);
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(titleToNumber("AB"), 28);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcxLkV4Y2Vs6KGo5YiX5bqP5Y+3LmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xNzEuRXhjZWzooajliJfluo/lj7cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXlCSTtBQUNKOzs7R0FHRztBQUNILElBQUksYUFBYSxHQUFHLFVBQVUsQ0FBUztJQUNyQyxPQUFPLENBQUM7U0FDTCxLQUFLLENBQUMsRUFBRSxDQUFDO1NBQ1QsV0FBVyxDQUNWLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUNsQixHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsRUFDbkUsQ0FBQyxDQUNGLENBQUM7QUFDTixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4qkV4Y2Vs6KGo5qC85Lit55qE5YiX5ZCN56ew77yM6L+U5Zue5YW255u45bqU55qE5YiX5bqP5Y+344CCXG5cbuS+i+Wmgu+8jFxuXG4gICAgQSAtPiAxXG4gICAgQiAtPiAyXG4gICAgQyAtPiAzXG4gICAgLi4uXG4gICAgWiAtPiAyNlxuICAgIEFBIC0+IDI3XG4gICAgQUIgLT4gMjhcbiAgICAuLi5cbuekuuS+iyAxOlxuXG7ovpPlhaU6IFwiQVwiXG7ovpPlh7o6IDFcbuekuuS+iyAyOlxuXG7ovpPlhaU6IFwiQUJcIlxu6L6T5Ye6OiAyOFxu56S65L6LIDM6XG5cbui+k+WFpTogXCJaWVwiXG7ovpPlh7o6IDcwMVxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gc1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgdGl0bGVUb051bWJlciA9IGZ1bmN0aW9uIChzOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHNcbiAgICAuc3BsaXQoXCJcIilcbiAgICAucmVkdWNlUmlnaHQoXG4gICAgICAocHJlLCBjdXIsIGluZGV4KSA9PlxuICAgICAgICBwcmUgKyAoY3VyLmNoYXJDb2RlQXQoMCkgLSA2NSArIDEpICogMjYgKiogKHMubGVuZ3RoIC0gMSAtIGluZGV4KSxcbiAgICAgIDBcbiAgICApO1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5zdHJpY3RFcXVhbCh0aXRsZVRvTnVtYmVyKFwiQUJcIiksIDI4KTtcbiJdfQ==