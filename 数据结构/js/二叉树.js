/**
 * 树是一种非线性的数据结构，以分层的方式存数据。
 * 树被用来存储具有层级关系的数据，比如文件系统中的文件；
 * 树还被用来存储有序列表。
 * 选择树而不是那些基本的数据结构，是因为在二叉树上进行查找非常快（而在链表上查找则不是这样），为二叉树添加或删除元素也非常快（而对数组执行添加或删除操作则不是这样）。
 * */

// 节点类
function Node(data, left, right) {
    this.left = left;
    this.right = right;
    this.data = data;
    // 有了计数就不用担心插入两个一样的值的问题(不会增加叶节点,而是增加计数)
    this.count = 1;
}

Node.prototype.show = function () {
    return this.data
};

function BST() {
    this.root = null;
    this.size = 0;
}

BST.prototype.insert = function (data) {
    var new_node = new Node(data, null, null);
    if (this.root === null) {
        this.root = new_node;
        ++this.size
    } else {
        var current = this.root;
        var parent;
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
};
BST.prototype.insertArr = function (arr) {
    arr.forEach(v => this.insert(v))
};

// 中序遍历(左字节点>当前节点>右子节点)
// 效果就是从小到大输出
BST.prototype.inOrder = function (node) {
    if (!(node === null)) {
        this.inOrder(node.left);
        console.log(node.data);
        this.inOrder(node.right)
    }
};
BST.prototype.inOrderAll = function (node) {
    var result = [];

    (function recursion(node) {
        if (!(node === null)) {
            recursion(node.left);
            result.push(node.data);
            recursion(node.right)
        }
    }(node));
    console.log("中序遍历");
    console.log(result)
};
// 先序遍历
BST.prototype.preOrderAll = function (node) {
    var result = [];

    (function recursion(node) {
        if (!(node === null)) {
            result.push(node.data);
            recursion(node.left);
            recursion(node.right)
        }
    }(node));
    console.log("先序遍历");
    console.log(result)
};
// 后序遍历
BST.prototype.postOrderAll = function (node) {
    var result = [];

    (function recursion(node) {
        if (!(node === null)) {
            recursion(node.left);
            recursion(node.right);
            result.push(node.data);
        }
    }(node));
    console.log("后序遍历");
    console.log(result)
};
// 查找最小值
BST.prototype.getMin = function (node) {
    var current = node || this.root;
    while (current.left !== null) {
        current = current.left
    }
    return current
};
// 查找最大值
BST.prototype.getMax = function (node) {
    var current = node || this.root;
    while (current.right !== null) {
        current = current.right
    }
    return current
};
// 查找给定值
BST.prototype.find = function (data) {
    var current = this.root;
    while (current !== null) {
        if (current.data === data) {
            return current
        } else if (data < current.data) {
            current = current.left
        } else if (data > current.data) {
            current = current.right
        }
    }
    return null
};
// 删除节点
/**
 * 1. 如果被删除的节点没有叶节点 直接删除即可
 * 2. 如果被删除的节点有一个叶节点 那么将被删除的叶节点的唯一子节点 放到 被删除节点的位置
 * 3. 如果被删除节点有两个子叶节点,有两种办法:
 *      1.调整左子树的最大节点到当前节点
 *      2.调账右子树的最小节点到当前节点
 *      这里选择第二种
 * */
BST.prototype.remove = function (data) {

};
/**
 * @param node 查找node的子树
 * @param data 删除索要删除的子树的节点 所的data值
 * */

BST.prototype.removeNode = function (node, data) {
    if (node === null) {
        return null
    }
    if (data === node.data) {
        // 没有子节点的节点
        if (node.left === null && node.right === null) {
            return null
        }
        // 没有左子节点的节点
        if (node.left === null) {
            return node.right
        }
        // 没有右子节点的节点
        if (node.right === null) {
            return node.left
        }
        // 同时拥有左子节点和右子节点
        // 找到右子树的最小节点
        var tempNode = this.getMin(node.right);
        // 所要删除的节点的值改为 右子树的最小节点的值
        node.data = tempNode.data;

        node.right = this.removeNode(node.right, tempNode.data);
        return node
    } else if (data < node.data) {
        node.left = this.removeNode(node.left, data);
        return node
    } else {
        node.right = this.removeNode(node.right, data);
        return node
    }
};
// 更新节点 有则增肌count 没有就插入节点
BST.prototype.update = function (data) {
    var node = this.find(data);
    if (node) {
        ++node.count;
    } else {
        this.insert(data)
    }
};
BST.prototype.updateArr = function (arr) {
    arr.forEach(v => this.update(v))
};


var bst = new BST();
var randomArr = [5, 2, 5, 25, 545, 221, 6, 3, 15, 151, 24, 12, 3452, 33];
//    bst.insertArr(randomArr);
bst.updateArr(randomArr);

bst.inOrderAll(bst.root);
bst.preOrderAll(bst.root);
bst.postOrderAll(bst.root);

console.log("Min", bst.getMin().data);
console.log("Max", bst.getMax().data);

console.log("查找给定节点", bst.find(5));

bst.removeNode(bst.root, 1);
bst.inOrderAll(bst.root);

