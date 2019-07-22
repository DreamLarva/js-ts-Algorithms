"use strict";
/*
给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEu55ub5pyA5aSa5rC055qE5a655ZmoLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xMS7nm5vmnIDlpJrmsLTnmoTlrrnlmagudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7SUFlSTs7Ozs7QUFFSjs7Ozs7aUJBS2lCO0FBQ2pCOzs7R0FHRztBQUNILElBQUksT0FBTyxHQUFHLFVBQVUsTUFBZ0I7SUFDcEMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDOUIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLE9BQU8sSUFBSSxLQUFLLEtBQUssRUFBRTtRQUNuQixPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDakUsSUFBSSxPQUFPLEdBQUcsTUFBTSxFQUFFO1lBQ2xCLE1BQU0sR0FBRyxPQUFPLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN0QyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDOUIsS0FBSyxFQUFFLENBQUM7U0FDWDthQUFNO1lBQ0gsSUFBSSxFQUFFLENBQUM7U0FDVjtLQUNKO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUNkLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDcEMsRUFBRSxDQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu57uZ5a6aIG4g5Liq6Z2e6LSf5pW05pWwIGEx77yMYTLvvIwuLi7vvIxhbu+8jOavj+S4quaVsOS7o+ihqOWdkOagh+S4reeahOS4gOS4queCuSAoaSwgYWkpIOOAguWcqOWdkOagh+WGheeUuyBuIOadoeWeguebtOe6v++8jOWeguebtOe6vyBpIOeahOS4pOS4querr+eCueWIhuWIq+S4uiAoaSwgYWkpIOWSjCAoaSwgMCnjgILmib7lh7rlhbbkuK3nmoTkuKTmnaHnur/vvIzkvb/lvpflroPku6zkuI4geCDovbTlhbHlkIzmnoTmiJDnmoTlrrnlmajlj6/ku6XlrrnnurPmnIDlpJrnmoTmsLTjgIJcblxu6K+05piO77ya5L2g5LiN6IO95YC+5pac5a655Zmo77yM5LiUIG4g55qE5YC86Iez5bCR5Li6IDLjgIJcblxuXG5cbuWbvuS4reWeguebtOe6v+S7o+ihqOi+k+WFpeaVsOe7hCBbMSw4LDYsMiw1LDQsOCwzLDdd44CC5Zyo5q2k5oOF5Ya15LiL77yM5a655Zmo6IO95aSf5a6557qz5rC077yI6KGo56S65Li66JOd6Imy6YOo5YiG77yJ55qE5pyA5aSn5YC85Li6IDQ544CCXG5cblxuXG7npLrkvos6XG5cbui+k+WFpTogWzEsOCw2LDIsNSw0LDgsMyw3XVxu6L6T5Ye6OiA0OVxuKiAqL1xuXG4vKuWuueenr+S4gOWumuaYr+efreeahOS4gOerr+S5mOS7peS4pOS4que6v+auteS5i+mXtOeahOi3neemu1xuKiDpu5jorqTku47ov57kuKrnur/mrrXmnIDov5znmoTmg4XlhrXlvIDlp4vogIPomZFcbiog6K6h566X5a6556ev5LmL5ZCOIOefreeahOmCo+S4gOerr+WQkemVv+eahOmCo+S4gOerr+enu+WKqOS4gOagvFxuKiAhIeiLpeaenOerr+ebuOetiSDor6XlpoLkvZXliKTmlq3lk6rmrrXnp7vliqg/XG4qIOS4jemcgOimgeWIpOaWrSDku7vmhI/kuIDnq6/np7vliqjljbPlj68g5Zug5Li65aaC5p6c5ZyoeOi9tOS4iueahOi3neemu+e8qeefreWNtOimgeWuueenr+WPmOWkpyDlsLHlv4XpobvkuKTnq6/pg73mr5TnjrDmnInnmoTnur/mrrXplb8g6L+Z5bm25LiN5Lya5pyJ5Zug5Li656e75Yqo5ZOq5LiA56uv6ICM5pS55Y+YXG4qIOebtOWIsOS4pOS4que6v+autemHjeWQiCDorqHnrpfnu5PmnZ8qL1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcltdfSBoZWlnaHRcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xudmFyIG1heEFyZWEgPSBmdW5jdGlvbiAoaGVpZ2h0OiBudW1iZXJbXSkge1xuICAgIGxldCBsZWZ0ID0gMDtcbiAgICBsZXQgcmlnaHQgPSBoZWlnaHQubGVuZ3RoIC0gMTtcbiAgICBsZXQgcmVzdWx0ID0gMDtcbiAgICBsZXQgdFZvbHVtZSA9IDA7XG4gICAgd2hpbGUgKGxlZnQgIT09IHJpZ2h0KSB7XG4gICAgICAgIHRWb2x1bWUgPSBNYXRoLm1pbihoZWlnaHRbbGVmdF0sIGhlaWdodFtyaWdodF0pICogKHJpZ2h0IC0gbGVmdCk7XG4gICAgICAgIGlmICh0Vm9sdW1lID4gcmVzdWx0KSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0Vm9sdW1lO1xuICAgICAgICB9XG4gICAgICAgIE1hdGgubWluKGhlaWdodFtsZWZ0XSwgaGVpZ2h0W3JpZ2h0XSk7XG4gICAgICAgIGlmIChoZWlnaHRbbGVmdF0gPiBoZWlnaHRbcmlnaHRdKSB7XG4gICAgICAgICAgICByaWdodC0tO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGVmdCsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gJ2Fzc2VydCc7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChcbiAgICBtYXhBcmVhKFsxLCA4LCA2LCAyLCA1LCA0LCA4LCAzLCA3XSksXG4gICAgNDksXG4pO1xuIl19