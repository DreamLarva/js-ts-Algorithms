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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDEyLkZpenpfQnV6ei5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDEyLkZpenpfQnV6ei50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBK0JJO0FBQ0o7OztHQUdHO0FBQ0gsSUFBSSxRQUFRLEdBQUcsVUFBVSxDQUFTO0lBQ2hDLE1BQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN4QixTQUFTO1NBQ1Y7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixTQUFTO1NBQ1Y7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixTQUFTO1NBQ1Y7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3hCO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRTtJQUNuQyxHQUFHO0lBQ0gsR0FBRztJQUNILE1BQU07SUFDTixHQUFHO0lBQ0gsTUFBTTtJQUNOLE1BQU07SUFDTixHQUFHO0lBQ0gsR0FBRztJQUNILE1BQU07SUFDTixNQUFNO0lBQ04sSUFBSTtJQUNKLE1BQU07SUFDTixJQUFJO0lBQ0osSUFBSTtJQUNKLFVBQVU7Q0FDWCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7lhpnkuIDkuKrnqIvluo/vvIzovpPlh7rku44gMSDliLAgbiDmlbDlrZfnmoTlrZfnrKbkuLLooajnpLrjgIJcclxuXHJcbjEuIOWmguaenCBuIOaYrzPnmoTlgI3mlbDvvIzovpPlh7rigJxGaXp64oCd77ybXHJcblxyXG4yLiDlpoLmnpwgbiDmmK8155qE5YCN5pWw77yM6L6T5Ye64oCcQnV6euKAne+8m1xyXG5cclxuMy7lpoLmnpwgbiDlkIzml7bmmK8z5ZKMNeeahOWAjeaVsO+8jOi+k+WHuiDigJxGaXp6QnV6euKAneOAglxyXG5cclxu56S65L6L77yaXHJcblxyXG5uID0gMTUsXHJcblxyXG7ov5Tlm546XHJcbltcclxuICAgIFwiMVwiLFxyXG4gICAgXCIyXCIsXHJcbiAgICBcIkZpenpcIixcclxuICAgIFwiNFwiLFxyXG4gICAgXCJCdXp6XCIsXHJcbiAgICBcIkZpenpcIixcclxuICAgIFwiN1wiLFxyXG4gICAgXCI4XCIsXHJcbiAgICBcIkZpenpcIixcclxuICAgIFwiQnV6elwiLFxyXG4gICAgXCIxMVwiLFxyXG4gICAgXCJGaXp6XCIsXHJcbiAgICBcIjEzXCIsXHJcbiAgICBcIjE0XCIsXHJcbiAgICBcIkZpenpCdXp6XCJcclxuXVxyXG4qICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gblxyXG4gKiBAcmV0dXJuIHtzdHJpbmdbXX1cclxuICovXHJcbnZhciBmaXp6QnV6eiA9IGZ1bmN0aW9uIChuOiBudW1iZXIpOiBzdHJpbmdbXSB7XHJcbiAgY29uc3QgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IG47IGkrKykge1xyXG4gICAgaWYgKGkgJSAzID09PSAwICYmIGkgJSA1ID09PSAwKSB7XHJcbiAgICAgIHJlc3VsdC5wdXNoKFwiRml6ekJ1enpcIik7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGkgJSAzID09PSAwKSB7XHJcbiAgICAgIHJlc3VsdC5wdXNoKFwiRml6elwiKTtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcbiAgICBpZiAoaSAlIDUgPT09IDApIHtcclxuICAgICAgcmVzdWx0LnB1c2goXCJCdXp6XCIpO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXN1bHQucHVzaChTdHJpbmcoaSkpO1xyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKGZpenpCdXp6KDE1KSwgW1xyXG4gIFwiMVwiLFxyXG4gIFwiMlwiLFxyXG4gIFwiRml6elwiLFxyXG4gIFwiNFwiLFxyXG4gIFwiQnV6elwiLFxyXG4gIFwiRml6elwiLFxyXG4gIFwiN1wiLFxyXG4gIFwiOFwiLFxyXG4gIFwiRml6elwiLFxyXG4gIFwiQnV6elwiLFxyXG4gIFwiMTFcIixcclxuICBcIkZpenpcIixcclxuICBcIjEzXCIsXHJcbiAgXCIxNFwiLFxyXG4gIFwiRml6ekJ1enpcIixcclxuXSk7XHJcbiJdfQ==