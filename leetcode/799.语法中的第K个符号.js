"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
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
  if (N === 1) return 0;
  const last = kthGrammar(N - 1, Math.floor((K + 1) / 2));
  if (last === 0) {
    return K % 2 === 1 ? 0 : 1;
  } else {
    return K % 2 === 1 ? 1 : 0;
  }
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(kthGrammar(1, 1), 0);
assert_1.default.strictEqual(kthGrammar(2, 1), 0);
assert_1.default.strictEqual(kthGrammar(2, 2), 1);
assert_1.default.strictEqual(kthGrammar(4, 5), 1);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzk5LuivreazleS4reeahOesrEvkuKrnrKblj7cuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzc5OS7or63ms5XkuK3nmoTnrKxL5Liq56ym5Y+3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQThCSTtBQUNKOzs7O0dBSUc7QUFDSCxJQUFJLFVBQVUsR0FBRyxVQUFVLENBQVMsRUFBRSxDQUFTO0lBQzdDLGtEQUFrRDtJQUNsRCxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxDQUFDLENBQUM7SUFDdEIsTUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hELElBQUksSUFBSSxLQUFLLENBQUMsRUFBRTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzVCO1NBQU07UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUM1QjtBQUNILENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRXhDLGdCQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEMsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUV4QyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuWcqOesrOS4gOihjOaIkeS7rOWGmeS4iuS4gOS4qiAw44CC5o6l5LiL5p2l55qE5q+P5LiA6KGM77yM5bCG5YmN5LiA6KGM5Lit55qEMOabv+aNouS4ujAx77yMMeabv+aNouS4ujEw44CCXG5cbue7meWumuihjOaVsCBOIOWSjOW6j+aVsCBL77yM6L+U5Zue56ysIE4g6KGM5Lit56ysIEvkuKrlrZfnrKbjgILvvIhL5LuOMeW8gOWni++8iVxuXG5cbuS+i+WtkDpcblxu6L6T5YWlOiBOID0gMSwgSyA9IDFcbui+k+WHujogMFxuXG7ovpPlhaU6IE4gPSAyLCBLID0gMVxu6L6T5Ye6OiAwXG5cbui+k+WFpTogTiA9IDIsIEsgPSAyXG7ovpPlh7o6IDFcblxu6L6T5YWlOiBOID0gNCwgSyA9IDVcbui+k+WHujogMVxuXG7op6Pph4o6XG7nrKzkuIDooYw6IDBcbuesrOS6jOihjDogMDFcbuesrOS4ieihjDogMDExMFxu56ys5Zub6KGMOiAwMTEwMTAwMVxuXG7ms6jmhI/vvJpcblxuTiDnmoTojIPlm7QgWzEsIDMwXS5cbksg55qE6IyD5Zu0IFsxLCAyXihOLTEpXS5cbiogKi9cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IE5cbiAqIEBwYXJhbSB7bnVtYmVyfSBLXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBrdGhHcmFtbWFyID0gZnVuY3Rpb24gKE46IG51bWJlciwgSzogbnVtYmVyKTogbnVtYmVyIHtcbiAgLy8gTiDooYwgSyDkuKog5Y+W5Yaz5LqOIOesrCBOIC0gMSDooYwgTWF0aC5mbG9vcigoSyArIDEpLyAyKSDnmoTlgLxcbiAgaWYgKE4gPT09IDEpIHJldHVybiAwO1xuICBjb25zdCBsYXN0ID0ga3RoR3JhbW1hcihOIC0gMSwgTWF0aC5mbG9vcigoSyArIDEpIC8gMikpO1xuICBpZiAobGFzdCA9PT0gMCkge1xuICAgIHJldHVybiBLICUgMiA9PT0gMSA/IDAgOiAxO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBLICUgMiA9PT0gMSA/IDEgOiAwO1xuICB9XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKGt0aEdyYW1tYXIoMSwgMSksIDApO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoa3RoR3JhbW1hcigyLCAxKSwgMCk7XG5hc3NlcnQuc3RyaWN0RXF1YWwoa3RoR3JhbW1hcigyLCAyKSwgMSk7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChrdGhHcmFtbWFyKDQsIDUpLCAxKTtcblxuZXhwb3J0IHt9O1xuIl19
