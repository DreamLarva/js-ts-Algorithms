/*
剑指 Offer 09. 用两个栈实现队列
用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )



示例 1：

输入：
["CQueue","appendTail","deleteHead","deleteHead"]
[[],[3],[],[]]
输出：[null,null,3,-1]
示例 2：

输入：
["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
[[],[],[5],[2],[],[]]
输出：[null,-1,null,null,5,2]
提示：

1 <= values <= 10000
最多会对 appendTail、deleteHead 进行 10000 次调用
* */

enum state {
  appendTail,
  deleteHead,
}
class CQueue {
  stack1: number[] = [];
  stack2: number[] = [];
  state: state = state.appendTail;
  constructor() {}

  appendTail(value: number): void {
    if (this.state !== state.appendTail) {
      for (let i = 0, len = this.stack2.length; i < len; i++) {
        this.stack1.push(this.stack2.pop()!);
      }
    }

    this.stack1.push(value);
  }

  deleteHead(): number {
    if (this.state !== state.deleteHead) {
      for (let i = 0, len = this.stack1.length; i < len; i++) {
        this.stack2.push(this.stack1.pop()!);
      }
    }

    return this.stack2.pop()! ?? -1;
  }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
import assert from "assert";
import { stat } from "fs";
{
  // ["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
  // [[],[],[5],[2],[],[]]
  // [null,-1,null,null,5,2]
  const q = new CQueue();
  assert.strictEqual(q.deleteHead(), -1);
  q.appendTail(5);
  q.appendTail(2);
  assert.strictEqual(q.deleteHead(), 5);
  assert.strictEqual(q.deleteHead(), 2);
}
