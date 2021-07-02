"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

你可以假设数组中不存在重复的元素。

你的算法时间复杂度必须是 O(log n) 级别。

示例 1:

输入: nums = [4,5,6,7,0,1,2], target = 0
输出: 4
示例 2:

输入: nums = [4,5,6,7,0,1,2], target = 3
输出: -1

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/search-in-rotated-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    /**
     * 分析
     * 由于是 升序 数组 且只有一次旋转
     * 选择 任意一个点 就能够判断是不是 分成左侧部分 和 右侧部分
     * 左右部分必定至少有一个依然是升序的情况 这就能判断 数据是不是绝对的落在某一侧
     * */
    if (nums.length === 0)
        return -1;
    if (nums.length === 1)
        return nums[0] === target ? 0 : -1;
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const middle = left + ((right - left) >>> 1);
        if (nums[middle] === target)
            return middle;
        // 由于上面 二分 是向下取整 所有只可能出现
        // 极端情况下 只有一个值(共一个值) 或者 只有右侧有值左侧没有值(共2个值)
        // 判断右侧 是否保持升序
        let sureNotInRight = false;
        if (nums[middle + 1] <= nums[right]) {
            // 如果保持升序 就判断 target 是不是落在区间内
            if (nums[middle + 1] <= target && target <= nums[right]) {
                left = middle + 1;
            }
            else {
                right = middle - 1;
                sureNotInRight = true;
            }
        }
        // 判断左侧 是否保持升序
        let sureNotInLeft = false;
        if (middle - 1 >= left && nums[left] <= nums[middle - 1]) {
            if (nums[left] <= target && target <= nums[middle - 1]) {
                right = middle - 1;
            }
            else {
                left = middle + 1;
                sureNotInLeft = true;
            }
        }
        if (sureNotInLeft && sureNotInRight)
            return -1;
    }
    return -1;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(search([4, 5, 6, 7, 0, 1, 2], 0), 4);
