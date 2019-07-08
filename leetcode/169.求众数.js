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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTY5LuaxguS8l+aVsC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTY5LuaxguS8l+aVsC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7O0lBYUk7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLGVBQWUsR0FBRyxVQUFVLElBQWM7SUFDMUMsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDM0IsQ0FBQyxDQUFDO0FBRUY7O0tBRUs7QUFDTCxTQUFTLFNBQVMsQ0FBQyxJQUFjO0lBQzdCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMzQyxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksT0FBTyxFQUFFO1FBQzNCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3hCLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLFVBQVUsQ0FBQyxDQUFDO1FBQzFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksT0FBTztZQUFFLE9BQU8sVUFBVSxDQUFDO0tBQ3ZEO0FBQ0wsQ0FBQztBQUVEOzs7Ozs7Ozs7S0FTSztBQUNMLFNBQVMsU0FBUyxDQUFDLElBQWM7SUFDN0IsSUFBSSxHQUFHLEdBQWEsRUFBRSxDQUFDO0lBQ3ZCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkLE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDeEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDbEIsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNyQjthQUFNO1lBQ0gsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksS0FBSyxLQUFLLE9BQU8sRUFBRTtnQkFDbkIsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNyQjtpQkFBTTtnQkFDSCxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDYjtTQUNKO1FBQ0QsS0FBSyxFQUFFLENBQUM7S0FDWDtJQUNELE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBQyxJQUFjO0lBQzdCLElBQUksTUFBTSxHQUFHLElBQUksRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNkLE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDeEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksT0FBTyxLQUFLLE1BQU0sRUFBRTtZQUNwQixLQUFLLEVBQUUsQ0FBQztTQUNYO2FBQU0sSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLE1BQU0sR0FBRyxPQUFPLENBQUM7WUFDakIsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUNiO2FBQU07WUFDSCxLQUFLLEVBQUUsQ0FBQztTQUNYO1FBQ0QsS0FBSyxFQUFFLENBQUM7S0FDWDtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6a5LiA5Liq5aSn5bCP5Li6IG4g55qE5pWw57uE77yM5om+5Yiw5YW25Lit55qE5LyX5pWw44CC5LyX5pWw5piv5oyH5Zyo5pWw57uE5Lit5Ye6546w5qyh5pWw5aSn5LqOIOKMiiBuLzIg4oyLIOeahOWFg+e0oOOAglxuXG7kvaDlj6/ku6XlgYforr7mlbDnu4TmmK/pnZ7nqbrnmoTvvIzlubbkuJTnu5nlrprnmoTmlbDnu4TmgLvmmK/lrZjlnKjkvJfmlbDjgIJcblxu56S65L6LIDE6XG5cbui+k+WFpTogWzMsMiwzXVxu6L6T5Ye6OiAzXG7npLrkvosgMjpcblxu6L6T5YWlOiBbMiwyLDEsMSwxLDIsMl1cbui+k+WHujogMlxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBtYWpvcml0eUVsZW1lbnQgPSBmdW5jdGlvbiAobnVtczogbnVtYmVyW10pIHtcbiAgICByZXR1cm4gc29sdXRpb24yKG51bXMpO1xufTtcblxuLyoqXG4gKiDnqbbmnoHmmrTlipvnrpfms5VcbiAqICovXG5mdW5jdGlvbiBzb2x1dGlvbjEobnVtczogbnVtYmVyW10pIHtcbiAgICBjb25zdCBoYWxmTGVuID0gTWF0aC5jZWlsKG51bXMubGVuZ3RoIC8gMik7XG4gICAgd2hpbGUgKG51bXMubGVuZ3RoID49IGhhbGZMZW4pIHtcbiAgICAgICAgY29uc3QgZmlsdGVyTm9kZSA9IG51bXNbMF07XG4gICAgICAgIGNvbnN0IGxlbiA9IG51bXMubGVuZ3RoO1xuICAgICAgICBudW1zID0gbnVtcy5maWx0ZXIodiA9PiB2ICE9PSBmaWx0ZXJOb2RlKTtcbiAgICAgICAgaWYgKGxlbiAtIG51bXMubGVuZ3RoID49IGhhbGZMZW4pIHJldHVybiBmaWx0ZXJOb2RlO1xuICAgIH1cbn1cblxuLyoqXG4gKiDmkanlsJTmipXnpajms5VcbiAqIOS8l+aVsCA6IOWHuueOsOasoeaVsCDlpKfkuo7ljYrmlbAg55qE5pWwXG4gKiDmr4/kuKTkuKrkuI3lkIznmoTmlbAg5YiZ5oq15raI6L+Z5Lik5Liq5pWwXG4gKiDliankuIvnmoTpgqPkuKrlsLEg5bCx5piv5LyX5pWwXG4gKiDnkIbop6M6XG4gKiDkuKTnp43mnoHnq6/mg4XlhrVcbiAqICAgICAgMS7lpoLmnpzmiYDmnInpnZ7kvJfmlbDnmoTmlbAg6YO95Lik5Lik5oq15raIIOWImeWPquWJqeS8l+aVsFxuICogICAgICAyLuWmguaenOavj+S4quS8l+aVsOmDveS4jiDpnZ7kvJfmlbDkuKTkuKTmirXmtogg5YiZ5Y+q5Ymp5LyX5pWwIOWboOS4uuS8l+aVsCA+IOWNiuaVsFxuICogKi9cbmZ1bmN0aW9uIHNvbHV0aW9uMihudW1zOiBudW1iZXJbXSkge1xuICAgIGxldCB0bXA6IG51bWJlcltdID0gW107XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICB3aGlsZSAoaW5kZXggPCBudW1zLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gbnVtc1tpbmRleF07XG4gICAgICAgIGlmICh0bXAubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0bXAucHVzaChjdXJyZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gdG1wWzBdO1xuICAgICAgICAgICAgaWYgKGZpcnN0ID09PSBjdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgdG1wLnB1c2goY3VycmVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRtcC5wb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpbmRleCsrO1xuICAgIH1cbiAgICByZXR1cm4gdG1wWzBdO1xufVxuXG5mdW5jdGlvbiBzb2x1dGlvbjMobnVtczogbnVtYmVyW10pIHtcbiAgICBsZXQgcmVzdWx0ID0gbnVsbCwgY291bnQgPSAwO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgd2hpbGUgKGluZGV4IDwgbnVtcy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IG51bXNbaW5kZXhdO1xuICAgICAgICBpZiAoY3VycmVudCA9PT0gcmVzdWx0KSB7XG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9IGVsc2UgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBjdXJyZW50O1xuICAgICAgICAgICAgY291bnQgPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgfVxuICAgICAgICBpbmRleCsrO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbmV4cG9ydCB7fVxuIl19