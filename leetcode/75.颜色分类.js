"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

注意:
不能使用代码库中的排序函数来解决这道题。

示例:

输入: [2,0,2,1,1,0]
输出: [0,0,1,1,2,2]
进阶：

一个直观的解决方案是使用计数排序的两趟扫描算法。
首先，迭代计算出0、1 和 2 元素的个数，然后按照0、1、2的排序，重写当前数组。
你能想出一个仅使用常数空间的一趟扫描算法吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/sort-colors
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    /*
     * 荷兰旗问题
     * 需要排列的内容 只有三种 那么 只需要 O(n)的算法 就可以
     * 需要三个指针
     * 1. 分别是写入位置
     * 2. 当前 最后一个 1 位置之后
     * 3. 当前 最后一个 2 位置之前
     * 循环的结束 条件是 1 指针 在 3 指针 右侧
     * */
    // 初始化0的最右边界：p0 = 0。在整个算法执行过程中 nums[idx < p0] = 0.
    let p0 = 0;
    // 初始化2的最左边界 ：p2 = n - 1。在整个算法执行过程中 nums[idx > p2] = 2.
    let p2 = nums.length - 1;
    // 初始化当前考虑的元素序号 ：curr = 0.
    let curr = 0;
    while (curr <= p2) {
        // 若 nums[curr] = 0 ：交换第 curr个 和 第p0个 元素，并将指针都向右移。
        if (nums[curr] === 0) {
            [nums[curr], nums[p0]] = [nums[p0], nums[curr]];
            curr++;
            p0++;
        }
        // 若 nums[curr] = 2 ：交换第 curr个和第 p2个元素，并将 p2指针左移 。
        else if (nums[curr] === 2) {
            [nums[curr], nums[p2]] = [nums[p2], nums[curr]];
            p2--;
        }
        // 若 nums[curr] = 1 ：将指针curr右移。
        else {
            curr++;
        }
    }
};
const assert_1 = __importDefault(require("assert"));
{
    const sample = [2, 0, 2, 1, 1, 0];
    sortColors(sample);
    assert_1.default.deepStrictEqual(sample, [0, 0, 1, 1, 2, 2]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzUu6aKc6Imy5YiG57G7LmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS83NS7popzoibLliIbnsbsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBcUJJO0FBQ0o7OztHQUdHO0FBQ0gsSUFBSSxVQUFVLEdBQUcsVUFBVSxJQUFjO0lBQ3JDOzs7Ozs7OztTQVFLO0lBRUwsa0RBQWtEO0lBQ2xELElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNYLHVEQUF1RDtJQUN2RCxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN6QiwwQkFBMEI7SUFDMUIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsT0FBTyxJQUFJLElBQUksRUFBRSxFQUFFO1FBQ2Ysa0RBQWtEO1FBQ2xELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNsQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNoRCxJQUFJLEVBQUUsQ0FBQztZQUNQLEVBQUUsRUFBRSxDQUFDO1NBQ1I7UUFDRCxrREFBa0Q7YUFDN0MsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2hELEVBQUUsRUFBRSxDQUFDO1NBQ1I7UUFDRCwrQkFBK0I7YUFDMUI7WUFDRCxJQUFJLEVBQUUsQ0FBQztTQUNWO0tBQ0o7QUFFTCxDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUI7SUFDSSxNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbEMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25CLGdCQUFNLENBQUMsZUFBZSxDQUNsQixNQUFNLEVBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNyQixDQUFDO0NBQ0wiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrprkuIDkuKrljIXlkKvnuqLoibLjgIHnmb3oibLlkozok53oibLvvIzkuIDlhbHCoG4g5Liq5YWD57Sg55qE5pWw57uE77yM5Y6f5Zyw5a+55a6D5Lus6L+b6KGM5o6S5bqP77yM5L2/5b6X55u45ZCM6aKc6Imy55qE5YWD57Sg55u46YK777yM5bm25oyJ54Wn57qi6Imy44CB55m96Imy44CB6JOd6Imy6aG65bqP5o6S5YiX44CCXHJcblxyXG7mraTpopjkuK3vvIzmiJHku6zkvb/nlKjmlbTmlbAgMOOAgcKgMSDlkowgMiDliIbliKvooajnpLrnuqLoibLjgIHnmb3oibLlkozok53oibLjgIJcclxuXHJcbuazqOaEjzpcclxu5LiN6IO95L2/55So5Luj56CB5bqT5Lit55qE5o6S5bqP5Ye95pWw5p2l6Kej5Yaz6L+Z6YGT6aKY44CCXHJcblxyXG7npLrkvos6XHJcblxyXG7ovpPlhaU6IFsyLDAsMiwxLDEsMF1cclxu6L6T5Ye6OiBbMCwwLDEsMSwyLDJdXHJcbui/m+mYtu+8mlxyXG5cclxu5LiA5Liq55u06KeC55qE6Kej5Yaz5pa55qGI5piv5L2/55So6K6h5pWw5o6S5bqP55qE5Lik6Laf5omr5o+P566X5rOV44CCXHJcbummluWFiO+8jOi/reS7o+iuoeeul+WHujDjgIExIOWSjCAyIOWFg+e0oOeahOS4quaVsO+8jOeEtuWQjuaMieeFpzDjgIEx44CBMueahOaOkuW6j++8jOmHjeWGmeW9k+WJjeaVsOe7hOOAglxyXG7kvaDog73mg7Plh7rkuIDkuKrku4Xkvb/nlKjluLjmlbDnqbrpl7TnmoTkuIDotp/miavmj4/nrpfms5XlkJfvvJ9cclxuXHJcbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXHJcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL3NvcnQtY29sb3JzXHJcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxyXG4qICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcltdfSBudW1zXHJcbiAqIEByZXR1cm4ge3ZvaWR9IERvIG5vdCByZXR1cm4gYW55dGhpbmcsIG1vZGlmeSBudW1zIGluLXBsYWNlIGluc3RlYWQuXHJcbiAqL1xyXG52YXIgc29ydENvbG9ycyA9IGZ1bmN0aW9uIChudW1zOiBudW1iZXJbXSkge1xyXG4gICAgLypcclxuICAgICAqIOiNt+WFsOaXl+mXrumimFxyXG4gICAgICog6ZyA6KaB5o6S5YiX55qE5YaF5a65IOWPquacieS4ieenjSDpgqPkuYgg5Y+q6ZyA6KaBIE8obinnmoTnrpfms5Ug5bCx5Y+v5LulXHJcbiAgICAgKiDpnIDopoHkuInkuKrmjIfpkohcclxuICAgICAqIDEuIOWIhuWIq+aYr+WGmeWFpeS9jee9rlxyXG4gICAgICogMi4g5b2T5YmNIOacgOWQjuS4gOS4qiAxIOS9jee9ruS5i+WQjlxyXG4gICAgICogMy4g5b2T5YmNIOacgOWQjuS4gOS4qiAyIOS9jee9ruS5i+WJjVxyXG4gICAgICog5b6q546v55qE57uT5p2fIOadoeS7tuaYryAxIOaMh+mSiCDlnKggMyDmjIfpkogg5Y+z5L6nXHJcbiAgICAgKiAqL1xyXG5cclxuICAgIC8vIOWIneWni+WMljDnmoTmnIDlj7PovrnnlYzvvJpwMCA9IDDjgILlnKjmlbTkuKrnrpfms5XmiafooYzov4fnqIvkuK0gbnVtc1tpZHggPCBwMF0gPSAwLlxyXG4gICAgbGV0IHAwID0gMDtcclxuICAgIC8vIOWIneWni+WMljLnmoTmnIDlt6bovrnnlYwg77yacDIgPSBuIC0gMeOAguWcqOaVtOS4queul+azleaJp+ihjOi/h+eoi+S4rSBudW1zW2lkeCA+IHAyXSA9IDIuXHJcbiAgICBsZXQgcDIgPSBudW1zLmxlbmd0aCAtIDE7XHJcbiAgICAvLyDliJ3lp4vljJblvZPliY3ogIPomZHnmoTlhYPntKDluo/lj7cg77yaY3VyciA9IDAuXHJcbiAgICBsZXQgY3VyciA9IDA7XHJcbiAgICB3aGlsZSAoY3VyciA8PSBwMikge1xyXG4gICAgICAgIC8vIOiLpSBudW1zW2N1cnJdID0gMCDvvJrkuqTmjaLnrKwgY3VycuS4qiDlkowg56yscDDkuKog5YWD57Sg77yM5bm25bCG5oyH6ZKI6YO95ZCR5Y+z56e744CCXHJcbiAgICAgICAgaWYgKG51bXNbY3Vycl0gPT09IDApIHtcclxuICAgICAgICAgICAgW251bXNbY3Vycl0sIG51bXNbcDBdXSA9IFtudW1zW3AwXSwgbnVtc1tjdXJyXV07XHJcbiAgICAgICAgICAgIGN1cnIrKztcclxuICAgICAgICAgICAgcDArKztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g6IulIG51bXNbY3Vycl0gPSAyIO+8muS6pOaNouesrCBjdXJy5Liq5ZKM56ysIHAy5Liq5YWD57Sg77yM5bm25bCGIHAy5oyH6ZKI5bem56e7IOOAglxyXG4gICAgICAgIGVsc2UgaWYgKG51bXNbY3Vycl0gPT09IDIpIHtcclxuICAgICAgICAgICAgW251bXNbY3Vycl0sIG51bXNbcDJdXSA9IFtudW1zW3AyXSwgbnVtc1tjdXJyXV07XHJcbiAgICAgICAgICAgIHAyLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOiLpSBudW1zW2N1cnJdID0gMSDvvJrlsIbmjIfpkohjdXJy5Y+z56e744CCXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGN1cnIrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59O1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xyXG5cclxue1xyXG4gICAgY29uc3Qgc2FtcGxlID0gWzIsIDAsIDIsIDEsIDEsIDBdO1xyXG4gICAgc29ydENvbG9ycyhzYW1wbGUpO1xyXG4gICAgYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcclxuICAgICAgICBzYW1wbGUsXHJcbiAgICAgICAgWzAsIDAsIDEsIDEsIDIsIDJdLFxyXG4gICAgKTtcclxufVxyXG4iXX0=