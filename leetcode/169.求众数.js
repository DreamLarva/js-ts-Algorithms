"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在众数。

示例 1:

输入: [3,2,3]
输出: 3
示例 2:

输入: [2,2,1,1,1,2,2]
输出: 2
* */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    return solution2(nums);
};
/**
 * 究极暴力算法
 * */
function solution1(nums) {
    const halfLen = Math.ceil(nums.length / 2);
    while (nums.length >= halfLen) {
        const filterNode = nums[0];
        const len = nums.length;
        nums = nums.filter(v => v !== filterNode);
        if (len - nums.length >= halfLen)
            return filterNode;
    }
}
/**
 * 摩尔投票法
 * 众数 : 出现次数 大于半数 的数
 * 每两个不同的数 则抵消这两个数
 * 剩下的那个就 就是众数
 * 理解:
 * 两种极端情况
 *      1.如果所有非众数的数 都两两抵消 则只剩众数
 *      2.如果每个众数都与 非众数两两抵消 则只剩众数 因为众数 > 半数
 * */
function solution2(nums) {
    let tmp = [];
    let index = 0;
    while (index < nums.length) {
        const current = nums[index];
        if (tmp.length === 0) {
            tmp.push(current);
        }
        else {
            const first = tmp[0];
            if (first === current) {
                tmp.push(current);
            }
            else {
                tmp.pop();
            }
        }
        index++;
    }
    return tmp[0];
}
function solution3(nums) {
    let result = null, count = 0;
    let index = 0;
    while (index < nums.length) {
        const current = nums[index];
        if (current === result) {
            count++;
        }
        else if (count === 0) {
            result = current;
            count = 1;
        }
        else {
            count--;
        }
        index++;
    }
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTY5LuaxguS8l+aVsC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTY5LuaxguS8l+aVsC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7O0lBYUk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLGVBQWUsR0FBRyxVQUFVLElBQWM7SUFDMUMsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDM0IsQ0FBQyxDQUFDO0FBRUY7O0tBRUs7QUFDTCxTQUFTLFNBQVMsQ0FBQyxJQUFjO0lBQzdCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMzQyxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksT0FBTyxFQUFFO1FBQzNCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3hCLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLFVBQVUsQ0FBQyxDQUFDO1FBQzFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksT0FBTztZQUFFLE9BQU8sVUFBVSxDQUFDO0tBQ3ZEO0FBQ0wsQ0FBQztBQUVEOzs7Ozs7Ozs7S0FTSztBQUNMLFNBQVMsU0FBUyxDQUFDLElBQWM7SUFDN0IsSUFBSSxHQUFHLEdBQWEsRUFBRSxDQUFDO0lBQ3ZCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkLE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDeEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDbEIsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNyQjthQUFNO1lBQ0gsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksS0FBSyxLQUFLLE9BQU8sRUFBRTtnQkFDbkIsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNyQjtpQkFBTTtnQkFDSCxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDYjtTQUNKO1FBQ0QsS0FBSyxFQUFFLENBQUM7S0FDWDtJQUNELE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBQyxJQUFjO0lBQzdCLElBQUksTUFBTSxHQUFHLElBQUksRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkLE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDeEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksT0FBTyxLQUFLLE1BQU0sRUFBRTtZQUNwQixLQUFLLEVBQUUsQ0FBQztTQUNYO2FBQU0sSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLE1BQU0sR0FBRyxPQUFPLENBQUM7WUFDakIsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUNiO2FBQU07WUFDSCxLQUFLLEVBQUUsQ0FBQztTQUNYO1FBQ0QsS0FBSyxFQUFFLENBQUM7S0FDWDtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprkuIDkuKrlpKflsI/kuLogbiDnmoTmlbDnu4TvvIzmib7liLDlhbbkuK3nmoTkvJfmlbDjgILkvJfmlbDmmK/mjIflnKjmlbDnu4TkuK3lh7rnjrDmrKHmlbDlpKfkuo4g4oyKIG4vMiDijIsg55qE5YWD57Sg44CCXHJcblxyXG7kvaDlj6/ku6XlgYforr7mlbDnu4TmmK/pnZ7nqbrnmoTvvIzlubbkuJTnu5nlrprnmoTmlbDnu4TmgLvmmK/lrZjlnKjkvJfmlbDjgIJcclxuXHJcbuekuuS+iyAxOlxyXG5cclxu6L6T5YWlOiBbMywyLDNdXHJcbui+k+WHujogM1xyXG7npLrkvosgMjpcclxuXHJcbui+k+WFpTogWzIsMiwxLDEsMSwyLDJdXHJcbui+k+WHujogMlxyXG4qICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXHJcbiAqIEByZXR1cm4ge251bWJlcn1cclxuICovXHJcbnZhciBtYWpvcml0eUVsZW1lbnQgPSBmdW5jdGlvbiAobnVtczogbnVtYmVyW10pIHtcclxuICAgIHJldHVybiBzb2x1dGlvbjIobnVtcyk7XHJcbn07XHJcblxyXG4vKipcclxuICog56m25p6B5pq05Yqb566X5rOVXHJcbiAqICovXHJcbmZ1bmN0aW9uIHNvbHV0aW9uMShudW1zOiBudW1iZXJbXSkge1xyXG4gICAgY29uc3QgaGFsZkxlbiA9IE1hdGguY2VpbChudW1zLmxlbmd0aCAvIDIpO1xyXG4gICAgd2hpbGUgKG51bXMubGVuZ3RoID49IGhhbGZMZW4pIHtcclxuICAgICAgICBjb25zdCBmaWx0ZXJOb2RlID0gbnVtc1swXTtcclxuICAgICAgICBjb25zdCBsZW4gPSBudW1zLmxlbmd0aDtcclxuICAgICAgICBudW1zID0gbnVtcy5maWx0ZXIodiA9PiB2ICE9PSBmaWx0ZXJOb2RlKTtcclxuICAgICAgICBpZiAobGVuIC0gbnVtcy5sZW5ndGggPj0gaGFsZkxlbikgcmV0dXJuIGZpbHRlck5vZGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmkanlsJTmipXnpajms5VcclxuICog5LyX5pWwIDog5Ye6546w5qyh5pWwIOWkp+S6juWNiuaVsCDnmoTmlbBcclxuICog5q+P5Lik5Liq5LiN5ZCM55qE5pWwIOWImeaKtea2iOi/meS4pOS4quaVsFxyXG4gKiDliankuIvnmoTpgqPkuKrlsLEg5bCx5piv5LyX5pWwXHJcbiAqIOeQhuinozpcclxuICog5Lik56eN5p6B56uv5oOF5Ya1XHJcbiAqICAgICAgMS7lpoLmnpzmiYDmnInpnZ7kvJfmlbDnmoTmlbAg6YO95Lik5Lik5oq15raIIOWImeWPquWJqeS8l+aVsFxyXG4gKiAgICAgIDIu5aaC5p6c5q+P5Liq5LyX5pWw6YO95LiOIOmdnuS8l+aVsOS4pOS4pOaKtea2iCDliJnlj6rliankvJfmlbAg5Zug5Li65LyX5pWwID4g5Y2K5pWwXHJcbiAqICovXHJcbmZ1bmN0aW9uIHNvbHV0aW9uMihudW1zOiBudW1iZXJbXSkge1xyXG4gICAgbGV0IHRtcDogbnVtYmVyW10gPSBbXTtcclxuICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICB3aGlsZSAoaW5kZXggPCBudW1zLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBudW1zW2luZGV4XTtcclxuICAgICAgICBpZiAodG1wLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0bXAucHVzaChjdXJyZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBmaXJzdCA9IHRtcFswXTtcclxuICAgICAgICAgICAgaWYgKGZpcnN0ID09PSBjdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0bXAucHVzaChjdXJyZW50KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRtcC5wb3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpbmRleCsrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRtcFswXTtcclxufVxyXG5cclxuZnVuY3Rpb24gc29sdXRpb24zKG51bXM6IG51bWJlcltdKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gbnVsbCwgY291bnQgPSAwO1xyXG4gICAgbGV0IGluZGV4ID0gMDtcclxuICAgIHdoaWxlIChpbmRleCA8IG51bXMubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudCA9IG51bXNbaW5kZXhdO1xyXG4gICAgICAgIGlmIChjdXJyZW50ID09PSByZXN1bHQpIHtcclxuICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICB9IGVsc2UgaWYgKGNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGN1cnJlbnQ7XHJcbiAgICAgICAgICAgIGNvdW50ID0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb3VudC0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbmRleCsrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7fVxyXG4iXX0=