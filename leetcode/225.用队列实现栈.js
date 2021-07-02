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
    list = [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjI1LueUqOmYn+WIl+WunueOsOagiC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMjI1LueUqOmYn+WIl+WunueOsOagiC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7OztJQVlJOztBQUVKOzs7O0tBSUs7QUFDTDs7R0FFRztBQUNILE1BQU0sT0FBTztJQUNYLElBQUksR0FBYSxFQUFFLENBQUM7SUFFcEI7Ozs7T0FJRztJQUNILElBQUksQ0FBQyxDQUFTO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILEdBQUc7UUFDRCxNQUFNLFFBQVEsR0FBYSxFQUFFLENBQUM7UUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDN0IsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRyxDQUFDLENBQUM7U0FDbkM7UUFDRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ3JCLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFRDs7O09BR0c7SUFDSCxHQUFHO1FBQ0QsTUFBTSxRQUFRLEdBQWEsRUFBRSxDQUFDO1FBQzlCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzdCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUcsQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUcsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxQixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsS0FBSztRQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7kvb/nlKjpmJ/liJflrp7njrDmoIjnmoTkuIvliJfmk43kvZzvvJpcblxucHVzaCh4KSAtLSDlhYPntKAgeCDlhaXmoIhcbnBvcCgpIC0tIOenu+mZpOagiOmhtuWFg+e0oFxudG9wKCkgLS0g6I635Y+W5qCI6aG25YWD57SgXG5lbXB0eSgpIC0tIOi/lOWbnuagiOaYr+WQpuS4uuepulxu5rOo5oSPOlxuXG7kvaDlj6rog73kvb/nlKjpmJ/liJfnmoTln7rmnKzmk43kvZwtLSDkuZ/lsLHmmK8gcHVzaCB0byBiYWNrLCBwZWVrL3BvcCBmcm9tIGZyb250LCBzaXplLCDlkowgaXMgZW1wdHkg6L+Z5Lqb5pON5L2c5piv5ZCI5rOV55qE44CCXG7kvaDmiYDkvb/nlKjnmoTor63oqIDkuZ/orrjkuI3mlK/mjIHpmJ/liJfjgIIg5L2g5Y+v5Lul5L2/55SoIGxpc3Qg5oiW6ICFIGRlcXVl77yI5Y+M56uv6Zif5YiX77yJ5p2l5qih5ouf5LiA5Liq6Zif5YiXICwg5Y+q6KaB5piv5qCH5YeG55qE6Zif5YiX5pON5L2c5Y2z5Y+v44CCXG7kvaDlj6/ku6XlgYforr7miYDmnInmk43kvZzpg73mmK/mnInmlYjnmoTvvIjkvovlpoIsIOWvueS4gOS4quepuueahOagiOS4jeS8muiwg+eUqCBwb3Ag5oiW6ICFIHRvcCDmk43kvZzvvInjgIJcbiogKi9cblxuLyoqXG4gKiDmoLnmja7popjmhI9cbiAqIOWPquiDveeUqCDmlbDnu4TnmoQgcHVzaCBzaGlmdOaWueazlVxuICog5Y+v5Lul5p+l55yLbGVuZ3RoIOWxnuaAp1xuICogKi9cbi8qKlxuICogSW5pdGlhbGl6ZSB5b3VyIGRhdGEgc3RydWN0dXJlIGhlcmUuXG4gKi9cbmNsYXNzIE15U3RhY2sge1xuICBsaXN0OiBudW1iZXJbXSA9IFtdO1xuXG4gIC8qKlxuICAgKiBQdXNoIGVsZW1lbnQgeCBvbnRvIHN0YWNrLlxuICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgcHVzaCh4OiBudW1iZXIpIHtcbiAgICB0aGlzLmxpc3QucHVzaCh4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBlbGVtZW50IG9uIHRvcCBvZiB0aGUgc3RhY2sgYW5kIHJldHVybnMgdGhhdCBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBwb3AoKSB7XG4gICAgY29uc3QgdGVtcExpc3Q6IG51bWJlcltdID0gW107XG4gICAgd2hpbGUgKHRoaXMubGlzdC5sZW5ndGggIT09IDEpIHtcbiAgICAgIHRlbXBMaXN0LnB1c2godGhpcy5saXN0LnNoaWZ0KCkhKTtcbiAgICB9XG4gICAgY29uc3QgcG9wUmVzdWx0ID0gdGhpcy5saXN0LnNoaWZ0KCk7XG4gICAgdGhpcy5saXN0ID0gdGVtcExpc3Q7XG4gICAgcmV0dXJuIHBvcFJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHRvcCBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICB0b3AoKSB7XG4gICAgY29uc3QgdGVtcExpc3Q6IG51bWJlcltdID0gW107XG4gICAgd2hpbGUgKHRoaXMubGlzdC5sZW5ndGggIT09IDEpIHtcbiAgICAgIHRlbXBMaXN0LnB1c2godGhpcy5saXN0LnNoaWZ0KCkhKTtcbiAgICB9XG4gICAgY29uc3QgcG9wUmVzdWx0ID0gdGhpcy5saXN0LnNoaWZ0KCkhO1xuICAgIHRoaXMubGlzdCA9IHRlbXBMaXN0O1xuICAgIHRoaXMubGlzdC5wdXNoKHBvcFJlc3VsdCk7XG4gICAgcmV0dXJuIHBvcFJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgdGhlIHN0YWNrIGlzIGVtcHR5LlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgZW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMubGlzdC5sZW5ndGggPT09IDA7XG4gIH1cbn1cblxuLyoqXG4gKiBZb3VyIE15U3RhY2sgb2JqZWN0IHdpbGwgYmUgaW5zdGFudGlhdGVkIGFuZCBjYWxsZWQgYXMgc3VjaDpcbiAqIHZhciBvYmogPSBuZXcgTXlTdGFjaygpXG4gKiBvYmoucHVzaCh4KVxuICogdmFyIHBhcmFtXzIgPSBvYmoucG9wKClcbiAqIHZhciBwYXJhbV8zID0gb2JqLnRvcCgpXG4gKiB2YXIgcGFyYW1fNCA9IG9iai5lbXB0eSgpXG4gKi9cblxuZXhwb3J0IHt9O1xuIl19