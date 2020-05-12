/*
给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [9,20],
  [15,7]
]
* */
import { TreeNode, createBinaryTree } from "../util/BinaryTree";

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function <T>(root: TreeNode<T> | null) {
  if (root === null) return [];
  const list_cache = [root];
  let list_output: TreeNode<T>[] = [];
  const result: T[][] = [];

  while (list_cache.length) {
    if (list_output.length === 0) {
      list_output = [...list_cache];
      list_cache.length = 0;
    }
    const temp_arr: T[] = [];
    while (list_output.length) {
      const node = list_output.shift()!;
      temp_arr.push(node.val);
      node.left && list_cache.push(node.left!);
      node.right && list_cache.push(node.right!);
    }
    result.push(temp_arr);
  }

  return result;
};

import assert from "assert";

assert.deepStrictEqual(levelOrder(null), []);
assert.deepStrictEqual(levelOrder(createBinaryTree([1, 2, 3, 4, 5, 6])), [
  [1],
  [2, 3],
  [4, 5, 6],
]);
assert.deepStrictEqual(
  levelOrder(createBinaryTree([3, 9, 20, null, null, 15, 7])),
  [[3], [9, 20], [15, 7]]
);
