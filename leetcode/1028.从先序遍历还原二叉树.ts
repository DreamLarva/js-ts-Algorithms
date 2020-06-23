/*
1028. 从先序遍历还原二叉树
我们从二叉树的根节点 root 开始进行深度优先搜索。

在遍历中的每个节点处，我们输出 D 条短划线（其中 D 是该节点的深度），然后输出该节点的值。（如果节点的深度为 D，则其直接子节点的深度为 D + 1。根节点的深度为 0）。

如果节点只有一个子节点，那么保证该子节点为左子节点。

给出遍历输出 S，还原树并返回其根节点 root。



示例 1：



输入："1-2--3--4-5--6--7"
输出：[1,2,5,3,4,6,7]
示例 2：



输入："1-2--3---4-5--6---7"
输出：[1,2,5,3,null,6,null,4,null,7]
示例 3：



输入："1-401--349---90--88"
输出：[1,401,null,349,88,90]


提示：

原始树中的节点数介于 1 和 1000 之间。
每个节点的值介于 1 和 10 ^ 9 之间。
* */

import { TreeNode } from "../util/BinaryTree";

// class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }

/**
 * 老夫就是要递归
 * */
function recoverFromPreorder(S: string): TreeNode | null {
  const rootNode = new TreeNode(parseInt(S));
  const [left, right] = getLeftRight(S, 1);
  step(rootNode, left, right, 1);

  return rootNode;
  function step(
    node: TreeNode,
    left: string | void,
    right: string | void,
    level = 1
  ) {
    if (left == null) {
      node.left = null;
    } else {
      const leftNodeValue = getVal(left)!;
      const [subLeft, subRight] = getLeftRight(left, level + 1);
      const leftNode = new TreeNode(Number(leftNodeValue));
      node.left = leftNode;
      step(leftNode, subLeft, subRight, level + 1);
    }
    if (right == null) {
      node.right = null;
    } else {
      const rightNodeValue = getVal(right)!;
      const [subLeft, subRight] = getLeftRight(right, level + 1);
      const rightNode = new TreeNode(Number(rightNodeValue));
      node.right = rightNode;
      step(rightNode, subLeft, subRight, level + 1);
    }
  }
}

/**
 * 获取当前层级的值
 * */
function getVal(str: string) {
  const data = str.match(/^-*(\d+)/);
  return data?.[1];
}

/**
 * 获取目标层级的 左子树 和 右子树
 * */
function getLeftRight(str: string, level: number) {
  const reg = new RegExp(`(-{${level}}\\d+)(-{${level + 1},}\\d+)*`, "g");
  return str.match(reg) ?? [];
}

import assert from "assert";
assert.deepStrictEqual(
  recoverFromPreorder("1-2--3--4-5--6--7")?.levelTraversal(),
  [1, 2, 5, 3, 4, 6, 7]
);

assert.deepStrictEqual(
  recoverFromPreorder("1-2--3---4-5--6---7")?.levelTraversal(),
  [1, 2, 5, 3, null, 6, null, 4, null, 7].filter((v) => v != null)
);
assert.deepStrictEqual(
  recoverFromPreorder("1-401--349---90--88")?.levelTraversal(),
  [1, 401, null, 349, 88, 90].filter((v) => v != null)
);
