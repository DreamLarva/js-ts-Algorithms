"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。

示例 1:

输入: [3,0,1]
输出: 2
示例 2:

输入: [9,6,4,2,3,5,7,0,1]
输出: 8
说明:
你的算法应具有线性时间复杂度。你能否仅使用额外常数空间来实现?
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
};
/**
 * 由于给出的 数组的数字是乱序的 所以一般的查找并不好
 * */
/**
 * 求和
 * */
function solution1(nums) {
    let totalSum = 0;
    for (let i = 0; i < nums.length + 1; i++) {
        totalSum += i;
    }
    return totalSum - nums.reduce((a, b) => a + b);
}
/**
 * 去^ 操作
 * */
function solution2(nums) {
    let result = 0;
    for (let i = 0; i < nums.length + 1; i++) {
        nums[i] && (result ^= nums[i]);
        result ^= i;
    }
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjY4Lue8uuWkseaVsOWtly5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjY4Lue8uuWkseaVsOWtly50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7O0lBYUk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLGFBQWEsR0FBRyxVQUFVLElBQWM7QUFFNUMsQ0FBQyxDQUFDO0FBRUY7O0tBRUs7QUFDTDs7S0FFSztBQUNMLFNBQVMsU0FBUyxDQUFDLElBQWM7SUFDN0IsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN0QyxRQUFRLElBQUksQ0FBQyxDQUFDO0tBQ2pCO0lBQ0QsT0FBTyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNuRCxDQUFDO0FBRUQ7O0tBRUs7QUFDTCxTQUFTLFNBQVMsQ0FBQyxJQUFjO0lBQzdCLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNmLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN0QyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0IsTUFBTSxJQUFJLENBQUMsQ0FBQztLQUVmO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4gOS4quWMheWQqyAwLCAxLCAyLCAuLi4sIG4g5LitIG4g5Liq5pWw55qE5bqP5YiX77yM5om+5Ye6IDAgLi4gbiDkuK3msqHmnInlh7rnjrDlnKjluo/liJfkuK3nmoTpgqPkuKrmlbDjgIJcclxuXHJcbuekuuS+iyAxOlxyXG5cclxu6L6T5YWlOiBbMywwLDFdXHJcbui+k+WHujogMlxyXG7npLrkvosgMjpcclxuXHJcbui+k+WFpTogWzksNiw0LDIsMyw1LDcsMCwxXVxyXG7ovpPlh7o6IDhcclxu6K+05piOOlxyXG7kvaDnmoTnrpfms5XlupTlhbfmnInnur/mgKfml7bpl7TlpI3mnYLluqbjgILkvaDog73lkKbku4Xkvb/nlKjpop3lpJbluLjmlbDnqbrpl7TmnaXlrp7njrA/XHJcbiogKi9cclxuLyoqXHJcbiAqIEBwYXJhbSB7bnVtYmVyW119IG51bXNcclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cclxudmFyIG1pc3NpbmdOdW1iZXIgPSBmdW5jdGlvbiAobnVtczogbnVtYmVyW10pIHtcclxuXHJcbn07XHJcblxyXG4vKipcclxuICog55Sx5LqO57uZ5Ye655qEIOaVsOe7hOeahOaVsOWtl+aYr+S5seW6j+eahCDmiYDku6XkuIDoiKznmoTmn6Xmib7lubbkuI3lpb1cclxuICogKi9cclxuLyoqXHJcbiAqIOaxguWSjFxyXG4gKiAqL1xyXG5mdW5jdGlvbiBzb2x1dGlvbjEobnVtczogbnVtYmVyW10pIHtcclxuICAgIGxldCB0b3RhbFN1bSA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bXMubGVuZ3RoICsgMTsgaSsrKSB7XHJcbiAgICAgICAgdG90YWxTdW0gKz0gaTtcclxuICAgIH1cclxuICAgIHJldHVybiB0b3RhbFN1bSAtIG51bXMucmVkdWNlKChhLCBiKSA9PiBhICsgYik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDljrteIOaTjeS9nFxyXG4gKiAqL1xyXG5mdW5jdGlvbiBzb2x1dGlvbjIobnVtczogbnVtYmVyW10pIHtcclxuICAgIGxldCByZXN1bHQgPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1zLmxlbmd0aCArIDE7IGkrKykge1xyXG4gICAgICAgIG51bXNbaV0gJiYgKHJlc3VsdCBePSBudW1zW2ldKTtcclxuICAgICAgICByZXN1bHQgXj0gaTtcclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IHt9O1xyXG4iXX0=