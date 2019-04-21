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
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (p == null && q == null) return true;
    if (p == null || q == null) return false;
    return p.val === q.val ? isSameTree(p.left, q.left) && isSameTree(p.right, q.right) : false;
};

const tree1 = new  TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);

const tree2 = new  TreeNode(1);
tree2.left = new TreeNode(1);
tree2.right = new TreeNode(3);

console.log(isSameTree(tree1,tree2));
