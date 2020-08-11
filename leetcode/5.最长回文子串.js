"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"
* */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    const str = [...s];
    let result = [];
    if (str.join("") === str.reverse().join("")) {
        return str.join("");
    }
    str.forEach((v, i, a) => {
        // 123321 格式
        if (v === a[i + 1]) {
            let temp = 1;
            while (i - temp >= 0 &&
                i + 1 + temp <= a.length - 1 &&
                a[i + 1 + temp] === a[i - temp]) {
                temp++;
            }
            temp--;
            if (result.length < 2 + 2 * temp) {
                // 这个第一个 2 改成1 竟然不会有错误
                result = a.slice(i - temp, i + 1 + temp + 1);
            }
        }
        // 12321 格式
        if (a[i + 1] === a[i - 1]) {
            let temp = 1;
            while (i - temp >= 0 &&
                i + temp <= a.length - 1 &&
                a[i + temp] === a[i - temp]) {
                temp++;
            }
            temp--;
            if (result.length < 1 + 2 * temp) {
                result = a.slice(i - temp, i + temp + 1);
            }
        }
    });
    return result.join("") || str[0];
};
/**
 * Manacher算法
 * 时间复杂度为 O(n)
 * */
const manacher_____1 = require("../\u7B97\u6CD5/manacher\u9A6C\u62C9\u8F66\u7B97\u6CD5");
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(longestPalindrome("cbbd"), "bb");
assert_1.default.strictEqual(longestPalindrome("abacddc"), "cddc");
assert_1.default.strictEqual(manacher_____1.manacher1("abacddc"), "cddc");
assert_1.default.strictEqual(manacher_____1.manacher1("abacddc"), "cddc");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS7mnIDplb/lm57mloflrZDkuLIuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzUu5pyA6ZW/5Zue5paH5a2Q5LiyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQVlJO0FBQ0o7OztHQUdHO0FBQ0gsSUFBSSxpQkFBaUIsR0FBRyxVQUFVLENBQVM7SUFDekMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ25CLElBQUksTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUMxQixJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUMzQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDckI7SUFDRCxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN0QixZQUFZO1FBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNsQixJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7WUFDYixPQUNFLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQztnQkFDYixDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQzVCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQy9CO2dCQUNBLElBQUksRUFBRSxDQUFDO2FBQ1I7WUFDRCxJQUFJLEVBQUUsQ0FBQztZQUNQLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRTtnQkFDaEMsc0JBQXNCO2dCQUN0QixNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzlDO1NBQ0Y7UUFDRCxXQUFXO1FBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDekIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsT0FDRSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUM7Z0JBQ2IsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQ3hCLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFDM0I7Z0JBQ0EsSUFBSSxFQUFFLENBQUM7YUFDUjtZQUNELElBQUksRUFBRSxDQUFDO1lBQ1AsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFO2dCQUNoQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDMUM7U0FDRjtJQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuQyxDQUFDLENBQUM7QUFFRjs7O0tBR0s7QUFDTCx5RkFBZ0Q7QUFHaEQsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3BELGdCQUFNLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3pELGdCQUFNLENBQUMsV0FBVyxDQUFDLHdCQUFTLENBQUMsU0FBUyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDakQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsd0JBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrlrZfnrKbkuLIgc++8jOaJvuWIsCBzIOS4reacgOmVv+eahOWbnuaWh+WtkOS4suOAguS9oOWPr+S7peWBh+iuviBzIOeahOacgOWkp+mVv+W6puS4uiAxMDAw44CCXG5cbuekuuS+iyAx77yaXG5cbui+k+WFpTogXCJiYWJhZFwiXG7ovpPlh7o6IFwiYmFiXCJcbuazqOaEjzogXCJhYmFcIiDkuZ/mmK/kuIDkuKrmnInmlYjnrZTmoYjjgIJcbuekuuS+iyAy77yaXG5cbui+k+WFpTogXCJjYmJkXCJcbui+k+WHujogXCJiYlwiXG4qICovXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBzXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnZhciBsb25nZXN0UGFsaW5kcm9tZSA9IGZ1bmN0aW9uIChzOiBzdHJpbmcpIHtcbiAgY29uc3Qgc3RyID0gWy4uLnNdO1xuICBsZXQgcmVzdWx0OiBzdHJpbmdbXSA9IFtdO1xuICBpZiAoc3RyLmpvaW4oXCJcIikgPT09IHN0ci5yZXZlcnNlKCkuam9pbihcIlwiKSkge1xuICAgIHJldHVybiBzdHIuam9pbihcIlwiKTtcbiAgfVxuICBzdHIuZm9yRWFjaCgodiwgaSwgYSkgPT4ge1xuICAgIC8vIDEyMzMyMSDmoLzlvI9cbiAgICBpZiAodiA9PT0gYVtpICsgMV0pIHtcbiAgICAgIGxldCB0ZW1wID0gMTtcbiAgICAgIHdoaWxlIChcbiAgICAgICAgaSAtIHRlbXAgPj0gMCAmJlxuICAgICAgICBpICsgMSArIHRlbXAgPD0gYS5sZW5ndGggLSAxICYmXG4gICAgICAgIGFbaSArIDEgKyB0ZW1wXSA9PT0gYVtpIC0gdGVtcF1cbiAgICAgICkge1xuICAgICAgICB0ZW1wKys7XG4gICAgICB9XG4gICAgICB0ZW1wLS07XG4gICAgICBpZiAocmVzdWx0Lmxlbmd0aCA8IDIgKyAyICogdGVtcCkge1xuICAgICAgICAvLyDov5nkuKrnrKzkuIDkuKogMiDmlLnmiJAxIOern+eEtuS4jeS8muaciemUmeivr1xuICAgICAgICByZXN1bHQgPSBhLnNsaWNlKGkgLSB0ZW1wLCBpICsgMSArIHRlbXAgKyAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gMTIzMjEg5qC85byPXG4gICAgaWYgKGFbaSArIDFdID09PSBhW2kgLSAxXSkge1xuICAgICAgbGV0IHRlbXAgPSAxO1xuICAgICAgd2hpbGUgKFxuICAgICAgICBpIC0gdGVtcCA+PSAwICYmXG4gICAgICAgIGkgKyB0ZW1wIDw9IGEubGVuZ3RoIC0gMSAmJlxuICAgICAgICBhW2kgKyB0ZW1wXSA9PT0gYVtpIC0gdGVtcF1cbiAgICAgICkge1xuICAgICAgICB0ZW1wKys7XG4gICAgICB9XG4gICAgICB0ZW1wLS07XG4gICAgICBpZiAocmVzdWx0Lmxlbmd0aCA8IDEgKyAyICogdGVtcCkge1xuICAgICAgICByZXN1bHQgPSBhLnNsaWNlKGkgLSB0ZW1wLCBpICsgdGVtcCArIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQuam9pbihcIlwiKSB8fCBzdHJbMF07XG59O1xuXG4vKipcbiAqIE1hbmFjaGVy566X5rOVXG4gKiDml7bpl7TlpI3mnYLluqbkuLogTyhuKVxuICogKi9cbmltcG9ydCB7IG1hbmFjaGVyMSB9IGZyb20gXCIuLi/nrpfms5UvbWFuYWNoZXLpqazmi4novabnrpfms5VcIjtcblxuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKGxvbmdlc3RQYWxpbmRyb21lKFwiY2JiZFwiKSwgXCJiYlwiKTtcbmFzc2VydC5zdHJpY3RFcXVhbChsb25nZXN0UGFsaW5kcm9tZShcImFiYWNkZGNcIiksIFwiY2RkY1wiKTtcbmFzc2VydC5zdHJpY3RFcXVhbChtYW5hY2hlcjEoXCJhYmFjZGRjXCIpLCBcImNkZGNcIik7XG5hc3NlcnQuc3RyaWN0RXF1YWwobWFuYWNoZXIxKFwiYWJhY2RkY1wiKSwgXCJjZGRjXCIpO1xuXG5cbiJdfQ==