"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
你和你的朋友，两个人一起玩 Nim游戏：桌子上有一堆石头，每次你们轮流拿掉 1 - 3 块石头。 拿掉最后一块石头的人就是获胜者。你作为先手。

你们是聪明人，每一步都是最优解。 编写一个函数，来判断你是否可以在给定石头数量的情况下赢得游戏。

示例:

输入: 4
输出: false
解释: 如果堆中有 4 块石头，那么你永远不会赢得比赛；
     因为无论你拿走 1 块、2 块 还是 3 块石头，最后一块石头总是会被你的朋友拿走。
* */
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
    // 巴什博奕
    return n % (3 + 1) !== 0;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjkyLk5pbea4uOaIjy5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjkyLk5pbea4uOaIjy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7OztJQVdJO0FBQ0o7OztHQUdHO0FBQ0gsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFTO0lBQ2pDLE9BQU87SUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDM0IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbuS9oOWSjOS9oOeahOaci+WPi++8jOS4pOS4quS6uuS4gOi1t+eOqSBOaW3muLjmiI/vvJrmoYzlrZDkuIrmnInkuIDloIbnn7PlpLTvvIzmr4/mrKHkvaDku6zova7mtYHmi7/mjokgMSAtIDMg5Z2X55+z5aS044CCIOaLv+aOieacgOWQjuS4gOWdl+efs+WktOeahOS6uuWwseaYr+iOt+iDnOiAheOAguS9oOS9nOS4uuWFiOaJi+OAglxuXG7kvaDku6zmmK/ogarmmI7kurrvvIzmr4/kuIDmraXpg73mmK/mnIDkvJjop6PjgIIg57yW5YaZ5LiA5Liq5Ye95pWw77yM5p2l5Yik5pat5L2g5piv5ZCm5Y+v5Lul5Zyo57uZ5a6a55+z5aS05pWw6YeP55qE5oOF5Ya15LiL6LWi5b6X5ri45oiP44CCXG5cbuekuuS+izpcblxu6L6T5YWlOiA0XG7ovpPlh7o6IGZhbHNlXG7op6Pph4o6IOWmguaenOWghuS4reaciSA0IOWdl+efs+WktO+8jOmCo+S5iOS9oOawuOi/nOS4jeS8mui1ouW+l+avlOi1m++8m1xuICAgICDlm6DkuLrml6DorrrkvaDmi7/otbAgMSDlnZfjgIEyIOWdlyDov5jmmK8gMyDlnZfnn7PlpLTvvIzmnIDlkI7kuIDlnZfnn7PlpLTmgLvmmK/kvJrooqvkvaDnmoTmnIvlj4vmi7/otbDjgIJcbiogKi9cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IG5cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbnZhciBjYW5XaW5OaW0gPSBmdW5jdGlvbiAobjogbnVtYmVyKSB7XG4gIC8vIOW3tOS7gOWNmuWllVxuICByZXR1cm4gbiAlICgzICsgMSkgIT09IDA7XG59O1xuXG5leHBvcnQge307XG4iXX0=