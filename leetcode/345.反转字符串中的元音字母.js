"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

示例 1:

输入: "hello"
输出: "holle"
示例 2:

输入: "leetcode"
输出: "leotcede"
说明:
元音字母不包含字母"y"。
* */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  // 首尾指针
  const string_arr = s.split("");
  let left = 0;
  let right = string_arr.length - 1;
  const dictionary = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  while (left < right) {
    if (!dictionary.includes(string_arr[left])) {
      left++;
      continue;
    }
    if (!dictionary.includes(string_arr[right])) {
      right--;
      continue;
    }
    [string_arr[right], string_arr[left]] = [
      string_arr[left],
      string_arr[right],
    ];
    left++;
    right--;
  }
  return string_arr.join("");
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(reverseVowels("hello"), "holle");
assert_1.default.strictEqual(reverseVowels("leetcode"), "leotcede");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzQ1LuWPjei9rOWtl+espuS4suS4reeahOWFg+mfs+Wtl+avjS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzQ1LuWPjei9rOWtl+espuS4suS4reeahOWFg+mfs+Wtl+avjS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7O0lBYUk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLGFBQWEsR0FBRyxVQUFVLENBQVM7SUFDckMsT0FBTztJQUNQLE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDL0IsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsSUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDbEMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN0RSxPQUFPLElBQUksR0FBRyxLQUFLLEVBQUU7UUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDMUMsSUFBSSxFQUFFLENBQUM7WUFDUCxTQUFTO1NBQ1Y7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUMzQyxLQUFLLEVBQUUsQ0FBQztZQUNSLFNBQVM7U0FDVjtRQUNELENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHO1lBQ3RDLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDaEIsVUFBVSxDQUFDLEtBQUssQ0FBQztTQUNsQixDQUFDO1FBQ0YsSUFBSSxFQUFFLENBQUM7UUFDUCxLQUFLLEVBQUUsQ0FBQztLQUNUO0lBRUQsT0FBTyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzdCLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDcEQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue8luWGmeS4gOS4quWHveaVsO+8jOS7peWtl+espuS4suS9nOS4uui+k+WFpe+8jOWPjei9rOivpeWtl+espuS4suS4reeahOWFg+mfs+Wtl+avjeOAglxuXG7npLrkvosgMTpcblxu6L6T5YWlOiBcImhlbGxvXCJcbui+k+WHujogXCJob2xsZVwiXG7npLrkvosgMjpcblxu6L6T5YWlOiBcImxlZXRjb2RlXCJcbui+k+WHujogXCJsZW90Y2VkZVwiXG7or7TmmI46XG7lhYPpn7PlrZfmr43kuI3ljIXlkKvlrZfmr41cInlcIuOAglxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gc1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgcmV2ZXJzZVZvd2VscyA9IGZ1bmN0aW9uIChzOiBzdHJpbmcpIHtcbiAgLy8g6aaW5bC+5oyH6ZKIXG4gIGNvbnN0IHN0cmluZ19hcnIgPSBzLnNwbGl0KFwiXCIpO1xuICBsZXQgbGVmdCA9IDA7XG4gIGxldCByaWdodCA9IHN0cmluZ19hcnIubGVuZ3RoIC0gMTtcbiAgY29uc3QgZGljdGlvbmFyeSA9IFtcImFcIiwgXCJBXCIsIFwiZVwiLCBcIkVcIiwgXCJpXCIsIFwiSVwiLCBcIm9cIiwgXCJPXCIsIFwidVwiLCBcIlVcIl07XG4gIHdoaWxlIChsZWZ0IDwgcmlnaHQpIHtcbiAgICBpZiAoIWRpY3Rpb25hcnkuaW5jbHVkZXMoc3RyaW5nX2FycltsZWZ0XSkpIHtcbiAgICAgIGxlZnQrKztcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWRpY3Rpb25hcnkuaW5jbHVkZXMoc3RyaW5nX2FycltyaWdodF0pKSB7XG4gICAgICByaWdodC0tO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIFtzdHJpbmdfYXJyW3JpZ2h0XSwgc3RyaW5nX2FycltsZWZ0XV0gPSBbXG4gICAgICBzdHJpbmdfYXJyW2xlZnRdLFxuICAgICAgc3RyaW5nX2FycltyaWdodF0sXG4gICAgXTtcbiAgICBsZWZ0Kys7XG4gICAgcmlnaHQtLTtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmdfYXJyLmpvaW4oXCJcIik7XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LnN0cmljdEVxdWFsKHJldmVyc2VWb3dlbHMoXCJoZWxsb1wiKSwgXCJob2xsZVwiKTtcbmFzc2VydC5zdHJpY3RFcXVhbChyZXZlcnNlVm93ZWxzKFwibGVldGNvZGVcIiksIFwibGVvdGNlZGVcIik7XG4iXX0=
