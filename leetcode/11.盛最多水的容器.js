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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEu55ub5pyA5aSa5rC055qE5a655ZmoLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xMS7nm5vmnIDlpJrmsLTnmoTlrrnlmagudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7SUFlSTs7Ozs7QUFFSjs7Ozs7a0JBS2tCO0FBQ2xCOzs7R0FHRztBQUNILElBQUksT0FBTyxHQUFHLFVBQVUsTUFBZ0I7SUFDdEMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDOUIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLE9BQU8sSUFBSSxLQUFLLEtBQUssRUFBRTtRQUNyQixPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDakUsSUFBSSxPQUFPLEdBQUcsTUFBTSxFQUFFO1lBQ3BCLE1BQU0sR0FBRyxPQUFPLENBQUM7U0FDbEI7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN0QyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDaEMsS0FBSyxFQUFFLENBQUM7U0FDVDthQUFNO1lBQ0wsSUFBSSxFQUFFLENBQUM7U0FDUjtLQUNGO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBRUYsb0RBQTRCO0FBRTVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrpogbiDkuKrpnZ7otJ/mlbTmlbAgYTHvvIxhMu+8jC4uLu+8jGFu77yM5q+P5Liq5pWw5Luj6KGo5Z2Q5qCH5Lit55qE5LiA5Liq54K5IChpLCBhaSkg44CC5Zyo5Z2Q5qCH5YaF55S7IG4g5p2h5Z6C55u057q/77yM5Z6C55u057q/IGkg55qE5Lik5Liq56uv54K55YiG5Yir5Li6IChpLCBhaSkg5ZKMIChpLCAwKeOAguaJvuWHuuWFtuS4reeahOS4pOadoee6v++8jOS9v+W+l+Wug+S7rOS4jiB4IOi9tOWFseWQjOaehOaIkOeahOWuueWZqOWPr+S7peWuuee6s+acgOWkmueahOawtOOAglxuXG7or7TmmI7vvJrkvaDkuI3og73lgL7mlpzlrrnlmajvvIzkuJQgbiDnmoTlgLzoh7PlsJHkuLogMuOAglxuXG5cblxu5Zu+5Lit5Z6C55u057q/5Luj6KGo6L6T5YWl5pWw57uEIFsxLDgsNiwyLDUsNCw4LDMsN13jgILlnKjmraTmg4XlhrXkuIvvvIzlrrnlmajog73lpJ/lrrnnurPmsLTvvIjooajnpLrkuLrok53oibLpg6jliIbvvInnmoTmnIDlpKflgLzkuLogNDnjgIJcblxuXG5cbuekuuS+izpcblxu6L6T5YWlOiBbMSw4LDYsMiw1LDQsOCwzLDddXG7ovpPlh7o6IDQ5XG4qICovXG5cbi8q5a6556ev5LiA5a6a5piv55+t55qE5LiA56uv5LmY5Lul5Lik5Liq57q/5q615LmL6Ze055qE6Led56a7XG4gKiDpu5jorqTku47ov57kuKrnur/mrrXmnIDov5znmoTmg4XlhrXlvIDlp4vogIPomZFcbiAqIOiuoeeul+Wuueenr+S5i+WQjiDnn63nmoTpgqPkuIDnq6/lkJHplb/nmoTpgqPkuIDnq6/np7vliqjkuIDmoLxcbiAqICEh6Iul5p6c56uv55u4562JIOivpeWmguS9leWIpOaWreWTquauteenu+WKqD9cbiAqIOS4jemcgOimgeWIpOaWrSDku7vmhI/kuIDnq6/np7vliqjljbPlj68g5Zug5Li65aaC5p6c5ZyoeOi9tOS4iueahOi3neemu+e8qeefreWNtOimgeWuueenr+WPmOWkpyDlsLHlv4XpobvkuKTnq6/pg73mr5TnjrDmnInnmoTnur/mrrXplb8g6L+Z5bm25LiN5Lya5pyJ5Zug5Li656e75Yqo5ZOq5LiA56uv6ICM5pS55Y+YXG4gKiDnm7TliLDkuKTkuKrnur/mrrXph43lkIgg6K6h566X57uT5p2fKi9cbi8qKlxuICogQHBhcmFtIHtudW1iZXJbXX0gaGVpZ2h0XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBtYXhBcmVhID0gZnVuY3Rpb24gKGhlaWdodDogbnVtYmVyW10pIHtcbiAgbGV0IGxlZnQgPSAwO1xuICBsZXQgcmlnaHQgPSBoZWlnaHQubGVuZ3RoIC0gMTtcbiAgbGV0IHJlc3VsdCA9IDA7XG4gIGxldCB0Vm9sdW1lID0gMDtcbiAgd2hpbGUgKGxlZnQgIT09IHJpZ2h0KSB7XG4gICAgdFZvbHVtZSA9IE1hdGgubWluKGhlaWdodFtsZWZ0XSwgaGVpZ2h0W3JpZ2h0XSkgKiAocmlnaHQgLSBsZWZ0KTtcbiAgICBpZiAodFZvbHVtZSA+IHJlc3VsdCkge1xuICAgICAgcmVzdWx0ID0gdFZvbHVtZTtcbiAgICB9XG4gICAgTWF0aC5taW4oaGVpZ2h0W2xlZnRdLCBoZWlnaHRbcmlnaHRdKTtcbiAgICBpZiAoaGVpZ2h0W2xlZnRdID4gaGVpZ2h0W3JpZ2h0XSkge1xuICAgICAgcmlnaHQtLTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGVmdCsrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChtYXhBcmVhKFsxLCA4LCA2LCAyLCA1LCA0LCA4LCAzLCA3XSksIDQ5KTtcbiJdfQ==