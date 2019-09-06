"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个排序好的数组，两个整数 k 和 x，从数组中找到最靠近 x（两数之差最小）的 k 个数。返回的结果必须要是按升序排好的。如果有两个数与 x 的差值一样，优先选择数值较小的那个数。

示例 1:

输入: [1,2,3,4,5], k=4, x=3
输出: [1,2,3,4]
 

示例 2:

输入: [1,2,3,4,5], k=4, x=-1
输出: [1,2,3,4]
 

说明:

k 的值为正数，且总是小于给定排序数组的长度。
数组不为空，且长度不超过 104
数组里的每个元素与 x 的绝对值不超过 104
 

更新(2017/9/19):
这个参数 arr 已经被改变为一个整数数组（而不是整数列表）。 请重新加载代码定义以获取最新更改。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-k-closest-elements
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
    /**
     * 同样使用二分法
     * 将 一个 k 区间内容 的最左边的index 作为 依据 一个区间内所有的值 作为度量
     * */
    // 总共 K 个值 那么如果 寻找最左边界 index 的 范围就是 0 ~ arr.length - k
    let left = 0;
    let right = arr.length - k;
    while (left < right) {
        const mid = (left + right) >> 1; // 优先使用较小的 所以使用向下取整的模板
        //             index mid 作为左边界           mid + k - 1为右边界 这里 看 mid + k
        if (Math.abs(arr[mid] - x) > Math.abs(arr[mid + k] - x)) { // 为什么 mid + k不会越界呢 因为 left < right 然而只有 left = right = arr.length - k 的时 才可能越界
            left = mid + 1; // 在 mid 为左边界 的序列的 右边界的 右边
        }
        else {
            right = mid;
        }
    }
    return arr.slice(right, right + k);
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(findClosestElements([1, 2, 3, 4, 5], 4, 3), [1, 2, 3, 4]);
assert_1.default.deepStrictEqual(findClosestElements([1, 2, 3, 4, 5], 4, -1), [1, 2, 3, 4]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjU4LuaJvuWIsEvkuKrmnIDmjqXov5HnmoTlhYPntKAuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzY1OC7mib7liLBL5Liq5pyA5o6l6L+R55qE5YWD57SgLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE0Qkk7QUFDSjs7Ozs7R0FLRztBQUNILElBQUksbUJBQW1CLEdBQUcsVUFBVSxHQUFhLEVBQUUsQ0FBUyxFQUFFLENBQVM7SUFDbkU7OztTQUdLO0lBQ0Qsc0RBQXNEO0lBQzFELElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztJQUNiLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLE9BQU8sSUFBSSxHQUFHLEtBQUssRUFBRTtRQUNqQixNQUFNLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxzQkFBc0I7UUFDdkQscUVBQXFFO1FBQ3JFLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsK0VBQStFO1lBQ3RJLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsMEJBQTBCO1NBQzdDO2FBQU07WUFDSCxLQUFLLEdBQUcsR0FBRyxDQUFDO1NBQ2Y7S0FDSjtJQUVELE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUMxQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNmLENBQUM7QUFJRixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQzNDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4gOS4quaOkuW6j+WlveeahOaVsOe7hO+8jOS4pOS4quaVtOaVsCBrIOWSjCB477yM5LuO5pWw57uE5Lit5om+5Yiw5pyA6Z2g6L+RIHjvvIjkuKTmlbDkuYvlt67mnIDlsI/vvInnmoQgayDkuKrmlbDjgILov5Tlm57nmoTnu5Pmnpzlv4XpobvopoHmmK/mjInljYfluo/mjpLlpb3nmoTjgILlpoLmnpzmnInkuKTkuKrmlbDkuI4geCDnmoTlt67lgLzkuIDmoLfvvIzkvJjlhYjpgInmi6nmlbDlgLzovoPlsI/nmoTpgqPkuKrmlbDjgIJcclxuXHJcbuekuuS+i8KgMTpcclxuXHJcbui+k+WFpTogWzEsMiwzLDQsNV0sIGs9NCwgeD0zXHJcbui+k+WHujogWzEsMiwzLDRdXHJcbsKgXHJcblxyXG7npLrkvosgMjpcclxuXHJcbui+k+WFpTogWzEsMiwzLDQsNV0sIGs9NCwgeD0tMVxyXG7ovpPlh7o6IFsxLDIsMyw0XVxyXG7CoFxyXG5cclxu6K+05piOOlxyXG5cclxuayDnmoTlgLzkuLrmraPmlbDvvIzkuJTmgLvmmK/lsI/kuo7nu5nlrprmjpLluo/mlbDnu4TnmoTplb/luqbjgIJcclxu5pWw57uE5LiN5Li656m677yM5LiU6ZW/5bqm5LiN6LaF6L+HIDEwNFxyXG7mlbDnu4Tph4znmoTmr4/kuKrlhYPntKDkuI7CoHgg55qE57ud5a+55YC85LiN6LaF6L+HIDEwNFxyXG7CoFxyXG5cclxu5pu05pawKDIwMTcvOS8xOSk6XHJcbui/meS4quWPguaVsCBhcnIg5bey57uP6KKr5pS55Y+Y5Li65LiA5Liq5pW05pWw5pWw57uE77yI6ICM5LiN5piv5pW05pWw5YiX6KGo77yJ44CCwqDor7fph43mlrDliqDovb3ku6PnoIHlrprkuYnku6Xojrflj5bmnIDmlrDmm7TmlLnjgIJcclxuXHJcbuadpea6kO+8muWKm+aJo++8iExlZXRDb2Rl77yJXHJcbumTvuaOpe+8mmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL2ZpbmQtay1jbG9zZXN0LWVsZW1lbnRzXHJcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxyXG4qICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcltdfSBhcnJcclxuICogQHBhcmFtIHtudW1iZXJ9IGtcclxuICogQHBhcmFtIHtudW1iZXJ9IHhcclxuICogQHJldHVybiB7bnVtYmVyW119XHJcbiAqL1xyXG52YXIgZmluZENsb3Nlc3RFbGVtZW50cyA9IGZ1bmN0aW9uIChhcnI6IG51bWJlcltdLCBrOiBudW1iZXIsIHg6IG51bWJlcikge1xyXG4gICAgLyoqXHJcbiAgICAgKiDlkIzmoLfkvb/nlKjkuozliIbms5VcclxuICAgICAqIOWwhiDkuIDkuKogayDljLrpl7TlhoXlrrkg55qE5pyA5bem6L6555qEaW5kZXgg5L2c5Li6IOS+neaNriDkuIDkuKrljLrpl7TlhoXmiYDmnInnmoTlgLwg5L2c5Li65bqm6YePXHJcbiAgICAgKiAqL1xyXG4gICAgICAgIC8vIOaAu+WFsSBLIOS4quWAvCDpgqPkuYjlpoLmnpwg5a+75om+5pyA5bem6L6555WMIGluZGV4IOeahCDojIPlm7TlsLHmmK8gMCB+IGFyci5sZW5ndGggLSBrXHJcbiAgICBsZXQgbGVmdCA9IDA7XHJcbiAgICBsZXQgcmlnaHQgPSBhcnIubGVuZ3RoIC0gaztcclxuICAgIHdoaWxlIChsZWZ0IDwgcmlnaHQpIHtcclxuICAgICAgICBjb25zdCBtaWQgPSAobGVmdCArIHJpZ2h0KSA+PiAxOyAvLyDkvJjlhYjkvb/nlKjovoPlsI/nmoQg5omA5Lul5L2/55So5ZCR5LiL5Y+W5pW055qE5qih5p2/XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaW5kZXggbWlkIOS9nOS4uuW3pui+ueeVjCAgICAgICAgICAgbWlkICsgayAtIDHkuLrlj7PovrnnlYwg6L+Z6YeMIOeciyBtaWQgKyBrXHJcbiAgICAgICAgaWYgKE1hdGguYWJzKGFyclttaWRdIC0geCkgPiBNYXRoLmFicyhhcnJbbWlkICsga10gLSB4KSkgeyAvLyDkuLrku4DkuYggbWlkICsga+S4jeS8mui2iueVjOWRoiDlm6DkuLogbGVmdCA8IHJpZ2h0IOeEtuiAjOWPquaciSBsZWZ0ID0gcmlnaHQgPSBhcnIubGVuZ3RoIC0gayDnmoTml7Yg5omN5Y+v6IO96LaK55WMXHJcbiAgICAgICAgICAgIGxlZnQgPSBtaWQgKyAxOyAvLyDlnKggbWlkIOS4uuW3pui+ueeVjCDnmoTluo/liJfnmoQg5Y+z6L6555WM55qEIOWPs+i+uVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJpZ2h0ID0gbWlkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJyLnNsaWNlKHJpZ2h0LCByaWdodCArIGspO1xyXG59O1xyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxyXG4gICAgZmluZENsb3Nlc3RFbGVtZW50cyhbMSwgMiwgMywgNCwgNV0sIDQsIDMpLFxyXG4gICAgWzEsIDIsIDMsIDRdLFxyXG4pO1xyXG5cclxuXHJcblxyXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxyXG4gICAgZmluZENsb3Nlc3RFbGVtZW50cyhbMSwgMiwgMywgNCwgNV0sIDQsIC0xKSxcclxuICAgIFsxLCAyLCAzLCA0XSxcclxuKTtcclxuXHJcblxyXG4iXX0=