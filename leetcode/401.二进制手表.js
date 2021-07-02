"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*

二进制手表顶部有 4 个 LED 代表小时（0-11），底部的 6 个 LED 代表分钟（0-59）。

每个 LED 代表一个 0 或 1，最低位在右侧。



例如，上面的二进制手表读取 “3:25”。

给定一个非负整数 n 代表当前 LED 亮着的数量，返回所有可能的时间。

案例:

输入: n = 1
返回: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]


注意事项:

输出的顺序没有要求。
小时不会以零开头，比如 “01:00” 是不允许的，应为 “1:00”。
分钟必须由两位数组成，可能会以零开头，比如 “10:2” 是无效的，应为 “10:02”。
* */
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
function readBinaryWatch(turnedOn) {
    // 暴力
    // 因为无论什么输入 最多也就算 12 * 60 也就720次 是能够接受的
    const result = [];
    for (let hour = 0, minute = 0; hour <= 11;) {
        if (howManyOne(hour) + howManyOne(minute) === turnedOn) {
            result.push(`${hour}:${String(minute).padStart(2, "0")}`);
        }
        if (minute === 59) {
            minute = 0;
            hour++;
        }
        else {
            minute++;
        }
    }
    return result;
    function howManyOne(num) {
        let result = 0;
        while (num) {
            num % 2 === 1 && result++;
            num = Math.floor(num / 2);
        }
        return result;
    }
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(new Set(readBinaryWatch(1)), new Set([
    "1:00",
    "2:00",
    "4:00",
    "8:00",
    "0:01",
    "0:02",
    "0:04",
    "0:08",
    "0:16",
    "0:32",
]));
assert_1.default.deepStrictEqual(new Set(readBinaryWatch(0)), new Set(["0:00"]));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDAxLuS6jOi/m+WItuaJi+ihqC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDAxLuS6jOi/m+WItuaJi+ihqC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXVCSTtBQUNKOzs7R0FHRztBQUNILFNBQVMsZUFBZSxDQUFDLFFBQWdCO0lBQ3ZDLEtBQUs7SUFDTCx1Q0FBdUM7SUFDdkMsTUFBTSxNQUFNLEdBQWEsRUFBRSxDQUFDO0lBQzVCLEtBQUssSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDLEVBQUUsSUFBSSxJQUFJLEVBQUUsR0FBSTtRQUMzQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssUUFBUSxFQUFFO1lBQ3RELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzNEO1FBRUQsSUFBSSxNQUFNLEtBQUssRUFBRSxFQUFFO1lBQ2pCLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDWCxJQUFJLEVBQUUsQ0FBQztTQUNSO2FBQU07WUFDTCxNQUFNLEVBQUUsQ0FBQztTQUNWO0tBQ0Y7SUFDRCxPQUFPLE1BQU0sQ0FBQztJQUVkLFNBQVMsVUFBVSxDQUFDLEdBQVc7UUFDN0IsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsT0FBTyxHQUFHLEVBQUU7WUFDVixHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUMxQixHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDM0I7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0FBQ0gsQ0FBQztBQUVELG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsSUFBSSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQzNCLElBQUksR0FBRyxDQUFDO0lBQ04sTUFBTTtJQUNOLE1BQU07SUFDTixNQUFNO0lBQ04sTUFBTTtJQUNOLE1BQU07SUFDTixNQUFNO0lBQ04sTUFBTTtJQUNOLE1BQU07SUFDTixNQUFNO0lBQ04sTUFBTTtDQUNQLENBQUMsQ0FDSCxDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuXG7kuozov5vliLbmiYvooajpobbpg6jmnIkgNCDkuKogTEVEIOS7o+ihqOWwj+aXtu+8iDAtMTHvvInvvIzlupXpg6jnmoQgNiDkuKogTEVEIOS7o+ihqOWIhumSn++8iDAtNTnvvInjgIJcblxu5q+P5LiqIExFRCDku6PooajkuIDkuKogMCDmiJYgMe+8jOacgOS9juS9jeWcqOWPs+S+p+OAglxuXG5cblxu5L6L5aaC77yM5LiK6Z2i55qE5LqM6L+b5Yi25omL6KGo6K+75Y+WIOKAnDM6MjXigJ3jgIJcblxu57uZ5a6a5LiA5Liq6Z2e6LSf5pW05pWwIG4g5Luj6KGo5b2T5YmNIExFRCDkuq7nnYDnmoTmlbDph4/vvIzov5Tlm57miYDmnInlj6/og73nmoTml7bpl7TjgIJcblxu5qGI5L6LOlxuXG7ovpPlhaU6IG4gPSAxXG7ov5Tlm546IFtcIjE6MDBcIiwgXCIyOjAwXCIsIFwiNDowMFwiLCBcIjg6MDBcIiwgXCIwOjAxXCIsIFwiMDowMlwiLCBcIjA6MDRcIiwgXCIwOjA4XCIsIFwiMDoxNlwiLCBcIjA6MzJcIl1cblxuXG7ms6jmhI/kuovpobk6XG5cbui+k+WHuueahOmhuuW6j+ayoeacieimgeaxguOAglxu5bCP5pe25LiN5Lya5Lul6Zu25byA5aS077yM5q+U5aaCIOKAnDAxOjAw4oCdIOaYr+S4jeWFgeiuuOeahO+8jOW6lOS4uiDigJwxOjAw4oCd44CCXG7liIbpkp/lv4XpobvnlLHkuKTkvY3mlbDnu4TmiJDvvIzlj6/og73kvJrku6Xpm7blvIDlpLTvvIzmr5TlpoIg4oCcMTA6MuKAnSDmmK/ml6DmlYjnmoTvvIzlupTkuLog4oCcMTA6MDLigJ3jgIJcbiogKi9cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHR1cm5lZE9uXG4gKiBAcmV0dXJuIHtzdHJpbmdbXX1cbiAqL1xuZnVuY3Rpb24gcmVhZEJpbmFyeVdhdGNoKHR1cm5lZE9uOiBudW1iZXIpIHtcbiAgLy8g5pq05YqbXG4gIC8vIOWboOS4uuaXoOiuuuS7gOS5iOi+k+WFpSDmnIDlpJrkuZ/lsLHnrpcgMTIgKiA2MCDkuZ/lsLE3MjDmrKEg5piv6IO95aSf5o6l5Y+X55qEXG4gIGNvbnN0IHJlc3VsdDogc3RyaW5nW10gPSBbXTtcbiAgZm9yIChsZXQgaG91ciA9IDAsIG1pbnV0ZSA9IDA7IGhvdXIgPD0gMTE7ICkge1xuICAgIGlmIChob3dNYW55T25lKGhvdXIpICsgaG93TWFueU9uZShtaW51dGUpID09PSB0dXJuZWRPbikge1xuICAgICAgcmVzdWx0LnB1c2goYCR7aG91cn06JHtTdHJpbmcobWludXRlKS5wYWRTdGFydCgyLCBcIjBcIil9YCk7XG4gICAgfVxuXG4gICAgaWYgKG1pbnV0ZSA9PT0gNTkpIHtcbiAgICAgIG1pbnV0ZSA9IDA7XG4gICAgICBob3VyKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1pbnV0ZSsrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xuXG4gIGZ1bmN0aW9uIGhvd01hbnlPbmUobnVtOiBudW1iZXIpIHtcbiAgICBsZXQgcmVzdWx0ID0gMDtcbiAgICB3aGlsZSAobnVtKSB7XG4gICAgICBudW0gJSAyID09PSAxICYmIHJlc3VsdCsrO1xuICAgICAgbnVtID0gTWF0aC5mbG9vcihudW0gLyAyKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgbmV3IFNldChyZWFkQmluYXJ5V2F0Y2goMSkpLFxuICBuZXcgU2V0KFtcbiAgICBcIjE6MDBcIixcbiAgICBcIjI6MDBcIixcbiAgICBcIjQ6MDBcIixcbiAgICBcIjg6MDBcIixcbiAgICBcIjA6MDFcIixcbiAgICBcIjA6MDJcIixcbiAgICBcIjA6MDRcIixcbiAgICBcIjA6MDhcIixcbiAgICBcIjA6MTZcIixcbiAgICBcIjA6MzJcIixcbiAgXSlcbik7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKG5ldyBTZXQocmVhZEJpbmFyeVdhdGNoKDApKSwgbmV3IFNldChbXCIwOjAwXCJdKSk7XG4iXX0=