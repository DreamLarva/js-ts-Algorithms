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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEu55ub5pyA5aSa5rC055qE5a655ZmoLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xMS7nm5vmnIDlpJrmsLTnmoTlrrnlmagudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7SUFlSTs7Ozs7QUFFSjs7Ozs7aUJBS2lCO0FBQ2pCOzs7R0FHRztBQUNILElBQUksT0FBTyxHQUFHLFVBQVUsTUFBZ0I7SUFDcEMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDOUIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLE9BQU8sSUFBSSxLQUFLLEtBQUssRUFBRTtRQUNuQixPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDakUsSUFBSSxPQUFPLEdBQUcsTUFBTSxFQUFFO1lBQ2xCLE1BQU0sR0FBRyxPQUFPLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN0QyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDOUIsS0FBSyxFQUFFLENBQUM7U0FDWDthQUFNO1lBQ0gsSUFBSSxFQUFFLENBQUM7U0FDVjtLQUNKO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUNkLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDcEMsRUFBRSxDQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7nu5nlrpogbiDkuKrpnZ7otJ/mlbTmlbAgYTHvvIxhMu+8jC4uLu+8jGFu77yM5q+P5Liq5pWw5Luj6KGo5Z2Q5qCH5Lit55qE5LiA5Liq54K5IChpLCBhaSkg44CC5Zyo5Z2Q5qCH5YaF55S7IG4g5p2h5Z6C55u057q/77yM5Z6C55u057q/IGkg55qE5Lik5Liq56uv54K55YiG5Yir5Li6IChpLCBhaSkg5ZKMIChpLCAwKeOAguaJvuWHuuWFtuS4reeahOS4pOadoee6v++8jOS9v+W+l+Wug+S7rOS4jiB4IOi9tOWFseWQjOaehOaIkOeahOWuueWZqOWPr+S7peWuuee6s+acgOWkmueahOawtOOAglxyXG5cclxu6K+05piO77ya5L2g5LiN6IO95YC+5pac5a655Zmo77yM5LiUIG4g55qE5YC86Iez5bCR5Li6IDLjgIJcclxuXHJcblxyXG5cclxu5Zu+5Lit5Z6C55u057q/5Luj6KGo6L6T5YWl5pWw57uEIFsxLDgsNiwyLDUsNCw4LDMsN13jgILlnKjmraTmg4XlhrXkuIvvvIzlrrnlmajog73lpJ/lrrnnurPmsLTvvIjooajnpLrkuLrok53oibLpg6jliIbvvInnmoTmnIDlpKflgLzkuLogNDnjgIJcclxuXHJcblxyXG5cclxu56S65L6LOlxyXG5cclxu6L6T5YWlOiBbMSw4LDYsMiw1LDQsOCwzLDddXHJcbui+k+WHujogNDlcclxuKiAqL1xyXG5cclxuLyrlrrnnp6/kuIDlrprmmK/nn63nmoTkuIDnq6/kuZjku6XkuKTkuKrnur/mrrXkuYvpl7TnmoTot53nprtcclxuKiDpu5jorqTku47ov57kuKrnur/mrrXmnIDov5znmoTmg4XlhrXlvIDlp4vogIPomZFcclxuKiDorqHnrpflrrnnp6/kuYvlkI4g55+t55qE6YKj5LiA56uv5ZCR6ZW/55qE6YKj5LiA56uv56e75Yqo5LiA5qC8XHJcbiogISHoi6Xmnpznq6/nm7jnrYkg6K+l5aaC5L2V5Yik5pat5ZOq5q6156e75YqoP1xyXG4qIOS4jemcgOimgeWIpOaWrSDku7vmhI/kuIDnq6/np7vliqjljbPlj68g5Zug5Li65aaC5p6c5ZyoeOi9tOS4iueahOi3neemu+e8qeefreWNtOimgeWuueenr+WPmOWkpyDlsLHlv4XpobvkuKTnq6/pg73mr5TnjrDmnInnmoTnur/mrrXplb8g6L+Z5bm25LiN5Lya5pyJ5Zug5Li656e75Yqo5ZOq5LiA56uv6ICM5pS55Y+YXHJcbiog55u05Yiw5Lik5Liq57q/5q616YeN5ZCIIOiuoeeul+e7k+adnyovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcltdfSBoZWlnaHRcclxuICogQHJldHVybiB7bnVtYmVyfVxyXG4gKi9cclxudmFyIG1heEFyZWEgPSBmdW5jdGlvbiAoaGVpZ2h0OiBudW1iZXJbXSkge1xyXG4gICAgbGV0IGxlZnQgPSAwO1xyXG4gICAgbGV0IHJpZ2h0ID0gaGVpZ2h0Lmxlbmd0aCAtIDE7XHJcbiAgICBsZXQgcmVzdWx0ID0gMDtcclxuICAgIGxldCB0Vm9sdW1lID0gMDtcclxuICAgIHdoaWxlIChsZWZ0ICE9PSByaWdodCkge1xyXG4gICAgICAgIHRWb2x1bWUgPSBNYXRoLm1pbihoZWlnaHRbbGVmdF0sIGhlaWdodFtyaWdodF0pICogKHJpZ2h0IC0gbGVmdCk7XHJcbiAgICAgICAgaWYgKHRWb2x1bWUgPiByZXN1bHQpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gdFZvbHVtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgTWF0aC5taW4oaGVpZ2h0W2xlZnRdLCBoZWlnaHRbcmlnaHRdKTtcclxuICAgICAgICBpZiAoaGVpZ2h0W2xlZnRdID4gaGVpZ2h0W3JpZ2h0XSkge1xyXG4gICAgICAgICAgICByaWdodC0tO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxlZnQrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgbWF4QXJlYShbMSwgOCwgNiwgMiwgNSwgNCwgOCwgMywgN10pLFxyXG4gICAgNDksXHJcbik7XHJcbiJdfQ==