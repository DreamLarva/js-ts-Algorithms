"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
844. 比较含退格的字符串
给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。

注意：如果对空文本输入退格字符，文本继续为空。



示例 1：

输入：S = "ab#c", T = "ad#c"
输出：true
解释：S 和 T 都会变成 “ac”。
示例 2：

输入：S = "ab##", T = "c#d#"
输出：true
解释：S 和 T 都会变成 “”。
示例 3：

输入：S = "a##c", T = "#a#c"
输出：true
解释：S 和 T 都会变成 “c”。
示例 4：

输入：S = "a#c", T = "b"
输出：false
解释：S 会变成 “c”，但 T 仍然是 “b”。


提示：

1 <= S.length <= 200
1 <= T.length <= 200
S 和 T 只含有小写字母以及字符 '#'。


进阶：

你可以用 O(N) 的时间复杂度和 O(1) 的空间复杂度解决该问题吗？
* */
function backspaceCompare(S, T) {
  let S_i = S.length - 1;
  let S_d = 0;
  let T_i = T.length - 1;
  let T_d = 0;
  while (S_i >= 0 || T_i >= 0) {
    if (S_d > 0) {
      if (S[S_i] !== "#") {
        S_d--;
        S_i--;
        continue;
      }
    }
    if (S[S_i] === "#") {
      S_d++;
      S_i--;
      continue;
    }
    if (T_d > 0) {
      if (T[T_i] !== "#") {
        T_d--;
        T_i--;
        continue;
      }
    }
    if (T[T_i] === "#") {
      T_d++;
      T_i--;
      continue;
    }
    // S 和 T 的位置上都是非 # 的值
    if (T[T_i] === S[S_i]) {
      T_i--;
      S_i--;
    } else {
      return false;
    }
  }
  return true;
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(backspaceCompare("ab#c", "ad#c"), true);
assert_1.default.strictEqual(backspaceCompare("ab##", "c#d#"), true);
assert_1.default.strictEqual(backspaceCompare("a##c", "#a#c"), true);
assert_1.default.strictEqual(backspaceCompare("a#c", "b"), false);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODQ0LuavlOi+g+WQq+mAgOagvOeahOWtl+espuS4si5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvODQ0LuavlOi+g+WQq+mAgOagvOeahOWtl+espuS4si50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBd0NJO0FBQ0osU0FBUyxnQkFBZ0IsQ0FBQyxDQUFTLEVBQUUsQ0FBUztJQUM1QyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN2QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDWixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN2QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFFWixPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRTtRQUMzQixJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7WUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUU7Z0JBQ2xCLEdBQUcsRUFBRSxDQUFDO2dCQUNOLEdBQUcsRUFBRSxDQUFDO2dCQUNOLFNBQVM7YUFDVjtTQUNGO1FBRUQsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxFQUFFO1lBQ2xCLEdBQUcsRUFBRSxDQUFDO1lBQ04sR0FBRyxFQUFFLENBQUM7WUFDTixTQUFTO1NBQ1Y7UUFFRCxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7WUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUU7Z0JBQ2xCLEdBQUcsRUFBRSxDQUFDO2dCQUNOLEdBQUcsRUFBRSxDQUFDO2dCQUNOLFNBQVM7YUFDVjtTQUNGO1FBRUQsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxFQUFFO1lBQ2xCLEdBQUcsRUFBRSxDQUFDO1lBQ04sR0FBRyxFQUFFLENBQUM7WUFDTixTQUFTO1NBQ1Y7UUFFRCxxQkFBcUI7UUFDckIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLEdBQUcsRUFBRSxDQUFDO1lBQ04sR0FBRyxFQUFFLENBQUM7U0FDUDthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDO0FBRUQsb0RBQTRCO0FBQzVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMzRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDM0QsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzNELGdCQUFNLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG44NDQuIOavlOi+g+WQq+mAgOagvOeahOWtl+espuS4slxu57uZ5a6aIFMg5ZKMIFQg5Lik5Liq5a2X56ym5Liy77yM5b2T5a6D5Lus5YiG5Yir6KKr6L6T5YWl5Yiw56m655m955qE5paH5pys57yW6L6R5Zmo5ZCO77yM5Yik5pat5LqM6ICF5piv5ZCm55u4562J77yM5bm26L+U5Zue57uT5p6c44CCICMg5Luj6KGo6YCA5qC85a2X56ym44CCXG5cbuazqOaEj++8muWmguaenOWvueepuuaWh+acrOi+k+WFpemAgOagvOWtl+espu+8jOaWh+acrOe7p+e7reS4uuepuuOAglxuXG5cblxu56S65L6LIDHvvJpcblxu6L6T5YWl77yaUyA9IFwiYWIjY1wiLCBUID0gXCJhZCNjXCJcbui+k+WHuu+8mnRydWVcbuino+mHiu+8mlMg5ZKMIFQg6YO95Lya5Y+Y5oiQIOKAnGFj4oCd44CCXG7npLrkvosgMu+8mlxuXG7ovpPlhaXvvJpTID0gXCJhYiMjXCIsIFQgPSBcImMjZCNcIlxu6L6T5Ye677yadHJ1ZVxu6Kej6YeK77yaUyDlkowgVCDpg73kvJrlj5jmiJAg4oCc4oCd44CCXG7npLrkvosgM++8mlxuXG7ovpPlhaXvvJpTID0gXCJhIyNjXCIsIFQgPSBcIiNhI2NcIlxu6L6T5Ye677yadHJ1ZVxu6Kej6YeK77yaUyDlkowgVCDpg73kvJrlj5jmiJAg4oCcY+KAneOAglxu56S65L6LIDTvvJpcblxu6L6T5YWl77yaUyA9IFwiYSNjXCIsIFQgPSBcImJcIlxu6L6T5Ye677yaZmFsc2Vcbuino+mHiu+8mlMg5Lya5Y+Y5oiQIOKAnGPigJ3vvIzkvYYgVCDku43nhLbmmK8g4oCcYuKAneOAglxuXG5cbuaPkOekuu+8mlxuXG4xIDw9IFMubGVuZ3RoIDw9IDIwMFxuMSA8PSBULmxlbmd0aCA8PSAyMDBcblMg5ZKMIFQg5Y+q5ZCr5pyJ5bCP5YaZ5a2X5q+N5Lul5Y+K5a2X56ymICcjJ+OAglxuXG5cbui/m+mYtu+8mlxuXG7kvaDlj6/ku6XnlKggTyhOKSDnmoTml7bpl7TlpI3mnYLluqblkowgTygxKSDnmoTnqbrpl7TlpI3mnYLluqbop6PlhrPor6Xpl67popjlkJfvvJ9cbiogKi9cbmZ1bmN0aW9uIGJhY2tzcGFjZUNvbXBhcmUoUzogc3RyaW5nLCBUOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgbGV0IFNfaSA9IFMubGVuZ3RoIC0gMTtcbiAgbGV0IFNfZCA9IDA7XG4gIGxldCBUX2kgPSBULmxlbmd0aCAtIDE7XG4gIGxldCBUX2QgPSAwO1xuXG4gIHdoaWxlIChTX2kgPj0gMCB8fCBUX2kgPj0gMCkge1xuICAgIGlmIChTX2QgPiAwKSB7XG4gICAgICBpZiAoU1tTX2ldICE9PSBcIiNcIikge1xuICAgICAgICBTX2QtLTtcbiAgICAgICAgU19pLS07XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChTW1NfaV0gPT09IFwiI1wiKSB7XG4gICAgICBTX2QrKztcbiAgICAgIFNfaS0tO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKFRfZCA+IDApIHtcbiAgICAgIGlmIChUW1RfaV0gIT09IFwiI1wiKSB7XG4gICAgICAgIFRfZC0tO1xuICAgICAgICBUX2ktLTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFRbVF9pXSA9PT0gXCIjXCIpIHtcbiAgICAgIFRfZCsrO1xuICAgICAgVF9pLS07XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBTIOWSjCBUIOeahOS9jee9ruS4iumDveaYr+mdniAjIOeahOWAvFxuICAgIGlmIChUW1RfaV0gPT09IFNbU19pXSkge1xuICAgICAgVF9pLS07XG4gICAgICBTX2ktLTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcbmFzc2VydC5zdHJpY3RFcXVhbChiYWNrc3BhY2VDb21wYXJlKFwiYWIjY1wiLCBcImFkI2NcIiksIHRydWUpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGJhY2tzcGFjZUNvbXBhcmUoXCJhYiMjXCIsIFwiYyNkI1wiKSwgdHJ1ZSk7XG5hc3NlcnQuc3RyaWN0RXF1YWwoYmFja3NwYWNlQ29tcGFyZShcImEjI2NcIiwgXCIjYSNjXCIpLCB0cnVlKTtcbmFzc2VydC5zdHJpY3RFcXVhbChiYWNrc3BhY2VDb21wYXJlKFwiYSNjXCIsIFwiYlwiKSwgZmFsc2UpO1xuIl19
