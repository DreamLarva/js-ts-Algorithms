"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。

示例 1:

输入: n = 12
输出: 3
解释: 12 = 4 + 4 + 4.
示例 2:

输入: n = 13
输出: 2
解释: 13 = 4 + 9.
* */
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    // 广度优先
    /**
     * 认为 这个数字 是一个图
     * 求最短路径
     * */
    const list = [];
    const visited = new Set();
    list.push([n, 0]);
    visited.add(n);
    while (list.length) {
        const [num, step] = list.shift();
        // 下一个连接的 节点是 当前节点 减去 i*i
        for (let i = 0; num - i * i >= 0; i++) {
            const a = num - i * i;
            if (a === 0)
                return step + 1;
            if (a < 0)
                break;
            if (!visited.has(a)) {
                list.push([a, step + 1]);
                visited.add(a);
            }
        }
    }
};


const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(numSquares(12), 3);
assert_1.default.strictEqual(numSquares(13), 2);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjc5LuWujOWFqOW5s+aWueaVsC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjc5LuWujOWFqOW5s+aWueaVsC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7O0lBYUk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLFVBQVUsR0FBRyxVQUFVLENBQVM7SUFDaEMsT0FBTztJQUNQOzs7U0FHSztJQUNMLE1BQU0sSUFBSSxHQUF1QixFQUFFLENBQUM7SUFDcEMsTUFBTSxPQUFPLEdBQWdCLElBQUksR0FBRyxFQUFFLENBQUM7SUFFdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDZixPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDaEIsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFHLENBQUM7UUFDbEMseUJBQXlCO1FBQ3pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNuQyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUFFLE9BQU8sSUFBSSxHQUFHLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUFFLE1BQU07WUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbEI7U0FDSjtLQUNKO0FBQ0wsQ0FBQyxDQUFDO0FBR0Ysb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUNkLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFDZCxDQUFDLENBQ0osQ0FBQztBQUNGLGdCQUFNLENBQUMsV0FBVyxDQUNkLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFDZCxDQUFDLENBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprmraPmlbTmlbAgbu+8jOaJvuWIsOiLpeW5suS4quWujOWFqOW5s+aWueaVsO+8iOavlOWmgiAxLCA0LCA5LCAxNiwgLi4u77yJ5L2/5b6X5a6D5Lus55qE5ZKM562J5LqOIG7jgILkvaDpnIDopoHorqnnu4TmiJDlkoznmoTlrozlhajlubPmlrnmlbDnmoTkuKrmlbDmnIDlsJHjgIJcblxu56S65L6LIDE6XG5cbui+k+WFpTogbiA9IDEyXG7ovpPlh7o6IDNcbuino+mHijogMTIgPSA0ICsgNCArIDQuXG7npLrkvosgMjpcblxu6L6T5YWlOiBuID0gMTNcbui+k+WHujogMlxu6Kej6YeKOiAxMyA9IDQgKyA5LlxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gblxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgbnVtU3F1YXJlcyA9IGZ1bmN0aW9uIChuOiBudW1iZXIpIHtcbiAgICAvLyDlub/luqbkvJjlhYhcbiAgICAvKipcbiAgICAgKiDorqTkuLog6L+Z5Liq5pWw5a2XIOaYr+S4gOS4quWbvlxuICAgICAqIOaxguacgOefrei3r+W+hFxuICAgICAqICovXG4gICAgY29uc3QgbGlzdDogW251bWJlciwgbnVtYmVyXVtdID0gW107XG4gICAgY29uc3QgdmlzaXRlZDogU2V0PG51bWJlcj4gPSBuZXcgU2V0KCk7XG5cbiAgICBsaXN0LnB1c2goW24sIDBdKTtcbiAgICB2aXNpdGVkLmFkZChuKTtcbiAgICB3aGlsZSAobGlzdC5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgW251bSwgc3RlcF0gPSBsaXN0LnNoaWZ0KCkhO1xuICAgICAgICAvLyDkuIvkuIDkuKrov57mjqXnmoQg6IqC54K55pivIOW9k+WJjeiKgueCuSDlh4/ljrsgaSppXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBudW0gLSBpICogaSA+PSAwOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGEgPSBudW0gLSBpICogaTtcbiAgICAgICAgICAgIGlmIChhID09PSAwKSByZXR1cm4gc3RlcCArIDE7XG4gICAgICAgICAgICBpZiAoYSA8IDApIGJyZWFrO1xuICAgICAgICAgICAgaWYgKCF2aXNpdGVkLmhhcyhhKSkge1xuICAgICAgICAgICAgICAgIGxpc3QucHVzaChbYSwgc3RlcCArIDFdKTtcbiAgICAgICAgICAgICAgICB2aXNpdGVkLmFkZChhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChcbiAgICBudW1TcXVhcmVzKDEyKSxcbiAgICAzLFxuKTtcbmFzc2VydC5zdHJpY3RFcXVhbChcbiAgICBudW1TcXVhcmVzKDEzKSxcbiAgICAyLFxuKTtcbiJdfQ==
