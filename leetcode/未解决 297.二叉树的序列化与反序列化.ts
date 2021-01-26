/*
序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。

请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。

示例:

你可以将以下二叉树：

    1
   / \
  2   3
     / \
    4   5

序列化为 "[1,2,3,null,null,4,5]"
提示: 这与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode 序列化二叉树的格式。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。

说明: 不要使用类的成员 / 全局 / 静态变量来存储状态，你的序列化和反序列化算法应该是无状态的。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
import { TreeNode } from "../util/BinaryTree";
import _ from "lodash";

/**
 * Encodes a tree to a single string.
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root: TreeNode<number> | null) {
  return JSON.stringify(levelTraversal(root));
};

function levelTraversal<T>(root: TreeNode<T> | null) {
  if (root === null) return null;
  const result: (T | null)[] = [];
  const stack: (TreeNode<T> | null)[] = [root];
  while (stack.length !== 0) {
    const node = stack.shift()!;
    if (node === null) {
      result.push(node);
      continue;
    }
    result.push(node.val);
    if (node.left) stack.push(node.left);
    else stack.push(null);
    if (node.right) stack.push(node.right);
    else stack.push(null);
  }

  // 处理结果 把尾部多余的
  while (_.last(result) === null) {
    result.pop();
  }
  return result;
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data: string | null) {
  if (data === null) return null;
  return createBinaryTree(JSON.parse(data));
};

function createBinaryTree<T>(arr: (T | null)[]) {
  const root: TreeNode<T> = new TreeNode(arr.shift()!); // 根节点不为null
  let current_layer_node_arr = [root];
  const next_layer_node_arr: TreeNode<T>[] = [];
  // 将每个放到 二叉树上 如果还剩余节点那么这些节点 的子节点全部设为null
  while (arr.length || next_layer_node_arr.length) {
    current_layer_node_arr.forEach((node) => {
      if (node != null) {
        let shiftData = arr.shift();
        const left_data = shiftData == null ? null : shiftData; // 避免数据出现 0 的情况
        if (left_data != null) {
          const left_node = new TreeNode(left_data);
          node.left = left_node;
          next_layer_node_arr.push(left_node);
        } else {
          node.left = null;
        }
        shiftData = arr.shift();
        const right_data = shiftData == null ? null : shiftData;
        if (right_data != null) {
          const right_node = new TreeNode(right_data);
          node.right = right_node;
          next_layer_node_arr.push(right_node);
        } else {
          node.right = null;
        }
      }
    });
    current_layer_node_arr = [...next_layer_node_arr];
    next_layer_node_arr.length = 0;
  }
  return root;
}

import assert from "assert";

assert.deepStrictEqual(
  serialize(createBinaryTree([1, 2, 3, null, null, 4, 5])),
  "[1,2,3,null,null,4,5]"
);

assert.deepStrictEqual(
  serialize(createBinaryTree([1, 2, 3, 4, 5, 6, 7])),
  "[1,2,3,4,5,6,7]"
);

assert.deepStrictEqual(deserialize(null), null);
