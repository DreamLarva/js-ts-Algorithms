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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDgyLuWvhumSpeagvOW8j+WMli5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNDgyLuWvhumSpeagvOW8j+WMli50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQTZCSTtBQUNKOzs7O0dBSUc7QUFDSCxJQUFJLG9CQUFvQixHQUFHLFVBQVUsQ0FBUyxFQUFFLENBQVM7SUFDckQsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzNDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUc7WUFBRSxTQUFTO1FBQzNCLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsTUFBTSxDQUFDO1FBQ3JDLENBQUMsRUFBRSxDQUFDO1FBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDcEIsTUFBTSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7WUFDdEIsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNUO0tBQ0o7SUFDRCxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxvQkFBb0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQ3RDLFdBQVcsQ0FDZCxDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxXQUFXLENBQ2Qsb0JBQW9CLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUNuQyxTQUFTLENBQ1osQ0FBQztBQUNGLGdCQUFNLENBQUMsV0FBVyxDQUNkLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFDNUIsR0FBRyxDQUNOLENBQUM7QUFDRixnQkFBTSxDQUFDLFdBQVcsQ0FFZCxvQkFBb0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQ3RDLE9BQU8sQ0FDVixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a5LiA5Liq5a+G6ZKl5a2X56ym5LiyU++8jOWPquWMheWQq+Wtl+avje+8jOaVsOWtl+S7peWPiiAnLSfvvIjnoLTmipjlj7fvvInjgIJOIOS4qiAnLScg5bCG5a2X56ym5Liy5YiG5oiQ5LqGIE4rMSDnu4TjgILnu5nlrprkuIDkuKrmlbDlrZcgS++8jOmHjeaWsOagvOW8j+WMluWtl+espuS4su+8jFxyXG7pmaTkuobnrKzkuIDkuKrliIbnu4Tku6XlpJbvvIzmr4/kuKrliIbnu4TopoHljIXlkKsgSyDkuKrlrZfnrKbvvIznrKzkuIDkuKrliIbnu4Toh7PlsJHopoHljIXlkKsgMSDkuKrlrZfnrKbjgILkuKTkuKrliIbnu4TkuYvpl7TnlKggJy0n77yI56C05oqY5Y+377yJ6ZqU5byA77yMXHJcbuW5tuS4lOWwhuaJgOacieeahOWwj+WGmeWtl+avjei9rOaNouS4uuWkp+WGmeWtl+avjeOAglxyXG5cclxu57uZ5a6a6Z2e56m65a2X56ym5LiyIFMg5ZKM5pWw5a2XIEvvvIzmjInnhafkuIrpnaLmj4/ov7DnmoTop4TliJnov5vooYzmoLzlvI/ljJbjgIJcclxuXHJcbuekuuS+iyAx77yaXHJcblxyXG7ovpPlhaXvvJpTID0gXCI1RjNaLTJlLTktd1wiLCBLID0gNFxyXG5cclxu6L6T5Ye677yaXCI1RjNaLTJFOVdcIlxyXG5cclxu6Kej6YeK77ya5a2X56ym5LiyIFMg6KKr5YiG5oiQ5LqG5Lik5Liq6YOo5YiG77yM5q+P6YOo5YiGIDQg5Liq5a2X56ym77ybXHJcbiAgICAg5rOo5oSP77yM5Lik5Liq6aKd5aSW55qE56C05oqY5Y+36ZyA6KaB5Yig5o6J44CCXHJcbuekuuS+iyAy77yaXHJcblxyXG7ovpPlhaXvvJpTID0gXCIyLTVnLTMtSlwiLCBLID0gMlxyXG5cclxu6L6T5Ye677yaXCIyLTVHLTNKXCJcclxuXHJcbuino+mHiu+8muWtl+espuS4siBTIOiiq+WIhuaIkOS6hiAzIOS4qumDqOWIhu+8jOaMieeFp+WJjemdoueahOinhOWImeaPj+i/sO+8jOesrOS4gOmDqOWIhueahOWtl+espuWPr+S7peWwkeS6jue7meWumueahOaVsOmHj++8jOWFtuS9memDqOWIhueahuS4uiAyIOS4quWtl+espuOAglxyXG5cclxuXHJcbuaPkOekujpcclxuXHJcbjEuIFMg55qE6ZW/5bqm5LiN6LaF6L+HIDEyLDAwMO+8jEsg5Li65q2j5pW05pWwXHJcbjIuIFMg5Y+q5YyF5ZCr5a2X5q+N5pWw5a2X77yIYS1677yMQS1a77yMMC0577yJ5Lul5Y+K56C05oqY5Y+3Jy0nXHJcbjMuIFMg6Z2e56m6XHJcbiogKi9cclxuLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBTXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBLXHJcbiAqIEByZXR1cm4ge3N0cmluZ31cclxuICovXHJcbnZhciBsaWNlbnNlS2V5Rm9ybWF0dGluZyA9IGZ1bmN0aW9uIChTOiBzdHJpbmcsIEs6IG51bWJlcikge1xyXG4gICAgbGV0IHJlc3VsdCA9IFwiXCI7XHJcbiAgICBmb3IgKGxldCBpID0gUy5sZW5ndGggLSAxLCBqID0gMDsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBpZiAoU1tpXSA9PT0gXCItXCIpIGNvbnRpbnVlO1xyXG4gICAgICAgIHJlc3VsdCA9IFNbaV0udG9VcHBlckNhc2UoKSArIHJlc3VsdDtcclxuICAgICAgICBqKys7XHJcbiAgICAgICAgaWYgKGogPT09IEsgJiYgaSAhPT0gMCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBcIi1cIiArIHJlc3VsdDtcclxuICAgICAgICAgICAgaiA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdC5yZXBsYWNlKC9eLS8sXCJcIik7XHJcbn07XHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIGxpY2Vuc2VLZXlGb3JtYXR0aW5nKFwiNUYzWi0yZS05LXdcIiwgNCksXHJcbiAgICBcIjVGM1otMkU5V1wiLFxyXG4pO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoXHJcbiAgICBsaWNlbnNlS2V5Rm9ybWF0dGluZyhcIjItNWctMy1KXCIsIDIpLFxyXG4gICAgXCIyLTVHLTNKXCIsXHJcbik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIGxpY2Vuc2VLZXlGb3JtYXR0aW5nKFwiclwiLCAxKSxcclxuICAgIFwiUlwiLFxyXG4pO1xyXG5hc3NlcnQuc3RyaWN0RXF1YWwoXHJcblxyXG4gICAgbGljZW5zZUtleUZvcm1hdHRpbmcoXCItLWEtYS1hLWEtLVwiLCAyKSxcclxuICAgIFwiQUEtQUFcIlxyXG4pO1xyXG4iXX0=