"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个密钥字符串S，只包含字母，数字以及 '-'（破折号）。N 个 '-' 将字符串分成了 N+1 组。给定一个数字 K，重新格式化字符串，
除了第一个分组以外，每个分组要包含 K 个字符，第一个分组至少要包含 1 个字符。两个分组之间用 '-'（破折号）隔开，
并且将所有的小写字母转换为大写字母。

给定非空字符串 S 和数字 K，按照上面描述的规则进行格式化。

示例 1：

输入：S = "5F3Z-2e-9-w", K = 4

输出："5F3Z-2E9W"

解释：字符串 S 被分成了两个部分，每部分 4 个字符；
     注意，两个额外的破折号需要删掉。
示例 2：

输入：S = "2-5g-3-J", K = 2

输出："2-5G-3J"

解释：字符串 S 被分成了 3 个部分，按照前面的规则描述，第一部分的字符可以少于给定的数量，其余部分皆为 2 个字符。


提示:

1. S 的长度不超过 12,000，K 为正整数
2. S 只包含字母数字（a-z，A-Z，0-9）以及破折号'-'
3. S 非空
* */
/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function (S, K) {
    let result = "";
    for (let i = S.length - 1, j = 0; i >= 0; i--) {
        if (S[i] === "-")
            continue;
        result = S[i].toUpperCase() + result;
        j++;
        if (j === K && i !== 0) {
            result = "-" + result;
            j = 0;
        }
    }
    return result.replace(/^-/, "");
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(licenseKeyFormatting("5F3Z-2e-9-w", 4), "5F3Z-2E9W");
assert_1.default.strictEqual(licenseKeyFormatting("2-5g-3-J", 2), "2-5G-3J");
assert_1.default.strictEqual(licenseKeyFormatting("r", 1), "R");
assert_1.default.strictEqual(licenseKeyFormatting("--a-a-a-a--", 2), "AA-AA");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDgyLuWvhumSpeagvOW8j+WMli5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDgyLuWvhumSpeagvOW8j+WMli50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTZCSTtBQUNKOzs7O0dBSUc7QUFDSCxJQUFJLG9CQUFvQixHQUFHLFVBQVUsQ0FBUyxFQUFFLENBQVM7SUFDdkQsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzdDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUc7WUFBRSxTQUFTO1FBQzNCLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsTUFBTSxDQUFDO1FBQ3JDLENBQUMsRUFBRSxDQUFDO1FBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdEIsTUFBTSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7WUFDdEIsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNQO0tBQ0Y7SUFDRCxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2xDLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDeEUsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ25FLGdCQUFNLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN0RCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprkuIDkuKrlr4bpkqXlrZfnrKbkuLJT77yM5Y+q5YyF5ZCr5a2X5q+N77yM5pWw5a2X5Lul5Y+KICctJ++8iOegtOaKmOWPt++8ieOAgk4g5LiqICctJyDlsIblrZfnrKbkuLLliIbmiJDkuoYgTisxIOe7hOOAgue7meWumuS4gOS4quaVsOWtlyBL77yM6YeN5paw5qC85byP5YyW5a2X56ym5Liy77yMXHJcbumZpOS6huesrOS4gOS4quWIhue7hOS7peWklu+8jOavj+S4quWIhue7hOimgeWMheWQqyBLIOS4quWtl+espu+8jOesrOS4gOS4quWIhue7hOiHs+WwkeimgeWMheWQqyAxIOS4quWtl+espuOAguS4pOS4quWIhue7hOS5i+mXtOeUqCAnLSfvvIjnoLTmipjlj7fvvInpmpTlvIDvvIxcclxu5bm25LiU5bCG5omA5pyJ55qE5bCP5YaZ5a2X5q+N6L2s5o2i5Li65aSn5YaZ5a2X5q+N44CCXHJcblxyXG7nu5nlrprpnZ7nqbrlrZfnrKbkuLIgUyDlkozmlbDlrZcgS++8jOaMieeFp+S4iumdouaPj+i/sOeahOinhOWImei/m+ihjOagvOW8j+WMluOAglxyXG5cclxu56S65L6LIDHvvJpcclxuXHJcbui+k+WFpe+8mlMgPSBcIjVGM1otMmUtOS13XCIsIEsgPSA0XHJcblxyXG7ovpPlh7rvvJpcIjVGM1otMkU5V1wiXHJcblxyXG7op6Pph4rvvJrlrZfnrKbkuLIgUyDooqvliIbmiJDkuobkuKTkuKrpg6jliIbvvIzmr4/pg6jliIYgNCDkuKrlrZfnrKbvvJtcclxuICAgICDms6jmhI/vvIzkuKTkuKrpop3lpJbnmoTnoLTmipjlj7fpnIDopoHliKDmjonjgIJcclxu56S65L6LIDLvvJpcclxuXHJcbui+k+WFpe+8mlMgPSBcIjItNWctMy1KXCIsIEsgPSAyXHJcblxyXG7ovpPlh7rvvJpcIjItNUctM0pcIlxyXG5cclxu6Kej6YeK77ya5a2X56ym5LiyIFMg6KKr5YiG5oiQ5LqGIDMg5Liq6YOo5YiG77yM5oyJ54Wn5YmN6Z2i55qE6KeE5YiZ5o+P6L+w77yM56ys5LiA6YOo5YiG55qE5a2X56ym5Y+v5Lul5bCR5LqO57uZ5a6a55qE5pWw6YeP77yM5YW25L2Z6YOo5YiG55qG5Li6IDIg5Liq5a2X56ym44CCXHJcblxyXG5cclxu5o+Q56S6OlxyXG5cclxuMS4gUyDnmoTplb/luqbkuI3otoXov4cgMTIsMDAw77yMSyDkuLrmraPmlbTmlbBcclxuMi4gUyDlj6rljIXlkKvlrZfmr43mlbDlrZfvvIhhLXrvvIxBLVrvvIwwLTnvvInku6Xlj4rnoLTmipjlj7cnLSdcclxuMy4gUyDpnZ7nqbpcclxuKiAqL1xyXG4vKipcclxuICogQHBhcmFtIHtzdHJpbmd9IFNcclxuICogQHBhcmFtIHtudW1iZXJ9IEtcclxuICogQHJldHVybiB7c3RyaW5nfVxyXG4gKi9cclxudmFyIGxpY2Vuc2VLZXlGb3JtYXR0aW5nID0gZnVuY3Rpb24gKFM6IHN0cmluZywgSzogbnVtYmVyKSB7XHJcbiAgbGV0IHJlc3VsdCA9IFwiXCI7XHJcbiAgZm9yIChsZXQgaSA9IFMubGVuZ3RoIC0gMSwgaiA9IDA7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICBpZiAoU1tpXSA9PT0gXCItXCIpIGNvbnRpbnVlO1xyXG4gICAgcmVzdWx0ID0gU1tpXS50b1VwcGVyQ2FzZSgpICsgcmVzdWx0O1xyXG4gICAgaisrO1xyXG4gICAgaWYgKGogPT09IEsgJiYgaSAhPT0gMCkge1xyXG4gICAgICByZXN1bHQgPSBcIi1cIiArIHJlc3VsdDtcclxuICAgICAgaiA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQucmVwbGFjZSgvXi0vLCBcIlwiKTtcclxufTtcclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKGxpY2Vuc2VLZXlGb3JtYXR0aW5nKFwiNUYzWi0yZS05LXdcIiwgNCksIFwiNUYzWi0yRTlXXCIpO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwobGljZW5zZUtleUZvcm1hdHRpbmcoXCIyLTVnLTMtSlwiLCAyKSwgXCIyLTVHLTNKXCIpO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwobGljZW5zZUtleUZvcm1hdHRpbmcoXCJyXCIsIDEpLCBcIlJcIik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChsaWNlbnNlS2V5Rm9ybWF0dGluZyhcIi0tYS1hLWEtYS0tXCIsIDIpLCBcIkFBLUFBXCIpO1xyXG4iXX0=