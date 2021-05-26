/*
993. 二叉树的堂兄弟节点
在二叉树中，根节点位于深度 0 处，每个深度为 k 的节点的子节点位于深度 k+1 处。

如果二叉树的两个节点深度相同，但 父节点不同 ，则它们是一对堂兄弟节点。

我们给出了具有唯一值的二叉树的根节点 root ，以及树中两个不同节点的值 x 和 y 。

只有与值 x 和 y 对应的节点是堂兄弟节点时，才返回 true 。否则，返回 false。



示例 1：


输入：root = [1,2,3,4], x = 4, y = 3
输出：false
示例 2：


输入：root = [1,2,3,null,4,null,5], x = 5, y = 4
输出：true
示例 3：



输入：root = [1,2,3,null,4], x = 2, y = 3
输出：false
* */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isCousins(root: TreeNode | null, x: number, y: number): boolean {
  // 层次遍历
  let fatherLevel = [root];

  while (fatherLevel.length !== 0) {
    const nextLevel: TreeNode[] = [];

    let levelGotOne = false; // 同一深度用标识
    // 遍历父节点
    for (let i = 0; i < fatherLevel.length; i++) {
      const fatherNode = fatherLevel[i];
      let nodeGotOne = false; // 兄弟标识
      if (fatherNode?.left) {
        if ([x, y].includes(fatherNode.left.val)) {
          nodeGotOne = true;

          if (levelGotOne) return true;
          else levelGotOne = true;
        } else {
          fatherNode?.left && nextLevel.push(fatherNode?.left);
        }
      }

      if (fatherNode?.right) {
        if ([x, y].includes(fatherNode.right.val)) {
          if (nodeGotOne) return false; // 不能是兄弟

          if (levelGotOne) return true;
          else levelGotOne = true;
        } else {
          fatherNode?.right && nextLevel.push(fatherNode?.right);
        }
      }
    }

    if (levelGotOne) return false; // 一层中只有 其一
    fatherLevel = nextLevel;
  }

  return false;
}
