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

class Node {
  val: number;
  next: Node | null;
  random: Node | null;

  constructor(val?: number, next?: Node, random?: Node) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.random = random === undefined ? null : random;
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

function copyRandomList(head: Node | null): Node | null {
  /**
   * 按照 原节点 -> 新节点 -> 原节点 -> ... 的次序新建节点
   * 再次遍历的时候 每个random 直接找到相邻的节点就好了
   * 最后 分开两个链表即可
   *
   * 时间复杂度：O(N)
   * 空间复杂度：O(1)
   * 妙  啊
   * */

  let cur = head;
  // 第一次循环 在每个节点后 拷贝一个一样的还没有包含 random 指向的节点
  while (cur != null) {
    const next = cur.next ?? void 0;
    cur.next = new Node(cur.val, next);
    cur = cur.next.next;
  }
  // 第二次循环 链接 random 指向
  cur = head;
  let i = 1;
  let nextRandomNode: Node | null = null;
  while (cur != null) {
    if (i % 2 === 0) {
      // 是新节点
      cur.random = nextRandomNode;
    } else {
      // 是老节点
      // 存下 random 指向
      nextRandomNode = cur.random?.next ?? null;
    }
    i++;
    cur = cur.next;
  }

  const newHead = head?.next ?? null;
  cur = head;
  // 第三次循环 删除多余的 链接
  // 并且还要还原 原
  while (cur != null) {
    const next = cur.next;
    cur.next = cur?.next?.next ?? null;
    cur = next;
  }

  return newHead;
}

export {};
