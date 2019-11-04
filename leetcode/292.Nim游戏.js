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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjkyLk5pbea4uOaIjy5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjkyLk5pbea4uOaIjy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7OztJQVdJO0FBQ0o7OztHQUdHO0FBQ0gsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFTO0lBQy9CLE9BQU87SUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFN0IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu5L2g5ZKM5L2g55qE5pyL5Y+L77yM5Lik5Liq5Lq65LiA6LW3546pIE5pbea4uOaIj++8muahjOWtkOS4iuacieS4gOWghuefs+WktO+8jOavj+asoeS9oOS7rOi9rua1geaLv+aOiSAxIC0gMyDlnZfnn7PlpLTjgIIg5ou/5o6J5pyA5ZCO5LiA5Z2X55+z5aS055qE5Lq65bCx5piv6I636IOc6ICF44CC5L2g5L2c5Li65YWI5omL44CCXHJcblxyXG7kvaDku6zmmK/ogarmmI7kurrvvIzmr4/kuIDmraXpg73mmK/mnIDkvJjop6PjgIIg57yW5YaZ5LiA5Liq5Ye95pWw77yM5p2l5Yik5pat5L2g5piv5ZCm5Y+v5Lul5Zyo57uZ5a6a55+z5aS05pWw6YeP55qE5oOF5Ya15LiL6LWi5b6X5ri45oiP44CCXHJcblxyXG7npLrkvos6XHJcblxyXG7ovpPlhaU6IDRcclxu6L6T5Ye6OiBmYWxzZVxyXG7op6Pph4o6IOWmguaenOWghuS4reaciSA0IOWdl+efs+WktO+8jOmCo+S5iOS9oOawuOi/nOS4jeS8mui1ouW+l+avlOi1m++8m1xyXG4gICAgIOWboOS4uuaXoOiuuuS9oOaLv+i1sCAxIOWdl+OAgTIg5Z2XIOi/mOaYryAzIOWdl+efs+WktO+8jOacgOWQjuS4gOWdl+efs+WktOaAu+aYr+S8muiiq+S9oOeahOaci+WPi+aLv+i1sOOAglxyXG4qICovXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gblxyXG4gKiBAcmV0dXJuIHtib29sZWFufVxyXG4gKi9cclxudmFyIGNhbldpbk5pbSA9IGZ1bmN0aW9uIChuOiBudW1iZXIpIHtcclxuICAgIC8vIOW3tOS7gOWNmuWllVxyXG4gICAgcmV0dXJuIG4gJSAoMyArIDEpICE9PSAwO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCB7fVxyXG4iXX0=