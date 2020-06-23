"use strict";
/*
给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。
找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

说明：你不能倾斜容器，且 n 的值至少为 2。



图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。



示例:

输入: [1,8,6,2,5,4,8,3,7]
输出: 49
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEu55ub5pyA5aSa5rC055qE5a655ZmoLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xMS7nm5vmnIDlpJrmsLTnmoTlrrnlmagudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0lBZ0JJOzs7OztBQUVKOzs7OztrQkFLa0I7QUFDbEI7OztHQUdHO0FBQ0gsSUFBSSxPQUFPLEdBQUcsVUFBVSxNQUFnQjtJQUN0QyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7SUFDYixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM5QixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDZixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDaEIsT0FBTyxJQUFJLEtBQUssS0FBSyxFQUFFO1FBQ3JCLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLE9BQU8sR0FBRyxNQUFNLEVBQUU7WUFDcEIsTUFBTSxHQUFHLE9BQU8sQ0FBQztTQUNsQjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNoQyxLQUFLLEVBQUUsQ0FBQztTQUNUO2FBQU07WUFDTCxJQUFJLEVBQUUsQ0FBQztTQUNSO0tBQ0Y7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUM7QUFFRixvREFBNEI7QUFFNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumiBuIOS4qumdnui0n+aVtOaVsCBhMe+8jGEy77yMLi4u77yMYW7vvIzmr4/kuKrmlbDku6PooajlnZDmoIfkuK3nmoTkuIDkuKrngrkgKGksIGFpKSDjgILlnKjlnZDmoIflhoXnlLsgbiDmnaHlnoLnm7Tnur/vvIzlnoLnm7Tnur8gaSDnmoTkuKTkuKrnq6/ngrnliIbliKvkuLogKGksIGFpKSDlkowgKGksIDAp44CCXG7mib7lh7rlhbbkuK3nmoTkuKTmnaHnur/vvIzkvb/lvpflroPku6zkuI4geCDovbTlhbHlkIzmnoTmiJDnmoTlrrnlmajlj6/ku6XlrrnnurPmnIDlpJrnmoTmsLTjgIJcblxu6K+05piO77ya5L2g5LiN6IO95YC+5pac5a655Zmo77yM5LiUIG4g55qE5YC86Iez5bCR5Li6IDLjgIJcblxuXG5cbuWbvuS4reWeguebtOe6v+S7o+ihqOi+k+WFpeaVsOe7hCBbMSw4LDYsMiw1LDQsOCwzLDdd44CC5Zyo5q2k5oOF5Ya15LiL77yM5a655Zmo6IO95aSf5a6557qz5rC077yI6KGo56S65Li66JOd6Imy6YOo5YiG77yJ55qE5pyA5aSn5YC85Li6IDQ544CCXG5cblxuXG7npLrkvos6XG5cbui+k+WFpTogWzEsOCw2LDIsNSw0LDgsMyw3XVxu6L6T5Ye6OiA0OVxuKiAqL1xuXG4vKuWuueenr+S4gOWumuaYr+efreeahOS4gOerr+S5mOS7peS4pOS4que6v+auteS5i+mXtOeahOi3neemu1xuICog6buY6K6k5LuO6L+e5Liq57q/5q615pyA6L+c55qE5oOF5Ya15byA5aeL6ICD6JmRXG4gKiDorqHnrpflrrnnp6/kuYvlkI4g55+t55qE6YKj5LiA56uv5ZCR6ZW/55qE6YKj5LiA56uv56e75Yqo5LiA5qC8XG4gKiAhIeiLpeaenOerr+ebuOetiSDor6XlpoLkvZXliKTmlq3lk6rmrrXnp7vliqg/XG4gKiDkuI3pnIDopoHliKTmlq0g5Lu75oSP5LiA56uv56e75Yqo5Y2z5Y+vIOWboOS4uuWmguaenOWcqHjovbTkuIrnmoTot53nprvnvKnnn63ljbTopoHlrrnnp6/lj5jlpKcg5bCx5b+F6aG75Lik56uv6YO95q+U546w5pyJ55qE57q/5q616ZW/IOi/meW5tuS4jeS8muacieWboOS4uuenu+WKqOWTquS4gOerr+iAjOaUueWPmFxuICog55u05Yiw5Lik5Liq57q/5q616YeN5ZCIIOiuoeeul+e7k+adnyovXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW119IGhlaWdodFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG52YXIgbWF4QXJlYSA9IGZ1bmN0aW9uIChoZWlnaHQ6IG51bWJlcltdKSB7XG4gIGxldCBsZWZ0ID0gMDtcbiAgbGV0IHJpZ2h0ID0gaGVpZ2h0Lmxlbmd0aCAtIDE7XG4gIGxldCByZXN1bHQgPSAwO1xuICBsZXQgdFZvbHVtZSA9IDA7XG4gIHdoaWxlIChsZWZ0ICE9PSByaWdodCkge1xuICAgIHRWb2x1bWUgPSBNYXRoLm1pbihoZWlnaHRbbGVmdF0sIGhlaWdodFtyaWdodF0pICogKHJpZ2h0IC0gbGVmdCk7XG4gICAgaWYgKHRWb2x1bWUgPiByZXN1bHQpIHtcbiAgICAgIHJlc3VsdCA9IHRWb2x1bWU7XG4gICAgfVxuICAgIE1hdGgubWluKGhlaWdodFtsZWZ0XSwgaGVpZ2h0W3JpZ2h0XSk7XG4gICAgaWYgKGhlaWdodFtsZWZ0XSA+IGhlaWdodFtyaWdodF0pIHtcbiAgICAgIHJpZ2h0LS07XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlZnQrKztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwobWF4QXJlYShbMSwgOCwgNiwgMiwgNSwgNCwgOCwgMywgN10pLCA0OSk7XG4iXX0=