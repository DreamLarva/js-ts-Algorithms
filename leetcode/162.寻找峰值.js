"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
峰值元素是指其值大于左右相邻值的元素。

给定一个输入数组 nums，其中 nums[i] ≠ nums[i+1]，找到峰值元素并返回其索引。

数组可能包含多个峰值，在这种情况下，返回任何一个峰值所在位置即可。

你可以假设 nums[-1] = nums[n] = -∞。

示例 1:

输入: nums = [1,2,3,1]
输出: 2
解释: 3 是峰值元素，你的函数应该返回其索引 2。
示例 2:

输入: nums = [1,2,1,3,5,6,4]
输出: 1 或 5
解释: 你的函数可以返回索引 1，其峰值元素为 2；
     或者返回索引 5， 其峰值元素为 6。
说明:

你的解法应该是 O(logN) 时间复杂度的。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-peak-element
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    /**
     * 根据 时间复杂度 只能二分查找法
     * */
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const mid = (right + left) >> 1;
        /**
         * 注意这里的技巧
         * 避免循环无限进行
         * 如果是ceil 那么 循环就会无限进行 因为 如果 只剩2个值
         * 那么 使用ceil 使用的 是右边的值 而如果进入第一个分支就会 left 和 right 不变
         * 所以 有 right = mid 这句的存在 那么 如果只有两个值的时候 就不能是右值 反之同理
         * */
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return left;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(findPeakElement([1, 2, 3, 1]), 2);
assert_1.default.ok([1, 5].includes(findPeakElement([1, 2, 1, 3, 5, 6, 4])));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYyLuWvu+aJvuWzsOWAvC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTYyLuWvu+aJvuWzsOWAvC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUEyQkk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLGVBQWUsR0FBRyxVQUFVLElBQWM7SUFDMUM7O1NBRUs7SUFDTCxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7SUFDYixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM1QixPQUFPLElBQUksR0FBRyxLQUFLLEVBQUU7UUFDakIsTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDOzs7Ozs7YUFNSztRQUNMLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDM0IsS0FBSyxHQUFHLEdBQUcsQ0FBQztTQUNmO2FBQU07WUFDSCxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNsQjtLQUNKO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBR0Ysb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUNkLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQzdCLENBQUMsQ0FDSixDQUFDO0FBRUYsZ0JBQU0sQ0FBQyxFQUFFLENBQ0wsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDMUQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbuWzsOWAvOWFg+e0oOaYr+aMh+WFtuWAvOWkp+S6juW3puWPs+ebuOmCu+WAvOeahOWFg+e0oOOAglxyXG5cclxu57uZ5a6a5LiA5Liq6L6T5YWl5pWw57uEwqBudW1z77yM5YW25LitIG51bXNbaV0g4omgIG51bXNbaSsxXe+8jOaJvuWIsOWzsOWAvOWFg+e0oOW5tui/lOWbnuWFtue0ouW8leOAglxyXG5cclxu5pWw57uE5Y+v6IO95YyF5ZCr5aSa5Liq5bOw5YC877yM5Zyo6L+Z56eN5oOF5Ya15LiL77yM6L+U5Zue5Lu75L2V5LiA5Liq5bOw5YC85omA5Zyo5L2N572u5Y2z5Y+v44CCXHJcblxyXG7kvaDlj6/ku6XlgYforr7CoG51bXNbLTFdID0gbnVtc1tuXSA9IC3iiJ7jgIJcclxuXHJcbuekuuS+iyAxOlxyXG5cclxu6L6T5YWlOiBudW1zID0gWzEsMiwzLDFdXHJcbui+k+WHujogMlxyXG7op6Pph4o6IDMg5piv5bOw5YC85YWD57Sg77yM5L2g55qE5Ye95pWw5bqU6K+l6L+U5Zue5YW257Si5byVIDLjgIJcclxu56S65L6LwqAyOlxyXG5cclxu6L6T5YWlOiBudW1zID0gWzEsMiwxLDMsNSw2LDRdXHJcbui+k+WHujogMSDmiJYgNVxyXG7op6Pph4o6IOS9oOeahOWHveaVsOWPr+S7pei/lOWbnue0ouW8lSAx77yM5YW25bOw5YC85YWD57Sg5Li6IDLvvJtcclxuwqAgICAg5oiW6ICF6L+U5Zue57Si5byVIDXvvIwg5YW25bOw5YC85YWD57Sg5Li6IDbjgIJcclxu6K+05piOOlxyXG5cclxu5L2g55qE6Kej5rOV5bqU6K+l5pivwqBPKGxvZ04pwqDml7bpl7TlpI3mnYLluqbnmoTjgIJcclxuXHJcbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXHJcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL2ZpbmQtcGVhay1lbGVtZW50XHJcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxyXG4qICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXHJcbiAqIEByZXR1cm4ge251bWJlcn1cclxuICovXHJcbnZhciBmaW5kUGVha0VsZW1lbnQgPSBmdW5jdGlvbiAobnVtczogbnVtYmVyW10pIHtcclxuICAgIC8qKlxyXG4gICAgICog5qC55o2uIOaXtumXtOWkjeadguW6piDlj6rog73kuozliIbmn6Xmib7ms5VcclxuICAgICAqICovXHJcbiAgICBsZXQgbGVmdCA9IDA7XHJcbiAgICBsZXQgcmlnaHQgPSBudW1zLmxlbmd0aCAtIDE7XHJcbiAgICB3aGlsZSAobGVmdCA8IHJpZ2h0KSB7XHJcbiAgICAgICAgY29uc3QgbWlkID0gKHJpZ2h0ICsgbGVmdCkgPj4gMTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDms6jmhI/ov5nph4znmoTmioDlt6dcclxuICAgICAgICAgKiDpgb/lhY3lvqrnjq/ml6DpmZDov5vooYxcclxuICAgICAgICAgKiDlpoLmnpzmmK9jZWlsIOmCo+S5iCDlvqrnjq/lsLHkvJrml6DpmZDov5vooYwg5Zug5Li6IOWmguaenCDlj6rliaky5Liq5YC8XHJcbiAgICAgICAgICog6YKj5LmIIOS9v+eUqGNlaWwg5L2/55So55qEIOaYr+WPs+i+ueeahOWAvCDogIzlpoLmnpzov5vlhaXnrKzkuIDkuKrliIbmlK/lsLHkvJogbGVmdCDlkowgcmlnaHQg5LiN5Y+YXHJcbiAgICAgICAgICog5omA5LulIOaciSByaWdodCA9IG1pZCDov5nlj6XnmoTlrZjlnKgg6YKj5LmIIOWmguaenOWPquacieS4pOS4quWAvOeahOaXtuWAmSDlsLHkuI3og73mmK/lj7PlgLwg5Y+N5LmL5ZCM55CGXHJcbiAgICAgICAgICogKi9cclxuICAgICAgICBpZiAobnVtc1ttaWRdID4gbnVtc1ttaWQgKyAxXSkge1xyXG4gICAgICAgICAgICByaWdodCA9IG1pZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZWZ0ID0gbWlkICsgMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbGVmdDtcclxufTtcclxuXHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIGZpbmRQZWFrRWxlbWVudChbMSwgMiwgMywgMV0pLFxyXG4gICAgMixcclxuKTtcclxuXHJcbmFzc2VydC5vayhcclxuICAgIFsxLCA1XS5pbmNsdWRlcyhmaW5kUGVha0VsZW1lbnQoWzEsIDIsIDEsIDMsIDUsIDYsIDRdKSksXHJcbik7XHJcbiJdfQ==