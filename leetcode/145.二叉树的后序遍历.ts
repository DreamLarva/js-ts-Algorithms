/*
给定一个二叉树，返回它的 后序 遍历。

示例:

输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [3,2,1]
进阶: 递归算法很简单，你可以通过迭代算法完成吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-postorder-traversal
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
import { TreeNode, createBinaryTree } from "../util/BinaryTree";

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root: TreeNode<number>) {
  /**
   * 正常使用递归
   * */
  const result: number[] = [];
  step(root);

  return result;

  function step(node: TreeNode<number> | null) {
    if (node === null) return;
    step(node.left);
    step(node.right);
    result.push(node.val);
  }
};

function postorderTraversal_1(root: TreeNode<number>) {
  /**
   * 使用迭代
   * 使用迭代版本的深度优先 妙啊
   * 后续遍历的 次序是 左子树 右子树 根节点
   * 现在深度优先的 次序是 根节点 右子树 左子树
   * 所以逆序输出 为需要的结果
   * */
  const result: number[] = [];
  const stack: TreeNode<number>[] = [];
  stack.push(root);
  while (stack.length) {
    const node = stack.pop()!;
    result.unshift(node.val); // 逆序 输出值 所以都从头部推入
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right); // 由于使用的是栈 所以会优先查询 右子树的内容
  }

  return result;
}

import assert from "assert";

assert.deepStrictEqual(postorderTraversal(createBinaryTree([1, null, 2, 3])), [
  3,
  2,
  1,
]);
assert.deepStrictEqual(
  postorderTraversal_1(createBinaryTree([1, null, 2, 3])),
  [3, 2, 1]
);
