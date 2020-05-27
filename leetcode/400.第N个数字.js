"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
在无限的整数序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...中找到第 n 个数字。

注意:
n 是正数且在32为整形范围内 ( n < 231)。

示例 1:

输入:
3

输出:
3
示例 2:

输入:
11

输出:
0

说明:
第11个数字在序列 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... 里是0，它是10的一部分。
* */
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
    if (n < 10)
        return n;
    /**
     * 0 - 9 共 9 个数
     * 10 - 99 共 90 个数
     * 100 - 999 共 900 个数
     * 以此类推 可以得到 数字 在哪个区段
     * 直列抹平 之前位数的干扰 (如果 n 为4 位数 现在 n - 900 就知道 是从 1000 开始的第几个数)
     * */
    n--; // 因为现在包括0 而原先不包括
    let digit = 1;
    while (9 * 10 ** (digit - 1) * digit <= n) {
        n -= 9 * 10 ** (digit - 1) * digit;
        digit++;
    }
    const first = 10 ** (digit - 1);
    // first为n所属组的第一个数，
    // n / digits当前组的第几个数 (比如4位数 那么每4个数 实际数值 + 1)
    // n % digits为这个数的第几位
    return Number(String(first + Math.trunc(n / digit))[n % digit]);
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(findNthDigit(9), 9);
assert_1.default.strictEqual(findNthDigit(10), 1);
assert_1.default.strictEqual(findNthDigit(11), 0);
assert_1.default.strictEqual(findNthDigit(190), 1);
assert_1.default.strictEqual(findNthDigit(192), 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDAwLuesrE7kuKrmlbDlrZcuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzQwMC7nrKxO5Liq5pWw5a2XLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBdUJJO0FBQ0o7OztHQUdHO0FBQ0gsSUFBSSxZQUFZLEdBQUcsVUFBVSxDQUFTO0lBQ3BDLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyQjs7Ozs7O1NBTUs7SUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQjtJQUN0QixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDZCxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsRUFBRTtRQUN6QyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDbkMsS0FBSyxFQUFFLENBQUM7S0FDVDtJQUVELE1BQU0sS0FBSyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztJQUVoQyxtQkFBbUI7SUFDbkIsNkNBQTZDO0lBQzdDLHFCQUFxQjtJQUNyQixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDbEUsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2QyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEMsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLGdCQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6QyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7lnKjml6DpmZDnmoTmlbTmlbDluo/liJcgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAuLi7kuK3mib7liLDnrKwgbiDkuKrmlbDlrZfjgIJcclxuXHJcbuazqOaEjzpcclxubiDmmK/mraPmlbDkuJTlnKgzMuS4uuaVtOW9ouiMg+WbtOWGhSAoIG4gPCAyMzEp44CCXHJcblxyXG7npLrkvosgMTpcclxuXHJcbui+k+WFpTpcclxuM1xyXG5cclxu6L6T5Ye6OlxyXG4zXHJcbuekuuS+iyAyOlxyXG5cclxu6L6T5YWlOlxyXG4xMVxyXG5cclxu6L6T5Ye6OlxyXG4wXHJcblxyXG7or7TmmI46XHJcbuesrDEx5Liq5pWw5a2X5Zyo5bqP5YiXIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgLi4uIOmHjOaYrzDvvIzlroPmmK8xMOeahOS4gOmDqOWIhuOAglxyXG4qICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gblxyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAqL1xyXG52YXIgZmluZE50aERpZ2l0ID0gZnVuY3Rpb24gKG46IG51bWJlcikge1xyXG4gIGlmIChuIDwgMTApIHJldHVybiBuO1xyXG4gIC8qKlxyXG4gICAqIDAgLSA5IOWFsSA5IOS4quaVsFxyXG4gICAqIDEwIC0gOTkg5YWxIDkwIOS4quaVsFxyXG4gICAqIDEwMCAtIDk5OSDlhbEgOTAwIOS4quaVsFxyXG4gICAqIOS7peatpOexu+aOqCDlj6/ku6XlvpfliLAg5pWw5a2XIOWcqOWTquS4quWMuuautVxyXG4gICAqIOebtOWIl+aKueW5syDkuYvliY3kvY3mlbDnmoTlubLmibAgKOWmguaenCBuIOS4ujQg5L2N5pWwIOeOsOWcqCBuIC0gOTAwIOWwseefpemBkyDmmK/ku44gMTAwMCDlvIDlp4vnmoTnrKzlh6DkuKrmlbApXHJcbiAgICogKi9cclxuICBuLS07IC8vIOWboOS4uueOsOWcqOWMheaLrDAg6ICM5Y6f5YWI5LiN5YyF5ousXHJcbiAgbGV0IGRpZ2l0ID0gMTtcclxuICB3aGlsZSAoOSAqIDEwICoqIChkaWdpdCAtIDEpICogZGlnaXQgPD0gbikge1xyXG4gICAgbiAtPSA5ICogMTAgKiogKGRpZ2l0IC0gMSkgKiBkaWdpdDtcclxuICAgIGRpZ2l0Kys7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmaXJzdCA9IDEwICoqIChkaWdpdCAtIDEpO1xyXG5cclxuICAvLyBmaXJzdOS4um7miYDlsZ7nu4TnmoTnrKzkuIDkuKrmlbDvvIxcclxuICAvLyBuIC8gZGlnaXRz5b2T5YmN57uE55qE56ys5Yeg5Liq5pWwICjmr5TlpoI05L2N5pWwIOmCo+S5iOavjzTkuKrmlbAg5a6e6ZmF5pWw5YC8ICsgMSlcclxuICAvLyBuICUgZGlnaXRz5Li66L+Z5Liq5pWw55qE56ys5Yeg5L2NXHJcbiAgcmV0dXJuIE51bWJlcihTdHJpbmcoZmlyc3QgKyBNYXRoLnRydW5jKG4gLyBkaWdpdCkpW24gJSBkaWdpdF0pO1xyXG59O1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5hc3NlcnQuc3RyaWN0RXF1YWwoZmluZE50aERpZ2l0KDkpLCA5KTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKGZpbmROdGhEaWdpdCgxMCksIDEpO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoZmluZE50aERpZ2l0KDExKSwgMCk7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChmaW5kTnRoRGlnaXQoMTkwKSwgMSk7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChmaW5kTnRoRGlnaXQoMTkyKSwgMCk7XHJcbiJdfQ==