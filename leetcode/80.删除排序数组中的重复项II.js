"use strict";
/*
给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

示例 1:

给定 nums = [1,1,1,2,2,3],

函数应返回新长度 length = 5, 并且原数组的前五个元素被修改为 1, 1, 2, 2, 3 。

你不需要考虑数组中超出新长度后面的元素。
示例 2:

给定 nums = [0,0,1,1,1,1,2,3,3],

函数应返回新长度 length = 7, 并且原数组的前五个元素被修改为 0, 0, 1, 1, 2, 3, 3 。

你不需要考虑数组中超出新长度后面的元素。
说明:

为什么返回数值是整数，但输出的答案是数组呢?

请注意，输入数组是以“引用”方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:

// nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
int len = removeDuplicates(nums);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length <= 1)
        return nums.length;
    let index = 1;
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        const current = nums[i];
        const last = nums[i - 1];
        if (current === last) {
            count++;
            if (count <= 2) {
                nums[index++] = current;
            }
        }
        else {
            count = 1;
            nums[index++] = current;
        }
    }
    return index;
};
const assert_1 = __importDefault(require("assert"));
{
    const sample = [1, 1, 1, 2, 2, 3];
    sample.length = removeDuplicates(sample);
    assert_1.default.deepStrictEqual(sample, [1, 1, 2, 2, 3]);
}
{
    const sample = [0, 0, 1, 1, 1, 1, 2, 3, 3];
    sample.length = removeDuplicates(sample);
    assert_1.default.deepStrictEqual(sample, [0, 0, 1, 1, 2, 3, 3]);
}
{
    const sample = [];
    sample.length = removeDuplicates(sample);
    assert_1.default.deepStrictEqual(sample, []);
}
{
    const sample = [1];
    sample.length = removeDuplicates(sample);
    assert_1.default.deepStrictEqual(sample, [1]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODAu5Yig6Zmk5o6S5bqP5pWw57uE5Lit55qE6YeN5aSN6aG5SUkuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzgwLuWIoOmZpOaOkuW6j+aVsOe7hOS4reeahOmHjeWkjemhuUlJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBdUNJOzs7OztBQUVKOzs7R0FHRztBQUNILElBQUksZ0JBQWdCLEdBQUcsVUFBVSxJQUFjO0lBQzNDLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDO1FBQUUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3pDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2xDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksT0FBTyxLQUFLLElBQUksRUFBRTtZQUNsQixLQUFLLEVBQUUsQ0FBQztZQUNSLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtnQkFDWixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUM7YUFDM0I7U0FDSjthQUFNO1lBQ0gsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNWLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztTQUMzQjtLQUNKO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQyxDQUFDO0FBR0Ysb0RBQTRCO0FBRTVCO0lBQ0ksTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLE1BQU0sRUFDTixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FDbEIsQ0FBQztDQUNMO0FBRUQ7SUFDSSxNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0MsTUFBTSxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsTUFBTSxFQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ3hCLENBQUM7Q0FDTDtBQUVEO0lBQ0ksTUFBTSxNQUFNLEdBQVksRUFBRSxDQUFDO0lBQzNCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLE1BQU0sRUFDTixFQUFFLENBQ0wsQ0FBQztDQUNMO0FBRUQ7SUFDSSxNQUFNLE1BQU0sR0FBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsZ0JBQU0sQ0FBQyxlQUFlLENBQ2xCLE1BQU0sRUFDTixDQUFDLENBQUMsQ0FBQyxDQUNOLENBQUM7Q0FDTCIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4gOS4quaOkuW6j+aVsOe7hO+8jOS9oOmcgOimgeWcqOWOn+WcsOWIoOmZpOmHjeWkjeWHuueOsOeahOWFg+e0oO+8jOS9v+W+l+avj+S4quWFg+e0oOacgOWkmuWHuueOsOS4pOasoe+8jOi/lOWbnuenu+mZpOWQjuaVsOe7hOeahOaWsOmVv+W6puOAglxyXG5cclxu5LiN6KaB5L2/55So6aKd5aSW55qE5pWw57uE56m66Ze077yM5L2g5b+F6aG75Zyo5Y6f5Zyw5L+u5pS56L6T5YWl5pWw57uE5bm25Zyo5L2/55SoIE8oMSkg6aKd5aSW56m66Ze055qE5p2h5Lu25LiL5a6M5oiQ44CCXHJcblxyXG7npLrkvovCoDE6XHJcblxyXG7nu5nlrpogbnVtcyA9IFsxLDEsMSwyLDIsM10sXHJcblxyXG7lh73mlbDlupTov5Tlm57mlrDplb/luqYgbGVuZ3RoID0gNSwg5bm25LiU5Y6f5pWw57uE55qE5YmN5LqU5Liq5YWD57Sg6KKr5L+u5pS55Li6IDEsIDEsIDIsIDIsIDMg44CCXHJcblxyXG7kvaDkuI3pnIDopoHogIPomZHmlbDnu4TkuK3otoXlh7rmlrDplb/luqblkI7pnaLnmoTlhYPntKDjgIJcclxu56S65L6LwqAyOlxyXG5cclxu57uZ5a6aIG51bXMgPSBbMCwwLDEsMSwxLDEsMiwzLDNdLFxyXG5cclxu5Ye95pWw5bqU6L+U5Zue5paw6ZW/5bqmIGxlbmd0aCA9IDcsIOW5tuS4lOWOn+aVsOe7hOeahOWJjeS6lOS4quWFg+e0oOiiq+S/ruaUueS4usKgMCwgMCwgMSwgMSwgMiwgMywgMyDjgIJcclxuXHJcbuS9oOS4jemcgOimgeiAg+iZkeaVsOe7hOS4rei2heWHuuaWsOmVv+W6puWQjumdoueahOWFg+e0oOOAglxyXG7or7TmmI46XHJcblxyXG7kuLrku4DkuYjov5Tlm57mlbDlgLzmmK/mlbTmlbDvvIzkvYbovpPlh7rnmoTnrZTmoYjmmK/mlbDnu4TlkaI/XHJcblxyXG7or7fms6jmhI/vvIzovpPlhaXmlbDnu4TmmK/ku6XigJzlvJXnlKjigJ3mlrnlvI/kvKDpgJLnmoTvvIzov5nmhI/lkbPnnYDlnKjlh73mlbDph4zkv67mlLnovpPlhaXmlbDnu4Tlr7nkuo7osIPnlKjogIXmmK/lj6/op4HnmoTjgIJcclxuXHJcbuS9oOWPr+S7peaDs+ixoeWGhemDqOaTjeS9nOWmguS4izpcclxuXHJcbi8vIG51bXMg5piv5Lul4oCc5byV55So4oCd5pa55byP5Lyg6YCS55qE44CC5Lmf5bCx5piv6K+077yM5LiN5a+55a6e5Y+C5YGa5Lu75L2V5ou36LSdXHJcbmludCBsZW4gPSByZW1vdmVEdXBsaWNhdGVzKG51bXMpO1xyXG5cclxuLy8g5Zyo5Ye95pWw6YeM5L+u5pS56L6T5YWl5pWw57uE5a+55LqO6LCD55So6ICF5piv5Y+v6KeB55qE44CCXHJcbi8vIOagueaNruS9oOeahOWHveaVsOi/lOWbnueahOmVv+W6piwg5a6D5Lya5omT5Y2w5Ye65pWw57uE5Lit6K+l6ZW/5bqm6IyD5Zu05YaF55qE5omA5pyJ5YWD57Sg44CCXHJcbmZvciAoaW50IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuwqAgwqAgcHJpbnQobnVtc1tpXSk7XHJcbn1cclxuXHJcbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXHJcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL3JlbW92ZS1kdXBsaWNhdGVzLWZyb20tc29ydGVkLWFycmF5LWlpXHJcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxyXG4qICovXHJcblxyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtc1xyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAqL1xyXG52YXIgcmVtb3ZlRHVwbGljYXRlcyA9IGZ1bmN0aW9uIChudW1zOiBudW1iZXJbXSkge1xyXG4gICAgaWYgKG51bXMubGVuZ3RoIDw9IDEpIHJldHVybiBudW1zLmxlbmd0aDtcclxuICAgIGxldCBpbmRleCA9IDE7XHJcbiAgICBsZXQgY291bnQgPSAxO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBudW1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudCA9IG51bXNbaV07XHJcbiAgICAgICAgY29uc3QgbGFzdCA9IG51bXNbaSAtIDFdO1xyXG4gICAgICAgIGlmIChjdXJyZW50ID09PSBsYXN0KSB7XHJcbiAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgICAgIGlmIChjb3VudCA8PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBudW1zW2luZGV4KytdID0gY3VycmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvdW50ID0gMTtcclxuICAgICAgICAgICAgbnVtc1tpbmRleCsrXSA9IGN1cnJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGluZGV4O1xyXG59O1xyXG5cclxuXHJcbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xyXG5cclxue1xyXG4gICAgY29uc3Qgc2FtcGxlID0gWzEsIDEsIDEsIDIsIDIsIDNdO1xyXG4gICAgc2FtcGxlLmxlbmd0aCA9IHJlbW92ZUR1cGxpY2F0ZXMoc2FtcGxlKTtcclxuICAgIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoXHJcbiAgICAgICAgc2FtcGxlLFxyXG4gICAgICAgIFsxLCAxLCAyLCAyLCAzXSxcclxuICAgICk7XHJcbn1cclxuXHJcbntcclxuICAgIGNvbnN0IHNhbXBsZSA9IFswLCAwLCAxLCAxLCAxLCAxLCAyLCAzLCAzXTtcclxuICAgIHNhbXBsZS5sZW5ndGggPSByZW1vdmVEdXBsaWNhdGVzKHNhbXBsZSk7XHJcbiAgICBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxyXG4gICAgICAgIHNhbXBsZSxcclxuICAgICAgICBbMCwgMCwgMSwgMSwgMiwgMywgM10sXHJcbiAgICApO1xyXG59XHJcblxyXG57XHJcbiAgICBjb25zdCBzYW1wbGU6bnVtYmVyW10gPSBbXTtcclxuICAgIHNhbXBsZS5sZW5ndGggPSByZW1vdmVEdXBsaWNhdGVzKHNhbXBsZSk7XHJcbiAgICBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxyXG4gICAgICAgIHNhbXBsZSxcclxuICAgICAgICBbXSxcclxuICAgICk7XHJcbn1cclxuXHJcbntcclxuICAgIGNvbnN0IHNhbXBsZTpudW1iZXJbXSA9IFsxXTtcclxuICAgIHNhbXBsZS5sZW5ndGggPSByZW1vdmVEdXBsaWNhdGVzKHNhbXBsZSk7XHJcbiAgICBhc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxyXG4gICAgICAgIHNhbXBsZSxcclxuICAgICAgICBbMV0sXHJcbiAgICApO1xyXG59XHJcblxyXG4iXX0=