"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
峰值元素是指其值大于左右相邻值的元素。

给定一个输入数组 nums，其中 nums[i] ≠ nums[i+1]，找到峰值元素并返回其索引。

数组可能包含多个峰值，在这种情况下，返回任何一个峰值所在位置即可。

你可以假设 nums[-1] = nums[n] = -∞。

示例 1:

输入: nums = [1,2,3,1]
输出: 2
解释: 3 是峰值元素，你的函数应该返回其索引 2。
示例 2:

输入: nums = [1,2,1,3,5,6,4]
输出: 1 或 5
解释: 你的函数可以返回索引 1，其峰值元素为 2；
     或者返回索引 5， 其峰值元素为 6。
说明:

你的解法应该是 O(logN) 时间复杂度的。

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
         * 如果是 mid 是 ceil 那么 循环就会无限进行 因为 如果 只剩2个值
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYyLuWvu+aJvuWzsOWAvC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTYyLuWvu+aJvuWzsOWAvC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUEyQkk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLGVBQWUsR0FBRyxVQUFVLElBQWM7SUFDNUM7O1NBRUs7SUFDTCxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7SUFDYixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM1QixPQUFPLElBQUksR0FBRyxLQUFLLEVBQUU7UUFDbkIsTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDOzs7Ozs7YUFNSztRQUNMLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDN0IsS0FBSyxHQUFHLEdBQUcsQ0FBQztTQUNiO2FBQU07WUFDTCxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNoQjtLQUNGO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUVyRCxnQkFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu5bOw5YC85YWD57Sg5piv5oyH5YW25YC85aSn5LqO5bem5Y+z55u46YK75YC855qE5YWD57Sg44CCXG5cbue7meWumuS4gOS4qui+k+WFpeaVsOe7hCBudW1z77yM5YW25LitIG51bXNbaV0g4omgIG51bXNbaSsxXe+8jOaJvuWIsOWzsOWAvOWFg+e0oOW5tui/lOWbnuWFtue0ouW8leOAglxuXG7mlbDnu4Tlj6/og73ljIXlkKvlpJrkuKrls7DlgLzvvIzlnKjov5nnp43mg4XlhrXkuIvvvIzov5Tlm57ku7vkvZXkuIDkuKrls7DlgLzmiYDlnKjkvY3nva7ljbPlj6/jgIJcblxu5L2g5Y+v5Lul5YGH6K6+IG51bXNbLTFdID0gbnVtc1tuXSA9IC3iiJ7jgIJcblxu56S65L6LIDE6XG5cbui+k+WFpTogbnVtcyA9IFsxLDIsMywxXVxu6L6T5Ye6OiAyXG7op6Pph4o6IDMg5piv5bOw5YC85YWD57Sg77yM5L2g55qE5Ye95pWw5bqU6K+l6L+U5Zue5YW257Si5byVIDLjgIJcbuekuuS+iyAyOlxuXG7ovpPlhaU6IG51bXMgPSBbMSwyLDEsMyw1LDYsNF1cbui+k+WHujogMSDmiJYgNVxu6Kej6YeKOiDkvaDnmoTlh73mlbDlj6/ku6Xov5Tlm57ntKLlvJUgMe+8jOWFtuWzsOWAvOWFg+e0oOS4uiAy77ybXG4gICAgIOaIluiAhei/lOWbnue0ouW8lSA177yMIOWFtuWzsOWAvOWFg+e0oOS4uiA244CCXG7or7TmmI46XG5cbuS9oOeahOino+azleW6lOivpeaYryBPKGxvZ04pIOaXtumXtOWkjeadguW6pueahOOAglxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvZmluZC1wZWFrLWVsZW1lbnRcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBmaW5kUGVha0VsZW1lbnQgPSBmdW5jdGlvbiAobnVtczogbnVtYmVyW10pIHtcbiAgLyoqXG4gICAqIOagueaNriDml7bpl7TlpI3mnYLluqYg5Y+q6IO95LqM5YiG5p+l5om+5rOVXG4gICAqICovXG4gIGxldCBsZWZ0ID0gMDtcbiAgbGV0IHJpZ2h0ID0gbnVtcy5sZW5ndGggLSAxO1xuICB3aGlsZSAobGVmdCA8IHJpZ2h0KSB7XG4gICAgY29uc3QgbWlkID0gKHJpZ2h0ICsgbGVmdCkgPj4gMTtcbiAgICAvKipcbiAgICAgKiDms6jmhI/ov5nph4znmoTmioDlt6dcbiAgICAgKiDpgb/lhY3lvqrnjq/ml6DpmZDov5vooYxcbiAgICAgKiDlpoLmnpzmmK8gbWlkIOaYryBjZWlsIOmCo+S5iCDlvqrnjq/lsLHkvJrml6DpmZDov5vooYwg5Zug5Li6IOWmguaenCDlj6rliaky5Liq5YC8XG4gICAgICog6YKj5LmIIOS9v+eUqGNlaWwg5L2/55So55qEIOaYr+WPs+i+ueeahOWAvCDogIzlpoLmnpzov5vlhaXnrKzkuIDkuKrliIbmlK/lsLHkvJogbGVmdCDlkowgcmlnaHQg5LiN5Y+YXG4gICAgICog5omA5LulIOaciSByaWdodCA9IG1pZCDov5nlj6XnmoTlrZjlnKgg6YKj5LmIIOWmguaenOWPquacieS4pOS4quWAvOeahOaXtuWAmSDlsLHkuI3og73mmK/lj7PlgLwg5Y+N5LmL5ZCM55CGXG4gICAgICogKi9cbiAgICBpZiAobnVtc1ttaWRdID4gbnVtc1ttaWQgKyAxXSkge1xuICAgICAgcmlnaHQgPSBtaWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlZnQgPSBtaWQgKyAxO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbGVmdDtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoZmluZFBlYWtFbGVtZW50KFsxLCAyLCAzLCAxXSksIDIpO1xuXG5hc3NlcnQub2soWzEsIDVdLmluY2x1ZGVzKGZpbmRQZWFrRWxlbWVudChbMSwgMiwgMSwgMywgNSwgNiwgNF0pKSk7XG4iXX0=