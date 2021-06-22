/*
您将获得一个双向链表，除了下一个和前一个指针之外，它还有一个子指针，可能指向单独的双向链表。
这些子列表可能有一个或多个自己的子项，依此类推，生成多级数据结构，如下面的示例所示。

扁平化列表，使所有结点出现在单级双链表中。您将获得列表第一级的头部。

示例:

输入:
 1,,,2,,,3,,,4,,,5,,,6,,NULL
         |
         7,,,8,,,9,,,10,,NULL
             |
             11,,12,,NULL

输出:
1,2,3,7,8,11,12,9,10,4,5,6,NULL

来源：力扣（LeetCode）
链接：https://leetcode,cn.com/problems/flatten,a,multilevel,doubly,linked,list
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */

class Node<T = any> {
  prev: null | Node = null;
  child: null | Node = null;
  next: null | Node = null;

  constructor(public val: T) {
    this.val = val;
  }
}

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head: Node | null) {
  let left_junction = head;
  while (left_junction != null) {
    if (left_junction.child) {
      const right_junction = left_junction.next;
      // 连接 左侧
      left_junction.next = left_junction.child;
      left_junction.child.prev = left_junction;

      // 找到 尾节点
      let child_tail = left_junction.child;
      while (child_tail.next != null) {
        child_tail = child_tail.next;
      }

      // 连接右侧
      if (right_junction) right_junction.prev = child_tail;
      child_tail.next = right_junction;
      left_junction.child = null;
    }

    // 继续遍历
    left_junction = left_junction.next;
  }
  return head;
};
/**
 * 虽然我的方法是递归但是 我的方法 每个节点的只访问一次 但是慢?
 * */
var flatten1 = function (head: Node | null) {
  if (head == null) return null;
  let left_junction: Node;
  step(head);
  return head;

  function step(head: Node) {
    let next: Node<any> | null = null;
    if (left_junction) {
      next = left_junction.next;
    }

    if (!left_junction) {
      left_junction = head;
    } else {
      left_junction.next = head;
      head.prev = left_junction;
    }

    let currentNode = head;
    let tail = currentNode;
    while (currentNode) {
      left_junction = currentNode;
      if (currentNode.child) {
        step(currentNode.child);
        currentNode.child = null;
      }
      tail = currentNode;
      currentNode = currentNode.next!;
      // left_junction = currentNode;
    }

    if (next != null) {
      next.prev = tail;
    }
    tail.next = next;
  }
};

import assert from "assert";
import { createDoubleLinkedList } from "../util/DoubleLinkedList";

{
  const line_1 = createDoubleLinkedList([1]);

  assert.deepStrictEqual(flatten(line_1)!.toString(), [1]);
}
{
  const line_1 = createDoubleLinkedList([1, 2, 3, 4, 5, 6]);
  const line_2 = createDoubleLinkedList([7, 8, 9, 10]);
  const line_3 = createDoubleLinkedList([11, 12]);

  line_1.next!.next!.child = line_2;
  line_2.next!.child = line_3;

  assert.deepStrictEqual(
    flatten(line_1)!.toString(),
    [1, 2, 3, 7, 8, 11, 12, 9, 10, 4, 5, 6]
  );
}
{
  const line_1 = createDoubleLinkedList([1]);
  const line_2 = createDoubleLinkedList([7, 8, 9, 10]);
  const line_3 = createDoubleLinkedList([11, 12]);

  line_1.child = line_2;
  line_2.next!.child = line_3;

  assert.deepStrictEqual(flatten(line_1)!.toString(), [1, 7, 8, 11, 12, 9, 10]);
}
{
  const line_1 = createDoubleLinkedList([1]);
  const line_2 = createDoubleLinkedList([2]);
  const line_3 = createDoubleLinkedList([3]);

  line_1.child = line_2;
  line_2.child = line_3;

  assert.deepStrictEqual(flatten(line_1)!.toString(), [1, 2, 3]);
}
{
  const line_1 = createDoubleLinkedList([1, 2, 5, 7]);
  const line_2 = createDoubleLinkedList([3, 4]);
  const line_3 = createDoubleLinkedList([6]);

  line_1.next!.child = line_2;
  line_1.next!.next!.child = line_3;

  assert.deepStrictEqual(flatten(line_1)!.toString(), [1, 2, 3, 4, 5, 6, 7]);
}

/**
 * 事实证明 在链表足够长额情况下 我的方法更快啊
 * */
const Benchmark = require("benchmark");
{
  const randomArray = (num: number) =>
    new Array(num).fill(1).map(() => Math.random());
  const suite = new Benchmark.Suite();
  const line_1 = createDoubleLinkedList(randomArray(10000));
  const line_2 = createDoubleLinkedList(randomArray(10000));
  const line_3 = createDoubleLinkedList(randomArray(10000));

  line_1.next!.child = line_2;
  line_1.next!.next!.child = line_3;

  suite
    .add("top", function () {
      flatten(line_1);
    })
    .add("mine", function () {
      flatten1(line_1);
    })

    // add listeners
    .on("cycle", function (event: any) {
      console.log(String(event.target));
    })
    .on("complete", function (this: any) {
      console.log("Fastest is " + this.filter("fastest").map("name"));
    })
    // run async
    .run({ async: false });
}
