"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 根据题意
 * 只能用 数组的 push shift方法
 * 可以查看length 属性
 * */
/**
 * Initialize your data structure here.
 */
class MyStack {
    constructor() {
        this.list = [];
    }
    /**
     * Push element x onto stack.
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.list.push(x);
    }
    ;
    /**
     * Removes the element on top of the stack and returns that element.
     * @return {number}
     */
    pop() {
        const tempList = [];
        while (this.list.length !== 1) {
            tempList.push(this.list.shift());
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
        const tempList = [];
        while (this.list.length !== 1) {
            tempList.push(this.list.shift());
        }
        const popResult = this.list.shift();
        this.list = tempList;
        this.list.push(popResult);
        return popResult;
    }
    ;
    /**
     * Returns whether the stack is empty.
     * @return {boolean}
     */
    empty() {
        return this.list.length === 0;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjI1LueUqOmYn+WIl+WunueOsOagiC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjI1LueUqOmYn+WIl+WunueOsOagiC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7OztJQVlJOztBQUVKOzs7O0tBSUs7QUFDTDs7R0FFRztBQUNILE1BQU0sT0FBTztJQUFiO1FBQ0ksU0FBSSxHQUFhLEVBQUUsQ0FBQztJQWdEeEIsQ0FBQztJQTlDRzs7OztPQUlHO0lBQ0gsSUFBSSxDQUFDLENBQVM7UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBQUEsQ0FBQztJQUVGOzs7T0FHRztJQUNILEdBQUc7UUFDQyxNQUFNLFFBQVEsR0FBYSxFQUFFLENBQUM7UUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDM0IsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRyxDQUFDLENBQUM7U0FDckM7UUFDRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ3JCLE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxHQUFHO1FBQ0MsTUFBTSxRQUFRLEdBQWEsRUFBRSxDQUFDO1FBQzlCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzNCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUcsQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUcsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxQixPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBQUEsQ0FBQztJQUVGOzs7T0FHRztJQUNILEtBQUs7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBRUoiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxu5L2/55So6Zif5YiX5a6e546w5qCI55qE5LiL5YiX5pON5L2c77yaXG5cbnB1c2goeCkgLS0g5YWD57SgIHgg5YWl5qCIXG5wb3AoKSAtLSDnp7vpmaTmoIjpobblhYPntKBcbnRvcCgpIC0tIOiOt+WPluagiOmhtuWFg+e0oFxuZW1wdHkoKSAtLSDov5Tlm57moIjmmK/lkKbkuLrnqbpcbuazqOaEjzpcblxu5L2g5Y+q6IO95L2/55So6Zif5YiX55qE5Z+65pys5pON5L2cLS0g5Lmf5bCx5pivIHB1c2ggdG8gYmFjaywgcGVlay9wb3AgZnJvbSBmcm9udCwgc2l6ZSwg5ZKMIGlzIGVtcHR5IOi/meS6m+aTjeS9nOaYr+WQiOazleeahOOAglxu5L2g5omA5L2/55So55qE6K+t6KiA5Lmf6K645LiN5pSv5oyB6Zif5YiX44CCIOS9oOWPr+S7peS9v+eUqCBsaXN0IOaIluiAhSBkZXF1Ze+8iOWPjOerr+mYn+WIl++8ieadpeaooeaLn+S4gOS4qumYn+WIlyAsIOWPquimgeaYr+agh+WHhueahOmYn+WIl+aTjeS9nOWNs+WPr+OAglxu5L2g5Y+v5Lul5YGH6K6+5omA5pyJ5pON5L2c6YO95piv5pyJ5pWI55qE77yI5L6L5aaCLCDlr7nkuIDkuKrnqbrnmoTmoIjkuI3kvJrosIPnlKggcG9wIOaIluiAhSB0b3Ag5pON5L2c77yJ44CCXG4qICovXG5cbi8qKlxuICog5qC55o2u6aKY5oSPXG4gKiDlj6rog73nlKgg5pWw57uE55qEIHB1c2ggc2hpZnTmlrnms5VcbiAqIOWPr+S7peafpeeci2xlbmd0aCDlsZ7mgKdcbiAqICovXG4vKipcbiAqIEluaXRpYWxpemUgeW91ciBkYXRhIHN0cnVjdHVyZSBoZXJlLlxuICovXG5jbGFzcyBNeVN0YWNrIHtcbiAgICBsaXN0OiBudW1iZXJbXSA9IFtdO1xuXG4gICAgLyoqXG4gICAgICogUHVzaCBlbGVtZW50IHggb250byBzdGFjay5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gICAgcHVzaCh4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5saXN0LnB1c2goeCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIGVsZW1lbnQgb24gdG9wIG9mIHRoZSBzdGFjayBhbmQgcmV0dXJucyB0aGF0IGVsZW1lbnQuXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIHBvcCgpIHtcbiAgICAgICAgY29uc3QgdGVtcExpc3Q6IG51bWJlcltdID0gW107XG4gICAgICAgIHdoaWxlICh0aGlzLmxpc3QubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICB0ZW1wTGlzdC5wdXNoKHRoaXMubGlzdC5zaGlmdCgpISk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcG9wUmVzdWx0ID0gdGhpcy5saXN0LnNoaWZ0KCk7XG4gICAgICAgIHRoaXMubGlzdCA9IHRlbXBMaXN0O1xuICAgICAgICByZXR1cm4gcG9wUmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdG9wIGVsZW1lbnQuXG4gICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAqL1xuICAgIHRvcCgpIHtcbiAgICAgICAgY29uc3QgdGVtcExpc3Q6IG51bWJlcltdID0gW107XG4gICAgICAgIHdoaWxlICh0aGlzLmxpc3QubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICB0ZW1wTGlzdC5wdXNoKHRoaXMubGlzdC5zaGlmdCgpISk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcG9wUmVzdWx0ID0gdGhpcy5saXN0LnNoaWZ0KCkhO1xuICAgICAgICB0aGlzLmxpc3QgPSB0ZW1wTGlzdDtcbiAgICAgICAgdGhpcy5saXN0LnB1c2gocG9wUmVzdWx0KTtcbiAgICAgICAgcmV0dXJuIHBvcFJlc3VsdDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBzdGFjayBpcyBlbXB0eS5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIGVtcHR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0Lmxlbmd0aCA9PT0gMDtcbiAgICB9XG5cbn1cblxuLyoqXG4gKiBZb3VyIE15U3RhY2sgb2JqZWN0IHdpbGwgYmUgaW5zdGFudGlhdGVkIGFuZCBjYWxsZWQgYXMgc3VjaDpcbiAqIHZhciBvYmogPSBuZXcgTXlTdGFjaygpXG4gKiBvYmoucHVzaCh4KVxuICogdmFyIHBhcmFtXzIgPSBvYmoucG9wKClcbiAqIHZhciBwYXJhbV8zID0gb2JqLnRvcCgpXG4gKiB2YXIgcGFyYW1fNCA9IG9iai5lbXB0eSgpXG4gKi9cblxuZXhwb3J0IHt9XG4iXX0=