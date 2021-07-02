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
    val;
    left = null;
    right = null;
    constructor(val) {
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
    return (left.val === right.val &&
        recursion(left.left, right.right) &&
        recursion(left.right, right.left));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAxLuWvueensOS6jOWPieagkS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTAxLuWvueensOS6jOWPieagkS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXVDRTs7QUFFRixNQUFNLFFBQVE7SUFDWixHQUFHLENBQUk7SUFDUCxJQUFJLEdBQXVCLElBQUksQ0FBQztJQUNoQyxLQUFLLEdBQXVCLElBQUksQ0FBQztJQUVqQyxZQUFZLEdBQU07UUFDaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDakIsQ0FBQztDQUNGO0FBRUQ7OztHQUdHO0FBQ0gsSUFBSSxXQUFXLEdBQUcsVUFBVSxJQUE2QjtJQUN2RCxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7UUFDaEIsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUNELE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzFDLENBQUMsQ0FBQztBQUVGLFNBQVMsU0FBUyxDQUNoQixJQUE2QixFQUM3QixLQUE4QjtJQUU5QixJQUFJLElBQUksSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtRQUNqQyxPQUFPLElBQUksSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQztLQUN0QztJQUNELE9BQU8sQ0FDTCxJQUFJLENBQUMsR0FBRyxLQUFLLEtBQUssQ0FBQyxHQUFHO1FBQ3RCLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDakMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUNsQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5bMTAxXSDlr7nnp7Dkuozlj4nmoJFcblxuaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvc3ltbWV0cmljLXRyZWUvZGVzY3JpcHRpb24vXG5cblRhZ3M6IGFsZ29yaXRobXMgYmxvb21iZXJnIGxpbmtlZGluIG1pY3Jvc29mdCBicmVhZHRoLWZpcnN0LXNlYXJjaCBkZXB0aC1maXJzdC1zZWFyY2ggdHJlZVxuXG5MYW5nczogYyBjcHAgY3NoYXJwIGdvbGFuZyBqYXZhIGphdmFzY3JpcHQga290bGluIHBocCBweXRob24gcHl0aG9uMyBydWJ5IHJ1c3Qgc2NhbGEgc3dpZnRcblxuKiBhbGdvcml0aG1zXG4qIEVhc3kgKDQ1LjU5JSlcbiogVG90YWwgQWNjZXB0ZWQ6IDI1LjVLXG4qIFRvdGFsIFN1Ym1pc3Npb25zOiA1NktcbiogVGVzdGNhc2UgRXhhbXBsZTogJ1sxLDIsMiwzLDQsNCwzXSdcblxu57uZ5a6a5LiA5Liq5LqM5Y+J5qCR77yM5qOA5p+l5a6D5piv5ZCm5piv6ZWc5YOP5a+556ew55qE44CCXG5cbuS+i+Wmgu+8jOS6jOWPieagkSBbMSwyLDIsMyw0LDQsM10g5piv5a+556ew55qE44CCXG5cbjFcbi8gXFxcbjIgMlxuLyBcXCAvIFxcXG4zIDQgNCAzXG5cblxu5L2G5piv5LiL6Z2i6L+Z5LiqIFsxLDIsMixudWxsLDMsbnVsbCwzXSDliJnkuI3mmK/plZzlg4/lr7nnp7DnmoQ6XG5cbjFcbi8gXFxcbjIgMlxuXFwgXFxcbjMgM1xuXG5cbuivtOaYjjpcblxu5aaC5p6c5L2g5Y+v5Lul6L+Q55So6YCS5b2S5ZKM6L+t5Luj5Lik56eN5pa55rOV6Kej5Yaz6L+Z5Liq6Zeu6aKY77yM5Lya5b6I5Yqg5YiG44CCXG5cbiovXG5cbmNsYXNzIFRyZWVOb2RlPFQ+IHtcbiAgdmFsOiBUO1xuICBsZWZ0OiBudWxsIHwgVHJlZU5vZGU8VD4gPSBudWxsO1xuICByaWdodDogbnVsbCB8IFRyZWVOb2RlPFQ+ID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcih2YWw6IFQpIHtcbiAgICB0aGlzLnZhbCA9IHZhbDtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7VHJlZU5vZGV9IHJvb3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbnZhciBpc1N5bW1ldHJpYyA9IGZ1bmN0aW9uIChyb290OiBUcmVlTm9kZTxudW1iZXI+IHwgbnVsbCkge1xuICBpZiAocm9vdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIHJlY3Vyc2lvbihyb290LmxlZnQsIHJvb3QucmlnaHQpO1xufTtcblxuZnVuY3Rpb24gcmVjdXJzaW9uKFxuICBsZWZ0OiBUcmVlTm9kZTxudW1iZXI+IHwgbnVsbCxcbiAgcmlnaHQ6IFRyZWVOb2RlPG51bWJlcj4gfCBudWxsXG4pOiBib29sZWFuIHtcbiAgaWYgKGxlZnQgPT0gbnVsbCB8fCByaWdodCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGxlZnQgPT0gbnVsbCAmJiByaWdodCA9PSBudWxsO1xuICB9XG4gIHJldHVybiAoXG4gICAgbGVmdC52YWwgPT09IHJpZ2h0LnZhbCAmJlxuICAgIHJlY3Vyc2lvbihsZWZ0LmxlZnQsIHJpZ2h0LnJpZ2h0KSAmJlxuICAgIHJlY3Vyc2lvbihsZWZ0LnJpZ2h0LCByaWdodC5sZWZ0KVxuICApO1xufVxuXG5leHBvcnQge307XG4iXX0=