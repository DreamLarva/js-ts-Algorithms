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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDAxLuS6jOi/m+WItuaJi+ihqC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDAxLuS6jOi/m+WItuaJi+ihqC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXVCSTtBQUNKOzs7R0FHRztBQUNILElBQUksZUFBZSxHQUFHLFVBQVUsR0FBVztJQUN6QyxLQUFLO0lBQ0wsdUNBQXVDO0lBQ3ZDLE1BQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUM1QixLQUFLLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLElBQUksSUFBSSxFQUFFLEdBQUk7UUFDM0MsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUNqRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMzRDtRQUVELElBQUksTUFBTSxLQUFLLEVBQUUsRUFBRTtZQUNqQixNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ1gsSUFBSSxFQUFFLENBQUM7U0FDUjthQUFNO1lBQ0wsTUFBTSxFQUFFLENBQUM7U0FDVjtLQUNGO0lBQ0QsT0FBTyxNQUFNLENBQUM7SUFFZCxTQUFTLFVBQVUsQ0FBQyxHQUFXO1FBQzdCLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNmLE9BQU8sR0FBRyxFQUFFO1lBQ1YsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxFQUFFLENBQUM7WUFDMUIsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsSUFBSSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQzNCLElBQUksR0FBRyxDQUFDO0lBQ04sTUFBTTtJQUNOLE1BQU07SUFDTixNQUFNO0lBQ04sTUFBTTtJQUNOLE1BQU07SUFDTixNQUFNO0lBQ04sTUFBTTtJQUNOLE1BQU07SUFDTixNQUFNO0lBQ04sTUFBTTtDQUNQLENBQUMsQ0FDSCxDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG5cclxu5LqM6L+b5Yi25omL6KGo6aG26YOo5pyJIDQg5LiqIExFRCDku6PooajlsI/ml7bvvIgwLTEx77yJ77yM5bqV6YOo55qEIDYg5LiqIExFRCDku6PooajliIbpkp/vvIgwLTU577yJ44CCXHJcblxyXG7mr4/kuKogTEVEIOS7o+ihqOS4gOS4qiAwIOaIliAx77yM5pyA5L2O5L2N5Zyo5Y+z5L6n44CCXHJcblxyXG5cclxuXHJcbuS+i+Wmgu+8jOS4iumdoueahOS6jOi/m+WItuaJi+ihqOivu+WPliDigJwzOjI14oCd44CCXHJcblxyXG7nu5nlrprkuIDkuKrpnZ7otJ/mlbTmlbAgbiDku6PooajlvZPliY0gTEVEIOS6ruedgOeahOaVsOmHj++8jOi/lOWbnuaJgOacieWPr+iDveeahOaXtumXtOOAglxyXG5cclxu5qGI5L6LOlxyXG5cclxu6L6T5YWlOiBuID0gMVxyXG7ov5Tlm546IFtcIjE6MDBcIiwgXCIyOjAwXCIsIFwiNDowMFwiLCBcIjg6MDBcIiwgXCIwOjAxXCIsIFwiMDowMlwiLCBcIjA6MDRcIiwgXCIwOjA4XCIsIFwiMDoxNlwiLCBcIjA6MzJcIl1cclxuXHJcblxyXG7ms6jmhI/kuovpobk6XHJcblxyXG7ovpPlh7rnmoTpobrluo/msqHmnInopoHmsYLjgIJcclxu5bCP5pe25LiN5Lya5Lul6Zu25byA5aS077yM5q+U5aaCIOKAnDAxOjAw4oCdIOaYr+S4jeWFgeiuuOeahO+8jOW6lOS4uiDigJwxOjAw4oCd44CCXHJcbuWIhumSn+W/hemhu+eUseS4pOS9jeaVsOe7hOaIkO+8jOWPr+iDveS8muS7pembtuW8gOWktO+8jOavlOWmgiDigJwxMDoy4oCdIOaYr+aXoOaViOeahO+8jOW6lOS4uiDigJwxMDowMuKAneOAglxyXG4qICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtXHJcbiAqIEByZXR1cm4ge3N0cmluZ1tdfVxyXG4gKi9cclxudmFyIHJlYWRCaW5hcnlXYXRjaCA9IGZ1bmN0aW9uIChudW06IG51bWJlcikge1xyXG4gIC8vIOaatOWKm1xyXG4gIC8vIOWboOS4uuaXoOiuuuS7gOS5iOi+k+WFpSDmnIDlpJrkuZ/lsLHnrpcgMTIgKiA2MCDkuZ/lsLE3MjDmrKEg5piv6IO95aSf5o6l5Y+X55qEXHJcbiAgY29uc3QgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xyXG4gIGZvciAobGV0IGhvdXIgPSAwLCBtaW51dGUgPSAwOyBob3VyIDw9IDExOyApIHtcclxuICAgIGlmIChob3dNYW55T25lKGhvdXIpICsgaG93TWFueU9uZShtaW51dGUpID09PSBudW0pIHtcclxuICAgICAgcmVzdWx0LnB1c2goYCR7aG91cn06JHtTdHJpbmcobWludXRlKS5wYWRTdGFydCgyLCBcIjBcIil9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1pbnV0ZSA9PT0gNTkpIHtcclxuICAgICAgbWludXRlID0gMDtcclxuICAgICAgaG91cisrO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWludXRlKys7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQ7XHJcblxyXG4gIGZ1bmN0aW9uIGhvd01hbnlPbmUobnVtOiBudW1iZXIpIHtcclxuICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgd2hpbGUgKG51bSkge1xyXG4gICAgICBudW0gJSAyID09PSAxICYmIHJlc3VsdCsrO1xyXG4gICAgICBudW0gPSBNYXRoLmZsb29yKG51bSAvIDIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn07XHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbiAgbmV3IFNldChyZWFkQmluYXJ5V2F0Y2goMSkpLFxyXG4gIG5ldyBTZXQoW1xyXG4gICAgXCIxOjAwXCIsXHJcbiAgICBcIjI6MDBcIixcclxuICAgIFwiNDowMFwiLFxyXG4gICAgXCI4OjAwXCIsXHJcbiAgICBcIjA6MDFcIixcclxuICAgIFwiMDowMlwiLFxyXG4gICAgXCIwOjA0XCIsXHJcbiAgICBcIjA6MDhcIixcclxuICAgIFwiMDoxNlwiLFxyXG4gICAgXCIwOjMyXCIsXHJcbiAgXSlcclxuKTtcclxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChuZXcgU2V0KHJlYWRCaW5hcnlXYXRjaCgwKSksIG5ldyBTZXQoW1wiMDowMFwiXSkpO1xyXG4iXX0=