assert_1.default.strictEqual(search([4, 5, 6, 7, 0, 1, 2, 3, 4], 0), 4);
assert_1.default.strictEqual(search([4, 5, 6, 7, 0, 1, 2], 3), -1);
assert_1.default.strictEqual(search([1, 3], 0), -1);
assert_1.default.strictEqual(search([1], 0), -1);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzMu5pCc57Si5peL6L2s5o6S5bqP5pWw57uELmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8zMy7mkJzntKLml4vovazmjpLluo/mlbDnu4QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUF1Qkk7QUFDSjs7OztHQUlHO0FBQ0gsSUFBSSxNQUFNLEdBQUcsVUFBVSxJQUFjLEVBQUUsTUFBYztJQUNuRDs7Ozs7U0FLSztJQUNMLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDO1FBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNqQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRCxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7SUFDYixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM1QixPQUFPLElBQUksSUFBSSxLQUFLLEVBQUU7UUFDcEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFN0MsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssTUFBTTtZQUFFLE9BQU8sTUFBTSxDQUFDO1FBQzNDLHdCQUF3QjtRQUN4Qix5Q0FBeUM7UUFDekMsY0FBYztRQUNkLElBQUksY0FBYyxHQUFHLEtBQUssQ0FBQztRQUMzQixJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25DLDZCQUE2QjtZQUM3QixJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksTUFBTSxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZELElBQUksR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2FBQ25CO2lCQUFNO2dCQUNMLEtBQUssR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixjQUFjLEdBQUcsSUFBSSxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCxjQUFjO1FBQ2QsSUFBSSxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDeEQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUN0RCxLQUFLLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQzthQUNwQjtpQkFBTTtnQkFDTCxJQUFJLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztnQkFDbEIsYUFBYSxHQUFHLElBQUksQ0FBQzthQUN0QjtTQUNGO1FBRUQsSUFBSSxhQUFhLElBQUksY0FBYztZQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7S0FDaEQ7SUFFRCxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ1osQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3hELGdCQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDOUQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6RCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxQyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuWBh+iuvuaMieeFp+WNh+W6j+aOkuW6j+eahOaVsOe7hOWcqOmihOWFiOacquefpeeahOafkOS4queCueS4iui/m+ihjOS6huaXi+i9rOOAglxuXG4oIOS+i+Wmgu+8jOaVsOe7hCBbMCwxLDIsNCw1LDYsN10g5Y+v6IO95Y+Y5Li6IFs0LDUsNiw3LDAsMSwyXSAp44CCXG5cbuaQnOe0ouS4gOS4que7meWumueahOebruagh+WAvO+8jOWmguaenOaVsOe7hOS4reWtmOWcqOi/meS4quebruagh+WAvO+8jOWImei/lOWbnuWug+eahOe0ouW8le+8jOWQpuWImei/lOWbniAtMSDjgIJcblxu5L2g5Y+v5Lul5YGH6K6+5pWw57uE5Lit5LiN5a2Y5Zyo6YeN5aSN55qE5YWD57Sg44CCXG5cbuS9oOeahOeul+azleaXtumXtOWkjeadguW6puW/hemhu+aYryBPKGxvZyBuKSDnuqfliKvjgIJcblxu56S65L6LIDE6XG5cbui+k+WFpTogbnVtcyA9IFs0LDUsNiw3LDAsMSwyXSwgdGFyZ2V0ID0gMFxu6L6T5Ye6OiA0XG7npLrkvosgMjpcblxu6L6T5YWlOiBudW1zID0gWzQsNSw2LDcsMCwxLDJdLCB0YXJnZXQgPSAzXG7ovpPlh7o6IC0xXG5cbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXG7pk77mjqXvvJpodHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9zZWFyY2gtaW4tcm90YXRlZC1zb3J0ZWQtYXJyYXlcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXG4gKiBAcGFyYW0ge251bWJlcn0gdGFyZ2V0XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBzZWFyY2ggPSBmdW5jdGlvbiAobnVtczogbnVtYmVyW10sIHRhcmdldDogbnVtYmVyKSB7XG4gIC8qKlxuICAgKiDliIbmnpBcbiAgICog55Sx5LqO5pivIOWNh+W6jyDmlbDnu4Qg5LiU5Y+q5pyJ5LiA5qyh5peL6L2sXG4gICAqIOmAieaLqSDku7vmhI/kuIDkuKrngrkg5bCx6IO95aSf5Yik5pat5piv5LiN5pivIOWIhuaIkOW3puS+p+mDqOWIhiDlkowg5Y+z5L6n6YOo5YiGXG4gICAqIOW3puWPs+mDqOWIhuW/heWumuiHs+WwkeacieS4gOS4quS+neeEtuaYr+WNh+W6j+eahOaDheWGtSDov5nlsLHog73liKTmlq0g5pWw5o2u5piv5LiN5piv57ud5a+555qE6JC95Zyo5p+Q5LiA5L6nXG4gICAqICovXG4gIGlmIChudW1zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC0xO1xuICBpZiAobnVtcy5sZW5ndGggPT09IDEpIHJldHVybiBudW1zWzBdID09PSB0YXJnZXQgPyAwIDogLTE7XG4gIGxldCBsZWZ0ID0gMDtcbiAgbGV0IHJpZ2h0ID0gbnVtcy5sZW5ndGggLSAxO1xuICB3aGlsZSAobGVmdCA8PSByaWdodCkge1xuICAgIGNvbnN0IG1pZGRsZSA9IGxlZnQgKyAoKHJpZ2h0IC0gbGVmdCkgPj4+IDEpO1xuXG4gICAgaWYgKG51bXNbbWlkZGxlXSA9PT0gdGFyZ2V0KSByZXR1cm4gbWlkZGxlO1xuICAgIC8vIOeUseS6juS4iumdoiDkuozliIYg5piv5ZCR5LiL5Y+W5pW0IOaJgOacieWPquWPr+iDveWHuueOsFxuICAgIC8vIOaegeerr+aDheWGteS4iyDlj6rmnInkuIDkuKrlgLwo5YWx5LiA5Liq5YC8KSDmiJbogIUg5Y+q5pyJ5Y+z5L6n5pyJ5YC85bem5L6n5rKh5pyJ5YC8KOWFsTLkuKrlgLwpXG4gICAgLy8g5Yik5pat5Y+z5L6nIOaYr+WQpuS/neaMgeWNh+W6j1xuICAgIGxldCBzdXJlTm90SW5SaWdodCA9IGZhbHNlO1xuICAgIGlmIChudW1zW21pZGRsZSArIDFdIDw9IG51bXNbcmlnaHRdKSB7XG4gICAgICAvLyDlpoLmnpzkv53mjIHljYfluo8g5bCx5Yik5patIHRhcmdldCDmmK/kuI3mmK/okL3lnKjljLrpl7TlhoVcbiAgICAgIGlmIChudW1zW21pZGRsZSArIDFdIDw9IHRhcmdldCAmJiB0YXJnZXQgPD0gbnVtc1tyaWdodF0pIHtcbiAgICAgICAgbGVmdCA9IG1pZGRsZSArIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByaWdodCA9IG1pZGRsZSAtIDE7XG4gICAgICAgIHN1cmVOb3RJblJpZ2h0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDliKTmlq3lt6bkvqcg5piv5ZCm5L+d5oyB5Y2H5bqPXG4gICAgbGV0IHN1cmVOb3RJbkxlZnQgPSBmYWxzZTtcbiAgICBpZiAobWlkZGxlIC0gMSA+PSBsZWZ0ICYmIG51bXNbbGVmdF0gPD0gbnVtc1ttaWRkbGUgLSAxXSkge1xuICAgICAgaWYgKG51bXNbbGVmdF0gPD0gdGFyZ2V0ICYmIHRhcmdldCA8PSBudW1zW21pZGRsZSAtIDFdKSB7XG4gICAgICAgIHJpZ2h0ID0gbWlkZGxlIC0gMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxlZnQgPSBtaWRkbGUgKyAxO1xuICAgICAgICBzdXJlTm90SW5MZWZ0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VyZU5vdEluTGVmdCAmJiBzdXJlTm90SW5SaWdodCkgcmV0dXJuIC0xO1xuICB9XG5cbiAgcmV0dXJuIC0xO1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChzZWFyY2goWzQsIDUsIDYsIDcsIDAsIDEsIDJdLCAwKSwgNCk7XG5hc3NlcnQuc3RyaWN0RXF1YWwoc2VhcmNoKFs0LCA1LCA2LCA3LCAwLCAxLCAyLCAzLCA0XSwgMCksIDQpO1xuYXNzZXJ0LnN0cmljdEVxdWFsKHNlYXJjaChbNCwgNSwgNiwgNywgMCwgMSwgMl0sIDMpLCAtMSk7XG5hc3NlcnQuc3RyaWN0RXF1YWwoc2VhcmNoKFsxLCAzXSwgMCksIC0xKTtcbmFzc2VydC5zdHJpY3RFcXVhbChzZWFyY2goWzFdLCAwKSwgLTEpO1xuIl19