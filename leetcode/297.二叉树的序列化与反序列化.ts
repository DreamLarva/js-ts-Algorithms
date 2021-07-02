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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  if (root == null) return "null";
  // 层次遍历
  const result: (number | "null")[] = [];
  const stack: (TreeNode | null)[] = [root];

  while (stack.length > 0) {
    const node = stack.shift();
    result.push(node?.val ?? "null");

    if (node instanceof TreeNode) {
      stack.push(node?.left ?? null);
      stack.push(node?.right ?? null);
    }
  }

  return result.join(",");
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  if (data === "null") return null;
  const dataList = data.split(",");
  const root = new TreeNode(Number(dataList.shift()));
  const nodeList = [root];
  while (nodeList.length > 0) {
    const left = dataList.shift();
    const right = dataList.shift();
    const node = nodeList.shift();
    if (left !== "null") {
      node!.left = new TreeNode(Number(left));
      nodeList.push(node!.left);
    }
    if (right !== "null") {
      node!.right = new TreeNode(Number(right));
      nodeList.push(node!.right);
    }
  }

  return root;
}

var serialize2 = function (root: TreeNode | null) {
  if (root == null) {
    return "X";
  }
  // 先序遍历
  return root.val + "," + serialize(root.left) + "," + serialize(root.right);
};
var deserialize2 = function (data: string) {
  if (data == "X") {
    return null;
  }
  let arr = data.split(",");
  let i = 0;
  /**
   * 递归恢复先序遍历
   * */
  function d() {
    if (arr[i] == "X") {
      i++;
      return null;
    }
    let node = new TreeNode(Number(arr[i++]));
    node.left = d();
    node.right = d();
    return node;
  }

  return d();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

import assert from "assert";
const t1_1 = new TreeNode(1);
const t2_1 = new TreeNode(2);
const t2_2 = new TreeNode(3);
const t3_3 = new TreeNode(4);
const t3_4 = new TreeNode(5);
t1_1.left = t2_1;
t1_1.right = t2_2;
t2_2.left = t3_3;
t2_2.right = t3_4;
assert.strictEqual(serialize(t1_1), "1,2,3,null,null,4,5,null,null,null,null");
assert.deepStrictEqual(
  deserialize("1,2,3,null,null,4,5,null,null,null,null"),
  t1_1
);

assert.deepStrictEqual(deserialize(serialize(t1_1)), t1_1);
