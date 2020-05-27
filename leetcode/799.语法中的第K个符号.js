"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
    // N 行 K 个 取决于 第 N - 1 行 Math.floor((K + 1)/ 2) 的值
    if (N === 1)
        return 0;
    const last = kthGrammar(N - 1, Math.floor((K + 1) / 2));
    if (last === 0) {
        return K % 2 === 1 ? 0 : 1;
    }
    else {
        return K % 2 === 1 ? 1 : 0;
    }
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(kthGrammar(1, 1), 0);
assert_1.default.strictEqual(kthGrammar(2, 1), 0);
assert_1.default.strictEqual(kthGrammar(2, 2), 1);
assert_1.default.strictEqual(kthGrammar(4, 5), 1);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzk5LuivreazleS4reeahOesrEvkuKrnrKblj7cuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzc5OS7or63ms5XkuK3nmoTnrKxL5Liq56ym5Y+3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQThCSTtBQUNKOzs7O0dBSUc7QUFDSCxJQUFJLFVBQVUsR0FBRyxVQUFVLENBQVMsRUFBRSxDQUFTO0lBQzdDLGtEQUFrRDtJQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEIsTUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hELElBQUksSUFBSSxLQUFLLENBQUMsRUFBRTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzVCO1NBQU07UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM1QjtBQUNILENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRXhDLGdCQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEMsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUV4QyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu5Zyo56ys5LiA6KGM5oiR5Lus5YaZ5LiK5LiA5LiqIDDjgILmjqXkuIvmnaXnmoTmr4/kuIDooYzvvIzlsIbliY3kuIDooYzkuK3nmoQw5pu/5o2i5Li6MDHvvIwx5pu/5o2i5Li6MTDjgIJcclxuXHJcbue7meWumuihjOaVsCBOIOWSjOW6j+aVsCBL77yM6L+U5Zue56ysIE4g6KGM5Lit56ysIEvkuKrlrZfnrKbjgILvvIhL5LuOMeW8gOWni++8iVxyXG5cclxuXHJcbuS+i+WtkDpcclxuXHJcbui+k+WFpTogTiA9IDEsIEsgPSAxXHJcbui+k+WHujogMFxyXG5cclxu6L6T5YWlOiBOID0gMiwgSyA9IDFcclxu6L6T5Ye6OiAwXHJcblxyXG7ovpPlhaU6IE4gPSAyLCBLID0gMlxyXG7ovpPlh7o6IDFcclxuXHJcbui+k+WFpTogTiA9IDQsIEsgPSA1XHJcbui+k+WHujogMVxyXG5cclxu6Kej6YeKOlxyXG7nrKzkuIDooYw6IDBcclxu56ys5LqM6KGMOiAwMVxyXG7nrKzkuInooYw6IDAxMTBcclxu56ys5Zub6KGMOiAwMTEwMTAwMVxyXG5cclxu5rOo5oSP77yaXHJcblxyXG5OIOeahOiMg+WbtCBbMSwgMzBdLlxyXG5LIOeahOiMg+WbtCBbMSwgMl4oTi0xKV0uXHJcbiogKi9cclxuLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBOXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBLXHJcbiAqIEByZXR1cm4ge251bWJlcn1cclxuICovXHJcbnZhciBrdGhHcmFtbWFyID0gZnVuY3Rpb24gKE46IG51bWJlciwgSzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAvLyBOIOihjCBLIOS4qiDlj5blhrPkuo4g56ysIE4gLSAxIOihjCBNYXRoLmZsb29yKChLICsgMSkvIDIpIOeahOWAvFxyXG4gIGlmIChOID09PSAxKSByZXR1cm4gMDtcclxuICBjb25zdCBsYXN0ID0ga3RoR3JhbW1hcihOIC0gMSwgTWF0aC5mbG9vcigoSyArIDEpIC8gMikpO1xyXG4gIGlmIChsYXN0ID09PSAwKSB7XHJcbiAgICByZXR1cm4gSyAlIDIgPT09IDEgPyAwIDogMTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIEsgJSAyID09PSAxID8gMSA6IDA7XHJcbiAgfVxyXG59O1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5hc3NlcnQuc3RyaWN0RXF1YWwoa3RoR3JhbW1hcigxLCAxKSwgMCk7XHJcblxyXG5hc3NlcnQuc3RyaWN0RXF1YWwoa3RoR3JhbW1hcigyLCAxKSwgMCk7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChrdGhHcmFtbWFyKDIsIDIpLCAxKTtcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChrdGhHcmFtbWFyKDQsIDUpLCAxKTtcclxuXHJcbmV4cG9ydCB7fTtcclxuIl19