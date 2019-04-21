/*
给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明: 叶子节点是指没有子节点的节点。

示例:

给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回它的最小深度  2.
* */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (root === null) return 0;
    const {left,right} = root;
    if(!left && !right){
        return 1
    }else if(left && !right){
        return minDepth(root.left) + 1
    }else if(!left && right){
        return minDepth(root.right) + 1
    }else{
        return Math.min(
             minDepth(root.left) ,
             minDepth(root.right),
        ) + 1
    }
};
