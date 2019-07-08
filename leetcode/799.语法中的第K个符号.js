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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzk5LuivreazleS4reeahOesrEvkuKrnrKblj7cuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzc5OS7or63ms5XkuK3nmoTnrKxL5Liq56ym5Y+3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQThCSTtBQUNKOzs7O0dBSUc7QUFDSCxJQUFJLFVBQVUsR0FBRyxVQUFVLENBQVMsRUFBRSxDQUFTO0lBQzNDLGtEQUFrRDtJQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEIsTUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hELElBQUksSUFBSSxLQUFLLENBQUMsRUFBRTtRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzlCO1NBQU07UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM5QjtBQUNMLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUc1QixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNoQixDQUFDLENBQ0osQ0FBQztBQUVGLGdCQUFNLENBQUMsV0FBVyxDQUNkLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQ2hCLENBQUMsQ0FDSixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDaEIsQ0FBQyxDQUNKLENBQUM7QUFHRixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUNoQixDQUFDLENBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbuWcqOesrOS4gOihjOaIkeS7rOWGmeS4iuS4gOS4qiAw44CC5o6l5LiL5p2l55qE5q+P5LiA6KGM77yM5bCG5YmN5LiA6KGM5Lit55qEMOabv+aNouS4ujAx77yMMeabv+aNouS4ujEw44CCXHJcblxyXG7nu5nlrprooYzmlbAgTiDlkozluo/mlbAgS++8jOi/lOWbnuesrCBOIOihjOS4reesrCBL5Liq5a2X56ym44CC77yIS+S7jjHlvIDlp4vvvIlcclxuXHJcblxyXG7kvovlrZA6XHJcblxyXG7ovpPlhaU6IE4gPSAxLCBLID0gMVxyXG7ovpPlh7o6IDBcclxuXHJcbui+k+WFpTogTiA9IDIsIEsgPSAxXHJcbui+k+WHujogMFxyXG5cclxu6L6T5YWlOiBOID0gMiwgSyA9IDJcclxu6L6T5Ye6OiAxXHJcblxyXG7ovpPlhaU6IE4gPSA0LCBLID0gNVxyXG7ovpPlh7o6IDFcclxuXHJcbuino+mHijpcclxu56ys5LiA6KGMOiAwXHJcbuesrOS6jOihjDogMDFcclxu56ys5LiJ6KGMOiAwMTEwXHJcbuesrOWbm+ihjDogMDExMDEwMDFcclxuXHJcbuazqOaEj++8mlxyXG5cclxuTiDnmoTojIPlm7QgWzEsIDMwXS5cclxuSyDnmoTojIPlm7QgWzEsIDJeKE4tMSldLlxyXG4qICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gTlxyXG4gKiBAcGFyYW0ge251bWJlcn0gS1xyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAqL1xyXG52YXIga3RoR3JhbW1hciA9IGZ1bmN0aW9uIChOOiBudW1iZXIsIEs6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAvLyBOIOihjCBLIOS4qiDlj5blhrPkuo4g56ysIE4gLSAxIOihjCBNYXRoLmZsb29yKChLICsgMSkvIDIpIOeahOWAvFxyXG4gICAgaWYgKE4gPT09IDEpIHJldHVybiAwO1xyXG4gICAgY29uc3QgbGFzdCA9IGt0aEdyYW1tYXIoTiAtIDEsIE1hdGguZmxvb3IoKEsgKyAxKSAvIDIpKTtcclxuICAgIGlmIChsYXN0ID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIEsgJSAyID09PSAxID8gMCA6IDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBLICUgMiA9PT0gMSA/IDEgOiAwO1xyXG4gICAgfVxyXG59O1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAga3RoR3JhbW1hcigxLCAxKSxcclxuICAgIDAsXHJcbik7XHJcblxyXG5hc3NlcnQuc3RyaWN0RXF1YWwoXHJcbiAgICBrdGhHcmFtbWFyKDIsIDEpLFxyXG4gICAgMCxcclxuKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAga3RoR3JhbW1hcigyLCAyKSxcclxuICAgIDEsXHJcbik7XHJcblxyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAga3RoR3JhbW1hcig0LCA1KSxcclxuICAgIDEsXHJcbik7XHJcblxyXG5cclxuZXhwb3J0IHt9O1xyXG4iXX0=