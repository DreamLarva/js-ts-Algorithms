"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
写一个程序，输出从 1 到 n 数字的字符串表示。

1. 如果 n 是3的倍数，输出“Fizz”；

2. 如果 n 是5的倍数，输出“Buzz”；

3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。

示例：

n = 15,

返回:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
* */
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
      continue;
    }
    if (i % 3 === 0) {
      result.push("Fizz");
      continue;
    }
    if (i % 5 === 0) {
      result.push("Buzz");
      continue;
    }
    result.push(String(i));
  }
  return result;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(fizzBuzz(15), [
  "1",
  "2",
  "Fizz",
  "4",
  "Buzz",
  "Fizz",
  "7",
  "8",
  "Fizz",
  "Buzz",
  "11",
  "Fizz",
  "13",
  "14",
  "FizzBuzz",
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDEyLkZpenpfQnV6ei5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDEyLkZpenpfQnV6ei50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBK0JJO0FBQ0o7OztHQUdHO0FBQ0gsSUFBSSxRQUFRLEdBQUcsVUFBVSxDQUFTO0lBQ2hDLE1BQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN4QixTQUFTO1NBQ1Y7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixTQUFTO1NBQ1Y7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixTQUFTO1NBQ1Y7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3hCO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUNuQyxHQUFHO0lBQ0gsR0FBRztJQUNILE1BQU07SUFDTixHQUFHO0lBQ0gsTUFBTTtJQUNOLE1BQU07SUFDTixHQUFHO0lBQ0gsR0FBRztJQUNILE1BQU07SUFDTixNQUFNO0lBQ04sSUFBSTtJQUNKLE1BQU07SUFDTixJQUFJO0lBQ0osSUFBSTtJQUNKLFVBQVU7Q0FDWCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu5YaZ5LiA5Liq56iL5bqP77yM6L6T5Ye65LuOIDEg5YiwIG4g5pWw5a2X55qE5a2X56ym5Liy6KGo56S644CCXG5cbjEuIOWmguaenCBuIOaYrzPnmoTlgI3mlbDvvIzovpPlh7rigJxGaXp64oCd77ybXG5cbjIuIOWmguaenCBuIOaYrzXnmoTlgI3mlbDvvIzovpPlh7rigJxCdXp64oCd77ybXG5cbjMu5aaC5p6cIG4g5ZCM5pe25pivM+WSjDXnmoTlgI3mlbDvvIzovpPlh7og4oCcRml6ekJ1enrigJ3jgIJcblxu56S65L6L77yaXG5cbm4gPSAxNSxcblxu6L+U5ZueOlxuW1xuICAgIFwiMVwiLFxuICAgIFwiMlwiLFxuICAgIFwiRml6elwiLFxuICAgIFwiNFwiLFxuICAgIFwiQnV6elwiLFxuICAgIFwiRml6elwiLFxuICAgIFwiN1wiLFxuICAgIFwiOFwiLFxuICAgIFwiRml6elwiLFxuICAgIFwiQnV6elwiLFxuICAgIFwiMTFcIixcbiAgICBcIkZpenpcIixcbiAgICBcIjEzXCIsXG4gICAgXCIxNFwiLFxuICAgIFwiRml6ekJ1enpcIlxuXVxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gblxuICogQHJldHVybiB7c3RyaW5nW119XG4gKi9cbnZhciBmaXp6QnV6eiA9IGZ1bmN0aW9uIChuOiBudW1iZXIpOiBzdHJpbmdbXSB7XG4gIGNvbnN0IHJlc3VsdDogc3RyaW5nW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbjsgaSsrKSB7XG4gICAgaWYgKGkgJSAzID09PSAwICYmIGkgJSA1ID09PSAwKSB7XG4gICAgICByZXN1bHQucHVzaChcIkZpenpCdXp6XCIpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChpICUgMyA9PT0gMCkge1xuICAgICAgcmVzdWx0LnB1c2goXCJGaXp6XCIpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChpICUgNSA9PT0gMCkge1xuICAgICAgcmVzdWx0LnB1c2goXCJCdXp6XCIpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmVzdWx0LnB1c2goU3RyaW5nKGkpKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoZml6ekJ1enooMTUpLCBbXG4gIFwiMVwiLFxuICBcIjJcIixcbiAgXCJGaXp6XCIsXG4gIFwiNFwiLFxuICBcIkJ1enpcIixcbiAgXCJGaXp6XCIsXG4gIFwiN1wiLFxuICBcIjhcIixcbiAgXCJGaXp6XCIsXG4gIFwiQnV6elwiLFxuICBcIjExXCIsXG4gIFwiRml6elwiLFxuICBcIjEzXCIsXG4gIFwiMTRcIixcbiAgXCJGaXp6QnV6elwiLFxuXSk7XG4iXX0=
