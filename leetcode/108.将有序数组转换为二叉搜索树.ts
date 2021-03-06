/*
将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

示例:

给定有序数组: [-10,-3,0,5,9],

一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5
*/

class TreeNode<T> {
  val: T | void;
  left: null | TreeNode<T> = null;
  right: null | TreeNode<T> = null;

  constructor(val?: T) {
    this.val = val;
  }
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums: number[]) {
  return recursionSortedArrayToBS(nums);
};

function recursionSortedArrayToBS(nums: number[], parentNode = new TreeNode()) {
  if (nums.length === 0) {
    return null;
  }
  // [] [1] []
  if (nums.length === 1) {
    parentNode.val = nums[0];
  }
  // [] [1] [1]
  else if (nums.length === 2) {
    parentNode.val = nums[0];
    parentNode.right = new TreeNode(nums[1]);
  } else {
    const medianIndex = Math.floor(nums.length / 2);
    // 设置中间的节点
    parentNode.val = nums[medianIndex];
    // 分配左子树
    parentNode.left = new TreeNode();
    recursionSortedArrayToBS(nums.slice(0, medianIndex), parentNode.left);
    // 分配右子树
    parentNode.right = new TreeNode();
    recursionSortedArrayToBS(nums.slice(medianIndex + 1), parentNode.right);
  }

  return parentNode;
}

export {};
