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
var missingNumber = function (nums) { };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjY4Lue8uuWkseaVsOWtly5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjY4Lue8uuWkseaVsOWtly50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7O0lBYUk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLGFBQWEsR0FBRyxVQUFVLElBQWMsSUFBRyxDQUFDLENBQUM7QUFFakQ7O0tBRUs7QUFDTDs7S0FFSztBQUNMLFNBQVMsU0FBUyxDQUFDLElBQWM7SUFDL0IsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN4QyxRQUFRLElBQUksQ0FBQyxDQUFDO0tBQ2Y7SUFDRCxPQUFPLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2pELENBQUM7QUFFRDs7S0FFSztBQUNMLFNBQVMsU0FBUyxDQUFDLElBQWM7SUFDL0IsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3hDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQixNQUFNLElBQUksQ0FBQyxDQUFDO0tBQ2I7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6a5LiA5Liq5YyF5ZCrIDAsIDEsIDIsIC4uLiwgbiDkuK0gbiDkuKrmlbDnmoTluo/liJfvvIzmib7lh7ogMCAuLiBuIOS4reayoeacieWHuueOsOWcqOW6j+WIl+S4reeahOmCo+S4quaVsOOAglxyXG5cclxu56S65L6LIDE6XHJcblxyXG7ovpPlhaU6IFszLDAsMV1cclxu6L6T5Ye6OiAyXHJcbuekuuS+iyAyOlxyXG5cclxu6L6T5YWlOiBbOSw2LDQsMiwzLDUsNywwLDFdXHJcbui+k+WHujogOFxyXG7or7TmmI46XHJcbuS9oOeahOeul+azleW6lOWFt+aciee6v+aAp+aXtumXtOWkjeadguW6puOAguS9oOiDveWQpuS7heS9v+eUqOmineWkluW4uOaVsOepuumXtOadpeWunueOsD9cclxuKiAqL1xyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJbXX0gbnVtc1xyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAqL1xyXG52YXIgbWlzc2luZ051bWJlciA9IGZ1bmN0aW9uIChudW1zOiBudW1iZXJbXSkge307XHJcblxyXG4vKipcclxuICog55Sx5LqO57uZ5Ye655qEIOaVsOe7hOeahOaVsOWtl+aYr+S5seW6j+eahCDmiYDku6XkuIDoiKznmoTmn6Xmib7lubbkuI3lpb1cclxuICogKi9cclxuLyoqXHJcbiAqIOaxguWSjFxyXG4gKiAqL1xyXG5mdW5jdGlvbiBzb2x1dGlvbjEobnVtczogbnVtYmVyW10pIHtcclxuICBsZXQgdG90YWxTdW0gPSAwO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtcy5sZW5ndGggKyAxOyBpKyspIHtcclxuICAgIHRvdGFsU3VtICs9IGk7XHJcbiAgfVxyXG4gIHJldHVybiB0b3RhbFN1bSAtIG51bXMucmVkdWNlKChhLCBiKSA9PiBhICsgYik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDljrteIOaTjeS9nFxyXG4gKiAqL1xyXG5mdW5jdGlvbiBzb2x1dGlvbjIobnVtczogbnVtYmVyW10pIHtcclxuICBsZXQgcmVzdWx0ID0gMDtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bXMubGVuZ3RoICsgMTsgaSsrKSB7XHJcbiAgICBudW1zW2ldICYmIChyZXN1bHQgXj0gbnVtc1tpXSk7XHJcbiAgICByZXN1bHQgXj0gaTtcclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IHt9O1xyXG4iXX0=