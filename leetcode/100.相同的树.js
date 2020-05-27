"use strict";
/*
[100] 相同的树

https://leetcode-cn.com/problems/same-tree/description/

Tags: algorithms bloomberg depth-first-search tree

Langs: c cpp csharp golang java javascript kotlin php python python3 ruby rust scala swift

* algorithms
* Easy (51.64%)
* Total Accepted: 16.7K
* Total Submissions: 32.3K
* Testcase Example: '[1,2,3]\n[1,2,3]'

给定两个二叉树，编写一个函数来检验它们是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

示例 1:

输入: 1 1
/ \ / \
2 3 2 3

[1,2,3], [1,2,3]

输出: true

示例 2:

输入: 1 1
/ \
2 2

[1,2], [1,null,2]

输出: false


示例 3:

输入: 1 1
/ \ / \
2 1 1 2

[1,2,1], [1,1,2]

输出: false
*/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @constructor TreeNode
 * @property {*} val
 * @property {TreeNode | null} left
 * @property {TreeNode | null} right
 * */
class TreeNode {
    constructor(val) {
        this.left = null;
        this.right = null;
        this.val = val;
    }
}
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (p == null && q == null)
        return true;
    if (p == null || q == null)
        return false;
    return p.val === q.val
        ? isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
        : false;
};
const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);
const tree2 = new TreeNode(1);
tree2.left = new TreeNode(1);
tree2.right = new TreeNode(3);
console.log(isSameTree(tree1, tree2));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAwLuebuOWQjOeahOagkS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTAwLuebuOWQjOeahOagkS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpREU7O0FBRUY7Ozs7OztHQU1HO0FBQ0g7Ozs7O0tBS0s7QUFDTCxNQUFNLFFBQVE7SUFLWixZQUFZLEdBQU07UUFIbEIsU0FBSSxHQUF1QixJQUFJLENBQUM7UUFDaEMsVUFBSyxHQUF1QixJQUFJLENBQUM7UUFHL0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDakIsQ0FBQztDQUNGO0FBRUQ7Ozs7R0FJRztBQUNILElBQUksVUFBVSxHQUFHLFVBQ2YsQ0FBMEIsRUFDMUIsQ0FBMEI7SUFFMUIsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDeEMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDekMsT0FBTyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHO1FBQ3BCLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUM1RCxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ1osQ0FBQyxDQUFDO0FBRUYsTUFBTSxLQUFLLEdBQUcsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUIsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QixLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRTlCLE1BQU0sS0FBSyxHQUFHLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlCLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0IsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUU5QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcblsxMDBdIOebuOWQjOeahOagkVxyXG5cclxuaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvc2FtZS10cmVlL2Rlc2NyaXB0aW9uL1xyXG5cclxuVGFnczogYWxnb3JpdGhtcyBibG9vbWJlcmcgZGVwdGgtZmlyc3Qtc2VhcmNoIHRyZWVcclxuXHJcbkxhbmdzOiBjIGNwcCBjc2hhcnAgZ29sYW5nIGphdmEgamF2YXNjcmlwdCBrb3RsaW4gcGhwIHB5dGhvbiBweXRob24zIHJ1YnkgcnVzdCBzY2FsYSBzd2lmdFxyXG5cclxuKiBhbGdvcml0aG1zXHJcbiogRWFzeSAoNTEuNjQlKVxyXG4qIFRvdGFsIEFjY2VwdGVkOiAxNi43S1xyXG4qIFRvdGFsIFN1Ym1pc3Npb25zOiAzMi4zS1xyXG4qIFRlc3RjYXNlIEV4YW1wbGU6ICdbMSwyLDNdXFxuWzEsMiwzXSdcclxuXHJcbue7meWumuS4pOS4quS6jOWPieagke+8jOe8luWGmeS4gOS4quWHveaVsOadpeajgOmqjOWug+S7rOaYr+WQpuebuOWQjOOAglxyXG5cclxu5aaC5p6c5Lik5Liq5qCR5Zyo57uT5p6E5LiK55u45ZCM77yM5bm25LiU6IqC54K55YW35pyJ55u45ZCM55qE5YC877yM5YiZ6K6k5Li65a6D5Lus5piv55u45ZCM55qE44CCXHJcblxyXG7npLrkvosgMTpcclxuXHJcbui+k+WFpTogMSAxXHJcbi8gXFwgLyBcXFxyXG4yIDMgMiAzXHJcblxyXG5bMSwyLDNdLCBbMSwyLDNdXHJcblxyXG7ovpPlh7o6IHRydWVcclxuXHJcbuekuuS+iyAyOlxyXG5cclxu6L6T5YWlOiAxIDFcclxuLyBcXFxyXG4yIDJcclxuXHJcblsxLDJdLCBbMSxudWxsLDJdXHJcblxyXG7ovpPlh7o6IGZhbHNlXHJcblxyXG5cclxu56S65L6LIDM6XHJcblxyXG7ovpPlhaU6IDEgMVxyXG4vIFxcIC8gXFxcclxuMiAxIDEgMlxyXG5cclxuWzEsMiwxXSwgWzEsMSwyXVxyXG5cclxu6L6T5Ye6OiBmYWxzZVxyXG4qL1xyXG5cclxuLyoqXHJcbiAqIERlZmluaXRpb24gZm9yIGEgYmluYXJ5IHRyZWUgbm9kZS5cclxuICogZnVuY3Rpb24gVHJlZU5vZGUodmFsKSB7XHJcbiAqICAgICB0aGlzLnZhbCA9IHZhbDtcclxuICogICAgIHRoaXMubGVmdCA9IHRoaXMucmlnaHQgPSBudWxsO1xyXG4gKiB9XHJcbiAqL1xyXG4vKipcclxuICogQGNvbnN0cnVjdG9yIFRyZWVOb2RlXHJcbiAqIEBwcm9wZXJ0eSB7Kn0gdmFsXHJcbiAqIEBwcm9wZXJ0eSB7VHJlZU5vZGUgfCBudWxsfSBsZWZ0XHJcbiAqIEBwcm9wZXJ0eSB7VHJlZU5vZGUgfCBudWxsfSByaWdodFxyXG4gKiAqL1xyXG5jbGFzcyBUcmVlTm9kZTxUPiB7XHJcbiAgdmFsOiBUO1xyXG4gIGxlZnQ6IG51bGwgfCBUcmVlTm9kZTxUPiA9IG51bGw7XHJcbiAgcmlnaHQ6IG51bGwgfCBUcmVlTm9kZTxUPiA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHZhbDogVCkge1xyXG4gICAgdGhpcy52YWwgPSB2YWw7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtUcmVlTm9kZX0gcFxyXG4gKiBAcGFyYW0ge1RyZWVOb2RlfSBxXHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAqL1xyXG52YXIgaXNTYW1lVHJlZSA9IGZ1bmN0aW9uIChcclxuICBwOiBUcmVlTm9kZTxudW1iZXI+IHwgbnVsbCxcclxuICBxOiBUcmVlTm9kZTxudW1iZXI+IHwgbnVsbFxyXG4pOiBib29sZWFuIHtcclxuICBpZiAocCA9PSBudWxsICYmIHEgPT0gbnVsbCkgcmV0dXJuIHRydWU7XHJcbiAgaWYgKHAgPT0gbnVsbCB8fCBxID09IG51bGwpIHJldHVybiBmYWxzZTtcclxuICByZXR1cm4gcC52YWwgPT09IHEudmFsXHJcbiAgICA/IGlzU2FtZVRyZWUocC5sZWZ0LCBxLmxlZnQpICYmIGlzU2FtZVRyZWUocC5yaWdodCwgcS5yaWdodClcclxuICAgIDogZmFsc2U7XHJcbn07XHJcblxyXG5jb25zdCB0cmVlMSA9IG5ldyBUcmVlTm9kZSgxKTtcclxudHJlZTEubGVmdCA9IG5ldyBUcmVlTm9kZSgyKTtcclxudHJlZTEucmlnaHQgPSBuZXcgVHJlZU5vZGUoMyk7XHJcblxyXG5jb25zdCB0cmVlMiA9IG5ldyBUcmVlTm9kZSgxKTtcclxudHJlZTIubGVmdCA9IG5ldyBUcmVlTm9kZSgxKTtcclxudHJlZTIucmlnaHQgPSBuZXcgVHJlZU5vZGUoMyk7XHJcblxyXG5jb25zb2xlLmxvZyhpc1NhbWVUcmVlKHRyZWUxLCB0cmVlMikpO1xyXG5leHBvcnQge307XHJcbiJdfQ==