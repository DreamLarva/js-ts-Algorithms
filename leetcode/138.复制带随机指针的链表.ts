/*
给定一个链表，每个节点包含一个额外增加的随机指针，该指针可以指向链表中的任何节点或空节点。

要求返回这个链表的深拷贝。 

 

示例：



输入：
{"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}

解释：
节点 1 的值是 1，它的下一个指针和随机指针都指向节点 2 。
节点 2 的值是 2，它的下一个指针指向 null，随机指针指向它自己。
 

提示：

你必须返回给定头的拷贝作为对克隆列表的引用。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/copy-list-with-random-pointer
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
class Node<T = any> {
    next: null | Node = null;
    random: null | Node = null;

    constructor(public val: T) {

    }

}

/**
 * @param {Node} head
 * @return {Node}
 */
// var copyRandomList = function (head: Node) {
//     /**
//      * 同 133.克隆图 一样 回溯法
//      * 先深度优先 初始化所有的节点
//      * 再 添加next 和 random 的关系
//      * 时间复杂度：O(N)
//      * 空间复杂度：O(N)
//      * */
//     if (head == null) return null;
//     const map = new Map();
//     return step(head);
//
//     function step(node: Node) {
//         if (map.has(node)) return map.get(node);
//         const new_node = new Node(node.val);
//         map.set(node, new_node);
//         if (node.next != null) {
//             new_node.next = step(node.next);
//         }
//
//         if (node.random != null) {
//             new_node.random = step(node.random);
//         }
//         return new_node;
//     }
// };


var copyRandomList = function (head: Node) {
    /**
     * 按照 原节点 -> 新节点 -> 原节点 -> ... 的次序新建节点
     * 再次遍历的时候 每个random 直接找到相邻的节点就好了
     * 最后 分开两个链表即可
     *
     * 时间复杂度：O(N)
     * 空间复杂度：O(1)
     * 妙  啊
     * */

    if (head == null) {
        return null;
    }

    // 第一次迭代 添加 在原节点 旁边添加新节点
    let currentNode: null | Node = head;
    while (currentNode != null) {
        const newNode = new Node(currentNode.val);
        const next: null | Node = currentNode.next;

        currentNode.next = newNode;
        newNode.next = next;

        currentNode = next;
    }

    // 第二次迭代 处理 random 的指向
    // 一次跳 2 格
    currentNode = head;
    while (currentNode != null) {
        const old_random = currentNode.random;
        const newNode: null | Node = currentNode.next!;
        if (old_random && old_random.next) newNode.random = old_random.next;
        currentNode = newNode.next;
    }

    // 第三次遍历
    // 分开两个链表
    currentNode = head;
    const new_list_head = currentNode.next;
    while (currentNode != null) {
        const next: null | Node = currentNode.next;
        if (currentNode.next) {
            currentNode.next = currentNode.next.next;
        }
        currentNode = next;
    }

    return new_list_head;
};


export {};
