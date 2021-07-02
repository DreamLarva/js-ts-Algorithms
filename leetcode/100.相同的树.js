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
    val;
    left = null;
    right = null;
    constructor(val) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAwLuebuOWQjOeahOagkS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTAwLuebuOWQjOeahOagkS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpREU7O0FBRUY7Ozs7OztHQU1HO0FBQ0g7Ozs7O0tBS0s7QUFDTCxNQUFNLFFBQVE7SUFDWixHQUFHLENBQUk7SUFDUCxJQUFJLEdBQXVCLElBQUksQ0FBQztJQUNoQyxLQUFLLEdBQXVCLElBQUksQ0FBQztJQUVqQyxZQUFZLEdBQU07UUFDaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDakIsQ0FBQztDQUNGO0FBRUQ7Ozs7R0FJRztBQUNILElBQUksVUFBVSxHQUFHLFVBQ2YsQ0FBMEIsRUFDMUIsQ0FBMEI7SUFFMUIsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJO1FBQUUsT0FBTyxJQUFJLENBQUM7SUFDeEMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJO1FBQUUsT0FBTyxLQUFLLENBQUM7SUFDekMsT0FBTyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHO1FBQ3BCLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUM1RCxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ1osQ0FBQyxDQUFDO0FBRUYsTUFBTSxLQUFLLEdBQUcsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUIsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QixLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRTlCLE1BQU0sS0FBSyxHQUFHLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlCLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0IsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUU5QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5bMTAwXSDnm7jlkIznmoTmoJFcblxuaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvc2FtZS10cmVlL2Rlc2NyaXB0aW9uL1xuXG5UYWdzOiBhbGdvcml0aG1zIGJsb29tYmVyZyBkZXB0aC1maXJzdC1zZWFyY2ggdHJlZVxuXG5MYW5nczogYyBjcHAgY3NoYXJwIGdvbGFuZyBqYXZhIGphdmFzY3JpcHQga290bGluIHBocCBweXRob24gcHl0aG9uMyBydWJ5IHJ1c3Qgc2NhbGEgc3dpZnRcblxuKiBhbGdvcml0aG1zXG4qIEVhc3kgKDUxLjY0JSlcbiogVG90YWwgQWNjZXB0ZWQ6IDE2LjdLXG4qIFRvdGFsIFN1Ym1pc3Npb25zOiAzMi4zS1xuKiBUZXN0Y2FzZSBFeGFtcGxlOiAnWzEsMiwzXVxcblsxLDIsM10nXG5cbue7meWumuS4pOS4quS6jOWPieagke+8jOe8luWGmeS4gOS4quWHveaVsOadpeajgOmqjOWug+S7rOaYr+WQpuebuOWQjOOAglxuXG7lpoLmnpzkuKTkuKrmoJHlnKjnu5PmnoTkuIrnm7jlkIzvvIzlubbkuJToioLngrnlhbfmnInnm7jlkIznmoTlgLzvvIzliJnorqTkuLrlroPku6zmmK/nm7jlkIznmoTjgIJcblxu56S65L6LIDE6XG5cbui+k+WFpTogMSAxXG4vIFxcIC8gXFxcbjIgMyAyIDNcblxuWzEsMiwzXSwgWzEsMiwzXVxuXG7ovpPlh7o6IHRydWVcblxu56S65L6LIDI6XG5cbui+k+WFpTogMSAxXG4vIFxcXG4yIDJcblxuWzEsMl0sIFsxLG51bGwsMl1cblxu6L6T5Ye6OiBmYWxzZVxuXG5cbuekuuS+iyAzOlxuXG7ovpPlhaU6IDEgMVxuLyBcXCAvIFxcXG4yIDEgMSAyXG5cblsxLDIsMV0sIFsxLDEsMl1cblxu6L6T5Ye6OiBmYWxzZVxuKi9cblxuLyoqXG4gKiBEZWZpbml0aW9uIGZvciBhIGJpbmFyeSB0cmVlIG5vZGUuXG4gKiBmdW5jdGlvbiBUcmVlTm9kZSh2YWwpIHtcbiAqICAgICB0aGlzLnZhbCA9IHZhbDtcbiAqICAgICB0aGlzLmxlZnQgPSB0aGlzLnJpZ2h0ID0gbnVsbDtcbiAqIH1cbiAqL1xuLyoqXG4gKiBAY29uc3RydWN0b3IgVHJlZU5vZGVcbiAqIEBwcm9wZXJ0eSB7Kn0gdmFsXG4gKiBAcHJvcGVydHkge1RyZWVOb2RlIHwgbnVsbH0gbGVmdFxuICogQHByb3BlcnR5IHtUcmVlTm9kZSB8IG51bGx9IHJpZ2h0XG4gKiAqL1xuY2xhc3MgVHJlZU5vZGU8VD4ge1xuICB2YWw6IFQ7XG4gIGxlZnQ6IG51bGwgfCBUcmVlTm9kZTxUPiA9IG51bGw7XG4gIHJpZ2h0OiBudWxsIHwgVHJlZU5vZGU8VD4gPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHZhbDogVCkge1xuICAgIHRoaXMudmFsID0gdmFsO1xuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtUcmVlTm9kZX0gcFxuICogQHBhcmFtIHtUcmVlTm9kZX0gcVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xudmFyIGlzU2FtZVRyZWUgPSBmdW5jdGlvbiAoXG4gIHA6IFRyZWVOb2RlPG51bWJlcj4gfCBudWxsLFxuICBxOiBUcmVlTm9kZTxudW1iZXI+IHwgbnVsbFxuKTogYm9vbGVhbiB7XG4gIGlmIChwID09IG51bGwgJiYgcSA9PSBudWxsKSByZXR1cm4gdHJ1ZTtcbiAgaWYgKHAgPT0gbnVsbCB8fCBxID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIHAudmFsID09PSBxLnZhbFxuICAgID8gaXNTYW1lVHJlZShwLmxlZnQsIHEubGVmdCkgJiYgaXNTYW1lVHJlZShwLnJpZ2h0LCBxLnJpZ2h0KVxuICAgIDogZmFsc2U7XG59O1xuXG5jb25zdCB0cmVlMSA9IG5ldyBUcmVlTm9kZSgxKTtcbnRyZWUxLmxlZnQgPSBuZXcgVHJlZU5vZGUoMik7XG50cmVlMS5yaWdodCA9IG5ldyBUcmVlTm9kZSgzKTtcblxuY29uc3QgdHJlZTIgPSBuZXcgVHJlZU5vZGUoMSk7XG50cmVlMi5sZWZ0ID0gbmV3IFRyZWVOb2RlKDEpO1xudHJlZTIucmlnaHQgPSBuZXcgVHJlZU5vZGUoMyk7XG5cbmNvbnNvbGUubG9nKGlzU2FtZVRyZWUodHJlZTEsIHRyZWUyKSk7XG5leHBvcnQge307XG4iXX0=