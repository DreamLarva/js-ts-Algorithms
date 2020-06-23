/*
设计你的循环队列实现。 循环队列是一种线性数据结构，其操作表现基于 FIFO（先进先出）原则并且队尾被连接在队首之后以形成一个循环。它也被称为“环形缓冲器”。

循环队列的一个好处是我们可以利用这个队列之前用过的空间。在一个普通队列里，一旦一个队列满了，我们就不能插入下一个元素，即使在队列前面仍有空间。但是使用循环队列，我们能使用这些空间去存储新的值。

你的实现应该支持如下操作：

MyCircularQueue(k): 构造器，设置队列长度为 k 。
Front: 从队首获取元素。如果队列为空，返回 -1 。
Rear: 获取队尾元素。如果队列为空，返回 -1 。
enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
isEmpty(): 检查循环队列是否为空。
isFull(): 检查循环队列是否已满。


示例：

MyCircularQueue circularQueue = new MycircularQueue(3); // 设置长度为 3

circularQueue.enQueue(1);  // 返回 true

circularQueue.enQueue(2);  // 返回 true

circularQueue.enQueue(3);  // 返回 true

circularQueue.enQueue(4);  // 返回 false，队列已满

circularQueue.Rear();  // 返回 3

circularQueue.isFull();  // 返回 true

circularQueue.deQueue();  // 返回 true

circularQueue.enQueue(4);  // 返回 true

circularQueue.Rear();  // 返回 4



提示：

所有的值都在 0 至 1000 的范围内；
操作数将在 1 至 1000 的范围内；
请不要使用内置的队列库。
* */

class MyCircularQueue {
  size: number;
  cache: (number | void)[] = [];

  /**
   * Initialize your data structure here. Set the size of the queue to be k.
   * MyCircularQueue(k): 构造器，设置队列长度为 k 。
   * @param {number} k
   */
  constructor(k: number) {
    this.size = k;
  }

  _tail_index = -1;

  // 指向为节点
  get tail_index() {
    return this._tail_index;
  }

  set tail_index(index: number) {
    if (index === -1) {
      this._tail_index = -1;
      return;
    }
    this._tail_index = this.getIndex(index);
  }

  _head_index = -1;

  // 指向首节点 前一个点
  get head_index() {
    return this._head_index;
  }

  set head_index(index: number) {
    if (index === -1) {
      this._head_index = -1;
      return;
    }
    this._head_index = this.getIndex(index);
  }

  getIndex(index: number) {
    if (index > this.size - 1) {
      index = index % this.size;
    }
    return index;
  }

  /**
   * Insert an element into the circular queue. Return true if the operation is successful.
   * enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
   * @param {number} value
   * @return {boolean}
   */
  enQueue(value: number) {
    if (this.isFull()) return false;
    this.tail_index++;
    this.cache[this.tail_index] = value;
    if (this.head_index === -1) {
      this.head_index = 0;
    }
    return true;
  }

  /**
   * Delete an element from the circular queue. Return true if the operation is successful.
   * deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
   * @return {boolean}
   */
  deQueue() {
    if (this.isEmpty()) return false;
    if (this.head_index == this.tail_index) {
      this.head_index = -1;
      this.tail_index = -1;
      this.cache = [];
    } else {
      this.cache[this.head_index++] = void 0;
    }
    return true;
  }

  /**
   * Get the front item from the queue.
   * Front: 从队首获取元素。如果队列为空，返回 -1 。
   * @return {number}
   */
  Front() {
    if (this.isEmpty()) return -1;
    return this.cache[this.head_index];
  }

  /**
   * Get the last item from the queue.
   * Rear: 获取队尾元素。如果队列为空，返回 -1 。
   * @return {number}
   */
  Rear() {
    if (this.isEmpty()) return -1;
    return this.cache[this.tail_index];
  }

  /**
   * Checks whether the circular queue is empty or not.
   * isEmpty(): 检查循环队列是否为空。
   * @return {boolean}
   */
  isEmpty() {
    return this.head_index === -1 && this.tail_index === -1;
  }

  /**
   * Checks whether the circular queue is full or not.
   * isFull(): 检查循环队列是否已满。
   * @return {boolean}
   */
  isFull() {
    return this.getIndex(this.tail_index + 1) === this.head_index;
  }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

import assert from "assert";

const circularQueue = new MyCircularQueue(3); // 设置长度为 3

assert.strictEqual(circularQueue.enQueue(1), true);

assert.strictEqual(circularQueue.enQueue(2), true);

assert.strictEqual(circularQueue.enQueue(3), true);

assert.strictEqual(circularQueue.enQueue(4), false); // 队列已满

assert.strictEqual(circularQueue.Rear(), 3);

assert.strictEqual(circularQueue.isFull(), true);

assert.strictEqual(circularQueue.deQueue(), true);

assert.strictEqual(circularQueue.enQueue(4), true);

assert.strictEqual(circularQueue.Rear(), 4);
