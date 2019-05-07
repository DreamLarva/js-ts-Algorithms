/*
使用队列实现栈的下列操作：

push(x) -- 元素 x 入栈
pop() -- 移除栈顶元素
top() -- 获取栈顶元素
empty() -- 返回栈是否为空
注意:

你只能使用队列的基本操作-- 也就是 push to back, peek/pop from front, size, 和 is empty 这些操作是合法的。
你所使用的语言也许不支持队列。 你可以使用 list 或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。
你可以假设所有操作都是有效的（例如, 对一个空的栈不会调用 pop 或者 top 操作）。
* */

/**
 * 根据题意
 * 只能用 数组的 push shift方法
 * 可以查看length 属性
 * */
/**
 * Initialize your data structure here.
 */
class MyStack {
    list: number[] = [];

    /**
     * Push element x onto stack.
     * @param {number} x
     * @return {void}
     */
    push(x: number) {
        this.list.push(x);
    };

    /**
     * Removes the element on top of the stack and returns that element.
     * @return {number}
     */
    pop() {
        const tempList: number[] = [];
        while (this.list.length !== 1) {
            tempList.push(this.list.shift()!);
        }
        const popResult = this.list.shift();
        this.list = tempList;
        return popResult;
    }

    /**
     * Get the top element.
     * @return {number}
     */
    top() {
        const tempList: number[] = [];
        while (this.list.length !== 1) {
            tempList.push(this.list.shift()!);
        }
        const popResult = this.list.shift()!;
        this.list = tempList;
        this.list.push(popResult);
        return popResult;
    };

    /**
     * Returns whether the stack is empty.
     * @return {boolean}
     */
    empty() {
        return this.list.length === 0;
    }

}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

export {}
