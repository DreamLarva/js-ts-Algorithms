"use strict";
/*
给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
示例 2:

输入: "race a car"
输出: false
* */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const after_filter = s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
    return after_filter === after_filter.split("").reverse().join("");
};
/**
 * 不需要完全 判断翻转后的字符串完全 等于 原来的
 * 只需要 在字符串上判断 相对于中间 相等就行了 省去了 split reverse join的时间
 * */
var isPalindrome1 = function (s) {
    const after_filter = s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
    let i = 0;
    const len = after_filter.length;
    while (i < ~~(len / 2)) {
        if (after_filter[i] !== after_filter[len - 1 - i])
            return false;
        i++;
    }
    return true;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTI1LumqjOivgeWbnuaWh+S4si5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTI1LumqjOivgeWbnuaWh+S4si50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7SUFhSTs7QUFFSjs7O0dBR0c7QUFDSCxJQUFJLFlBQVksR0FBRyxVQUFVLENBQVE7SUFDakMsTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEUsT0FBTyxZQUFZLEtBQUssWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdEUsQ0FBQyxDQUFDO0FBRUY7OztLQUdLO0FBQ0wsSUFBSSxhQUFhLEdBQUcsVUFBVSxDQUFRO0lBQ2xDLE1BQU0sWUFBWSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLE1BQU0sR0FBRyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUM7SUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ3BCLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLFlBQVksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ2hFLENBQUMsRUFBRSxDQUFDO0tBQ1A7SUFHRCxPQUFPLElBQUksQ0FBQTtBQUNmLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbue7meWumuS4gOS4quWtl+espuS4su+8jOmqjOivgeWug+aYr+WQpuaYr+WbnuaWh+S4su+8jOWPquiAg+iZkeWtl+avjeWSjOaVsOWtl+Wtl+espu+8jOWPr+S7peW/veeVpeWtl+avjeeahOWkp+Wwj+WGmeOAglxyXG5cclxu6K+05piO77ya5pys6aKY5Lit77yM5oiR5Lus5bCG56m65a2X56ym5Liy5a6a5LmJ5Li65pyJ5pWI55qE5Zue5paH5Liy44CCXHJcblxyXG7npLrkvosgMTpcclxuXHJcbui+k+WFpTogXCJBIG1hbiwgYSBwbGFuLCBhIGNhbmFsOiBQYW5hbWFcIlxyXG7ovpPlh7o6IHRydWVcclxu56S65L6LIDI6XHJcblxyXG7ovpPlhaU6IFwicmFjZSBhIGNhclwiXHJcbui+k+WHujogZmFsc2VcclxuKiAqL1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzXHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAqL1xyXG52YXIgaXNQYWxpbmRyb21lID0gZnVuY3Rpb24gKHM6c3RyaW5nKSB7XHJcbiAgICBjb25zdCBhZnRlcl9maWx0ZXIgPSBzLnJlcGxhY2UoL1teMC05YS16QS1aXS9nLCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgcmV0dXJuIGFmdGVyX2ZpbHRlciA9PT0gYWZ0ZXJfZmlsdGVyLnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIOS4jemcgOimgeWujOWFqCDliKTmlq3nv7vovazlkI7nmoTlrZfnrKbkuLLlrozlhagg562J5LqOIOWOn+adpeeahFxyXG4gKiDlj6rpnIDopoEg5Zyo5a2X56ym5Liy5LiK5Yik5patIOebuOWvueS6juS4remXtCDnm7jnrYnlsLHooYzkuoYg55yB5Y675LqGIHNwbGl0IHJldmVyc2Ugam9pbueahOaXtumXtFxyXG4gKiAqL1xyXG52YXIgaXNQYWxpbmRyb21lMSA9IGZ1bmN0aW9uIChzOnN0cmluZykge1xyXG4gICAgY29uc3QgYWZ0ZXJfZmlsdGVyID0gcy5yZXBsYWNlKC9bXjAtOWEtekEtWl0vZywgXCJcIikudG9Mb3dlckNhc2UoKTtcclxuICAgIGxldCBpID0gMDtcclxuICAgIGNvbnN0IGxlbiA9IGFmdGVyX2ZpbHRlci5sZW5ndGg7XHJcbiAgICB3aGlsZSAoaSA8IH5+KGxlbiAvIDIpKSB7XHJcbiAgICAgICAgaWYgKGFmdGVyX2ZpbHRlcltpXSAhPT0gYWZ0ZXJfZmlsdGVyW2xlbiAtIDEgLSBpXSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGkrKztcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHRydWVcclxufTtcclxuXHJcbmV4cG9ydCB7fVxyXG4iXX0=