"use strict";
/*
给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

说明：你不能倾斜容器，且 n 的值至少为 2。



图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。



示例:

输入: [1,8,6,2,5,4,8,3,7]
输出: 49
* */
Object.defineProperty(exports, "__esModule", { value: true });
/*容积一定是短的一端乘以两个线段之间的距离
* 默认从连个线段最远的情况开始考虑
* 计算容积之后 短的那一端向长的那一端移动一格
* !!若果端相等 该如何判断哪段移动?
* 不需要判断 任意一端移动即可 因为如果在x轴上的距离缩短却要容积变大 就必须两端都比现有的线段长 这并不会有因为移动哪一端而改变
* 直到两个线段重合 计算结束*/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let result = 0;
    let tVolume = 0;
    while (left !== right) {
        tVolume = Math.min(height[left], height[right]) * (right - left);
        if (tVolume > result) {
            result = tVolume;
        }
        Math.min(height[left], height[right]);
        if (height[left] > height[right]) {
            right--;
        }
        else {
            left++;
        }
    }
    return result;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEu55ub5pyA5aSa5rC055qE5a655ZmoLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xMS7nm5vmnIDlpJrmsLTnmoTlrrnlmagudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7SUFlSTs7QUFFSjs7Ozs7aUJBS2lCO0FBQ2pCOzs7R0FHRztBQUNILElBQUksT0FBTyxHQUFHLFVBQVUsTUFBZ0I7SUFDcEMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDOUIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLE9BQU8sSUFBSSxLQUFLLEtBQUssRUFBRTtRQUNuQixPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDakUsSUFBSSxPQUFPLEdBQUcsTUFBTSxFQUFFO1lBQ2xCLE1BQU0sR0FBRyxPQUFPLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN0QyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDOUIsS0FBSyxFQUFFLENBQUM7U0FDWDthQUFNO1lBQ0gsSUFBSSxFQUFFLENBQUM7U0FDVjtLQUNKO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu57uZ5a6aIG4g5Liq6Z2e6LSf5pW05pWwIGEx77yMYTLvvIwuLi7vvIxhbu+8jOavj+S4quaVsOS7o+ihqOWdkOagh+S4reeahOS4gOS4queCuSAoaSwgYWkpIOOAguWcqOWdkOagh+WGheeUuyBuIOadoeWeguebtOe6v++8jOWeguebtOe6vyBpIOeahOS4pOS4querr+eCueWIhuWIq+S4uiAoaSwgYWkpIOWSjCAoaSwgMCnjgILmib7lh7rlhbbkuK3nmoTkuKTmnaHnur/vvIzkvb/lvpflroPku6zkuI4geCDovbTlhbHlkIzmnoTmiJDnmoTlrrnlmajlj6/ku6XlrrnnurPmnIDlpJrnmoTmsLTjgIJcclxuXHJcbuivtOaYju+8muS9oOS4jeiDveWAvuaWnOWuueWZqO+8jOS4lCBuIOeahOWAvOiHs+WwkeS4uiAy44CCXHJcblxyXG5cclxuXHJcbuWbvuS4reWeguebtOe6v+S7o+ihqOi+k+WFpeaVsOe7hCBbMSw4LDYsMiw1LDQsOCwzLDdd44CC5Zyo5q2k5oOF5Ya15LiL77yM5a655Zmo6IO95aSf5a6557qz5rC077yI6KGo56S65Li66JOd6Imy6YOo5YiG77yJ55qE5pyA5aSn5YC85Li6IDQ544CCXHJcblxyXG5cclxuXHJcbuekuuS+izpcclxuXHJcbui+k+WFpTogWzEsOCw2LDIsNSw0LDgsMyw3XVxyXG7ovpPlh7o6IDQ5XHJcbiogKi9cclxuXHJcbi8q5a6556ev5LiA5a6a5piv55+t55qE5LiA56uv5LmY5Lul5Lik5Liq57q/5q615LmL6Ze055qE6Led56a7XHJcbiog6buY6K6k5LuO6L+e5Liq57q/5q615pyA6L+c55qE5oOF5Ya15byA5aeL6ICD6JmRXHJcbiog6K6h566X5a6556ev5LmL5ZCOIOefreeahOmCo+S4gOerr+WQkemVv+eahOmCo+S4gOerr+enu+WKqOS4gOagvFxyXG4qICEh6Iul5p6c56uv55u4562JIOivpeWmguS9leWIpOaWreWTquauteenu+WKqD9cclxuKiDkuI3pnIDopoHliKTmlq0g5Lu75oSP5LiA56uv56e75Yqo5Y2z5Y+vIOWboOS4uuWmguaenOWcqHjovbTkuIrnmoTot53nprvnvKnnn63ljbTopoHlrrnnp6/lj5jlpKcg5bCx5b+F6aG75Lik56uv6YO95q+U546w5pyJ55qE57q/5q616ZW/IOi/meW5tuS4jeS8muacieWboOS4uuenu+WKqOWTquS4gOerr+iAjOaUueWPmFxyXG4qIOebtOWIsOS4pOS4que6v+autemHjeWQiCDorqHnrpfnu5PmnZ8qL1xyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJbXX0gaGVpZ2h0XHJcbiAqIEByZXR1cm4ge251bWJlcn1cclxuICovXHJcbnZhciBtYXhBcmVhID0gZnVuY3Rpb24gKGhlaWdodDogbnVtYmVyW10pIHtcclxuICAgIGxldCBsZWZ0ID0gMDtcclxuICAgIGxldCByaWdodCA9IGhlaWdodC5sZW5ndGggLSAxO1xyXG4gICAgbGV0IHJlc3VsdCA9IDA7XHJcbiAgICBsZXQgdFZvbHVtZSA9IDA7XHJcbiAgICB3aGlsZSAobGVmdCAhPT0gcmlnaHQpIHtcclxuICAgICAgICB0Vm9sdW1lID0gTWF0aC5taW4oaGVpZ2h0W2xlZnRdLCBoZWlnaHRbcmlnaHRdKSAqIChyaWdodCAtIGxlZnQpO1xyXG4gICAgICAgIGlmICh0Vm9sdW1lID4gcmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRWb2x1bWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE1hdGgubWluKGhlaWdodFtsZWZ0XSwgaGVpZ2h0W3JpZ2h0XSk7XHJcbiAgICAgICAgaWYgKGhlaWdodFtsZWZ0XSA+IGhlaWdodFtyaWdodF0pIHtcclxuICAgICAgICAgICAgcmlnaHQtLTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZWZ0Kys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmV4cG9ydCB7fVxyXG4iXX0=