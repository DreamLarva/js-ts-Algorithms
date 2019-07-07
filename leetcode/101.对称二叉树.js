"use strict";
/*
[101] 对称二叉树

https://leetcode-cn.com/problems/symmetric-tree/description/

Tags: algorithms bloomberg linkedin microsoft breadth-first-search depth-first-search tree

Langs: c cpp csharp golang java javascript kotlin php python python3 ruby rust scala swift

* algorithms
* Easy (45.59%)
* Total Accepted: 25.5K
* Total Submissions: 56K
* Testcase Example: '[1,2,2,3,4,4,3]'

给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

1
/ \
2 2
/ \ / \
3 4 4 3


但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

1
/ \
2 2
\ \
3 3


说明:

如果你可以运用递归和迭代两种方法解决这个问题，会很加分。

*/
Object.defineProperty(exports, "__esModule", { value: true });
class TreeNode {
    constructor(val) {
        this.left = null;
        this.right = null;
        this.val = val;
    }
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (root == null) {
        return true;
    }
    return recursion(root.left, root.right);
};
function recursion(left, right) {
    if (left == null || right == null) {
        return left == null && right == null;
    }
    return left.val === right.val &&
        recursion(left.left, right.right) &&
        recursion(left.right, right.left);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAxLuWvueensOS6jOWPieagkS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTAxLuWvueensOS6jOWPieagkS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXVDRTs7QUFFRixNQUFNLFFBQVE7SUFLVixZQUFZLEdBQU07UUFIbEIsU0FBSSxHQUF1QixJQUFJLENBQUM7UUFDaEMsVUFBSyxHQUF1QixJQUFJLENBQUM7UUFHN0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztDQUNKO0FBRUQ7OztHQUdHO0FBQ0gsSUFBSSxXQUFXLEdBQUcsVUFBVSxJQUE2QjtJQUNyRCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7UUFDZCxPQUFPLElBQUksQ0FBQztLQUNmO0lBQ0QsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDNUMsQ0FBQyxDQUFDO0FBRUYsU0FBUyxTQUFTLENBQUMsSUFBNkIsRUFBRSxLQUE4QjtJQUM1RSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtRQUMvQixPQUFPLElBQUksSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQztLQUN4QztJQUNELE9BQU8sSUFBSSxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsR0FBRztRQUN6QixTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ2pDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMxQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuWzEwMV0g5a+556ew5LqM5Y+J5qCRXHJcblxyXG5odHRwczovL2xlZXRjb2RlLWNuLmNvbS9wcm9ibGVtcy9zeW1tZXRyaWMtdHJlZS9kZXNjcmlwdGlvbi9cclxuXHJcblRhZ3M6IGFsZ29yaXRobXMgYmxvb21iZXJnIGxpbmtlZGluIG1pY3Jvc29mdCBicmVhZHRoLWZpcnN0LXNlYXJjaCBkZXB0aC1maXJzdC1zZWFyY2ggdHJlZVxyXG5cclxuTGFuZ3M6IGMgY3BwIGNzaGFycCBnb2xhbmcgamF2YSBqYXZhc2NyaXB0IGtvdGxpbiBwaHAgcHl0aG9uIHB5dGhvbjMgcnVieSBydXN0IHNjYWxhIHN3aWZ0XHJcblxyXG4qIGFsZ29yaXRobXNcclxuKiBFYXN5ICg0NS41OSUpXHJcbiogVG90YWwgQWNjZXB0ZWQ6IDI1LjVLXHJcbiogVG90YWwgU3VibWlzc2lvbnM6IDU2S1xyXG4qIFRlc3RjYXNlIEV4YW1wbGU6ICdbMSwyLDIsMyw0LDQsM10nXHJcblxyXG7nu5nlrprkuIDkuKrkuozlj4nmoJHvvIzmo4Dmn6XlroPmmK/lkKbmmK/plZzlg4/lr7nnp7DnmoTjgIJcclxuXHJcbuS+i+Wmgu+8jOS6jOWPieagkSBbMSwyLDIsMyw0LDQsM10g5piv5a+556ew55qE44CCXHJcblxyXG4xXHJcbi8gXFxcclxuMiAyXHJcbi8gXFwgLyBcXFxyXG4zIDQgNCAzXHJcblxyXG5cclxu5L2G5piv5LiL6Z2i6L+Z5LiqIFsxLDIsMixudWxsLDMsbnVsbCwzXSDliJnkuI3mmK/plZzlg4/lr7nnp7DnmoQ6XHJcblxyXG4xXHJcbi8gXFxcclxuMiAyXHJcblxcIFxcXHJcbjMgM1xyXG5cclxuXHJcbuivtOaYjjpcclxuXHJcbuWmguaenOS9oOWPr+S7pei/kOeUqOmAkuW9kuWSjOi/reS7o+S4pOenjeaWueazleino+WGs+i/meS4qumXrumimO+8jOS8muW+iOWKoOWIhuOAglxyXG5cclxuKi9cclxuXHJcbmNsYXNzIFRyZWVOb2RlPFQ+IHtcclxuICAgIHZhbDogVDtcclxuICAgIGxlZnQ6IG51bGwgfCBUcmVlTm9kZTxUPiA9IG51bGw7XHJcbiAgICByaWdodDogbnVsbCB8IFRyZWVOb2RlPFQ+ID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih2YWw6IFQpIHtcclxuICAgICAgICB0aGlzLnZhbCA9IHZhbDtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7VHJlZU5vZGV9IHJvb3RcclxuICogQHJldHVybiB7Ym9vbGVhbn1cclxuICovXHJcbnZhciBpc1N5bW1ldHJpYyA9IGZ1bmN0aW9uIChyb290OiBUcmVlTm9kZTxudW1iZXI+IHwgbnVsbCkge1xyXG4gICAgaWYgKHJvb3QgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlY3Vyc2lvbihyb290LmxlZnQsIHJvb3QucmlnaHQpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVjdXJzaW9uKGxlZnQ6IFRyZWVOb2RlPG51bWJlcj4gfCBudWxsLCByaWdodDogVHJlZU5vZGU8bnVtYmVyPiB8IG51bGwpOiBib29sZWFuIHtcclxuICAgIGlmIChsZWZ0ID09IG51bGwgfHwgcmlnaHQgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBsZWZ0ID09IG51bGwgJiYgcmlnaHQgPT0gbnVsbDtcclxuICAgIH1cclxuICAgIHJldHVybiBsZWZ0LnZhbCA9PT0gcmlnaHQudmFsICYmXHJcbiAgICAgICAgcmVjdXJzaW9uKGxlZnQubGVmdCwgcmlnaHQucmlnaHQpICYmXHJcbiAgICAgICAgcmVjdXJzaW9uKGxlZnQucmlnaHQsIHJpZ2h0LmxlZnQpO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7fTtcclxuIl19