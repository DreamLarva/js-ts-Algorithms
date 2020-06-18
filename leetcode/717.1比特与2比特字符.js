"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
717. 1比特与2比特字符
有两种特殊字符。第一种字符可以用一比特0来表示。第二种字符可以用两比特(10 或 11)来表示。

现给一个由若干比特组成的字符串。问最后一个字符是否必定为一个一比特字符。给定的字符串总是由0结束。

示例 1:

输入:
bits = [1, 0, 0]
输出: True
解释:
唯一的编码方式是一个两比特字符和一个一比特字符。所以最后一个字符是一比特字符。
示例 2:

输入:
bits = [1, 1, 1, 0]
输出: False
解释:
唯一的编码方式是两比特字符和两比特字符。所以最后一个字符不是一比特字符。
注意:

1 <= len(bits) <= 1000.
bits[i] 总是0 或 1.
通过次数16,744提交次数34,879
* */
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter1 = function (bits) {
    /**
     * 方法1 使用正则
     * */
    const reg = /^(1[1,0]|0)*0$/;
    return reg.test(bits.join(""));
};
var isOneBitCharacter2 = function (bits) {
    /**
     * 方法1 使用正则
     * */
    const reg = /^(1[1,0]|0)*0$/;
    return reg.test(bits.join(""));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzE3LjHmr5TnibnkuI4y5q+U54m55a2X56ymLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS83MTcuMeavlOeJueS4jjLmr5TnibnlrZfnrKYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXlCSTtBQUNKOzs7R0FHRztBQUNILElBQUksa0JBQWtCLEdBQUcsVUFBVSxJQUFlO0lBQ2hEOztTQUVLO0lBQ0wsTUFBTSxHQUFHLEdBQUcsZ0JBQWdCLENBQUM7SUFDN0IsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNqQyxDQUFDLENBQUM7QUFFRixJQUFJLGtCQUFrQixHQUFHLFVBQVUsSUFBZTtJQUNoRDs7U0FFSztJQUNMLE1BQU0sR0FBRyxHQUFHLGdCQUFnQixDQUFDO0lBQzdCLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbjcxNy4gMeavlOeJueS4jjLmr5TnibnlrZfnrKZcbuacieS4pOenjeeJueauiuWtl+espuOAguesrOS4gOenjeWtl+espuWPr+S7peeUqOS4gOavlOeJuTDmnaXooajnpLrjgILnrKzkuoznp43lrZfnrKblj6/ku6XnlKjkuKTmr5TnibkoMTAg5oiWIDExKeadpeihqOekuuOAglxuXG7njrDnu5nkuIDkuKrnlLHoi6XlubLmr5Tnibnnu4TmiJDnmoTlrZfnrKbkuLLjgILpl67mnIDlkI7kuIDkuKrlrZfnrKbmmK/lkKblv4XlrprkuLrkuIDkuKrkuIDmr5TnibnlrZfnrKbjgILnu5nlrprnmoTlrZfnrKbkuLLmgLvmmK/nlLEw57uT5p2f44CCXG5cbuekuuS+iyAxOlxuXG7ovpPlhaU6XG5iaXRzID0gWzEsIDAsIDBdXG7ovpPlh7o6IFRydWVcbuino+mHijpcbuWUr+S4gOeahOe8lueggeaWueW8j+aYr+S4gOS4quS4pOavlOeJueWtl+espuWSjOS4gOS4quS4gOavlOeJueWtl+espuOAguaJgOS7peacgOWQjuS4gOS4quWtl+espuaYr+S4gOavlOeJueWtl+espuOAglxu56S65L6LIDI6XG5cbui+k+WFpTpcbmJpdHMgPSBbMSwgMSwgMSwgMF1cbui+k+WHujogRmFsc2Vcbuino+mHijpcbuWUr+S4gOeahOe8lueggeaWueW8j+aYr+S4pOavlOeJueWtl+espuWSjOS4pOavlOeJueWtl+espuOAguaJgOS7peacgOWQjuS4gOS4quWtl+espuS4jeaYr+S4gOavlOeJueWtl+espuOAglxu5rOo5oSPOlxuXG4xIDw9IGxlbihiaXRzKSA8PSAxMDAwLlxuYml0c1tpXSDmgLvmmK8wIOaIliAxLlxu6YCa6L+H5qyh5pWwMTYsNzQ05o+Q5Lqk5qyh5pWwMzQsODc5XG4qICovXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW119IGJpdHNcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbnZhciBpc09uZUJpdENoYXJhY3RlcjEgPSBmdW5jdGlvbiAoYml0czogKDEgfCAwKVtdKSB7XG4gIC8qKlxuICAgKiDmlrnms5UxIOS9v+eUqOato+WImVxuICAgKiAqL1xuICBjb25zdCByZWcgPSAvXigxWzEsMF18MCkqMCQvO1xuICByZXR1cm4gcmVnLnRlc3QoYml0cy5qb2luKFwiXCIpKTtcbn07XG5cbnZhciBpc09uZUJpdENoYXJhY3RlcjIgPSBmdW5jdGlvbiAoYml0czogKDEgfCAwKVtdKSB7XG4gIC8qKlxuICAgKiDmlrnms5UxIOS9v+eUqOato+WImVxuICAgKiAqL1xuICBjb25zdCByZWcgPSAvXigxWzEsMF18MCkqMCQvO1xuICByZXR1cm4gcmVnLnRlc3QoYml0cy5qb2luKFwiXCIpKTtcbn07XG5cblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCJcblxuXG50eXBlIGEgPSBbMSxudW1iZXI/XVxuIl19