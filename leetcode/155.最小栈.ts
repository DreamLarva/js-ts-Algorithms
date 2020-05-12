/*
设计一个支持 push，pop，top 操作，并能在常数时间内检索到最小元素的栈。

push(x) -- 将元素 x 推入栈中。
pop() -- 删除栈顶的元素。
top() -- 获取栈顶元素。
getMin() -- 检索栈中的最小元素。
示例:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
*/
import _ from "lodash";
/**
 * initialize your data structure here.
 * 再建立一个最小值栈用户存储当前 最小值
 * 每次入栈 就比较最小值栈顶的值 如果 小于最小值则推入当前值
 * 每次出栈 最小值栈也出栈
 */
class MinStack {
  data: number[] = [];
  minData: number[] = [Infinity];
  /**
   * @param {number} x
   * @return {void}
   */
  push(x: number) {
    this.data.push(x);
    const min = Math.min(x, _.last(this.minData)!);
    this.minData.push(min);
  }
  /**
   * @return {void}
   */
  pop() {
    this.data.pop();
    this.minData.pop();
  }
  /**
   * @return {number}
   */
  top() {
    return this.data[this.data.length - 1];
  }
  /**
   * @return {number}
   */
  getMin() {
    return _.last(this.minData);
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

export {};
