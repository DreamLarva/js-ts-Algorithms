/**
 * 树是一种非线性的数据结构，以分层的方式存数据。
 * 树被用来存储具有层级关系的数据，比如文件系统中的文件；
 * 树还被用来存储有序列表。
 * 选择树而不是那些基本的数据结构，是因为在二叉树上进行查找非常快（而在链表上查找则不是这样），为二叉树添加或删除元素也非常快（而对数组执行添加或删除操作则不是这样）。
 *
 * 此处非搜索二叉树
 * */

// 节点类
class Node<T = any> {
  data: T;
  left: null | Node<T>;
  right: null | Node<T>;
  // 有了计数就不用担心插入两个一样的值的问题(不会增加叶节点,而是增加计数)
  count = 1;

  constructor(data: T, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  show() {
    return this.data;
  }
}

class BST<T = any> {
  root: null | Node<T> = null;
  size = 0;

  insert(data: T) {
    const new_node = new Node(data, null, null);
    if (this.root === null) {
      this.root = new_node;
      ++this.size;
    } else {
      let current: null | Node<T> = this.root;
      let parent;
      ++this.size;
      while (true) {
        parent = current;
        if (data < current.data) {
          current = current.left;
          if (current === null) {
            parent.left = new_node;
            break;
          }
        } else {
          current = current.right;
          if (current === null) {
            parent.right = new_node;
            break;
          }
        }
      }
    }
  }

  insertArr(arr: T[]) {
    arr.forEach((v) => this.insert(v));
  }

  // 中序遍历(左字节点>当前节点>右子节点)
  // 效果就是从小到大输出
  inOrder(node: Node<T> | null) {
    if (!(node === null)) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }

  inOrderAll(node: Node<T> | null) {
    const result = [];

    (function recursion(node) {
      if (!(node === null)) {
        recursion(node.left);
        result.push(node.data);
        recursion(node.right);
      }
    })(node);
    console.log("中序遍历");
    console.log(result);
  }

  // 先序遍历
  preOrderAll(node: Node<T> | null) {
    const result = [];

    (function recursion(node) {
      if (!(node === null)) {
        result.push(node.data);
        recursion(node.left);
        recursion(node.right);
      }
    })(node);
    console.log("先序遍历");
    console.log(result);
  }

  // 后序遍历
  postOrderAll = function (node: Node<T> | null) {
    const result = [];

    (function recursion(node) {
      if (!(node === null)) {
        recursion(node.left);
        recursion(node.right);
        result.push(node.data);
      }
    })(node);
    console.log("后序遍历");
    console.log(result);
  };

  // 查找最小值
  getMin(node = this.root) {
    // ts 这里判断 node 类型可以直接为 null 需要额外一次类型断言
    if (node === null) return null;
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  // 查找最大值
  getMax(node = this.root) {
    // ts 这里判断 node 类型可以直接为 null 需要额外一次类型断言
    if (node === null) return null;
    while (node.right !== null) {
      node = node.right;
    }
    return node;
  }

  // 查找给定值
  find(data: T) {
    let current = this.root;
    while (current !== null) {
      if (current.data === data) {
        return current;
      } else if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      }
    }
    return null;
  }

  /**
   * 删除节点
   * 1. 如果被删除的节点没有叶节点 直接删除即可
   * 2. 如果被删除的节点有一个叶节点 那么将被删除的叶节点的唯一子节点 放到 被删除节点的位置
   * 3. 如果被删除节点有两个子叶节点,有两种办法:
   *      1.调整左子树的最大节点到当前节点
   *      2.调账右子树的最小节点到当前节点
   *      这里选择第二种
   * */
  removeNode(node: Node<T> | null, data: T) {
    if (node === null) {
      return null;
    }
    if (data === node.data) {
      // 没有子节点的节点
      if (node.left === null && node.right === null) {
        return null;
      }
      // 没有左子节点的节点
      if (node.left === null) {
        return node.right;
      }
      // 没有右子节点的节点
      if (node.right === null) {
        return node.left;
      }
      // 同时拥有左子节点和右子节点
      // 找到右子树的最小节点
      const tempNode = this.getMin(node.right)!;
      // 所要删除的节点的值改为 右子树的最小节点的值
      node.data = tempNode.data;
      node.right = this.removeNode(node.right, tempNode.data);
      return node;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else {
      node.right = this.removeNode(node.right, data);
      return node;
    }
  }

  // 更新节点 有则增加count 没有就插入节点
  update(data: T) {
    const node = this.find(data);
    if (node) {
      ++node.count;
    } else {
      this.insert(data);
    }
  }

  updateArr(arr: T[]) {
    arr.forEach((v) => this.update(v));
  }
}

const bst = new BST();
const randomArr = [5, 2, 5, 25, 545, 221, 6, 3, 15, 151, 24, 12, 3452, 33];
//    bst.insertArr(randomArr);
bst.updateArr(randomArr);

bst.inOrderAll(bst.root);
bst.preOrderAll(bst.root);
bst.postOrderAll(bst.root);

console.log("Min", bst.getMin()!.data);
console.log("Max", bst.getMax()!.data);

console.log("查找给定节点", bst.find(5));

bst.removeNode(bst.root, 1);
bst.inOrderAll(bst.root);

export {};
