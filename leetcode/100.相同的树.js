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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAwLuebuOWQjOeahOagkS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMTAwLuebuOWQjOeahOagkS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpREU7O0FBRUY7Ozs7OztHQU1HO0FBQ0g7Ozs7O0tBS0s7QUFDTCxNQUFNLFFBQVE7SUFLVixZQUFZLEdBQU07UUFIbEIsU0FBSSxHQUF1QixJQUFJLENBQUM7UUFDaEMsVUFBSyxHQUF1QixJQUFJLENBQUM7UUFHN0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztDQUNKO0FBRUQ7Ozs7R0FJRztBQUNILElBQUksVUFBVSxHQUFHLFVBQVUsQ0FBMEIsRUFBRSxDQUEwQjtJQUM3RSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUk7UUFBRSxPQUFPLElBQUksQ0FBQztJQUN4QyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUk7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUN6QyxPQUFPLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ2hHLENBQUMsQ0FBQztBQUVGLE1BQU0sS0FBSyxHQUFHLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlCLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0IsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUU5QixNQUFNLEtBQUssR0FBRyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM5QixLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdCLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuWzEwMF0g55u45ZCM55qE5qCRXG5cbmh0dHBzOi8vbGVldGNvZGUtY24uY29tL3Byb2JsZW1zL3NhbWUtdHJlZS9kZXNjcmlwdGlvbi9cblxuVGFnczogYWxnb3JpdGhtcyBibG9vbWJlcmcgZGVwdGgtZmlyc3Qtc2VhcmNoIHRyZWVcblxuTGFuZ3M6IGMgY3BwIGNzaGFycCBnb2xhbmcgamF2YSBqYXZhc2NyaXB0IGtvdGxpbiBwaHAgcHl0aG9uIHB5dGhvbjMgcnVieSBydXN0IHNjYWxhIHN3aWZ0XG5cbiogYWxnb3JpdGhtc1xuKiBFYXN5ICg1MS42NCUpXG4qIFRvdGFsIEFjY2VwdGVkOiAxNi43S1xuKiBUb3RhbCBTdWJtaXNzaW9uczogMzIuM0tcbiogVGVzdGNhc2UgRXhhbXBsZTogJ1sxLDIsM11cXG5bMSwyLDNdJ1xuXG7nu5nlrprkuKTkuKrkuozlj4nmoJHvvIznvJblhpnkuIDkuKrlh73mlbDmnaXmo4DpqozlroPku6zmmK/lkKbnm7jlkIzjgIJcblxu5aaC5p6c5Lik5Liq5qCR5Zyo57uT5p6E5LiK55u45ZCM77yM5bm25LiU6IqC54K55YW35pyJ55u45ZCM55qE5YC877yM5YiZ6K6k5Li65a6D5Lus5piv55u45ZCM55qE44CCXG5cbuekuuS+iyAxOlxuXG7ovpPlhaU6IDEgMVxuLyBcXCAvIFxcXG4yIDMgMiAzXG5cblsxLDIsM10sIFsxLDIsM11cblxu6L6T5Ye6OiB0cnVlXG5cbuekuuS+iyAyOlxuXG7ovpPlhaU6IDEgMVxuLyBcXFxuMiAyXG5cblsxLDJdLCBbMSxudWxsLDJdXG5cbui+k+WHujogZmFsc2VcblxuXG7npLrkvosgMzpcblxu6L6T5YWlOiAxIDFcbi8gXFwgLyBcXFxuMiAxIDEgMlxuXG5bMSwyLDFdLCBbMSwxLDJdXG5cbui+k+WHujogZmFsc2VcbiovXG5cbi8qKlxuICogRGVmaW5pdGlvbiBmb3IgYSBiaW5hcnkgdHJlZSBub2RlLlxuICogZnVuY3Rpb24gVHJlZU5vZGUodmFsKSB7XG4gKiAgICAgdGhpcy52YWwgPSB2YWw7XG4gKiAgICAgdGhpcy5sZWZ0ID0gdGhpcy5yaWdodCA9IG51bGw7XG4gKiB9XG4gKi9cbi8qKlxuICogQGNvbnN0cnVjdG9yIFRyZWVOb2RlXG4gKiBAcHJvcGVydHkgeyp9IHZhbFxuICogQHByb3BlcnR5IHtUcmVlTm9kZSB8IG51bGx9IGxlZnRcbiAqIEBwcm9wZXJ0eSB7VHJlZU5vZGUgfCBudWxsfSByaWdodFxuICogKi9cbmNsYXNzIFRyZWVOb2RlPFQ+IHtcbiAgICB2YWw6IFQ7XG4gICAgbGVmdDogbnVsbCB8IFRyZWVOb2RlPFQ+ID0gbnVsbDtcbiAgICByaWdodDogbnVsbCB8IFRyZWVOb2RlPFQ+ID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHZhbDogVCkge1xuICAgICAgICB0aGlzLnZhbCA9IHZhbDtcbiAgICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtUcmVlTm9kZX0gcFxuICogQHBhcmFtIHtUcmVlTm9kZX0gcVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xudmFyIGlzU2FtZVRyZWUgPSBmdW5jdGlvbiAocDogVHJlZU5vZGU8bnVtYmVyPiB8IG51bGwsIHE6IFRyZWVOb2RlPG51bWJlcj4gfCBudWxsKTogYm9vbGVhbiB7XG4gICAgaWYgKHAgPT0gbnVsbCAmJiBxID09IG51bGwpIHJldHVybiB0cnVlO1xuICAgIGlmIChwID09IG51bGwgfHwgcSA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHAudmFsID09PSBxLnZhbCA/IGlzU2FtZVRyZWUocC5sZWZ0LCBxLmxlZnQpICYmIGlzU2FtZVRyZWUocC5yaWdodCwgcS5yaWdodCkgOiBmYWxzZTtcbn07XG5cbmNvbnN0IHRyZWUxID0gbmV3IFRyZWVOb2RlKDEpO1xudHJlZTEubGVmdCA9IG5ldyBUcmVlTm9kZSgyKTtcbnRyZWUxLnJpZ2h0ID0gbmV3IFRyZWVOb2RlKDMpO1xuXG5jb25zdCB0cmVlMiA9IG5ldyBUcmVlTm9kZSgxKTtcbnRyZWUyLmxlZnQgPSBuZXcgVHJlZU5vZGUoMSk7XG50cmVlMi5yaWdodCA9IG5ldyBUcmVlTm9kZSgzKTtcblxuY29uc29sZS5sb2coaXNTYW1lVHJlZSh0cmVlMSwgdHJlZTIpKTtcbmV4cG9ydCB7fTtcbiJdfQ==