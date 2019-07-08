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
    return p.val === q.val ? isSameTree(p.left, q.left) && isSameTree(p.right, q.right) : false;
};
const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);
const tree2 = new TreeNode(1);
tree2.left = new TreeNode(1);
tree2.right = new TreeNode(3);
console.log(isSameTree(tree1, tree2));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAwLuebuOWQjOeahOagkS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTAwLuebuOWQjOeahOagkS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpREU7O0FBRUY7Ozs7OztHQU1HO0FBQ0g7Ozs7O0tBS0s7QUFDTCxNQUFNLFFBQVE7SUFLVixZQUFZLEdBQU07UUFIbEIsU0FBSSxHQUF1QixJQUFJLENBQUM7UUFDaEMsVUFBSyxHQUF1QixJQUFJLENBQUM7UUFHN0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztDQUNKO0FBRUQ7Ozs7R0FJRztBQUNILElBQUksVUFBVSxHQUFHLFVBQVUsQ0FBMEIsRUFBRSxDQUEwQjtJQUM3RSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUk7UUFBRSxPQUFPLElBQUksQ0FBQztJQUN4QyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUk7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUN6QyxPQUFPLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ2hHLENBQUMsQ0FBQztBQUVGLE1BQU0sS0FBSyxHQUFHLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlCLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0IsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUU5QixNQUFNLEtBQUssR0FBRyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM5QixLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdCLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG5bMTAwXSDnm7jlkIznmoTmoJFcclxuXHJcbmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL3NhbWUtdHJlZS9kZXNjcmlwdGlvbi9cclxuXHJcblRhZ3M6IGFsZ29yaXRobXMgYmxvb21iZXJnIGRlcHRoLWZpcnN0LXNlYXJjaCB0cmVlXHJcblxyXG5MYW5nczogYyBjcHAgY3NoYXJwIGdvbGFuZyBqYXZhIGphdmFzY3JpcHQga290bGluIHBocCBweXRob24gcHl0aG9uMyBydWJ5IHJ1c3Qgc2NhbGEgc3dpZnRcclxuXHJcbiogYWxnb3JpdGhtc1xyXG4qIEVhc3kgKDUxLjY0JSlcclxuKiBUb3RhbCBBY2NlcHRlZDogMTYuN0tcclxuKiBUb3RhbCBTdWJtaXNzaW9uczogMzIuM0tcclxuKiBUZXN0Y2FzZSBFeGFtcGxlOiAnWzEsMiwzXVxcblsxLDIsM10nXHJcblxyXG7nu5nlrprkuKTkuKrkuozlj4nmoJHvvIznvJblhpnkuIDkuKrlh73mlbDmnaXmo4DpqozlroPku6zmmK/lkKbnm7jlkIzjgIJcclxuXHJcbuWmguaenOS4pOS4quagkeWcqOe7k+aehOS4iuebuOWQjO+8jOW5tuS4lOiKgueCueWFt+acieebuOWQjOeahOWAvO+8jOWImeiupOS4uuWug+S7rOaYr+ebuOWQjOeahOOAglxyXG5cclxu56S65L6LIDE6XHJcblxyXG7ovpPlhaU6IDEgMVxyXG4vIFxcIC8gXFxcclxuMiAzIDIgM1xyXG5cclxuWzEsMiwzXSwgWzEsMiwzXVxyXG5cclxu6L6T5Ye6OiB0cnVlXHJcblxyXG7npLrkvosgMjpcclxuXHJcbui+k+WFpTogMSAxXHJcbi8gXFxcclxuMiAyXHJcblxyXG5bMSwyXSwgWzEsbnVsbCwyXVxyXG5cclxu6L6T5Ye6OiBmYWxzZVxyXG5cclxuXHJcbuekuuS+iyAzOlxyXG5cclxu6L6T5YWlOiAxIDFcclxuLyBcXCAvIFxcXHJcbjIgMSAxIDJcclxuXHJcblsxLDIsMV0sIFsxLDEsMl1cclxuXHJcbui+k+WHujogZmFsc2VcclxuKi9cclxuXHJcbi8qKlxyXG4gKiBEZWZpbml0aW9uIGZvciBhIGJpbmFyeSB0cmVlIG5vZGUuXHJcbiAqIGZ1bmN0aW9uIFRyZWVOb2RlKHZhbCkge1xyXG4gKiAgICAgdGhpcy52YWwgPSB2YWw7XHJcbiAqICAgICB0aGlzLmxlZnQgPSB0aGlzLnJpZ2h0ID0gbnVsbDtcclxuICogfVxyXG4gKi9cclxuLyoqXHJcbiAqIEBjb25zdHJ1Y3RvciBUcmVlTm9kZVxyXG4gKiBAcHJvcGVydHkgeyp9IHZhbFxyXG4gKiBAcHJvcGVydHkge1RyZWVOb2RlIHwgbnVsbH0gbGVmdFxyXG4gKiBAcHJvcGVydHkge1RyZWVOb2RlIHwgbnVsbH0gcmlnaHRcclxuICogKi9cclxuY2xhc3MgVHJlZU5vZGU8VD4ge1xyXG4gICAgdmFsOiBUO1xyXG4gICAgbGVmdDogbnVsbCB8IFRyZWVOb2RlPFQ+ID0gbnVsbDtcclxuICAgIHJpZ2h0OiBudWxsIHwgVHJlZU5vZGU8VD4gPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbDogVCkge1xyXG4gICAgICAgIHRoaXMudmFsID0gdmFsO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtUcmVlTm9kZX0gcFxyXG4gKiBAcGFyYW0ge1RyZWVOb2RlfSBxXHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAqL1xyXG52YXIgaXNTYW1lVHJlZSA9IGZ1bmN0aW9uIChwOiBUcmVlTm9kZTxudW1iZXI+IHwgbnVsbCwgcTogVHJlZU5vZGU8bnVtYmVyPiB8IG51bGwpOiBib29sZWFuIHtcclxuICAgIGlmIChwID09IG51bGwgJiYgcSA9PSBudWxsKSByZXR1cm4gdHJ1ZTtcclxuICAgIGlmIChwID09IG51bGwgfHwgcSA9PSBudWxsKSByZXR1cm4gZmFsc2U7XHJcbiAgICByZXR1cm4gcC52YWwgPT09IHEudmFsID8gaXNTYW1lVHJlZShwLmxlZnQsIHEubGVmdCkgJiYgaXNTYW1lVHJlZShwLnJpZ2h0LCBxLnJpZ2h0KSA6IGZhbHNlO1xyXG59O1xyXG5cclxuY29uc3QgdHJlZTEgPSBuZXcgVHJlZU5vZGUoMSk7XHJcbnRyZWUxLmxlZnQgPSBuZXcgVHJlZU5vZGUoMik7XHJcbnRyZWUxLnJpZ2h0ID0gbmV3IFRyZWVOb2RlKDMpO1xyXG5cclxuY29uc3QgdHJlZTIgPSBuZXcgVHJlZU5vZGUoMSk7XHJcbnRyZWUyLmxlZnQgPSBuZXcgVHJlZU5vZGUoMSk7XHJcbnRyZWUyLnJpZ2h0ID0gbmV3IFRyZWVOb2RlKDMpO1xyXG5cclxuY29uc29sZS5sb2coaXNTYW1lVHJlZSh0cmVlMSwgdHJlZTIpKTtcclxuZXhwb3J0IHt9O1xyXG4iXX0=