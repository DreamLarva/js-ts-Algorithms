"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDEyLkZpenpfQnV6ei5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDEyLkZpenpfQnV6ei50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBK0JJO0FBQ0o7OztHQUdHO0FBQ0gsSUFBSSxRQUFRLEdBQUcsVUFBVSxDQUFTO0lBQzlCLE1BQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN4QixTQUFTO1NBQ1o7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixTQUFTO1NBQ1o7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixTQUFTO1NBQ1o7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzFCO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsZUFBZSxDQUNsQixRQUFRLENBQUMsRUFBRSxDQUFDLEVBQ1o7SUFDSSxHQUFHO0lBQ0gsR0FBRztJQUNILE1BQU07SUFDTixHQUFHO0lBQ0gsTUFBTTtJQUNOLE1BQU07SUFDTixHQUFHO0lBQ0gsR0FBRztJQUNILE1BQU07SUFDTixNQUFNO0lBQ04sSUFBSTtJQUNKLE1BQU07SUFDTixJQUFJO0lBQ0osSUFBSTtJQUNKLFVBQVU7Q0FDYixDQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu5YaZ5LiA5Liq56iL5bqP77yM6L6T5Ye65LuOIDEg5YiwIG4g5pWw5a2X55qE5a2X56ym5Liy6KGo56S644CCXG5cbjEuIOWmguaenCBuIOaYrzPnmoTlgI3mlbDvvIzovpPlh7rigJxGaXp64oCd77ybXG5cbjIuIOWmguaenCBuIOaYrzXnmoTlgI3mlbDvvIzovpPlh7rigJxCdXp64oCd77ybXG5cbjMu5aaC5p6cIG4g5ZCM5pe25pivM+WSjDXnmoTlgI3mlbDvvIzovpPlh7og4oCcRml6ekJ1enrigJ3jgIJcblxu56S65L6L77yaXG5cbm4gPSAxNSxcblxu6L+U5ZueOlxuW1xuICAgIFwiMVwiLFxuICAgIFwiMlwiLFxuICAgIFwiRml6elwiLFxuICAgIFwiNFwiLFxuICAgIFwiQnV6elwiLFxuICAgIFwiRml6elwiLFxuICAgIFwiN1wiLFxuICAgIFwiOFwiLFxuICAgIFwiRml6elwiLFxuICAgIFwiQnV6elwiLFxuICAgIFwiMTFcIixcbiAgICBcIkZpenpcIixcbiAgICBcIjEzXCIsXG4gICAgXCIxNFwiLFxuICAgIFwiRml6ekJ1enpcIlxuXVxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gblxuICogQHJldHVybiB7c3RyaW5nW119XG4gKi9cbnZhciBmaXp6QnV6eiA9IGZ1bmN0aW9uIChuOiBudW1iZXIpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG47IGkrKykge1xuICAgICAgICBpZiAoaSAlIDMgPT09IDAgJiYgaSAlIDUgPT09IDApIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKFwiRml6ekJ1enpcIik7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSAlIDMgPT09IDApIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKFwiRml6elwiKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpICUgNSA9PT0gMCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goXCJCdXp6XCIpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQucHVzaChTdHJpbmcoaSkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXG4gICAgZml6ekJ1enooMTUpLFxuICAgIFtcbiAgICAgICAgXCIxXCIsXG4gICAgICAgIFwiMlwiLFxuICAgICAgICBcIkZpenpcIixcbiAgICAgICAgXCI0XCIsXG4gICAgICAgIFwiQnV6elwiLFxuICAgICAgICBcIkZpenpcIixcbiAgICAgICAgXCI3XCIsXG4gICAgICAgIFwiOFwiLFxuICAgICAgICBcIkZpenpcIixcbiAgICAgICAgXCJCdXp6XCIsXG4gICAgICAgIFwiMTFcIixcbiAgICAgICAgXCJGaXp6XCIsXG4gICAgICAgIFwiMTNcIixcbiAgICAgICAgXCIxNFwiLFxuICAgICAgICBcIkZpenpCdXp6XCIsXG4gICAgXSxcbik7XG4iXX0=