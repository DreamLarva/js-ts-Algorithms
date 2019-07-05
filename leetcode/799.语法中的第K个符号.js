"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
在第一行我们写上一个 0。接下来的每一行，将前一行中的0替换为01，1替换为10。

给定行数 N 和序数 K，返回第 N 行中第 K个字符。（K从1开始）


例子:

输入: N = 1, K = 1
输出: 0

输入: N = 2, K = 1
输出: 0

输入: N = 2, K = 2
输出: 1

输入: N = 4, K = 5
输出: 1

解释:
第一行: 0
第二行: 01
第三行: 0110
第四行: 01101001

注意：

N 的范围 [1, 30].
K 的范围 [1, 2^(N-1)].
* */
/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var kthGrammar = function (N, K) {
    let str = "0";
    for (let i = 1; i <= N; i++) {
        str = generate(str);
    }
    return str[K - 1];
    function generate(str) {
        return str.split("").map(v => v === "0" ? "01" : "10").join("");
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzk5LuivreazleS4reeahOesrEvkuKrnrKblj7cuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzc5OS7or63ms5XkuK3nmoTnrKxL5Liq56ym5Y+3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQThCSTtBQUNKOzs7O0dBSUc7QUFDSCxJQUFJLFVBQVUsR0FBRyxVQUFVLENBQVMsRUFBRSxDQUFTO0lBRTNDLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUcsQ0FBQyxFQUFFLEVBQUU7UUFDMUIsR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtLQUN0QjtJQUVELE9BQU8sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUVsQixTQUFTLFFBQVEsQ0FBQyxHQUFXO1FBQ3pCLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVwRSxDQUFDO0FBQ0wsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuWcqOesrOS4gOihjOaIkeS7rOWGmeS4iuS4gOS4qiAw44CC5o6l5LiL5p2l55qE5q+P5LiA6KGM77yM5bCG5YmN5LiA6KGM5Lit55qEMOabv+aNouS4ujAx77yMMeabv+aNouS4ujEw44CCXG5cbue7meWumuihjOaVsCBOIOWSjOW6j+aVsCBL77yM6L+U5Zue56ysIE4g6KGM5Lit56ysIEvkuKrlrZfnrKbjgILvvIhL5LuOMeW8gOWni++8iVxuXG5cbuS+i+WtkDpcblxu6L6T5YWlOiBOID0gMSwgSyA9IDFcbui+k+WHujogMFxuXG7ovpPlhaU6IE4gPSAyLCBLID0gMVxu6L6T5Ye6OiAwXG5cbui+k+WFpTogTiA9IDIsIEsgPSAyXG7ovpPlh7o6IDFcblxu6L6T5YWlOiBOID0gNCwgSyA9IDVcbui+k+WHujogMVxuXG7op6Pph4o6XG7nrKzkuIDooYw6IDBcbuesrOS6jOihjDogMDFcbuesrOS4ieihjDogMDExMFxu56ys5Zub6KGMOiAwMTEwMTAwMVxuXG7ms6jmhI/vvJpcblxuTiDnmoTojIPlm7QgWzEsIDMwXS5cbksg55qE6IyD5Zu0IFsxLCAyXihOLTEpXS5cbiogKi9cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IE5cbiAqIEBwYXJhbSB7bnVtYmVyfSBLXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBrdGhHcmFtbWFyID0gZnVuY3Rpb24gKE46IG51bWJlciwgSzogbnVtYmVyKTogc3RyaW5nIHtcblxuICAgIGxldCBzdHIgPSBcIjBcIjtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBOIDsgaSsrKSB7XG4gICAgICAgIHN0ciA9IGdlbmVyYXRlKHN0cilcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyW0sgLSAxXTtcblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlKHN0cjogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBzdHIuc3BsaXQoXCJcIikubWFwKHYgPT4gdiA9PT0gXCIwXCIgPyBcIjAxXCIgOiBcIjEwXCIpLmpvaW4oXCJcIik7XG5cbiAgICB9XG59O1xuXG5leHBvcnQge31cbiJdfQ==