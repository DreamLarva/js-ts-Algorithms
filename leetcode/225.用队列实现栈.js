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
    /**
     * Returns whether the stack is empty.
     * @return {boolean}
     */
    empty() {
        return this.list.length === 0;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjI1LueUqOmYn+WIl+WunueOsOagiC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjI1LueUqOmYn+WIl+WunueOsOagiC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7OztJQVlJOztBQUVKOzs7O0tBSUs7QUFDTDs7R0FFRztBQUNILE1BQU0sT0FBTztJQUFiO1FBQ0UsU0FBSSxHQUFhLEVBQUUsQ0FBQztJQStDdEIsQ0FBQztJQTdDQzs7OztPQUlHO0lBQ0gsSUFBSSxDQUFDLENBQVM7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsR0FBRztRQUNELE1BQU0sUUFBUSxHQUFhLEVBQUUsQ0FBQztRQUM5QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM3QixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFHLENBQUMsQ0FBQztTQUNuQztRQUNELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7UUFDckIsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVEOzs7T0FHRztJQUNILEdBQUc7UUFDRCxNQUFNLFFBQVEsR0FBYSxFQUFFLENBQUM7UUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDN0IsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRyxDQUFDLENBQUM7U0FDbkM7UUFDRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFCLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFRDs7O09BR0c7SUFDSCxLQUFLO1FBQ0gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxu5L2/55So6Zif5YiX5a6e546w5qCI55qE5LiL5YiX5pON5L2c77yaXHJcblxyXG5wdXNoKHgpIC0tIOWFg+e0oCB4IOWFpeagiFxyXG5wb3AoKSAtLSDnp7vpmaTmoIjpobblhYPntKBcclxudG9wKCkgLS0g6I635Y+W5qCI6aG25YWD57SgXHJcbmVtcHR5KCkgLS0g6L+U5Zue5qCI5piv5ZCm5Li656m6XHJcbuazqOaEjzpcclxuXHJcbuS9oOWPquiDveS9v+eUqOmYn+WIl+eahOWfuuacrOaTjeS9nC0tIOS5n+WwseaYryBwdXNoIHRvIGJhY2ssIHBlZWsvcG9wIGZyb20gZnJvbnQsIHNpemUsIOWSjCBpcyBlbXB0eSDov5nkupvmk43kvZzmmK/lkIjms5XnmoTjgIJcclxu5L2g5omA5L2/55So55qE6K+t6KiA5Lmf6K645LiN5pSv5oyB6Zif5YiX44CCIOS9oOWPr+S7peS9v+eUqCBsaXN0IOaIluiAhSBkZXF1Ze+8iOWPjOerr+mYn+WIl++8ieadpeaooeaLn+S4gOS4qumYn+WIlyAsIOWPquimgeaYr+agh+WHhueahOmYn+WIl+aTjeS9nOWNs+WPr+OAglxyXG7kvaDlj6/ku6XlgYforr7miYDmnInmk43kvZzpg73mmK/mnInmlYjnmoTvvIjkvovlpoIsIOWvueS4gOS4quepuueahOagiOS4jeS8muiwg+eUqCBwb3Ag5oiW6ICFIHRvcCDmk43kvZzvvInjgIJcclxuKiAqL1xyXG5cclxuLyoqXHJcbiAqIOagueaNrumimOaEj1xyXG4gKiDlj6rog73nlKgg5pWw57uE55qEIHB1c2ggc2hpZnTmlrnms5VcclxuICog5Y+v5Lul5p+l55yLbGVuZ3RoIOWxnuaAp1xyXG4gKiAqL1xyXG4vKipcclxuICogSW5pdGlhbGl6ZSB5b3VyIGRhdGEgc3RydWN0dXJlIGhlcmUuXHJcbiAqL1xyXG5jbGFzcyBNeVN0YWNrIHtcclxuICBsaXN0OiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAvKipcclxuICAgKiBQdXNoIGVsZW1lbnQgeCBvbnRvIHN0YWNrLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4XHJcbiAgICogQHJldHVybiB7dm9pZH1cclxuICAgKi9cclxuICBwdXNoKHg6IG51bWJlcikge1xyXG4gICAgdGhpcy5saXN0LnB1c2goeCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIHRoZSBlbGVtZW50IG9uIHRvcCBvZiB0aGUgc3RhY2sgYW5kIHJldHVybnMgdGhhdCBlbGVtZW50LlxyXG4gICAqIEByZXR1cm4ge251bWJlcn1cclxuICAgKi9cclxuICBwb3AoKSB7XHJcbiAgICBjb25zdCB0ZW1wTGlzdDogbnVtYmVyW10gPSBbXTtcclxuICAgIHdoaWxlICh0aGlzLmxpc3QubGVuZ3RoICE9PSAxKSB7XHJcbiAgICAgIHRlbXBMaXN0LnB1c2godGhpcy5saXN0LnNoaWZ0KCkhKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHBvcFJlc3VsdCA9IHRoaXMubGlzdC5zaGlmdCgpO1xyXG4gICAgdGhpcy5saXN0ID0gdGVtcExpc3Q7XHJcbiAgICByZXR1cm4gcG9wUmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSB0b3AgZWxlbWVudC5cclxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgdG9wKCkge1xyXG4gICAgY29uc3QgdGVtcExpc3Q6IG51bWJlcltdID0gW107XHJcbiAgICB3aGlsZSAodGhpcy5saXN0Lmxlbmd0aCAhPT0gMSkge1xyXG4gICAgICB0ZW1wTGlzdC5wdXNoKHRoaXMubGlzdC5zaGlmdCgpISk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwb3BSZXN1bHQgPSB0aGlzLmxpc3Quc2hpZnQoKSE7XHJcbiAgICB0aGlzLmxpc3QgPSB0ZW1wTGlzdDtcclxuICAgIHRoaXMubGlzdC5wdXNoKHBvcFJlc3VsdCk7XHJcbiAgICByZXR1cm4gcG9wUmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB3aGV0aGVyIHRoZSBzdGFjayBpcyBlbXB0eS5cclxuICAgKiBAcmV0dXJuIHtib29sZWFufVxyXG4gICAqL1xyXG4gIGVtcHR5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMubGlzdC5sZW5ndGggPT09IDA7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogWW91ciBNeVN0YWNrIG9iamVjdCB3aWxsIGJlIGluc3RhbnRpYXRlZCBhbmQgY2FsbGVkIGFzIHN1Y2g6XHJcbiAqIHZhciBvYmogPSBuZXcgTXlTdGFjaygpXHJcbiAqIG9iai5wdXNoKHgpXHJcbiAqIHZhciBwYXJhbV8yID0gb2JqLnBvcCgpXHJcbiAqIHZhciBwYXJhbV8zID0gb2JqLnRvcCgpXHJcbiAqIHZhciBwYXJhbV80ID0gb2JqLmVtcHR5KClcclxuICovXHJcblxyXG5leHBvcnQge307XHJcbiJdfQ==