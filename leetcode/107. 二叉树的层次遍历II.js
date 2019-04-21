/*
给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

例如：
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其自底向上的层次遍历为：

[
  [15,7],
  [9,20],
  [3]
]
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    if(root === null)return [];
    let current_layer_nodes = [root];
    let next_layer_nodes = [];
    const result = [];

    while (current_layer_nodes.length) {
        const cache = [];
        current_layer_nodes.forEach(node => {
            if(node !== null){
                const {left, right, val} = node;
                cache.push(val);
                if (left) next_layer_nodes.push(left);
                if (right) next_layer_nodes.push(right);
            }
        });

        result.unshift(cache);
        current_layer_nodes = [...next_layer_nodes];
        next_layer_nodes.length = 0
    }

    return result
};
