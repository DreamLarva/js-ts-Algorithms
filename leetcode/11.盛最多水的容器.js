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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEu55ub5pyA5aSa5rC055qE5a655ZmoLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS8xMS7nm5vmnIDlpJrmsLTnmoTlrrnlmagudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7SUFlSTs7QUFFSjs7Ozs7aUJBS2lCO0FBQ2pCOzs7R0FHRztBQUNILElBQUksT0FBTyxHQUFHLFVBQVUsTUFBZ0I7SUFDcEMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDOUIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLE9BQU8sSUFBSSxLQUFLLEtBQUssRUFBRTtRQUNuQixPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDakUsSUFBSSxPQUFPLEdBQUcsTUFBTSxFQUFFO1lBQ2xCLE1BQU0sR0FBRyxPQUFPLENBQUM7U0FDcEI7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN0QyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDOUIsS0FBSyxFQUFFLENBQUM7U0FDWDthQUFNO1lBQ0gsSUFBSSxFQUFFLENBQUM7U0FDVjtLQUNKO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumiBuIOS4qumdnui0n+aVtOaVsCBhMe+8jGEy77yMLi4u77yMYW7vvIzmr4/kuKrmlbDku6PooajlnZDmoIfkuK3nmoTkuIDkuKrngrkgKGksIGFpKSDjgILlnKjlnZDmoIflhoXnlLsgbiDmnaHlnoLnm7Tnur/vvIzlnoLnm7Tnur8gaSDnmoTkuKTkuKrnq6/ngrnliIbliKvkuLogKGksIGFpKSDlkowgKGksIDAp44CC5om+5Ye65YW25Lit55qE5Lik5p2h57q/77yM5L2/5b6X5a6D5Lus5LiOIHgg6L205YWx5ZCM5p6E5oiQ55qE5a655Zmo5Y+v5Lul5a6557qz5pyA5aSa55qE5rC044CCXG5cbuivtOaYju+8muS9oOS4jeiDveWAvuaWnOWuueWZqO+8jOS4lCBuIOeahOWAvOiHs+WwkeS4uiAy44CCXG5cblxuXG7lm77kuK3lnoLnm7Tnur/ku6PooajovpPlhaXmlbDnu4QgWzEsOCw2LDIsNSw0LDgsMyw3XeOAguWcqOatpOaDheWGteS4i++8jOWuueWZqOiDveWkn+Wuuee6s+awtO+8iOihqOekuuS4uuiTneiJsumDqOWIhu+8ieeahOacgOWkp+WAvOS4uiA0OeOAglxuXG5cblxu56S65L6LOlxuXG7ovpPlhaU6IFsxLDgsNiwyLDUsNCw4LDMsN11cbui+k+WHujogNDlcbiogKi9cblxuLyrlrrnnp6/kuIDlrprmmK/nn63nmoTkuIDnq6/kuZjku6XkuKTkuKrnur/mrrXkuYvpl7TnmoTot53nprtcbiog6buY6K6k5LuO6L+e5Liq57q/5q615pyA6L+c55qE5oOF5Ya15byA5aeL6ICD6JmRXG4qIOiuoeeul+Wuueenr+S5i+WQjiDnn63nmoTpgqPkuIDnq6/lkJHplb/nmoTpgqPkuIDnq6/np7vliqjkuIDmoLxcbiogISHoi6Xmnpznq6/nm7jnrYkg6K+l5aaC5L2V5Yik5pat5ZOq5q6156e75YqoP1xuKiDkuI3pnIDopoHliKTmlq0g5Lu75oSP5LiA56uv56e75Yqo5Y2z5Y+vIOWboOS4uuWmguaenOWcqHjovbTkuIrnmoTot53nprvnvKnnn63ljbTopoHlrrnnp6/lj5jlpKcg5bCx5b+F6aG75Lik56uv6YO95q+U546w5pyJ55qE57q/5q616ZW/IOi/meW5tuS4jeS8muacieWboOS4uuenu+WKqOWTquS4gOerr+iAjOaUueWPmFxuKiDnm7TliLDkuKTkuKrnur/mrrXph43lkIgg6K6h566X57uT5p2fKi9cbi8qKlxuICogQHBhcmFtIHtudW1iZXJbXX0gaGVpZ2h0XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnZhciBtYXhBcmVhID0gZnVuY3Rpb24gKGhlaWdodDogbnVtYmVyW10pIHtcbiAgICBsZXQgbGVmdCA9IDA7XG4gICAgbGV0IHJpZ2h0ID0gaGVpZ2h0Lmxlbmd0aCAtIDE7XG4gICAgbGV0IHJlc3VsdCA9IDA7XG4gICAgbGV0IHRWb2x1bWUgPSAwO1xuICAgIHdoaWxlIChsZWZ0ICE9PSByaWdodCkge1xuICAgICAgICB0Vm9sdW1lID0gTWF0aC5taW4oaGVpZ2h0W2xlZnRdLCBoZWlnaHRbcmlnaHRdKSAqIChyaWdodCAtIGxlZnQpO1xuICAgICAgICBpZiAodFZvbHVtZSA+IHJlc3VsdCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdFZvbHVtZTtcbiAgICAgICAgfVxuICAgICAgICBNYXRoLm1pbihoZWlnaHRbbGVmdF0sIGhlaWdodFtyaWdodF0pO1xuICAgICAgICBpZiAoaGVpZ2h0W2xlZnRdID4gaGVpZ2h0W3JpZ2h0XSkge1xuICAgICAgICAgICAgcmlnaHQtLTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxlZnQrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IHt9XG4iXX0=