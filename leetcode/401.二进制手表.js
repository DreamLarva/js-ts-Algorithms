"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
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
  for (let hour = 0, minute = 0; hour <= 11; ) {
    if (howManyOne(hour) + howManyOne(minute) === num) {
      result.push(`${hour}:${String(minute).padStart(2, "0")}`);
    }
    if (minute === 59) {
      minute = 0;
      hour++;
    } else {
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
assert_1.default.deepStrictEqual(
  new Set(readBinaryWatch(1)),
  new Set([
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
  ])
);
assert_1.default.deepStrictEqual(
  new Set(readBinaryWatch(0)),
  new Set(["0:00"])
);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDAxLuS6jOi/m+WItuaJi+ihqC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDAxLuS6jOi/m+WItuaJi+ihqC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXVCSTtBQUNKOzs7R0FHRztBQUNILElBQUksZUFBZSxHQUFHLFVBQVUsR0FBVztJQUN2QyxLQUFLO0lBQ0wsdUNBQXVDO0lBQ3ZDLE1BQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUM1QixLQUFLLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLElBQUksSUFBSSxFQUFFLEdBQUc7UUFDeEMsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUMvQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUM3RDtRQUVELElBQUksTUFBTSxLQUFLLEVBQUUsRUFBRTtZQUNmLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDWCxJQUFJLEVBQUUsQ0FBQztTQUNWO2FBQU07WUFDSCxNQUFNLEVBQUUsQ0FBQztTQUNaO0tBQ0o7SUFDRCxPQUFPLE1BQU0sQ0FBQztJQUVkLFNBQVMsVUFBVSxDQUFDLEdBQVc7UUFDM0IsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsT0FBTyxHQUFHLEVBQUU7WUFDUixHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQztZQUMxQixHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDN0I7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0FBRUwsQ0FBQyxDQUFDO0FBR0Ysb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsZUFBZSxDQUNsQixJQUFJLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDM0IsSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUM1RixDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLElBQUksR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUMzQixJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQ3BCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG5cclxu5LqM6L+b5Yi25omL6KGo6aG26YOo5pyJIDQg5LiqIExFRCDku6PooajlsI/ml7bvvIgwLTEx77yJ77yM5bqV6YOo55qEIDYg5LiqIExFRCDku6PooajliIbpkp/vvIgwLTU577yJ44CCXHJcblxyXG7mr4/kuKogTEVEIOS7o+ihqOS4gOS4qiAwIOaIliAx77yM5pyA5L2O5L2N5Zyo5Y+z5L6n44CCXHJcblxyXG5cclxuXHJcbuS+i+Wmgu+8jOS4iumdoueahOS6jOi/m+WItuaJi+ihqOivu+WPliDigJwzOjI14oCd44CCXHJcblxyXG7nu5nlrprkuIDkuKrpnZ7otJ/mlbTmlbAgbiDku6PooajlvZPliY0gTEVEIOS6ruedgOeahOaVsOmHj++8jOi/lOWbnuaJgOacieWPr+iDveeahOaXtumXtOOAglxyXG5cclxu5qGI5L6LOlxyXG5cclxu6L6T5YWlOiBuID0gMVxyXG7ov5Tlm546IFtcIjE6MDBcIiwgXCIyOjAwXCIsIFwiNDowMFwiLCBcIjg6MDBcIiwgXCIwOjAxXCIsIFwiMDowMlwiLCBcIjA6MDRcIiwgXCIwOjA4XCIsIFwiMDoxNlwiLCBcIjA6MzJcIl1cclxuXHJcblxyXG7ms6jmhI/kuovpobk6XHJcblxyXG7ovpPlh7rnmoTpobrluo/msqHmnInopoHmsYLjgIJcclxu5bCP5pe25LiN5Lya5Lul6Zu25byA5aS077yM5q+U5aaCIOKAnDAxOjAw4oCdIOaYr+S4jeWFgeiuuOeahO+8jOW6lOS4uiDigJwxOjAw4oCd44CCXHJcbuWIhumSn+W/hemhu+eUseS4pOS9jeaVsOe7hOaIkO+8jOWPr+iDveS8muS7pembtuW8gOWktO+8jOavlOWmgiDigJwxMDoy4oCdIOaYr+aXoOaViOeahO+8jOW6lOS4uiDigJwxMDowMuKAneOAglxyXG4qICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtXHJcbiAqIEByZXR1cm4ge3N0cmluZ1tdfVxyXG4gKi9cclxudmFyIHJlYWRCaW5hcnlXYXRjaCA9IGZ1bmN0aW9uIChudW06IG51bWJlcikge1xyXG4gICAgLy8g5pq05YqbXHJcbiAgICAvLyDlm6DkuLrml6Dorrrku4DkuYjovpPlhaUg5pyA5aSa5Lmf5bCx566XIDEyICogNjAg5Lmf5bCxNzIw5qyhIOaYr+iDveWkn+aOpeWPl+eahFxyXG4gICAgY29uc3QgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaG91ciA9IDAsIG1pbnV0ZSA9IDA7IGhvdXIgPD0gMTE7KSB7XHJcbiAgICAgICAgaWYgKGhvd01hbnlPbmUoaG91cikgKyBob3dNYW55T25lKG1pbnV0ZSkgPT09IG51bSkge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChgJHtob3VyfToke1N0cmluZyhtaW51dGUpLnBhZFN0YXJ0KDIsIFwiMFwiKX1gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtaW51dGUgPT09IDU5KSB7XHJcbiAgICAgICAgICAgIG1pbnV0ZSA9IDA7XHJcbiAgICAgICAgICAgIGhvdXIrKztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtaW51dGUrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG5cclxuICAgIGZ1bmN0aW9uIGhvd01hbnlPbmUobnVtOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gMDtcclxuICAgICAgICB3aGlsZSAobnVtKSB7XHJcbiAgICAgICAgICAgIG51bSAlIDIgPT09IDEgJiYgcmVzdWx0Kys7XHJcbiAgICAgICAgICAgIG51bSA9IE1hdGguZmxvb3IobnVtIC8gMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcclxuICAgIG5ldyBTZXQocmVhZEJpbmFyeVdhdGNoKDEpKSxcclxuICAgIG5ldyBTZXQoW1wiMTowMFwiLCBcIjI6MDBcIiwgXCI0OjAwXCIsIFwiODowMFwiLCBcIjA6MDFcIiwgXCIwOjAyXCIsIFwiMDowNFwiLCBcIjA6MDhcIiwgXCIwOjE2XCIsIFwiMDozMlwiXSksXHJcbik7XHJcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbiAgICBuZXcgU2V0KHJlYWRCaW5hcnlXYXRjaCgwKSksXHJcbiAgICBuZXcgU2V0KFtcIjA6MDBcIl0pLFxyXG4pO1xyXG4iXX0=
