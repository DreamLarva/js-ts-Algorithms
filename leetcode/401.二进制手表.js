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
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function (num) {
    // 暴力
    // 因为无论什么输入 最多也就算 12 * 60 也就720次 是能够接受的
    const result = [];
    for (let hour = 0, minute = 0; hour <= 11;) {
        if (howManyOne(hour) + howManyOne(minute) === num) {
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
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(new Set(readBinaryWatch(1)), new Set(["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]));
assert_1.default.deepStrictEqual(new Set(readBinaryWatch(0)), new Set(["0:00"]));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDAxLuS6jOi/m+WItuaJi+ihqC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDAxLuS6jOi/m+WItuaJi+ihqC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXVCSTtBQUNKOzs7R0FHRztBQUNILElBQUksZUFBZSxHQUFHLFVBQVUsR0FBVztJQUN2QyxLQUFLO0lBQ0wsdUNBQXVDO0lBQ3ZDLE1BQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUM1QixLQUFLLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLElBQUksSUFBSSxFQUFFLEdBQUc7UUFDeEMsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUMvQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM3RDtRQUVELElBQUksTUFBTSxLQUFLLEVBQUUsRUFBRTtZQUNmLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDWCxJQUFJLEVBQUUsQ0FBQztTQUNWO2FBQU07WUFDSCxNQUFNLEVBQUUsQ0FBQztTQUNaO0tBQ0o7SUFDRCxPQUFPLE1BQU0sQ0FBQztJQUVkLFNBQVMsVUFBVSxDQUFDLEdBQVc7UUFDM0IsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsT0FBTyxHQUFHLEVBQUU7WUFDUixHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUMxQixHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDN0I7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0FBRUwsQ0FBQyxDQUFDO0FBR0Ysb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsZUFBZSxDQUNsQixJQUFJLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDM0IsSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUM1RixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLElBQUksR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUMzQixJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQ3BCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuXG7kuozov5vliLbmiYvooajpobbpg6jmnIkgNCDkuKogTEVEIOS7o+ihqOWwj+aXtu+8iDAtMTHvvInvvIzlupXpg6jnmoQgNiDkuKogTEVEIOS7o+ihqOWIhumSn++8iDAtNTnvvInjgIJcblxu5q+P5LiqIExFRCDku6PooajkuIDkuKogMCDmiJYgMe+8jOacgOS9juS9jeWcqOWPs+S+p+OAglxuXG5cblxu5L6L5aaC77yM5LiK6Z2i55qE5LqM6L+b5Yi25omL6KGo6K+75Y+WIOKAnDM6MjXigJ3jgIJcblxu57uZ5a6a5LiA5Liq6Z2e6LSf5pW05pWwIG4g5Luj6KGo5b2T5YmNIExFRCDkuq7nnYDnmoTmlbDph4/vvIzov5Tlm57miYDmnInlj6/og73nmoTml7bpl7TjgIJcblxu5qGI5L6LOlxuXG7ovpPlhaU6IG4gPSAxXG7ov5Tlm546IFtcIjE6MDBcIiwgXCIyOjAwXCIsIFwiNDowMFwiLCBcIjg6MDBcIiwgXCIwOjAxXCIsIFwiMDowMlwiLCBcIjA6MDRcIiwgXCIwOjA4XCIsIFwiMDoxNlwiLCBcIjA6MzJcIl1cblxuXG7ms6jmhI/kuovpobk6XG5cbui+k+WHuueahOmhuuW6j+ayoeacieimgeaxguOAglxu5bCP5pe25LiN5Lya5Lul6Zu25byA5aS077yM5q+U5aaCIOKAnDAxOjAw4oCdIOaYr+S4jeWFgeiuuOeahO+8jOW6lOS4uiDigJwxOjAw4oCd44CCXG7liIbpkp/lv4XpobvnlLHkuKTkvY3mlbDnu4TmiJDvvIzlj6/og73kvJrku6Xpm7blvIDlpLTvvIzmr5TlpoIg4oCcMTA6MuKAnSDmmK/ml6DmlYjnmoTvvIzlupTkuLog4oCcMTA6MDLigJ3jgIJcbiogKi9cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IG51bVxuICogQHJldHVybiB7c3RyaW5nW119XG4gKi9cbnZhciByZWFkQmluYXJ5V2F0Y2ggPSBmdW5jdGlvbiAobnVtOiBudW1iZXIpIHtcbiAgICAvLyDmmrTliptcbiAgICAvLyDlm6DkuLrml6Dorrrku4DkuYjovpPlhaUg5pyA5aSa5Lmf5bCx566XIDEyICogNjAg5Lmf5bCxNzIw5qyhIOaYr+iDveWkn+aOpeWPl+eahFxuICAgIGNvbnN0IHJlc3VsdDogc3RyaW5nW10gPSBbXTtcbiAgICBmb3IgKGxldCBob3VyID0gMCwgbWludXRlID0gMDsgaG91ciA8PSAxMTspIHtcbiAgICAgICAgaWYgKGhvd01hbnlPbmUoaG91cikgKyBob3dNYW55T25lKG1pbnV0ZSkgPT09IG51bSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goYCR7aG91cn06JHtTdHJpbmcobWludXRlKS5wYWRTdGFydCgyLCBcIjBcIil9YCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWludXRlID09PSA1OSkge1xuICAgICAgICAgICAgbWludXRlID0gMDtcbiAgICAgICAgICAgIGhvdXIrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1pbnV0ZSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICBmdW5jdGlvbiBob3dNYW55T25lKG51bTogbnVtYmVyKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSAwO1xuICAgICAgICB3aGlsZSAobnVtKSB7XG4gICAgICAgICAgICBudW0gJSAyID09PSAxICYmIHJlc3VsdCsrO1xuICAgICAgICAgICAgbnVtID0gTWF0aC5mbG9vcihudW0gLyAyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxufTtcblxuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgICBuZXcgU2V0KHJlYWRCaW5hcnlXYXRjaCgxKSksXG4gICAgbmV3IFNldChbXCIxOjAwXCIsIFwiMjowMFwiLCBcIjQ6MDBcIiwgXCI4OjAwXCIsIFwiMDowMVwiLCBcIjA6MDJcIiwgXCIwOjA0XCIsIFwiMDowOFwiLCBcIjA6MTZcIiwgXCIwOjMyXCJdKSxcbik7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICAgIG5ldyBTZXQocmVhZEJpbmFyeVdhdGNoKDApKSxcbiAgICBuZXcgU2V0KFtcIjA6MDBcIl0pLFxuKTtcbiJdfQ==